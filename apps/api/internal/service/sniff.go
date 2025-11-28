package service

import (
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/psqlrepo"
	"InfralyraApi/internal/repository/redisrepo"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/scan"
	"context"
)

type SniffService struct {
	psqlRepo  psqlrepo.Sniff
	redisRepo redisrepo.Sniff
}

func NewSniffService(psqlRepo psqlrepo.Sniff, redisRepo redisrepo.Sniff) *SniffService {
	return &SniffService{
		psqlRepo:  psqlRepo,
		redisRepo: redisRepo,
	}
}

func (ss *SniffService) GetPackets(ctx context.Context, data dto.GetTraficDto) (<-chan scan.PacketInfo, error) {
	packets, err := scan.GetPacketsInfo(data.Inface, data.PayloadLimit)
	if err != nil {
		logger.Logger.Errorf(
			"❌ Ошибка получения пакетов по интерфейсу: %s: %s",
			data.Inface,
			err.Error(),
		)

		return nil, err
	}

	return packets, nil
}
