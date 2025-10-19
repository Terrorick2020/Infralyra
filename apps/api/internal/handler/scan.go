package handler

import (
	"InfralyraApi/pkg/scan"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) getInterfaces(ctx *gin.Context) {
	var interfaces []scan.InterfaceInfo

	interfaces, err := h.service.GetInterfaces(ctx.Request.Context())
	if err != nil {
		errRes := ErrRes[*struct{}](ErrServerMsg, nil)
		SendResponse(ctx, http.StatusInternalServerError, errRes)
		return
	}

	cuccessRes := SuccessRes("Успешное получение интерфейсов сети", &interfaces)
	SendResponse(ctx, http.StatusOK, cuccessRes)
}

func (h *Handler) getActivity(ctx *gin.Context) {
	var activity []scan.IfaceStats

	activity, err := h.service.GetActivity(ctx)
	if err != nil {
		errRes := ErrRes[*struct{}](ErrServerMsg, nil)
		SendResponse(ctx, http.StatusInternalServerError, errRes)
		return
	}

	cuccessRes := SuccessRes("Успешное получение активности интерфейсов сети", &activity)
	SendResponse(ctx, http.StatusOK, cuccessRes)
}
