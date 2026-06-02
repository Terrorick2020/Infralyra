package psqlrepo

import (
	"context"

	"github.com/jmoiron/sqlx"

	"InfralyraApi/pkg/scan"
)

type Users interface {
	GetUser(ctx context.Context, username string) (User, error)
	CreateUser(ctx context.Context, name, username, password string, role Role) error
}

type Sniff interface {
	SetPacket(ctx context.Context, inface string, pkt scan.PacketInfo) error
	GetPackets(ctx context.Context, inface string, count int16, step int16) ([]scan.PacketInfo, error)
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
