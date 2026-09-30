CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS currencies (
 id BIGSERIAL PRIMARY KEY,
 code VARCHAR(32) UNIQUE NOT NULL,
 name VARCHAR(100) NOT NULL,
 symbol VARCHAR(16) NOT NULL,
 precision SMALLINT NOT NULL DEFAULT 0 CHECK (precision BETWEEN 0 AND 8),
 allow_negative BOOLEAN NOT NULL DEFAULT FALSE,
 max_balance BIGINT,
 status VARCHAR(16) NOT NULL DEFAULT 'ACTIVE'
   CHECK (status IN ('ACTIVE','PAUSED','DISABLED')),
 created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS wallets (
 id BIGSERIAL PRIMARY KEY,
 user_id BIGINT NOT NULL,
 currency_id BIGINT NOT NULL REFERENCES currencies(id),
 balance BIGINT NOT NULL DEFAULT 0 CHECK (balance >= 0),
 status VARCHAR(16) NOT NULL DEFAULT 'ACTIVE'
   CHECK (status IN ('ACTIVE','LOCKED','DISABLED')),
 created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
 UNIQUE(user_id,currency_id)
);

CREATE TABLE IF NOT EXISTS ledger_entries (
 id BIGSERIAL PRIMARY KEY,
 transaction_id UUID NOT NULL,
 wallet_id BIGINT NOT NULL REFERENCES wallets(id),
 currency_id BIGINT NOT NULL REFERENCES currencies(id),
 entry_type VARCHAR(16) NOT NULL CHECK (entry_type IN ('CREDIT','DEBIT','ADJUSTMENT')),
 amount BIGINT NOT NULL CHECK (amount > 0),
 balance_before BIGINT NOT NULL,
 balance_after BIGINT NOT NULL,
 source VARCHAR(64) NOT NULL,
 actor_id BIGINT,
 description VARCHAR(500),
 created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_ledger_wallet_created
 ON ledger_entries(wallet_id,created_at DESC);

CREATE TABLE IF NOT EXISTS user_preferences (
 user_id BIGINT PRIMARY KEY,
 locale VARCHAR(10) NOT NULL DEFAULT 'vi-VN',
 updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS economic_config (
 id SMALLINT PRIMARY KEY DEFAULT 1 CHECK(id=1),
 default_currency_id BIGINT REFERENCES currencies(id),
 economy_status VARCHAR(16) NOT NULL DEFAULT 'ACTIVE'
   CHECK(economy_status IN ('ACTIVE','PAUSED','MAINTENANCE')),
 updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO currencies(code,name,symbol,precision)
VALUES ('KINGDOM_COIN','Kingdom Coin','◈',0)
ON CONFLICT(code) DO NOTHING;

INSERT INTO economic_config(default_currency_id)
SELECT id FROM currencies WHERE code='KINGDOM_COIN'
ON CONFLICT(id) DO NOTHING;
