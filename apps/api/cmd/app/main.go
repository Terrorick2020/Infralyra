package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"InfralyraApi/config"
	"InfralyraApi/internal/handler"
	"InfralyraApi/internal/infra/psqldb"
	"InfralyraApi/internal/infra/redisdb"
	"InfralyraApi/internal/repository"
	"InfralyraApi/internal/service"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/server"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("🚦 Начало работы системы")

	if err := config.InitConfig(); err != nil {
		errText := fmt.Sprintf("❌ Ошибка загрузки конфигурации: %s", err.Error())
		panic(errText)
	}

	if err := config.InitEnv(); err != nil {
		errText := fmt.Sprintf("❌ Ошибка загрузки переменных среды: %s", err.Error())
		panic(errText)
	}

	if err := logger.InitLogger(); err != nil {
		errText := fmt.Sprintf("❌ Ошибка запуска системы логирования: %s", err.Error())
		panic(errText)
	}

	rdb, err := redisdb.InitRedisDbConnect()
	if err != nil {
		errText := fmt.Sprintf("❌ Ошибка подключения к базе данных redis: %s", err.Error())
		panic(errText)
	}

	if err := psqldb.InitPsqlDbMigration(); err != nil {
		errText := fmt.Sprintf("❌ Ошибка внедрения миграций в БД: %s", err.Error())
		panic(errText)
	}

	db, err := psqldb.InitPsqlDbConnect()
	if err != nil {
		errText := fmt.Sprintf("❌ Ошибка подключения к базе данных psql: %s", err.Error())
		panic(errText)
	}
	defer func() {
		if err := psqldb.CloseConnect(db); err != nil {
			logger.Logger.Errorf("❌ Ошибка закрытия соединения с db: %s", err.Error())
		}
	}()

	repos := repository.NewRepository(db, rdb)
	service := service.NewService(repos)
	handler := handler.NewHandler(service)

	srv := new(server.Server)

	switch config.InfralyraConfig.Server.Mode {
	case "release":
		gin.SetMode(gin.ReleaseMode)
	case "test":
		gin.SetMode(gin.TestMode)
	default:
		gin.SetMode(gin.DebugMode)
	}

	serverErrChan := make(chan error, 1)

	go func() {
		path := fmt.Sprintf(
			"%s:%s",
			config.InfralyraConfig.Server.Host,
			config.InfralyraConfig.Server.Port,
		)

		if err := srv.Run(path, handler.InitRoutes()); err != nil {
			serverErrChan <- err
		}
	}()

	logger.Logger.Infof(
		"🚀 Сервер стартовал по адресу: http://%s:%s",
		config.InfralyraConfig.Server.Host,
		config.InfralyraConfig.Server.Port,
	)

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)

	select {
	case sig := <-quit:
		logger.Logger.Infof("❗ Получен сигнал: %s. Остановка сервера...", sig)
	case err := <-serverErrChan:
		logger.Logger.Errorf("❌ Сервер завершился с ошибкой: %s", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.ShutDown(ctx); err != nil {
		logger.Logger.Errorf("❌ Ошибка остановки сервера: %s", err.Error())
	}

	logger.Logger.Infof("🏁 Сервер завершил свою работу")
}
