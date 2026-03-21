-- IDs de preço Stripe por intervalo (tarifa fixa criada no Dashboard Stripe).
-- stripe_price_id = mensal (já existia em 102); stripe_price_id_annual = anual.

ALTER TABLE verticalization_plans
  ADD COLUMN IF NOT EXISTS stripe_price_id_annual VARCHAR(255);

COMMENT ON COLUMN verticalization_plans.stripe_price_id IS 'Stripe Price ID mensal (price_xxx). Checkout usa este valor quando preenchido.';
COMMENT ON COLUMN verticalization_plans.stripe_price_id_annual IS 'Stripe Price ID anual (price_xxx). Usado quando billingInterval=yearly.';
