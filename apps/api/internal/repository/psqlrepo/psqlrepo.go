package psqlrepo

import (
	"context"

	"github.com/jmoiron/sqlx"
)

type Users interface {
	GetUser(ctx context.Context, username string) (User, error)
	CreateUser(ctx context.Context, name, username, password string, role Role) error
}

type PsqlRepo struct {
	Users
}

func NewPostgresRepo(db *sqlx.DB) *PsqlRepo {
	return &PsqlRepo{
		Users: NewUsersPsqlRepos(db),
	}
}
