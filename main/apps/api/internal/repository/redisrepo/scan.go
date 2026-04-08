package redisrepo

import (
	"InfralyraApi/config"
	"InfralyraApi/pkg/scan"
	"context"

	"github.com/redis/go-redis/v9"
)

type RedisRepoScan struct {
	client RedisRepoClient
}

func NewRedisRepoScan(rdb *redis.Client) *RedisRepoScan {
	return &RedisRepoScan{client: RedisRepoClient{rdb: rdb}}
}

func (rrs *RedisRepoScan) GetInterfaces(ctx context.Context) ([]scan.InterfaceInfo, error) {
	var interfaces []scan.InterfaceInfo

	err := rrs.client.Get(ctx, InterfacesKey, &interfaces)
	
	return interfaces, err
}

func (rrs *RedisRepoScan) SetInterfaces(ctx context.Context, data []scan.InterfaceInfo) error {
	err := rrs.client.Set(
		ctx,
		InterfacesKey,
		data,
		config.InfralyraConfig.Inter.SaveTTL,
	)

	return err
}
