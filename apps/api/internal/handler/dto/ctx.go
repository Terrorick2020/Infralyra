package dto

import "InfralyraApi/internal/repository/psqlrepo"

type TokenClaims struct {
	UserId int           `json:"user_id"`
	Role   psqlrepo.Role `json:"role"`
}
