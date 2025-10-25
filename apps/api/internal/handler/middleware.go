package handler

import (
	"InfralyraApi/config"
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/psqlrepo"
	"InfralyraApi/internal/service"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)

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
