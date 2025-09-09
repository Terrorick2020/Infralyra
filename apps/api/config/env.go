package config

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

type GlobalEnv struct {
	PsqlDb     PsqlDbEnv
	RedisDb    RedisDbEnv
	AuthSecret string
}

type PsqlDbEnv struct {
	Username string
	Password string
	Url      string
}

type RedisDbEnv struct {
	Password string
	Url      string
}

var InfralyraEnv GlobalEnv

func InitEnv() error {
	if err := godotenv.Load(); err != nil {
		return err
	}

	InfralyraEnv = GlobalEnv{
		PsqlDb: PsqlDbEnv{
			Username: os.Getenv("POSTGRES_USER"),
			Password: os.Getenv("POSTGRES_PASSWORD"),
			Url: fmt.Sprintf(
				"postgres://%s:%s@%s:%s/%s?sslmode=%s",
				os.Getenv("POSTGRES_USER"),
				os.Getenv("POSTGRES_PASSWORD"),
				InfralyraConfig.PsqlDb.Host,
				InfralyraConfig.PsqlDb.Port,
				InfralyraConfig.PsqlDb.Dbname,
				InfralyraConfig.PsqlDb.Sslmode,
			),
		},
		RedisDb: RedisDbEnv{
			Password: os.Getenv("REDIS_PASSWORD"),
			Url: fmt.Sprintf(
				"redis://%s@%s:%s/%d",
				os.Getenv("REDIS_PASSWORD"),
				InfralyraConfig.RedisDb.Host,
				InfralyraConfig.RedisDb.Port,
				InfralyraConfig.RedisDb.Db,
			),
		},
		AuthSecret: os.Getenv("AUTH_SECRET"),
	}

	log.Println("✔️  Инициализация переменных окружения прошла успешно")

	return nil
}
