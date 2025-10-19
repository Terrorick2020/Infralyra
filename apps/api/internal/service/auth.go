package service

import (
	"InfralyraApi/config"
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/psqlrepo"
	"InfralyraApi/internal/repository/redisrepo"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/utils"
	"context"
	"fmt"
)

type AuthService struct {
	psqlRepo  psqlrepo.Users
	redisRepo redisrepo.Authorization
}

func NewAuthService(
	psqlRepo psqlrepo.Users,
	redisRepo redisrepo.Authorization,
) *AuthService {
	return &AuthService{
		psqlRepo:  psqlRepo,
		redisRepo: redisRepo,
	}
}

func (as *AuthService) CheckRateLimit(ctx context.Context, ip string) (int, error) {
	count, err := as.redisRepo.GetRateLimit(ctx, ip)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка получения количесва попыток запросов redis: %s", err.Error())

		return count, err
	} else if count >= config.InfralyraConfig.Auth.RateLimitCount {
		logger.Logger.Errorf("❌ Пользователь %s превысил количесво попыток запросов", ip)

		return count, err
	}

	err = as.redisRepo.IncrRateLimit(ctx, ip)
	count += 1

	return count, err
}

func (as *AuthService) InitUser(ctx context.Context, meta redisrepo.UserClient, data dto.SignInDto) (string, error) {
	pswdHash, err := utils.HashStr(data.Password)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка хеширования пароля: %s", err.Error())

		return "", err
	}

	user, err := as.psqlRepo.GetUser(ctx, data.Username, pswdHash)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка идентификации пользователя: %s", err.Error())

		return "", err
	}

	accToken, err := utils.GenerateToken(
		dto.TokenClaims{UserId: user.ID, Role: user.Role},
		config.InfralyraConfig.Auth.AccessTokenTTL,
		config.InfralyraEnv.AuthSecret,
	)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка генерации токена access: %s", err.Error())

		return "", err
	}

	refToken, err := utils.GenerateToken(
		dto.TokenClaims{UserId: user.ID, Role: user.Role},
		config.InfralyraConfig.Auth.RefreshTokenTTL,
		config.InfralyraEnv.AuthSecret,
	)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка генерации токена refrash: %s", err.Error())

		return "", err
	}

	err = as.redisRepo.SetRefrashToken(ctx, user.ID, refToken)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка установки токена refrash в redis: %s", err.Error())

		return "", nil
	}

	token := fmt.Sprintf("Bearer %s", accToken)

	if err := as.redisRepo.SetPrevInfoRepoAuth(ctx, user.ID, meta); err != nil {
		logger.Logger.Errorf("❌ Ошибка установки переменных данных пользователя в redis: %s", err.Error())

		return "", err
	}

	return token, nil
}

func (as *AuthService) CreateUser(ctx context.Context, data dto.SignUpDto) error {
	err := as.psqlRepo.CreateUser(
		ctx,
		data.Name,
		data.Username,
		data.Password,
		data.Role,
	)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка создания нового пользователя psql: %s", err.Error())
	}

	return err
}
