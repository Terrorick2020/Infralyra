package repository

import (
	"InfralyraApi/internal/repository/psqlrepo"
	"InfralyraApi/internal/repository/redisrepo"

	"github.com/jmoiron/sqlx"
	"github.com/redis/go-redis/v9"
)

type Repository struct {
	PsqlRepo  psqlrepo.PsqlRepo
	RedisRepo redisrepo.RedisRepo
}

func NewRepository(db *sqlx.DB, rdb *redis.Client) *Repository {
	return &Repository{
		PsqlRepo: *psqlrepo.NewPostgresRepo(db),
		RedisRepo: *redisrepo.NewRedisRepo(rdb),
	}
}
