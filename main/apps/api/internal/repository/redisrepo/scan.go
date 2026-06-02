package redisrepo

import (
	"context"

	"github.com/redis/go-redis/v9"

	"InfralyraApi/config"
	"InfralyraApi/pkg/scan"
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

func (rrs *RedisRepoScan) SetDevices(ctx context.Context, data scan.DivicesInfo) error {
	res_key := createKey(deviceKey, data.Inface)

	err := rrs.client.Set(
		ctx,
		res_key,
		data.Devices,
		config.InfralyraConfig.Cron.NetScanTttl,
	)

	return err
}

func (rrs *RedisRepoScan) GetDevices(ctx context.Context, inface string) ([]scan.DeviceWithIp, error) {
	var devices []scan.DeviceWithIp
	res_key := createKey(deviceKey, inface)

	err := rrs.client.Get(ctx, res_key, &devices)
	if err == redis.Nil {
		return nil, nil
	}
	
	return  devices, err
}