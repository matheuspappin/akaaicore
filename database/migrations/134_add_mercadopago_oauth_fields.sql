-- database/migrations/134_add_mercadopago_oauth_fields.sql

ALTER TABLE studios
ADD COLUMN mercadopago_client_id TEXT,
ADD COLUMN mercadopago_client_secret TEXT,
ADD COLUMN mercadopago_public_key TEXT,
ADD COLUMN mercadopago_access_token TEXT,
ADD COLUMN mercadopago_refresh_token TEXT,
ADD COLUMN mercadopago_token_expires_at TIMESTAMP WITH TIME ZONE;
