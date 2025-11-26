package handler

import (
	"InfralyraApi/pkg/logger"

	socketio "github.com/googollee/go-socket.io"
)

func (h *Handler) OnSockConn(conn socketio.Conn) error {
	logger.Logger.Infof(
		"Подключение к Socket серверу: { id: %s, namespace: %s, host: %s }",
		conn.ID(),
		conn.URL().Host,
		conn.Namespace(),
	)
	
	conn.SetContext(nil)
	return nil
}

func (h *Handler) OnSockDisconn(conn socketio.Conn, reason string) {
	logger.Logger.Infof(
		"Отключение от Socket сервера: { id: %s, namespace: %s, host: %s, reason: %s }",
		conn.ID(),
		conn.URL().Host,
		conn.Namespace(),
		reason,
	)
}
