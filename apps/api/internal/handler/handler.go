package handler

import (
	"InfralyraApi/internal/service"

	"github.com/gin-gonic/gin"
)

const (
	CtxUserClaimsName = "userClaims"
)

type Handler struct {
	service *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	router.Use(RateLimiterMiddleware(h.service.Authorization))

	auth := router.Group("/auth")
	{
		auth.POST("/sign-in", h.signIn)
		auth.POST("/sign-up", AuthMiddleware(), AdmineOnlyMiddleware(), h.signUp)
	}

	return router
}
