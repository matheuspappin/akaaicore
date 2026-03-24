-- 131: Pagamento professor — sessão na chamada + trigger em INSERT + Stripe Connect no profissional

-- Stripe Connect (Express) para receber repasses da plataforma quando configurado
ALTER TABLE professionals
ADD COLUMN IF NOT EXISTS stripe_account_id TEXT;

COMMENT ON COLUMN professionals.stripe_account_id IS 'Stripe Connect account ID (acct_xxx) para repasse de honorários via Transfer.';

-- Saques: método e id Stripe
ALTER TABLE teacher_withdrawals
ADD COLUMN IF NOT EXISTS payout_method TEXT NOT NULL DEFAULT 'pix_manual'
CHECK (payout_method IN ('pix_manual', 'stripe_transfer'));

ALTER TABLE teacher_withdrawals
ADD COLUMN IF NOT EXISTS stripe_transfer_id TEXT;

COMMENT ON COLUMN teacher_withdrawals.payout_method IS 'pix_manual = conferência PIX; stripe_transfer = Transfer Stripe Connect.';

-- Índice único (class_id, scheduled_date) omitido se já existirem duplicatas históricas; a API faz dedupe.

-- Função: compatível com INSERT e UPDATE; evita duplicar quando já era realizada
CREATE OR REPLACE FUNCTION create_teacher_payment_on_session_completed()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_professional_id UUID;
  v_class_name VARCHAR(255);
  v_amount DECIMAL(10,2);
  v_config JSONB;
  v_override DECIMAL(10,2);
  v_sched_date DATE;
BEGIN
  IF NEW.status IS DISTINCT FROM 'realizada' THEN
    RETURN NEW;
  END IF;

  IF TG_OP = 'UPDATE' AND OLD.status IS NOT DISTINCT FROM 'realizada' THEN
    RETURN NEW;
  END IF;

  v_professional_id := COALESCE(NEW.actual_professional_id, (
    SELECT professional_id FROM classes WHERE id = NEW.class_id
  ));

  IF v_professional_id IS NULL THEN
    RETURN NEW;
  END IF;

  v_sched_date := COALESCE(NEW.date, NEW.scheduled_date);

  SELECT theme_config INTO v_config
  FROM organization_settings
  WHERE studio_id = NEW.studio_id AND (niche = 'dance' OR niche IS NULL)
  ORDER BY CASE WHEN niche = 'dance' THEN 0 ELSE 1 END
  LIMIT 1;

  v_amount := COALESCE((v_config->>'teacher_compensation_amount')::DECIMAL, 0);

  IF v_config ? 'teacher_compensation_overrides' THEN
    v_override := (v_config->'teacher_compensation_overrides'->>v_professional_id::text)::DECIMAL;
    IF v_override IS NOT NULL THEN
      v_amount := v_override;
    END IF;
  END IF;

  IF v_amount <= 0 THEN
    RETURN NEW;
  END IF;

  SELECT name INTO v_class_name FROM classes WHERE id = NEW.class_id;

  INSERT INTO teacher_payment_entries (
    studio_id, professional_id, session_id, class_id, class_name,
    scheduled_date, amount, status
  ) VALUES (
    NEW.studio_id, v_professional_id, NEW.id, NEW.class_id, v_class_name,
    v_sched_date, v_amount, 'pending'
  )
  ON CONFLICT (studio_id, professional_id, session_id) DO NOTHING;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_create_teacher_payment_on_session_insert ON sessions;
CREATE TRIGGER trg_create_teacher_payment_on_session_insert
  AFTER INSERT ON sessions
  FOR EACH ROW
  EXECUTE FUNCTION create_teacher_payment_on_session_completed();
