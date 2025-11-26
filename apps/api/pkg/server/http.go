package server

import (
	"context"
	"net/http"
)

type HtttpServer struct {
	httpServer *http.Server
}

func (s *HtttpServer) RunHttp(path string, handler http.Handler) error {
	s.httpServer = &http.Server{
		Addr:           path,
		Handler:        handler,
		ReadTimeout:    ReadTimeout,
		WriteTimeout:   WriteTimeout,
		MaxHeaderBytes: MaxHeaderBytes,
	}

	return s.httpServer.ListenAndServe()
}

func (s *HtttpServer) ShutDownHttp(ctx context.Context) error {
	return s.httpServer.Shutdown(ctx)
}
