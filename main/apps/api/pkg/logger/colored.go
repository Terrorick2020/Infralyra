package logger

import "github.com/sirupsen/logrus"

type ColoredTextFormatter struct {
	logrus.TextFormatter
}

func (f *ColoredTextFormatter) Format(entry *logrus.Entry) ([]byte, error) {
	msg := entry.Message
	var colorStart, colorEnd string

	switch entry.Level {
	case logrus.DebugLevel:
		colorStart = "\033[36m"
	case logrus.InfoLevel:
		colorStart = "\033[32m"
	case logrus.WarnLevel:
		colorStart = "\033[33m"
	case logrus.ErrorLevel, logrus.FatalLevel, logrus.PanicLevel:
		colorStart = "\033[31m"
	default:
		colorStart = "\033[0m"
	}
	colorEnd = "\033[0m"

	entry.Message = colorStart + msg + colorEnd
	return f.TextFormatter.Format(entry)
}
