package logger

import (
	"InfralyraApi/config"
	"io"
	"log"
	"os"
	"strings"

	"github.com/sirupsen/logrus"
)

const (
	dirLogPath  = "logs"
	fileLogPath = "logs/infralyra.log"
)

var Logger *logrus.Logger

func InitLogger() error {
	Logger = logrus.New()

	level, err := logrus.ParseLevel(config.InfralyraConfig.Logger.Level)
	if err != nil {
		level = logrus.InfoLevel
	}
	Logger.SetLevel(level)

	if err := os.MkdirAll(dirLogPath, 0755); err != nil {
		log.Printf("❌ Не удалось создать папку logs: %v", err)
	}

	logFile, err := os.OpenFile(fileLogPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Printf("❌ Не удалось открыть файл логов, используем только консоль: %v", err)
		logFile = nil
	}

	var fileFormatter logrus.Formatter

	switch strings.ToLower(config.InfralyraConfig.Logger.Format) {
	case "json":
		fileFormatter = &logrus.JSONFormatter{}
	default:
		fileFormatter = &logrus.TextFormatter{FullTimestamp: true}
	}
	Logger.SetFormatter(fileFormatter)

	terminalFormatter := &ColoredTextFormatter{
		TextFormatter: logrus.TextFormatter{
			FullTimestamp: true,
			ForceColors:   true,
		},
	}

	if logFile != nil {
		Logger.SetOutput(io.Discard)
		Logger.AddHook(&writerHook{
			Writer:    []io.Writer{os.Stdout},
			Formatter: terminalFormatter,
			LogLevels: logrus.AllLevels,
		})
		Logger.AddHook(&writerHook{
			Writer:    []io.Writer{logFile},
			Formatter: fileFormatter,
			LogLevels: logrus.AllLevels,
		})
	} else {
		Logger.SetOutput(os.Stdout)
		Logger.SetFormatter(terminalFormatter)
	}

	log.Println("✔️   Инициализация системы логирования прошла успешно")

	return nil
}
