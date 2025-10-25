package handler

import (
	"InfralyraApi/internal/service"

	"github.com/gin-gonic/gin"
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

	router.GET("/ping", h.Ping)

	auth := router.Group("/auth")
	{
		auth.POST("/sign-in", h.signIn)
		auth.POST("/sign-up", AuthMiddleware(), AdmineOnlyMiddleware(), h.signUp)
	}

	scan := router.Group("/scan")
	scan.Use(AuthMiddleware())
	{
		scan.GET("/get-interfaces", h.getInterfaces)
		scan.GET("/get-activity", h.getActivity)
	}

	sniff := router.Group("/sniff")
	sniff.Use(AuthMiddleware())
	{
		sniff.GET("/start", h.snifStart)
		sniff.GET("/finish", h.snifFinish)
	}

	return router
}
