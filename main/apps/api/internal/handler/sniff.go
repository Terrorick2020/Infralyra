package handler

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	socketio "github.com/googollee/go-socket.io"

	"InfralyraApi/internal/handler/dto"
)

func (h *Handler) GetSocketTrafic(conn socketio.Conn, data dto.GetTraficDto) error {
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

func (h *Handler) getHttpSniff(ctx *gin.Context) {
	var req dto.GetTraficDto

	if err := ctx.BindJSON(&req); err != nil {
		errRes := ErrRes[*struct{}](ErrDtoMsg, nil)
		SendResponse(ctx, http.StatusBadRequest, errRes)
		return
	}

	packets, err := h.service.Sniff.GetPackets(ctx, req)
	if err != nil {
		errRes := ErrRes[*struct{}](ErrServerMsg, nil)
		SendResponse(ctx, http.StatusInternalServerError, errRes)
		return
	}

	cuccessRes := SuccessRes("Успешное получение трафика сети", &packets)
	SendResponse(ctx, http.StatusOK, cuccessRes)
}
