-- database/migrations/135_add_mercadopago_user_id.sql

ALTER TABLE studios
ADD COLUMN mercadopago_user_id TEXT;
