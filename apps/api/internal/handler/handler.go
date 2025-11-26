package handler

import (
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/service"
	"InfralyraApi/pkg/server"

	"github.com/gin-gonic/gin"
	socketio "github.com/googollee/go-socket.io"
)

type Handler struct {
	service *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) InitHttpRoutes() *gin.Engine {
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

func (h *Handler) InitSocketEvents() server.TSInitEvents {
	return func(srv *socketio.Server) error {
		nspSniff := "/sniff"

		joinRoomWithMiddle := CheckCorrectSockUser(h.service.Authorization, h.joinRoom)
		leaveRoomWithMiddle := CheckCorrectSockUser(h.service.Authorization, h.leaveRoom)

		srv.OnConnect(nspSniff, h.OnSockConn)
		srv.OnEvent(nspSniff, dto.SockMJoinRoom, joinRoomWithMiddle)
		srv.OnEvent(nspSniff, dto.SockMLeaveRoom, leaveRoomWithMiddle)
		srv.OnDisconnect(nspSniff, h.OnSockDisconn)

		return nil
	}
}

func (h *Handler) InitSocketRoutes() server.TSInintRoutes {
	return func(srv *socketio.Server) *gin.Engine {
		router := gin.New()

		router.GET("/socket.io/*any", gin.WrapH(srv))
		router.POST("/socket.io/*any", gin.WrapH(srv))

		return router
	}
}
