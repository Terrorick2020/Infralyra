package redisrepo

import (
	"InfralyraApi/config"
	"context"

	"github.com/redis/go-redis/v9"
)

type RedisRepoUser struct {
	client RedisRepoClient
}

func NewRedisRepoUser(rdb *redis.Client) *RedisRepoUser {
	return &RedisRepoUser{client: RedisRepoClient{rdb: rdb}}
}

func (rru *RedisRepoUser) GetUserClient(ctx context.Context, id int) (UserClient, error) {
	key := createKey(userKeyTemplate, id)

	var userClient UserClient

	if err := rru.client.Get(ctx, key, &userClient); err != nil {
		return  UserClient{}, err
	}

	return userClient, nil
}

func (rru *RedisRepoUser) CreateRoomName(ctx context.Context, nsp, username, roomName string) error {
	key := createKey(roomNameKeyTemplate, nsp, username)

	return rru.client.Set(ctx, key, roomName, config.InfralyraConfig.Auth.SockRoomTTL)
}

func (rru *RedisRepoUser) DeleteRoomName(ctx context.Context, nsp, username, roomName string) error {
	key := createKey(roomNameKeyTemplate, nsp, username)

	return rru.client.Delete(ctx, key)
}