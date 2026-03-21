-- Tipo de cobrança do pacote: avulso (pagamento único) ou mensal (assinatura Stripe)
ALTER TABLE lesson_packages
ADD COLUMN IF NOT EXISTS billing_type TEXT NOT NULL DEFAULT 'one_time'
CHECK (billing_type IN ('one_time', 'monthly'));

COMMENT ON COLUMN lesson_packages.billing_type IS 'one_time = Checkout mode payment; monthly = Checkout mode subscription (mensal).';

-- Idempotência para créditos em renovações de pacote (invoice.paid), distinto de session_id no primeiro pagamento
CREATE TABLE IF NOT EXISTS stripe_package_invoice_credits (
  invoice_id TEXT PRIMARY KEY,
  credited_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
