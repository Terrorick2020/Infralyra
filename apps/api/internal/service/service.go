package service

import (
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository"
	"InfralyraApi/internal/repository/redisrepo"
	"context"
)

type Authorization interface {
	CheckRateLimit(ctx context.Context, ip string) (int, error)
	InitUser(ctx context.Context, meta redisrepo.UserClient, data dto.SignInDto) (string, error)
	CreateUser(ctx context.Context, data dto.SignUpDto) error
}

type Service struct {
	Authorization
}

func NewService(repository *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(
			repository.PsqlRepo.Users,
			repository.RedisRepo.Authorization,
		),
	}
}
