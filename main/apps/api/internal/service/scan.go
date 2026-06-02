package service

import (
	"context"

	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/redisrepo"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/scan"
)

type ScanService struct {
	redisRepo redisrepo.Scan
}

func NewScanService(redisRepo redisrepo.Scan) *ScanService {
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
		logger.Logger.Errorf("❌ Ошибка получения активностей интерфейсов: %s", err.Error())
	}

	return activity, err
}

func (ss *ScanService) SearchDevices(ctx context.Context) error {
	var infaces []scan.InterfaceInfo

	infaces, err := ss.GetInterfaces(ctx)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка получения интерфейсов при сканировании: %s", err.Error())
		return err
	}

	for _, iface := range infaces { 
		var devices []scan.DeviceWithIp

		devices, err := scan.GetScan(iface.PCAPName)
		if err != nil {
			logger.Logger.Errorf("❌ Ошибка получения устройств интерфейса '%s': %s", iface.PCAPName, err.Error())
			continue
		}

		ss.redisRepo.SetDevices(
			ctx,
			scan.DivicesInfo{
				Inface: iface.PCAPName,
				Devices: devices,
			},
		)
	}

	return nil
}

func (ss *ScanService) GetDevices(ctx context.Context, data dto.GetDevicesDto) ([]scan.DeviceWithIp, error) {
	var devices []scan.DeviceWithIp

	devices, err := ss.redisRepo.GetDevices(ctx, data.Inface)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка получения устройств интерфейса '%s': %s", data.Inface, err.Error())
	}

	if devices == nil {
		logger.Logger.Warn("⚠️ Список устройств в redis пустой")
		ss.SearchDevices(ctx)
	}

	return []scan.DeviceWithIp{}, err
}
