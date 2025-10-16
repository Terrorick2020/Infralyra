package psqldb

import (
	"InfralyraApi/config"
	"errors"
	"log"

	"github.com/golang-migrate/migrate/v4"
	"github.com/jmoiron/sqlx"

	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
)

const (
	mPath = "file://./migrations"

	UsersTableName = "users"
)

func InitPsqlDbConnect() (*sqlx.DB, error) {
	db, err := NewDBMS(DBMSConfig{
		Type:     config.InfralyraConfig.PsqlDb.Type,
		Host:     config.InfralyraConfig.PsqlDb.Host,
		Port:     config.InfralyraConfig.PsqlDb.Port,
		Username: config.InfralyraEnv.PsqlDb.Username,
		Password: config.InfralyraEnv.PsqlDb.Password,
		DbName:   config.InfralyraConfig.PsqlDb.Dbname,
		SslMode:  config.InfralyraConfig.PsqlDb.Sslmode,
	})
	if err != nil {
		return nil, err
	}

	log.Printf(
		"✔️  Успешное подключение к базе данных %s\n",
		config.InfralyraConfig.PsqlDb.Dbname,
	)

	return db, nil
}

func InitPsqlDbMigration() error {
	m, err := migrate.New(
		mPath,
		config.InfralyraEnv.PsqlDb.Url,
	)
	if err != nil {
		return err
	}

	err = m.Up()
	if err != nil {
		if errors.Is(err, migrate.ErrNoChange) {
			log.Println("👻 Нет новых psql миграций")
			return nil
		}
		return err
	}

	log.Println("✔️  Успешное выполнение psql миграций")

	return nil
}

func CloseConnect(db *sqlx.DB) error {
	if err := db.Close(); err != nil {
		return err
	}

	log.Printf(
		"✔️  Успешное закрытие соединения с базой данных %s",
		config.InfralyraConfig.PsqlDb.Dbname,
	)

	return nil
}
