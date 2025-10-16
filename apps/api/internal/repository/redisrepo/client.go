package redisrepo

import (
	"InfralyraApi/pkg/logger"
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/redis/go-redis/v9"
)

const (
	rateLimitTemplate = "rl:%s"
	tokenKeyTemplate = "refresh_token:%v"
	userKeyTemplate  = "user:%v"
)

type RedisKey interface {
	int | string | float64
}

type RedisRepoClient struct {
	rdb *redis.Client
}

func createKey[T RedisKey](tmpl string, value T) string {
	return fmt.Sprintf(tmpl, value)
}

func NewRedisRepoClient(rdb *redis.Client) *RedisRepoClient {
	return &RedisRepoClient{rdb: rdb}
}

func (r *RedisRepoClient) Set(ctx context.Context, key string, value any, ttl time.Duration) error {
	data, err := json.Marshal(value)
	if err != nil {
		logger.Logger.Errorf(
			"❌ Ошибка установки значения: %+v по ключу: %s в redis. %s",
			value,
			key,
			err.Error(),
		)
		
		return err
	}
	return r.rdb.Set(ctx, key, data, ttl).Err()
}

func (r *RedisRepoClient) Get(ctx context.Context, key string, dest any) error {
	data, err := r.rdb.Get(ctx, key).Bytes()
	if err != nil {
		if err == redis.Nil {
			logger.Logger.Warnf("⚠️  Ключ %s не найден в Redis", key)
		} else {
			logger.Logger.Errorf(
				"❌ Ошибка получения данных по ключу: %s в redis. %s",
				key,
				err.Error(),
			)
		}

		return err
	}

	return json.Unmarshal(data, dest)
}

func (r *RedisRepoClient) Delete(ctx context.Context, key string) error {
	err := r.rdb.Del(ctx, key).Err()
	if err != nil {
		logger.Logger.Errorf(
			"❌ Ошибка удаления данных по ключу: %s в redis. %s",
			key,
			err.Error(),
		)
	}
	return err
}
