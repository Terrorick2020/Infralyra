package cron

import (
	"context"
	"time"

	"InfralyraApi/internal/service"
	"InfralyraApi/pkg/logger"
)

type ScanStruct struct {
	LogLvl      string
	scanService service.Scan
}

func NewScanStruct(scanService service.Scan) *ScanStruct {
	return &ScanStruct{
		LogLvl:      "CronJobs: `Scaner`",
		scanService: scanService,
	}
}

func (ss *ScanStruct) NetScanning() {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Minute)
	defer cancel()
	
	err := ss.scanService.SearchDevices(ctx)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка сканирования сети: %s", err.Error())
		return
	}

	logger.Logger.Info("✅ Сканирование завершено")

}
