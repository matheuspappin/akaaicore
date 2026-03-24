-- database/migrations/133_add_pagbank_oauth_fields.sql

ALTER TABLE studios
ADD COLUMN pagbank_client_id TEXT,
ADD COLUMN pagbank_client_secret TEXT,
ADD COLUMN pagbank_public_key TEXT,
ADD COLUMN pagbank_access_token TEXT,
ADD COLUMN pagbank_refresh_token TEXT,
ADD COLUMN pagbank_token_expires_at TIMESTAMP WITH TIME ZONE;