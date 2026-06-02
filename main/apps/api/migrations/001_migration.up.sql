CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        CREATE TYPE user_role AS ENUM ('admin', 'moderator', 'guest');
    END IF;
END
$$;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    role user_role NOT NULL DEFAULT 'guest',
    password TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_users_name ON users(name);

INSERT INTO users (name, username, role, password)
VALUES (
    COALESCE(current_setting('api.default_user_name', true), 'Администратор'),
    COALESCE(current_setting('api.default_user_login', true), 'admin'),
    COALESCE(current_setting('api.default_user_role', true), 'admin')::user_role,
    crypt(
        COALESCE(current_setting('api.default_user_pass', true), 'admin'),
        gen_salt('bf', 10)
    )
)
ON CONFLICT (username) DO NOTHING;

CREATE TABLE IF NOT EXISTS packets (
    id BIGSERIAL NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    eth_src_mac MACADDR,
    eth_dst_mac MACADDR,
    net_version SMALLINT CHECK (net_version IN (4, 6)),
    net_src_ip INET,
    net_dst_ip INET,
    net_protocol VARCHAR(100),
    trans_proto VARCHAR(100),
    trans_src_port INTEGER CHECK (trans_src_port BETWEEN 0 AND 65535),
    trans_dst_port INTEGER CHECK (trans_dst_port BETWEEN 0 AND 65535),
    app_payload BYTEA,
    app_payload_size INTEGER,
    interface_name VARCHAR(75) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (id, timestamp)
)
PARTITION BY RANGE (timestamp);

CREATE INDEX IF NOT EXISTS idx_packets_net_src_ip ON packets USING HASH (net_src_ip);
CREATE INDEX IF NOT EXISTS idx_packets_net_dst_ip ON packets USING HASH (net_dst_ip);
CREATE INDEX IF NOT EXISTS idx_packets_trans_ports ON packets (trans_src_port, trans_dst_port);
CREATE INDEX IF NOT EXISTS idx_packets_trans_proto ON packets (trans_proto);
CREATE INDEX IF NOT EXISTS idx_packets_interface ON packets (interface_name);
CREATE INDEX IF NOT EXISTS idx_packets_timestamp_desc ON packets (timestamp DESC);

CREATE OR REPLACE FUNCTION create_monthly_partitions(
    p_table_name TEXT,
    p_months_ahead INT DEFAULT 3
) RETURNS VOID AS $$
DECLARE
    v_start_date DATE;
    v_end_date DATE;
    v_partition_name TEXT;
    v_i INT;
BEGIN
    FOR v_i IN 0..p_months_ahead LOOP
        v_start_date := date_trunc('month', CURRENT_DATE) + (v_i || ' months')::INTERVAL;
        v_end_date := v_start_date + INTERVAL '1 month';
        v_partition_name := p_table_name || '_' || TO_CHAR(v_start_date, 'YYYY_MM');

        IF NOT EXISTS (
            SELECT 1 FROM pg_class c
            JOIN pg_namespace n ON n.oid = c.relnamespace
            WHERE c.relname = v_partition_name
              AND n.nspname = 'public'
        ) THEN
            EXECUTE format(
                'CREATE TABLE %I PARTITION OF %I FOR VALUES FROM (%L) TO (%L)',
                v_partition_name, p_table_name, v_start_date, v_end_date
            );
            RAISE NOTICE '✅ Создана партиция: %', v_partition_name;
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION packets_drop_old_partitions() RETURNS void AS $$
DECLARE
    partition_name TEXT;
    cutoff_date TIMESTAMPTZ;
BEGIN
    cutoff_date := NOW() - INTERVAL '90 days';
    
    FOR partition_name IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE tablename LIKE 'packets_____ __'
        AND tablename < 'packets_' || to_char(cutoff_date, 'YYYY_MM')
    LOOP
        EXECUTE format('DROP TABLE IF EXISTS %I CASCADE', partition_name);
        RAISE NOTICE 'Удалена старая партиция: %', partition_name;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS packets_default PARTITION OF packets DEFAULT;
SELECT create_monthly_partitions('packets', 2);