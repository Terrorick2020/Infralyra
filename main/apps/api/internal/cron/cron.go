package cron

import (
	"fmt"

	"github.com/robfig/cron/v3"

	"InfralyraApi/config"
	"InfralyraApi/internal/service"
)

type Scaner interface {
	NetScanning()
}

type CronJobs struct {
	Scaner
}

func NewCronJobs(service *service.Service) *CronJobs {
	return &CronJobs{
		Scaner: NewScanStruct(service.Scan),
	}
}

func (cr *CronJobs) RunnerCronJobs() *cron.Cron {
	c := cron.New()

	netScanId, _ := c.AddFunc(
		fmt.Sprintf("@every %v", config.InfralyraConfig.Cron.NetScanTttl),
		cr.Scaner.NetScanning,
	)

	go c.Entry(netScanId).Job.Run()

	return c
}
