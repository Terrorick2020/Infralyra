// src/shared/config/socket.ts
import { io, Socket } from 'socket.io-client';
import { API_HOSTNAME } from '.';

export const socketConfig = {
  url: `http://${API_HOSTNAME}/socket-io`,
  options: {
    transports: ['websocket'] as const,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 10000,
    autoConnect: true,
  }
};
