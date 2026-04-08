package redisrepo

import "time"

type Status string

const (
	Online  Status = "online"
	Offline Status = "offline"
	InterfacesKey = "interfaces"
	ActivityKey = "activity"
)

type UserClient struct {
	Port        int       `json:"port"`
	Ip          string    `json:"ip"`
	UserAgent   string    `json:"user_agent"`
	Device      string    `json:"device"`
	Status      Status    `json:"status"`
	Location    string    `json:"location"`
	LastSeen    time.Time `json:"last_seen"`
	ConnectedAt time.Time `json:"connected_at"`
}
