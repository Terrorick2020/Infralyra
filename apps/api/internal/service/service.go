package service

import (
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository"
	"InfralyraApi/internal/repository/redisrepo"
	"InfralyraApi/pkg/scan"
	"context"
)

type Authorization interface {
	CheckRateLimit(ctx context.Context, ip string) (int, error)
	InitUser(ctx context.Context, meta redisrepo.UserClient, data dto.SignInDto) (string, error)
	CreateUser(ctx context.Context, data dto.SignUpDto) error
}

type Scan interface {
	GetInterfaces(ctx context.Context) ([]scan.InterfaceInfo, error)
	GetActivity(ctx context.Context) ([]scan.IfaceStats, error)
}
type Service struct {
	Authorization
	Scan
}

func NewService(repository *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(
			repository.PsqlRepo.Users,
			repository.RedisRepo.Authorization,
		),
		Scan: NewScanService(repository.RedisRepo.Scan),
	}
}
