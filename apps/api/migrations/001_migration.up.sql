CREATE TYPE user_role AS ENUM ('admin', 'moderator', 'guest');

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
