import type Stripe from 'stripe'

/**
 * Métodos de pagamento no Stripe Checkout.
 *
 * Por omissão: só `card`. Incluir `pix` exige PIX ativado em
 * https://dashboard.stripe.com/settings/payment_methods (conta BR, BRL), senão a API falha.
 *
 * Defina no .env: STRIPE_CHECKOUT_PAYMENT_METHOD_TYPES=card,pix
 */
export function getStripeCheckoutPaymentMethodTypes(): NonNullable<
  Stripe.Checkout.SessionCreateParams['payment_method_types']
> {
  const raw = process.env.STRIPE_CHECKOUT_PAYMENT_METHOD_TYPES?.trim()
  if (raw) {
    const allowed = new Set(['card', 'pix'])
    const list = raw
      .split(/[\s,]+/)
      .map((s) => s.trim().toLowerCase())
      .filter((s): s is 'card' | 'pix' => allowed.has(s))
    if (list.length) return list
  }
  return ['card']
}
