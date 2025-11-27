package redisrepo

import (
	"InfralyraApi/pkg/scan"
	"context"
	"time"

	"github.com/redis/go-redis/v9"
)

type Client interface {
	Set(ctx context.Context, key string, value any, ttl time.Duration) error
	JsonSet(ctx context.Context, key string, path string, value any) error
	Get(ctx context.Context, key string, dest any) error
	Delete(ctx context.Context, key string) error
}

type Authorization interface {
	SetRefrashToken(ctx context.Context, id int, value string) error
	SetPrevInfoRepoAuth(ctx context.Context, id int, data UserClient) error
	GetRateLimit(ctx context.Context, ip string) (int, error)
	IncrRateLimit(ctx context.Context, ip string) error
	SetUClientStatus(ctx context.Context, id int, value Status) error
}

type Scan interface {
	GetInterfaces(ctx context.Context) ([]scan.InterfaceInfo, error)
	SetInterfaces(ctx context.Context, data []scan.InterfaceInfo) error
}

type User interface {
	GetUserClient(ctx context.Context, id int) (UserClient, error)
	CreateRoomName(ctx context.Context, nsp, username, roomName string) error
	DeleteRoomName(ctx context.Context, nsp, username, roomName string) error
}

type RedisRepo struct {
	Client
	Authorization
	Scan
	User
}

func NewRedisRepo(rdb *redis.Client) *RedisRepo {
	return &RedisRepo{
		Client:        NewRedisRepoClient(rdb),
		Authorization: NewRedisRepoAuth(rdb),
		Scan:          NewRedisRepoScan(rdb),
		User:          NewRedisRepoUser(rdb),
	}
}
