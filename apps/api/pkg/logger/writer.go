package logger

import (
	"io"

	"github.com/sirupsen/logrus"
)

type writerHook struct {
	Writer    []io.Writer
	Formatter logrus.Formatter
	LogLevels []logrus.Level
}

func (hook *writerHook) Fire(entry *logrus.Entry) error {
	line, err := hook.Formatter.Format(entry)
	if err != nil {
		return err
	}

	for _, w := range hook.Writer {
		w.Write(line)
	}
	
	return nil
}

func (hook *writerHook) Levels() []logrus.Level {
	return hook.LogLevels
}
