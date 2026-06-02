package psqldb

import (
	"errors"
	"fmt"
	"log"

	"github.com/golang-migrate/migrate/v4"
	"github.com/jmoiron/sqlx"

	"InfralyraApi/config"

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
	m, err := migrate.New(mPath, config.InfralyraEnv.PsqlDb.Url)
	if err != nil {
		log.Printf("❌ Ошибка создания миграций: %v", err)
		return err
	}

	version, dirty, verr := m.Version()
	if verr != nil && !errors.Is(verr, migrate.ErrNilVersion) {
		log.Printf("⚠️ Не удалось получить версию миграций: %v", verr)
	}

	if dirty {
		log.Printf("🧹 Обнаружено dirty-состояние миграций (версия %d). Исправляем...", version)
		if err := m.Force(int(version)); err != nil {
			log.Printf("❌ Ошибка сброса dirty-состояния: %v", err)
			return err
		}
		log.Println("✅ Dirty-состояние успешно сброшено.")
	}

	if config.InfralyraConfig.Server.Mode == config.Debug {
		log.Printf("🧨 [%s] Очистка схемы public перед применением миграций...\n", config.Debug)

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
			return err
		}
		defer db.Close()

		query := fmt.Sprintf(`
			DROP SCHEMA public CASCADE;
			CREATE SCHEMA public;
			GRANT ALL ON SCHEMA public TO %s;
			GRANT ALL ON SCHEMA public TO public;
		`, config.InfralyraEnv.PsqlDb.Username)

		if _, err = db.Exec(query); err != nil {
			return err
		}

		m, err = migrate.New(mPath, config.InfralyraEnv.PsqlDb.Url)
		if err != nil {
			return err
		}
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
