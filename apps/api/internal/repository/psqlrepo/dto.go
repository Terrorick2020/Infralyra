package psqlrepo

import "time"

type Role string

const (
	Guest     Role = "guest"
	Admine    Role = "admin"
	Moderator Role = "moderator"
)

type User struct {
    ID        int       `json:"id" db:"id"`
    CreatedAt time.Time `json:"created_at" db:"created_at"`
    UpdatedAt time.Time `json:"updated_at" db:"updated_at"`
    Name      string    `json:"name" db:"name"`
    Username  string    `json:"username" db:"username"`
    Role      Role      `json:"role" db:"role"`
    Password  string    `json:"-" db:"password"`
}
