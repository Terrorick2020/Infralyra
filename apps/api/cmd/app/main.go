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

	httpSrv := new(server.HtttpServer)
	httpPath := fmt.Sprintf(
		"%s:%s",
		config.InfralyraConfig.Server.Host,
		config.InfralyraConfig.Server.HttpPort,
	)

	socketSrv := new(server.SocketServer)
	socketPath := fmt.Sprintf(
		"%s:%s",
		config.InfralyraConfig.Server.Host,
		config.InfralyraConfig.Server.SocketPort,
	)

	switch config.InfralyraConfig.Server.Mode {
	case config.Release:
		gin.SetMode(gin.ReleaseMode)
	case config.Test:
		gin.SetMode(gin.TestMode)
	default:
		gin.SetMode(gin.DebugMode)
	}

	httpSrvErrChan := make(chan error, 1)

	go func() {
		if err := httpSrv.RunHttp(httpPath, handler.InitHttpRoutes()); err != nil {
			httpSrvErrChan <- err
		}
	}()

	logger.Logger.Infof(
		"🚀 HTTP Сервер стартовал по адресу: http://%s",
		httpPath,
	)

	socketSrvErrChan := make(chan error, 1)

	go func() {
		initEvents := handler.InitSocketEvents()
		initRoutes := handler.InitSocketRoutes()

		if err := socketSrv.RunSocket(socketPath, initEvents, initRoutes); err != nil {
			socketSrvErrChan <- err
		}
	}()

	logger.Logger.Infof(
		"🚀 Socket Сервер стартовал по адресу: ws://%s",
		socketPath,
	)

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)

	select {
	case sig := <-quit:
		logger.Logger.Infof("❗ Получен сигнал: %s. Остановка серверов...", sig)
	case err := <-httpSrvErrChan:
		logger.Logger.Errorf("❌ HTTP Сервер завершился с ошибкой: %s", err)
	case err := <-socketSrvErrChan:
		logger.Logger.Errorf("❌ Socket Сервер завершился с ошибкой: %s", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := httpSrv.ShutDownHttp(ctx); err != nil {
		logger.Logger.Errorf("❌ Ошибка остановки HTTP сервера: %s", err.Error())
	}

	if err := socketSrv.ShutDownSocket(ctx); err != nil {
		logger.Logger.Errorf("❌ Ошибка остановки Socket сервера: %s", err.Error())
	}

	logger.Logger.Infof("🏁 Сервера завершили свою работу")
}
