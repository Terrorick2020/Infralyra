package handler

import (
	"InfralyraApi/config"
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/psqlrepo"
	"InfralyraApi/internal/service"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/utils"
	"context"
	"errors"
	"net/http"
	"reflect"

	"github.com/gin-gonic/gin"
	socketio "github.com/googollee/go-socket.io"
)

type SockMiddleHandler[T any] = func(conn socketio.Conn, data T) error

func RateLimiterMiddleware(authService service.Authorization) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ip := ctx.ClientIP()

		count, err := authService.CheckRateLimit(ctx.Request.Context(), ip)

		if err != nil {
			errRes := ErrRes[*struct{}](ErrServerMsg, nil)
			SendResponse(ctx, http.StatusInternalServerError, errRes)
			return
		} else if count > config.InfralyraConfig.Auth.RateLimitCount {
			errRes := ErrRes[*struct{}](ErrNotFoundedMsg, nil)
			SendResponse(ctx, http.StatusTooManyRequests, errRes)
			return
		}

		logger.Logger.Infof("Пользователь ip: %s подключился к системе", ip)

		ctx.Next()
	}
}

func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		token, err := ctx.Cookie(dto.AuthTokenName)
		if err != nil {
			errRes := ErrRes[*struct{}](ErrAuthUser, nil)
			SendResponse(ctx, http.StatusUnauthorized, errRes)
			return
		}

		claims, err := utils.ParseToken[dto.TokenClaims](token, config.InfralyraEnv.AuthSecret, dto.AuthTokenPref)
		if err != nil {
			errRes := ErrRes[*struct{}](ErrAuthUser, nil)
			SendResponse(ctx, http.StatusUnauthorized, errRes)
			return
		}

		ctx.Set(dto.CtxUserClaimsName, claims)

		ip := ctx.ClientIP()

		logger.Logger.Infof("Пользователь ip: %s успешно прошёл авторизацию", ip)

		ctx.Next()
	}
}

func AdmineOnlyMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		claims, err := utils.GetClaims[dto.TokenClaims](ctx, dto.CtxUserClaimsName)
		if err != nil || claims.Role != psqlrepo.Admin {
			errRes := ErrRes[*struct{}](ErrAuthForbidden, nil)
			SendResponse(ctx, http.StatusForbidden, errRes)
			return
		}

		ip := ctx.ClientIP()

		logger.Logger.Infof("Пользователь ip: %s успешно прошёл проверку на роль: %s", ip, psqlrepo.Admin)

		ctx.Next()
	}
}

func CheckCorrectSockUser[T any](
	authService service.Authorization,
	handler SockMiddleHandler[T],
) SockMiddleHandler[T] {
	return func(conn socketio.Conn, data T) error {
		v := reflect.ValueOf(data)
		field := v.FieldByName(dto.SockObligFieldUN)

		if v.Kind() != reflect.Struct || !field.IsValid() || field.Kind() != reflect.String {
			logger.Logger.Errorf(
				"Пользователь ip: %s не прошёл проверку наличия `Username` в запросе",
				conn.RemoteAddr().String(),
			)
			return errors.New("Неправильный формат данных события")
		}

		username := field.String()
		ctx := context.WithValue(context.Background(), "CheckCorrectSockUser", conn.ID())
		ip := conn.RemoteAddr().String()
		if err := authService.CheckCorrectSockEmit(ctx, ip, username); err != nil {
			logger.Logger.Errorf(
				"Пользователь ip: %s username: %s не прошёл проверку налиция статуса `online`",
				ip,
				username,
			)

			return errors.New("Этот пользователь не может подключиться")
		}

		return handler(conn, data)
	}
}

func CheckCorrectRoomName[T any](
	authService service.Authorization,
	handler SockMiddleHandler[T],
) SockMiddleHandler[T] {
	return func(conn socketio.Conn, data T) error {
		v := reflect.ValueOf(data)
		fieldUN := v.FieldByName(dto.SockObligFieldUN)
		fieldRN := v.FieldByName(dto.SockObligFieldRN)

		if v.Kind() != reflect.Struct || !fieldUN.IsValid() || fieldUN.Kind() != reflect.String {
			logger.Logger.Errorf(
				"Пользователь ip: %s не прошёл проверку наличия `RoomName` и в запросе",
				conn.RemoteAddr().String(),
			)
			return errors.New("Неправильный формат данных события")
		}

		userName := fieldUN.String()
		roomName := fieldRN.String()
		ctx := context.WithValue(context.Background(), "CheckCorrectSockUser", conn.ID())
		if err := authService.CheckCorrectSockRN(ctx, conn.Namespace(), userName, roomName); err != nil {
			logger.Logger.Errorf(
				"Пользователь ip: %s username: %s не прошёл проверку налиция комнаты: %s",
				conn.RemoteAddr().String(),
				userName,
				roomName,
			)

			return errors.New("Этот пользователь не может подключиться")
		}

		return handler(conn, data)
	}
}
