package dto

import "InfralyraApi/internal/repository/psqlrepo"

const (
	CtxUserClaimsName string = "userClaims"

	AuthTokenName string = "Authorization"
	AuthTokenPref string = "Bearer"
)

type TokenClaims struct {
	UserId int           `json:"user_id"`
	Role   psqlrepo.Role `json:"role"`
}
