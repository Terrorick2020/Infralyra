package config

import (
	"log"
	"time"

	"github.com/spf13/viper"
)

type InfralyraMode string

const (
	Release InfralyraMode = "release"
	Test    InfralyraMode = "test"
	Debug   InfralyraMode = "debug"
)

type GlobalConfig struct {
	Server  ServerConfig  `mapstructure:"server"`
	Logger  LogConfig     `mapstructure:"logger"`
	PsqlDb  PasqlDbConfig `mapstructure:"psql_db"`
	RedisDb RedisConfig   `mapstructure:"redis_db"`
	Auth    AuthConfig    `mapstructure:"auth"`
	Inter   InterConfig   `mapstructure:"interfaces"`
}

type ServerConfig struct {
	Host       string        `mapstructure:"host"`
	HttpPort   string        `mapstructure:"http_port"`
	SocketPort string        `mapstructure:"socket_port"`
	Mode       InfralyraMode `mapstructure:"mode"`
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
	SockRoomTTL     time.Duration `mapstructure:"sock_room_ttl"`
	RateLimitCount  int           `mapstructure:"rate_limit_count"`
}

type InterConfig struct {
	SaveTTL time.Duration `mapstructure:"save_ttl"`
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
