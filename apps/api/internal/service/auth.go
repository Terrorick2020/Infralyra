package service

import (
	"InfralyraApi/config"
	"InfralyraApi/internal/handler/dto"
	"InfralyraApi/internal/repository/psqlrepo"
	"InfralyraApi/internal/repository/redisrepo"
	"InfralyraApi/pkg/logger"
	"InfralyraApi/pkg/utils"
	"context"
	"errors"
	"fmt"

	"github.com/gofrs/uuid"
)

type AuthService struct {
	psqlRepo      psqlrepo.Users
	redisRepoAuth redisrepo.Authorization
	redisRepoUser redisrepo.User
}

func NewAuthService(
	psqlRepo psqlrepo.Users,
	redisRepoAuth redisrepo.Authorization,
	redisRepoUser redisrepo.User,
) *AuthService {
	return &AuthService{
		psqlRepo:      psqlRepo,
		redisRepoAuth: redisRepoAuth,
		redisRepoUser: redisRepoUser,
	}
}

func (as *AuthService) CheckRateLimit(ctx context.Context, ip string) (int, error) {
	count, err := as.redisRepoAuth.GetRateLimit(ctx, ip)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка получения количесва попыток запросов redis: %s", err.Error())

		return count, err
	} else if count >= config.InfralyraConfig.Auth.RateLimitCount {
		logger.Logger.Errorf("❌ Пользователь %s превысил количесво попыток запросов", ip)

		return count, err
	}

	err = as.redisRepoAuth.IncrRateLimit(ctx, ip)
	count += 1

	return count, err
}

func (as *AuthService) InitUser(ctx context.Context, meta redisrepo.UserClient, data dto.SignInDto) (string, error) {
	user, err := as.psqlRepo.GetUser(ctx, data.Username)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка идентификации пользователя: %s", err.Error())

		return "", err
	}

	passRes := utils.CheckStrHash(user.Password, data.Username)

	if !passRes {
		logger.Logger.Errorf("❌ Ошибка вводимого пароля для: %s", data.Username)

		return "", errors.New("неверный пароль пользователя")
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

	err = as.redisRepoAuth.SetRefrashToken(ctx, user.ID, refToken)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка установки токена refrash в redis: %s", err.Error())

		return "", nil
	}

	token := fmt.Sprintf("%s %s", dto.AuthTokenPref, accToken)

	if err := as.redisRepoAuth.SetPrevInfoRepoAuth(ctx, user.ID, meta); err != nil {
		logger.Logger.Errorf("❌ Ошибка установки переменных данных пользователя в redis: %s", err.Error())

		return "", err
	}

	return token, nil
}

func (as *AuthService) CreateUser(ctx context.Context, data dto.SignUpDto) error {
	pswdHash, err := utils.HashStr(data.Password)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка хеширования пароля: %s", err.Error())

		return err
	}

	err = as.psqlRepo.CreateUser(
		ctx,
		data.Name,
		data.Username,
		pswdHash,
		data.Role,
	)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка создания нового пользователя psql: %s", err.Error())
	}

	return err
}

func (as *AuthService) CheckCorrectSockEmit(ctx context.Context, ip, username string) error {
	user, err := as.psqlRepo.GetUser(ctx, username)

	if err != nil {
		logger.Logger.Errorf("❌ Ошибка идентификации пользователя: %s", err.Error())

		return err
	}

	userClient, err := as.redisRepoUser.GetUserClient(ctx, user.ID)
	if err != nil {
		logger.Logger.Errorf("❌ Ошибка наличия пользователя: %s", err.Error())

		return err
	}

	if ip != userClient.Ip || userClient.Status != redisrepo.Online {
		logger.Logger.Errorf(
			"❌ Ошибка условия подключения пользователя: %s",
			errors.New("Поля Ip и Status в UserClient не проходят по условию"),
		)

		return err
	}

	return nil
}

func (as *AuthService) JoinRoom(ctx context.Context, nsp string, data dto.JoinRoomDto) (string, error) {
	roomName, err := uuid.NewV4()

	if err != nil {
		logger.Logger.Errorf(
			"❌ Ошибка генерации `roomName` в conn.ID: %s: %s",
			ctx.Value(dto.SockJRCtxKey),
			errors.New("Поля Ip и Status в UserClient не проходят по условию"),
		)

		return "", err
	}

	if err := as.redisRepoUser.CreateRoomName(ctx, nsp, data.Username, roomName.String()); err != nil {
		logger.Logger.Errorf(
			"❌ Ошибка назначения `roomName` в conn.ID: %s для пользователя: %s: %s",
			ctx.Value(dto.SockJRCtxKey),
			data.Username,
			errors.New("Поля Ip и Status в UserClient не проходят по условию"),
		)

		return "", err
	}

	return roomName.String(), nil
}

func (as *AuthService) LeaveRoom(ctx context.Context, nsp string, data dto.LeaveRooDto) error {
	return nil
}
