package redisrepo

import (
	"InfralyraApi/config"
	"context"

	"github.com/redis/go-redis/v9"
)

type RedisRepoAuth struct {
	client RedisRepoClient
}

func NewRedisRepoAuth(rdb *redis.Client) *RedisRepoAuth {
	return &RedisRepoAuth{client: RedisRepoClient{rdb: rdb}}
}

func (rra *RedisRepoAuth) GetRateLimit(ctx context.Context, ip string) (int, error) {
	var count int
	key := createKey(rateLimitTemplate, ip)

	err := rra.client.Get(ctx, key, &count)

	return count, err
}

func (rra *RedisRepoAuth) IncrRateLimit(ctx context.Context, ip string) error {
	var count int
	key := createKey(rateLimitTemplate, ip)

	err := rra.client.Get(ctx, key, &count)
	if err != nil {
		return err
	}

	count += 1
	ttl := config.InfralyraConfig.Auth.RateLimitTTL

	err = rra.client.Set(ctx, key, count, ttl)

	return err
}

func (rra *RedisRepoAuth) SetRefrashToken(ctx context.Context, id int, value string) error {
	key := createKey(tokenKeyTemplate, id)
	ttl := config.InfralyraConfig.Auth.RefreshTokenTTL

	err := rra.client.Set(ctx, key, value, ttl)

	return err
}

func (rra *RedisRepoAuth) SetPrevInfoRepoAuth(ctx context.Context, id int, data UserClient) error {
	key := createKey(userKeyTemplate, id)

	err := rra.client.Set(ctx, key, data, 0)

	return err
}
