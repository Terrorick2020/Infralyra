package cron

import "InfralyraApi/internal/service"

type ScanStruct struct {
	LogLvl      string
	scanService service.Scan
}

func NewScanStruct(scanService service.Scan) *ScanStruct {
	return &ScanStruct{
		LogLvl: "CronJobs: `Scaner`",
		scanService: scanService,
	}
}

func (ss *ScanStruct) NetScanning() {
	return
}
