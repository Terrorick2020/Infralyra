package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) Ping(ctx *gin.Context) {
	cuccessRes := SuccessRes[*struct{}]("Mirror out", nil)

	SendResponse(ctx, http.StatusOK, cuccessRes)
}
