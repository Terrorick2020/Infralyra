package dto

type SockDiscReason string

const (
	SockRTransportClose   SockDiscReason = "transport close"
	SockRPingTimeout      SockDiscReason = "ping timeout"
	SockRServerDisconnect SockDiscReason = "server disconnect"
	SockRClientError      SockDiscReason = "client error"

	SockMJoinRoom  string = "JoinRoom"
	SockMEmitJRoom string = "EmitJRoom"
	SockMLeaveRoom string = "LeaveRoom"
	SockMEmitLRoom string = "EmitLRoom"

	SockObligField string = "Username"
)

type JoinRoomDto struct {
	Username string `form:"username"`
}

type JoinRoomRes struct {
	RoomName string `form:"roomName"`
}

type LeaveRooDto struct {
	Username string `form:"username"`
	RoomName string `form:"roomname"`
}
