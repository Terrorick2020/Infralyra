import type { Socket } from "bun";

interface IEnv {
  host: string;
  target: string;
  port: number;
  interval: number;
}

interface IPrinterData {
  type: "PRINTER_INIT" | "PRINTER_STATUS";
  status: "OK" | "CONNECTED" | "DISCONNECTED" | "READY" | "IDLE";
  target: IEnv["target"];
  time: string;
}

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;
  const port = Number(process.env.PORT);
  const interval = Number(process.env.INTERVAL_MS);

  if (!host || !target || Number.isNaN(port) || Number.isNaN(interval)) {
    throw new Error("🛑 Нет каких-то переменных среды для принтера!");
  }

  return { host, target, port, interval };
}

function generateData(options: Omit<IPrinterData, "time">): IPrinterData {
  const timestamp: string = new Date().toISOString();

  const data: IPrinterData = {
    type: options.type,
    status: options.status,
    target: options.target,
    time: timestamp,
  };

  return data;
}

function socketData<T = any>(socket: Socket<T>, data: Buffer): void {
  const timestamp = new Date().toISOString();

  console.log("📩 [Принтер получил сообщение]");
  console.log("⏱", timestamp);
  console.log("HEX:", data.toString("hex"));
  console.log("TEXT:", data.toString("utf-8"));
  console.log("RAW:", data);

  socket.write(
    generateData({
      type: "PRINTER_STATUS",
      status: "OK",
      target: "to you",
    }),
  );
}

function socketOpen<T = any>(socket: Socket<T>, target: IEnv["target"]): void {
  console.log("🔌 Подключение к серверу принтера установлено");
  socket.write(
    generateData({
      type: "PRINTER_STATUS",
      status: "CONNECTED",
      target,
    }),
  );
}

function socketClose<T = any>(socket: Socket<T>, target: IEnv["target"]): void {
  console.log("❌ Соединение сервера принтера закрыто");
  socket.write(
    generateData({
      type: "PRINTER_STATUS",
      status: "DISCONNECTED",
      target,
    }),
  );
  socket.end();
}

function socketError<T = any>(socket: Socket<T>, error: Error): void {
  console.log("💥 Ошибка сокета принтера:", error);
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

  const server: Bun.TCPSocket = await Bun.connect({
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

  server.write(
    generateData({
      type: "PRINTER_INIT",
      status: "READY",
      target: env.target,
    }),
  );

  setInterval((): void => {
    server.write(
      generateData({
        type: "PRINTER_STATUS",
        status: "IDLE",
        target: env.target,
      }),
    );
  }, env.interval);
}

serverRun()
  .then((): void => {
    console.info("🚀 Сервер имитации принтера запущен!");
  })
  .catch((error: unknown): void => {
    console.error("💥 Сервер имитации принтера завершился с ошибкой:", error);
    process.exit(1);
  });
