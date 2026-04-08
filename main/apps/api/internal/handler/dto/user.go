package dto

import "InfralyraApi/internal/repository/psqlrepo"

type SignInDto struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type SignUpDto struct {
	SignInDto
	Name string        `json:"name"`
	Role psqlrepo.Role `json:"role"`
}
