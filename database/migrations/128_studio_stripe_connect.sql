-- Stripe Connect para estúdios: cada estúdio recebe pagamentos na própria conta
-- Usado quando clientes (alunos) pagam pacotes, mensalidades, PDV, loja

ALTER TABLE studios
ADD COLUMN IF NOT EXISTS stripe_account_id TEXT;

COMMENT ON COLUMN studios.stripe_account_id IS 'Stripe Connect account ID (acct_xxx). Quando preenchido, pagamentos de clientes vão para esta conta.';
