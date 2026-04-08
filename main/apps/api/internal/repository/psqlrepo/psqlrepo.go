package psqlrepo

import (
	"context"

	"github.com/jmoiron/sqlx"
)

type Users interface {
	GetUser(ctx context.Context, username string) (User, error)
	CreateUser(ctx context.Context, name, username, password string, role Role) error
}

type Sniff interface {

}

type PsqlRepo struct {
	Users
	Sniff
}

func NewPostgresRepo(db *sqlx.DB) *PsqlRepo {
	return &PsqlRepo{
		Users: NewUsersPsqlRepos(db),
		Sniff: NewSniffPsqlRepos(db),
	}
}
