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
	roomNameKeyTemplate = "room:%v:user:%v"
)

type RedisKey interface {
	int | string | float64
}

type RedisRepoClient struct {
	rdb *redis.Client
}

func createKey[T RedisKey](tmpl string, values ...T) string {
	args := make([]interface{}, len(values))
	for i, v := range values {
		args[i] = v
	}

	return fmt.Sprintf(tmpl, args...)
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

func (r *RedisRepoClient) JsonSet(ctx context.Context, key string, path string, value any) error {
	if err := r.rdb.JSONSet(ctx, key, path, value).Err(); err != nil {
		logger.Logger.Errorf(
			"❌ Ошибка установки значения: %+v в поле: %s по ключу: %s в redis. %s",
			value,
			path,
			key,
			err.Error(),
		)
		
		return err
	}

	return nil
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
