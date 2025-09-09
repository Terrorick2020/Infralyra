package handler

import (
	"InfralyraApi/pkg/logger"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Status string

const (
	Info    Status = "info"
	Success Status = "success"
	Warning Status = "warning"
	Error   Status = "error"

	ErrDtoMsg        = "Переданы неправильные поля ввода"
	ErrServerMsg     = "Внутрення ошибка сервера"
	ErrTooManyReqMsg = "Превышен лимит запросов"
	ErrNotFoundedMsg = "Ничего не найдено"
	ErrAuthUser      = "Пользователь неавторизован"
	ErrAuthForbidden = "У пользователя недостаточно прав"
)

type Response[T any] struct {
	Status  Status `json:"status"`
	Message string `json:"message"`
	Data    *T     `json:"data"`
}

func InfoRes[T any](msg string, data *T) Response[T] {
	return Response[T]{Status: Info, Message: msg, Data: data}
}

func SuccessRes[T any](msg string, data *T) Response[T] {
	return Response[T]{Status: Success, Message: msg, Data: data}
}

func WarnRes[T any](msg string, data *T) Response[T] {
	return Response[T]{Status: Warning, Message: msg, Data: data}
}

func ErrRes[T any](msg string, data *T) Response[T] {
	return Response[T]{Status: Error, Message: msg, Data: data}
}

func SendResponse[T any](ctx *gin.Context, statusCode int, res Response[T]) {
	ip := ctx.ClientIP()

	switch res.Status {
	case Info, Success, Warning, Error:
		switch res.Status {
		case Info:
			logger.Logger.Infof("INFO: %s | IP: %s | Data: %+v", res.Message, ip, res.Data)
		case Success:
			logger.Logger.Infof("SUCCESS: %s | IP: %s | Data: %+v", res.Message, ip, res.Data)
		case Warning:
			logger.Logger.Warnf("WARNING: %s | IP: %s | Data: %+v", res.Message, ip, res.Data)
		case Error:
			logger.Logger.Errorf("ERROR: %s | IP: %s | Data: %+v", res.Message, ip, res.Data)
		}

		ctx.AbortWithStatusJSON(statusCode, res)
	default:
		logger.Logger.Errorf("Неверный статус при создании Response: %v", res.Status)
		
		errRes := ErrRes[*struct{}](ErrServerMsg, nil)
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, errRes)
	}
}
