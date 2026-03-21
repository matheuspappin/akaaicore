import { NextRequest, NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'
import { checkSuperAdminDetailed } from '@/lib/actions/super-admin'
import logger from '@/lib/logger'

/**
 * POST /api/admin/stripe/lookup-price
 * Body: { priceId: "price_xxx" }
 * Retorna valor em reais e metadados para preencher o formulário de planos no admin.
 * Apenas super_admin.
 */
export async function POST(req: NextRequest) {
  try {
    const { isAdmin } = await checkSuperAdminDetailed()
    if (!isAdmin) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 403 })
    }

    const body = await req.json()
    const priceId = typeof body.priceId === 'string' ? body.priceId.trim() : ''
    if (!priceId.startsWith('price_')) {
      return NextResponse.json(
        { error: 'Informe um Price ID válido (começa com price_)' },
        { status: 400 }
      )
    }

    const stripe = getStripe()
    const price = await stripe.prices.retrieve(priceId, { expand: ['product'] })

    if (!price.active) {
      return NextResponse.json({ error: 'Este preço está inativo no Stripe' }, { status: 400 })
    }

    let productName = ''
    if (typeof price.product === 'string') {
      const p = await stripe.products.retrieve(price.product)
      productName = p.name
    } else if (price.product && !price.product.deleted) {
      productName = (price.product as Stripe.Product).name
    }

    const unitAmount =
      price.unit_amount != null ? price.unit_amount / 100 : 0
    const currency = (price.currency || 'brl').toUpperCase()

    return NextResponse.json({
      priceId: price.id,
      unitAmount,
      currency,
      nickname: price.nickname || null,
      productName,
      mode: price.type === 'recurring' ? 'subscription' : 'payment',
      recurring: price.recurring
        ? {
            interval: price.recurring.interval,
            interval_count: price.recurring.interval_count,
          }
        : null,
    })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Erro ao consultar Stripe'
    logger.error('lookup-price:', e)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
