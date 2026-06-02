DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS packets CASCADE;

DO
$$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        DROP TYPE user_role;
    END IF;
END
$$;

DROP EXTENSION IF EXISTS pgcrypto;
DROP EXTENSION IF EXISTS uuid-ossp;
DROP EXTENSION IF EXISTS pg_stat_statements;

SELECT cron.unschedule('create-packets-partitions');

DROP FUNCTION IF EXISTS create_monthly_partitions(text, int);
DROP FUNCTION IF EXISTS packets_drop_old_partitions();
