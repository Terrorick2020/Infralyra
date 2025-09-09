package redisrepo

import (
	"context"
	"time"

	"github.com/redis/go-redis/v9"
)

type Client interface {
	Set(ctx context.Context, key string, value any, ttl time.Duration) error
	Get(ctx context.Context, key string, dest any) error
	Delete(ctx context.Context, key string) error
}

type Authorization interface {
	SetRefrashToken(ctx context.Context, id int, value string) error
	SetPrevInfoRepoAuth(ctx context.Context, id int, data UserClient) error
	GetRateLimit(ctx context.Context, ip string) (int, error)
	IncrRateLimit(ctx context.Context, ip string) error
}

type RedisRepo struct {
	Client
	Authorization
}

func NewRedisRepo(rdb *redis.Client) *RedisRepo {
	return &RedisRepo{
		Client: NewRedisRepoClient(rdb),
		Authorization: NewRedisRepoAuth(rdb),
	}
}
