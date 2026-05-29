import { io, Socket } from "socket.io-client";
import type { ManagerOptions, SocketOptions } from "socket.io-client";
import { API_HOSTNAME } from ".";
import type { ClientToServerEvents, ServerToClientEvents } from ".";

export const createSocket = (
  namespace: string,
): Socket<ServerToClientEvents, ClientToServerEvents> =>
  io(`http://${API_HOSTNAME?.replace("/api", "")}/socket.io${namespace}`, {
    transports: ["websocket", "polling"],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 1000,
    autoConnect: true,
    forceNew: false,
  });

// export const SOCKET_OPTIONS: Partial<ManagerOptions & SocketOptions> = {
//   path: "/socket.io",
//   transports: ["websocket"],
//   reconnection: true,
//   reconnectionAttempts: 5,
//   reconnectionDelay: 1000,
//   timeout: 10000,
//   autoConnect: false,
//   forceNew: false,
// };

// export const SOCKET_CONFIG = {
//   url: `http://${API_HOSTNAME?.replace("api", "").replace("/", "")}`,
//   namespace: "/sniff",
//   options: SOCKET_OPTIONS,
// };

// console.log(SOCKET_CONFIG)

// let _socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;

// export const createSocket = (
//   token?: string,
//   username?: string,
// ): Socket<ServerToClientEvents, ClientToServerEvents> => {
//   return io(`${SOCKET_CONFIG.url}${SOCKET_CONFIG.namespace}`, {
//     ...SOCKET_CONFIG.options,
//     auth: token ? { token, username } : undefined,
//     query: token ? { token, username } : undefined,
//   });
// };

// export const getSocket = (token?: string, username?: string) => {
//   if (!_socket || !_socket.connected) {
//     _socket = createSocket(token, username);
//   }
//   return _socket;
// };

// export const disconnectSocket = () => {
//   if (_socket) {
//     _socket.disconnect();
//     _socket = null;
//   }
// };

// export const emitJoinRoom = (
//   socket: Socket<ServerToClientEvents, ClientToServerEvents>,
//   username: string,
//   roomName: string,
// ) => {
//   if (!socket.connected) {
//     console.warn("⚠️ Socket not connected");
//     return false;
//   }

//   socket.emit("JoinRoom", { username, roomName });
//   return true;
// };

// export const emitGetTraffic = (
//   socket: Socket<ServerToClientEvents, ClientToServerEvents>,
//   username: string,
//   roomName: string,
//   inface: string,
//   payloadLimit?: number,
// ) => {
//   if (!socket.connected) {
//     console.warn("⚠️ Socket not connected");
//     return false;
//   }

//   socket.emit("SockMGetTraffic", {
//     username,
//     roomName,
//     inface,
//     payloadLimit: payloadLimit ?? 1500,
//   });
//   return true;
// };

// export const emitLeaveRoom = (
//   socket: Socket<ServerToClientEvents, ClientToServerEvents>,
//   username: string,
//   roomName: string,
// ) => {
//   if (!socket.connected) {
//     console.warn("⚠️ Socket not connected");
//     return false;
//   }

//   socket.emit("LeaveRoom", { username, roomName });
//   return true;
// };
