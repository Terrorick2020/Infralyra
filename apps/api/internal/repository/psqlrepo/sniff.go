package psqlrepo

import "github.com/jmoiron/sqlx"

type SniffPsqlRepos struct {
	db *sqlx.DB
}

func NewSniffPsqlRepos(db *sqlx.DB) *SniffPsqlRepos {
	return &SniffPsqlRepos{db: db}
}
