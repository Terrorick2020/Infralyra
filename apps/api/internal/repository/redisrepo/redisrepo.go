package redisrepo

import (
	"InfralyraApi/pkg/scan"
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

type Scan interface {
	GetInterfaces(ctx context.Context) ([]scan.InterfaceInfo, error)
	SetInterfaces(ctx context.Context, data []scan.InterfaceInfo) error
}

type RedisRepo struct {
	Client
	Authorization
	Scan
}

func NewRedisRepo(rdb *redis.Client) *RedisRepo {
	return &RedisRepo{
		Client: NewRedisRepoClient(rdb),
		Authorization: NewRedisRepoAuth(rdb),
		Scan: NewRedisRepoScan(rdb),
	}
}
