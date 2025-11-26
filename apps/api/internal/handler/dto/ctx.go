package dto

import "InfralyraApi/internal/repository/psqlrepo"

type SocketCtxKey string

const (
	CtxUserClaimsName string = "userClaims"

	AuthTokenName string = "Authorization"
	AuthTokenPref string = "Bearer"

	SockJRCtxKey SocketCtxKey = "joinRoomId"
	SockLRCtxKey SocketCtxKey = "leaveRoomId"
)

type TokenClaims struct {
	UserId int           `json:"user_id"`
	Role   psqlrepo.Role `json:"role"`
}
