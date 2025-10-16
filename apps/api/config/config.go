package config

import (
	"log"
	"time"

	"github.com/spf13/viper"
)

type GlobalConfig struct {
	Server  ServerConfig  `mapstructure:"server"`
	Logger  LogConfig     `mapstructure:"logger"`
	PsqlDb  PasqlDbConfig `mapstructure:"psql_db"`
	RedisDb RedisConfig   `mapstructure:"redis_db"`
	Auth    AuthConfig    `mapstructure:"auth"`
}

type ServerConfig struct {
	Host string `mapstructure:"host"`
	Port string `mapstructure:"port"`
	Mode string `mapstructure:"mode"`
}

type LogConfig struct {
	Level  string `mapstructure:"level"`
	Format string `mapstructure:"format"`
}

type PasqlDbConfig struct {
	Type    string `mapstructure:"type"`
	Host    string `mapstructure:"host"`
	Port    string `mapstructure:"port"`
	Dbname  string `mapstructure:"dbname"`
	Sslmode string `mapstructure:"sslmode"`
}

type RedisConfig struct {
	Host string `mapstructure:"host"`
	Port string `mapstructure:"port"`
	Db   int    `mapstructure:"db"`
}

type AuthConfig struct {
	AccessTokenTTL  time.Duration `mapstructure:"access_token_ttl"`
	RefreshTokenTTL time.Duration `mapstructure:"refresh_token_ttl"`
	RateLimitTTL    time.Duration `mapstructure:"rate_limit_ttl"`
	RateLimitCount  int           `mapstructure:"rate_limit_count"`
}

var InfralyraConfig *GlobalConfig

func InitConfig() error {
	viper.AddConfigPath("config")
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")

	if err := viper.ReadInConfig(); err != nil {
		return err
	}

	if err := viper.Unmarshal(&InfralyraConfig); err != nil {
		return err
	}

	log.Println("✔️   Инициализация конфигурации прошла успешно")

	return nil
}
