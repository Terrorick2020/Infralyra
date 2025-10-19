package service

import (
	"context"

	"InfralyraApi/internal/repository/redisrepo"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/scan"
)

type ScanService struct {
	redisRepo redisrepo.Scan
}

func NewScanService(
	redisRepo redisrepo.Scan,
) *ScanService {
	return &ScanService{
		redisRepo: redisRepo,
	}
}

func (ss *ScanService) GetInterfaces(ctx context.Context) ([]scan.InterfaceInfo, error) {
	var interfaces []scan.InterfaceInfo

	interfaces, err := ss.redisRepo.GetInterfaces(ctx)
	if err == nil {
		return interfaces, nil
	}

	logger.Logger.Warn("⚠️ Список интерфейсов не хранился в redis!")

	interfaces, err = scan.GetInterfacesList()
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка получения списка интеерфейсов: %s", err.Error())
		return interfaces, err
	}

	err = ss.redisRepo.SetInterfaces(ctx, interfaces)
	if err != nil {
		logger.Logger.Warn("⚠️ Список интерфейсов не сохранился в redis!")
	}

	return interfaces, err
}

func (ss *ScanService) GetActivity(ctx context.Context) ([]scan.IfaceStats, error) {
	var activity []scan.IfaceStats

	activity, err := scan.GetInterfacesActivity()
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка получения актвностей интерфейсов: %s", err.Error())
	}

	return activity, err
}
