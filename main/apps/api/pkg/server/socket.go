package server

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	socketio "github.com/googollee/go-socket.io"
)

type TSInitEvents = func(srv *socketio.Server) error
type TSInintRoutes = func(srv *socketio.Server) *gin.Engine

type SocketServer struct {
	socketServer *socketio.Server
	httpServer   *http.Server
}

func (s *SocketServer) RunSocket(
	path string,
	initEvents TSInitEvents,
	initRoutes TSInintRoutes,
) error {
	s.socketServer = socketio.NewServer(nil)

	if err := initEvents(s.socketServer); err != nil {
		return err
	}

	handler := initRoutes(s.socketServer)

	s.httpServer = &http.Server{
		Addr:           path,
		Handler:        handler,
		ReadTimeout:    ReadTimeout,
		WriteTimeout:   WriteTimeout,
		MaxHeaderBytes: MaxHeaderBytes,
	}

	return s.httpServer.ListenAndServe()
}

func (s *SocketServer) ShutDownSocket(ctx context.Context) error {
	return s.httpServer.Shutdown(ctx)
}
