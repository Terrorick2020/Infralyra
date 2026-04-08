package redisrepo

import "github.com/redis/go-redis/v9"

type RedisRepoSniff struct {
	client RedisRepoClient
}

func NewRedisRepoSniff(rdb *redis.Client) *RedisRepoSniff {
	return &RedisRepoSniff{client: RedisRepoClient{rdb: rdb}}
}
