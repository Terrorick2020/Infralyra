package handler

import (
	"InfralyraApi/internal/handler/dto"
	"context"

	socketio "github.com/googollee/go-socket.io"
)

func (h *Handler) GetTrafic(conn socketio.Conn, data dto.GetTraficDto) error {
	ctx := context.WithValue(context.Background(), dto.SockJRCtxKey, conn.ID())

	packets, err := h.service.Sniff.GetPackets(ctx, data)
	if err != nil {
		return err
	}

	for pi := range packets {
		cuccessRes := SuccessRes("Успешное получение пакета", &pi)
		conn.Emit(dto.SockMEmitGTraff, cuccessRes)
	}

	return nil
}
