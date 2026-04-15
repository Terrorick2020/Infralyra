import type { Socket } from "bun";

interface IEnv {
  host: string;
  target: string;
  port: number;
  interval: number;
}

interface IScannerStatus {
  type: "SCANNER_INIT" | "SCANNER_STATUS";
  status: "OK" | "CONNECTED" | "DISCONNECTED" | "READY" | "SCANNING" | "IDLE";
  target: string;
  time: string;
}

interface IScannerChunk {
  type: "SCANNER_DATA";
  sessionId: string;
  chunkIndex: number;
  lastChunk: boolean;
  data: Buffer;
  time: string;
}

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;
  const port = Number(process.env.PORT);
  const interval = Number(process.env.INTERVAL_MS);

  if (!host || !target || Number.isNaN(port) || Number.isNaN(interval)) {
    throw new Error("🛑 Нет каких-то переменных среды для сканнера!");
  }

  return { host, target, port, interval };
}

function timestamp(): string {
  return new Date().toISOString();
}

function createStatus(
  status: IScannerStatus["status"],
  target: string,
  type: IScannerStatus["type"] = "SCANNER_STATUS",
): IScannerStatus {
  return {
    type,
    status,
    target,
    time: timestamp(),
  };
}

function createChunk(
  sessionId: string,
  chunkIndex: number,
  lastChunk: boolean,
  data: Buffer,
): IScannerChunk {
  return {
    type: "SCANNER_DATA",
    sessionId,
    chunkIndex,
    lastChunk,
    data,
    time: timestamp(),
  };
}

function socketData<T = any>(socket: Socket<T>, data: Buffer): void {
  console.log("📥 [Сканнер получил сообщение]");
  console.log("⏱", timestamp());
  console.log("HEX:", data.toString("hex"));
  console.log("TEXT:", data.toString("utf-8"));

  socket.write(createStatus("SCANNING", "scanner-device"));

  const sessionId = crypto.randomUUID();
  const fakeImage = Buffer.from("FAKE_IMAGE_BINARY_DATA____SCANNED_PAGE");

  const chunkSize = 10;
  let index = 0;

  for (let offset = 0; offset < fakeImage.length; offset += chunkSize) {
    const chunk = fakeImage.subarray(offset, offset + chunkSize);

    socket.write(
      createChunk(
        sessionId,
        index++,
        offset + chunkSize >= fakeImage.length,
        chunk,
      ),
    );
  }

  socket.write(createStatus("IDLE", "scanner-device"));
}

function socketOpen<T = any>(socket: Socket<T>, target: string): void {
  console.log("🔌 Подключение к серверу сканнера установлено");
  socket.write(createStatus("CONNECTED", target, "SCANNER_INIT"));
  socket.write(createStatus("READY", target));
}

function socketClose<T = any>(socket: Socket<T>, target: string): void {
  console.log("❌ Соединение сервера сканнера закрыто");
  socket.write(createStatus("DISCONNECTED", target, "SCANNER_STATUS"));
  socket.end();
}

function socketError<T = any>(socket: Socket<T>, error: Error): void {
  console.error("💥 Ошибка сокета сканнера:", error);
  socket.end();
}

async function serverRun(): Promise<void> {
  const env = loadEnv();

  Bun.listen({
    hostname: env.host,
    port: env.port,
    socket: {
      data(socket, data) {
        socketData(socket, data);
      },
      open(socket) {
        socketOpen(socket, env.target);
      },
      close(socket) {
        socketClose(socket, env.target);
      },
      error(socket, error) {
        socketError(socket, error);
      },
    },
  });

  const server = await Bun.connect({
    hostname: env.host,
    port: env.port,
    socket: {
      data(socket, data) {
        socketData(socket, data);
      },
      open(socket) {
        socketOpen(socket, env.target);
      },
      close(socket) {
        socketClose(socket, env.target);
      },
      error(socket, error) {
        socketError(socket, error);
      },
    },
  });

  server.write(createStatus("READY", env.target, "SCANNER_INIT"));

  setInterval(() => {
    server.write(createStatus("IDLE", env.target));
  }, env.interval);
}

serverRun()
  .then((): void => {
    console.info("🚀 Сервер имитации сканнера запущен!");
  })
  .catch((error: unknown): void => {
    console.error("💥 Сервер имитации сканнера завершился с ошибкой:", error);
    process.exit(1);
  });
