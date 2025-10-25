package psqlrepo

import (
	"InfralyraApi/internal/infra/psqldb"
	"context"
	"fmt"

	"github.com/jmoiron/sqlx"
)

type UsersPsqlRepos struct {
	db *sqlx.DB
}

func NewUsersPsqlRepos(db *sqlx.DB) *UsersPsqlRepos {
	return &UsersPsqlRepos{db: db}
}

func (upr *UsersPsqlRepos) GetUser(ctx context.Context, username string) (User, error) {
	var user User

	query := fmt.Sprintf("SELECT * FROM %s WHERE username=$1", psqldb.UsersTableName)
	err := upr.db.Get(&user, query, username)

	return user, err
}

func (upr *UsersPsqlRepos) CreateUser(ctx context.Context, name, username, password string, role Role) error {
	var user User

	query := fmt.Sprintf(
		"INSERT INTO %s (name, username, role, password) VALUES ($1, $2, $3, $4)",
		psqldb.UsersTableName,
	)
	err := upr.db.Get(&user, query, name, username, role, password)

	return err
}
