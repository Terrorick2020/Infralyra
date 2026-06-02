package service

import (
	"context"
	"sync"
	"time"

	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/psqlrepo"
	"InfralyraApi/internal/repository/redisrepo"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/scan"
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

func (ss *SniffService) SearchPackets(ctx context.Context) error {
	var infaces []scan.InterfaceInfo
	var err error

	for {
		infaces, err = scan.GetInterfacesList()
		if err != nil {
			logger.Logger.Errorf("❌ Ошибка получения списка интерфейсов: %s", err)
			select {
			case <-time.After(5 * time.Second):
				continue
			case <-ctx.Done():
				return ctx.Err()
			}
		}
		break
	}

	sniff := func(ifaceName string) {
		const (
			maxRetries = 25
			retryDelay = 5 * time.Second
		)

		for attempt := 1; attempt <= maxRetries; attempt++ {
			select {
			case <-ctx.Done():
				logger.Logger.Infof("⏹️  Остановка сниффинга на %s: %s", ifaceName, ctx.Err())
				return
			default:
			}

			packets, err := scan.GetPacketsInfo(ifaceName, 256)
			if err != nil {
				logger.Logger.Errorf("❌ Ошибка запуска сниффинга на %s (попытка %d/%d): %s",
					ifaceName, attempt, maxRetries, err)

				if attempt == maxRetries {
					logger.Logger.Errorf("❌ Превышено количество попыток для %s", ifaceName)
					return
				}
				select {
				case <-time.After(retryDelay):
					continue
				case <-ctx.Done():
					return
				}
			}

			channelClosed := false
			for !channelClosed {
				select {
				case <-ctx.Done():
					logger.Logger.Infof("⚠️  Остановка сниффинга на %s: %s", ifaceName, ctx.Err())
					return
				case pkt, ok := <-packets:
					if !ok {
						logger.Logger.Warnf("⚠️  Канал пакетов закрыт на %s (попытка %d/%d)",
							ifaceName, attempt, maxRetries)
						channelClosed = true
					} else {
						err = ss.psqlRepo.SetPacket(ctx, ifaceName, pkt) 
						if err != nil {
							logger.Logger.Errorf("❌ Ошибка сохранения пакета в БД: %s", err)
						}
					}
				}
			}

			if attempt == maxRetries {
				logger.Logger.Errorf("❌ Превышено количество попыток для %s", ifaceName)
				return
			}
			select {
			case <-time.After(retryDelay):
				continue
			case <-ctx.Done():
				return
			}
		}
	}

	var wg sync.WaitGroup
	for _, inface := range infaces {
		if scan.IsSkipInterface(inface.PCAPName) {
			logger.Logger.Infof("⏭️  Пропускаем неподдерживаемый интерфейс: %s", inface.PCAPName)
			continue
		}

		wg.Add(1)
		go func(name string) {
			defer wg.Done()
			sniff(name)
		}(inface.PCAPName)
	}

	<-ctx.Done()
	wg.Wait()

	logger.Logger.Info("✅ Все снифферы остановлены")
	return nil
}

func (ss *SniffService) GetPackets(ctx context.Context, data dto.GetTraficDto) ([]scan.PacketInfo, error) {
	packets, err := ss.psqlRepo.GetPackets(ctx, data.Inface, data.Count, data.Step)
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
