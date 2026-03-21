import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import Stripe from 'stripe';
import { getStudioStripeAccountForCheckout } from '@/lib/actions/studio-stripe-connect';
import { PLATFORM_FEE_PERCENT } from '@/lib/constants/stripe-connect';
import { getStripeCheckoutPaymentMethodTypes } from '@/lib/stripe-checkout-methods';
import logger from '@/lib/logger';

/**
 * Cria uma sessão de checkout do Stripe para mensalidades de alunos
 */
export async function POST(req: NextRequest) {
  try {
    const { invoiceId, amount, description, studentId, studioId, type = 'student_payment' } = await req.json();

    if (!invoiceId || !amount || !studentId || !studioId) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
    }

    const amountCents = Math.round(amount * 100);
    const stripeAccountId = await getStudioStripeAccountForCheckout(studioId);

    let stripeClient: Stripe;
    const connectParams: Record<string, unknown> = {};

    // Se o estúdio tem Stripe Connect: taxa plataforma + destino no payment_intent (API Checkout)
    if (stripeAccountId) {
      logger.info(`💳 Usando Stripe Connect (Estúdio: ${studioId})`);
      stripeClient = getStripe();
      connectParams.payment_intent_data = {
        application_fee_amount: Math.round(amountCents * (PLATFORM_FEE_PERCENT / 100)),
        transfer_data: { destination: stripeAccountId },
      };
    } else {
      // Fallback: chaves próprias ou plataforma
      const { data: studioKeys } = await supabase
        .from('studio_api_keys')
        .select('*')
        .eq('studio_id', studioId)
        .eq('service_name', 'stripe')
        .maybeSingle();

      if (studioKeys?.api_key) {
        logger.info(`💳 Usando Stripe do Admin (Estúdio: ${studioId}) - Chave personalizada`);
        stripeClient = new Stripe(studioKeys.api_key, {
          apiVersion: '2025-01-27.acacia' as any,
          typescript: true,
        });
      } else {
        logger.info(`💳 Usando Stripe Global do Workflow AI (Fallback)`);
        stripeClient = getStripe();
      }
    }

    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: getStripeCheckoutPaymentMethodTypes(),
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: type === 'package' ? description : `Mensalidade - ${description || 'Estúdio de Dança'}`,
            },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/student/payments?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/student/payments?canceled=true`,
      metadata: {
        invoice_id: invoiceId,
        student_id: studentId,
        studio_id: studioId,
        type: type,
      },
      ...connectParams,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    logger.error('💥 Erro ao criar checkout session:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
