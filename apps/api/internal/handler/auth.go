package handler

import (
	"InfralyraApi/config"
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/redisrepo"
	"net"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

func (h *Handler) signIn(ctx *gin.Context) {
	var req dto.SignInDto

	if err := ctx.BindJSON(&req); err != nil {
		errRes := ErrRes[*struct{}](ErrDtoMsg, nil)
		SendResponse(ctx, http.StatusBadRequest, errRes)
		return
	}

	ip := ctx.ClientIP()

	_, portStr, _ := net.SplitHostPort(ctx.Request.RemoteAddr)
	port, _ := strconv.Atoi(portStr)

	userAgent := ctx.Request.UserAgent()

	device := "Unknown"
	if strings.Contains(strings.ToLower(userAgent), "mobile") {
		device = "Mobile"
	} else {
		device = "Desktop"
	}

	location := "Unknown"

	meta := redisrepo.UserClient{
		Port:        port,
		Ip:          ip,
		UserAgent:   userAgent,
		Device:      device,
		Status:      redisrepo.Online,
		Location:    location,
		LastSeen:    time.Now(),
		ConnectedAt: time.Now(),
	}

	token, err := h.service.Authorization.InitUser(ctx.Request.Context(), meta, req)
	if err != nil {
		errRes := ErrRes[*struct{}](ErrDtoMsg, nil)
		SendResponse(ctx, http.StatusNotFound, errRes)
		return
	}

	ttl := int(config.InfralyraConfig.Auth.AccessTokenTTL.Seconds())

	ctx.SetSameSite(http.SameSiteLaxMode)
	ctx.SetCookie(dto.AuthTokenName, token, ttl, "/", "", true, true)

	cuccessRes := SuccessRes[*struct{}]("Успешный вход в систему", nil)
	SendResponse(ctx, http.StatusOK, cuccessRes)
}

func (h *Handler) signUp(ctx *gin.Context) {
	var req dto.SignUpDto

	if err := ctx.BindJSON(&req); err != nil {
		errRes := ErrRes[*struct{}](ErrDtoMsg, nil)
		SendResponse(ctx, http.StatusBadRequest, errRes)
		return
	}

	err := h.service.Authorization.CreateUser(ctx.Request.Context(), req)
	if err != nil {
		errRes := ErrRes[*struct{}](ErrServerMsg, nil)
		SendResponse(ctx, http.StatusInternalServerError, errRes)
		return
	}

	cuccessRes := SuccessRes[*struct{}]("Пользователь успешно зарегистрирован", nil)
	SendResponse(ctx, http.StatusOK, cuccessRes)
}
