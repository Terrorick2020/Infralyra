package redisdb

import (
	"InfralyraApi/config"
	"fmt"
	"log"

	"github.com/redis/go-redis/v9"
)

type DBRSConfig struct {
	Addr     string
	Password string
	DB       int
}

func InitRedisDbConnect() (*redis.Client, error) {
	addr := fmt.Sprintf(
		"%s:%s",
		config.InfralyraConfig.RedisDb.Host,
		config.InfralyraConfig.RedisDb.Port,
	)

	rdb, err := NewRSDB(DBRSConfig{
		Addr:     addr,
		Password: config.InfralyraEnv.RedisDb.Password,
		DB:       config.InfralyraConfig.RedisDb.Db,
	})
	if err != nil {
		return nil, err
	}

	log.Println("✔️  Успешное подключение к базе данных 'redis'")

	return rdb, nil
}
