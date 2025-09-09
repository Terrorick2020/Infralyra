package redisrepo

import "time"

type Status string

const (
	Online  Status = "online"
	Offline Status = "offline"
)

type UserClient struct {
	Port        int
	Ip          string
	UserAgent   string
	Device      string
	Status      Status
	Location    string
	LastSeen    time.Time
	ConnectedAt time.Time
}
