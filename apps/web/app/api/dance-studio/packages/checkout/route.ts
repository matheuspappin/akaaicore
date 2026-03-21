import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'
import { getStudioStripeAccountForCheckout } from '@/lib/actions/studio-stripe-connect'
import { PLATFORM_FEE_PERCENT } from '@/lib/constants/stripe-connect'
import logger from '@/lib/logger'
import { getStripeCheckoutPaymentMethodTypes } from '@/lib/stripe-checkout-methods'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

function getAdmin() {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

// POST /api/dance-studio/packages/checkout
// Cria sessão Stripe para compra de pacote de créditos.
// O webhook /api/webhooks/stripe processa o pagamento e credita via adjust_student_credits.
export async function POST(request: NextRequest) {
  const stripe = getStripe()
  if (!stripe) {
    return NextResponse.json(
      { error: 'Pagamento online não configurado. Contate o estúdio.' },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const { packageId, studioId, studentId, studentEmail, studentName, successUrl, cancelUrl } = body

    if (!packageId || !studioId || !studentId || !studentEmail) {
      return NextResponse.json(
        { error: 'packageId, studioId, studentId e studentEmail são obrigatórios' },
        { status: 400 }
      )
    }

    const supabase = getAdmin()

    // Buscar o pacote para garantir que existe e está ativo
    const { data: pkg, error: pkgError } = await supabase
      .from('lesson_packages')
      .select('id, name, description, lessons_count, price, is_active, studio_id, billing_type')
      .eq('id', packageId)
      .eq('studio_id', studioId)
      .eq('is_active', true)
      .single()

    if (pkgError || !pkg) {
      return NextResponse.json({ error: 'Pacote não encontrado ou inativo' }, { status: 404 })
    }

    // Verificar que o aluno existe e pertence ao estúdio
    const { data: student, error: studentError } = await supabase
      .from('students')
      .select('id, name, email')
      .eq('id', studentId)
      .maybeSingle()

    if (studentError || !student) {
      return NextResponse.json({ error: 'Aluno não encontrado' }, { status: 404 })
    }

    const priceInCents = Math.round(Number(pkg.price) * 100)
    const origin = new URL(request.url).origin
    const billingType = pkg.billing_type === 'monthly' ? 'monthly' : 'one_time'

    const stripeAccountId = await getStudioStripeAccountForCheckout(studioId)

    const sessionMetadata: Record<string, string> = {
      type: 'package',
      invoice_id: pkg.id,
      studio_id: studioId,
      student_id: studentId,
      package_name: pkg.name,
      lessons_count: String(pkg.lessons_count),
      billing_type: billingType,
    }

    let session: Awaited<ReturnType<typeof stripe.checkout.sessions.create>>

    if (billingType === 'monthly') {
      // Assinatura mensal: Connect usa taxa % na subscrição (não application_fee_amount do payment_intent)
      const subscriptionData: Stripe.Checkout.SessionCreateParams.SubscriptionData =
        stripeAccountId
          ? {
              metadata: sessionMetadata,
              transfer_data: { destination: stripeAccountId },
              application_fee_percent: PLATFORM_FEE_PERCENT,
            }
          : {
              metadata: sessionMetadata,
            }

      session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        customer_email: studentEmail,
        line_items: [
          {
            price_data: {
              currency: 'brl',
              product_data: {
                name: pkg.name,
                description:
                  pkg.description || `${pkg.lessons_count} crédito(s) por ciclo (mensal)`,
                metadata: { studio_id: studioId, package_id: pkg.id },
              },
              unit_amount: priceInCents,
              recurring: { interval: 'month' },
            },
            quantity: 1,
          },
        ],
        metadata: sessionMetadata,
        subscription_data: subscriptionData,
        success_url:
          successUrl ||
          `${origin}/solutions/estudio-de-danca/student/financeiro?payment=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:
          cancelUrl ||
          `${origin}/solutions/estudio-de-danca/student/financeiro?payment=cancelled`,
      })
    } else {
      const connectParams = stripeAccountId
        ? {
            payment_intent_data: {
              application_fee_amount: Math.round(priceInCents * (PLATFORM_FEE_PERCENT / 100)),
              transfer_data: { destination: stripeAccountId },
            },
          }
        : {}

      session = await stripe.checkout.sessions.create({
        payment_method_types: getStripeCheckoutPaymentMethodTypes(),
        mode: 'payment',
        customer_email: studentEmail,
        line_items: [
          {
            price_data: {
              currency: 'brl',
              product_data: {
                name: pkg.name,
                description: pkg.description || `${pkg.lessons_count} crédito(s) de aula`,
                metadata: { studio_id: studioId, package_id: pkg.id },
              },
              unit_amount: priceInCents,
            },
            quantity: 1,
          },
        ],
        metadata: sessionMetadata,
        success_url:
          successUrl ||
          `${origin}/solutions/estudio-de-danca/student/financeiro?payment=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:
          cancelUrl ||
          `${origin}/solutions/estudio-de-danca/student/financeiro?payment=cancelled`,
        ...connectParams,
      })
    }

    logger.info(`✅ [PACKAGES/CHECKOUT] Sessão Stripe criada para aluno ${studentId}, pacote ${pkg.name}`)
    return NextResponse.json({ url: session.url, sessionId: session.id })

  } catch (error: any) {
    logger.error('❌ [PACKAGES/CHECKOUT] Erro:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
