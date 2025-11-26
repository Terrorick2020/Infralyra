package server

import "time"

const (
	ReadTimeout    time.Duration = 10 * time.Second
	WriteTimeout   time.Duration = 10 * time.Second
	MaxHeaderBytes int           = 1 << 20
)
