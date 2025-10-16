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
    username VARCHAR(50) NOT NULL,
    role user_role NOT NULL DEFAULT 'guest',
    password TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_users_name ON users(name);

INSERT INTO users (name, username, role, password)
VALUES (
    COALESCE(current_setting('api.default_user_name', true), 'Администратор'),
    COALESCE(current_setting('api.default_user_login', true), 'admin'),
    COALESCE(current_setting('api.default_user_role', true), 'admin')::user_role,
    COALESCE(current_setting('api.default_user_pass', true), 'admin')
)
ON CONFLICT (username) DO NOTHING;
