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
	CheckCorrectSockEmit(ctx context.Context, ip, username string) error
	InitUser(ctx context.Context, meta redisrepo.UserClient, data dto.SignInDto) (string, error)
	CreateUser(ctx context.Context, data dto.SignUpDto) error
	JoinRoom(ctx context.Context, nsp string, data dto.JoinRoomDto) (string, error)
	LeaveRoom(ctx context.Context, nsp string, data dto.LeaveRooDto) error
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
			repository.RedisRepo.User,
		),
		Scan: NewScanService(repository.RedisRepo.Scan),
	}
}
