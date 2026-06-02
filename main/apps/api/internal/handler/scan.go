package handler

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/pkg/scan"
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

func (h *Handler) getDevices(ctx *gin.Context) {
	var req dto.GetDevicesDto

	if err := ctx.BindJSON(&req); err != nil {
		errRes := ErrRes[*struct{}](ErrDtoMsg, nil)
		SendResponse(ctx, http.StatusBadRequest, errRes)
		return
	}

	devices, err := h.service.GetDevices(ctx, req)
	if err != nil {
		errRes := ErrRes[*struct{}](ErrServerMsg, nil)
		SendResponse(ctx, http.StatusInternalServerError, errRes)
		return
	}

	cuccessRes := SuccessRes(fmt.Sprintf("Успешное получение устройств интерфейса: %s", req.Inface), &devices)
	SendResponse(ctx, http.StatusOK, cuccessRes)
}
