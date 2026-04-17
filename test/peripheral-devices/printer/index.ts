import { readFileSync } from "fs";
import type { IEnv, ICfg, TPerDStatus, IPerData, TPerDType } from "./types";
import type { Socket } from "bun";
import YAML from "js-yaml";

let PER_ENV: IEnv | undefined = undefined;
let PER_CFG: ICfg | undefined = undefined;

function loadEnv(): IEnv {
  if (!PER_ENV) {
    const hostname = process.env.HOSTNAME;
    const port = Number(process.env.PORT);
    const target_hostname = process.env.TARGET_HOSTNAME;
    const target_port = Number(process.env.TARGET_PORT);

    if (
      !hostname ||
      !target_hostname ||
      Number.isNaN(port) ||
      Number.isNaN(target_port)
    ) {
      throw new Error("🛑 Нет каких-то переменных среды для принтера!");
    }

    PER_ENV = { hostname, port, target_hostname, target_port };
  }

  return PER_ENV;
}

function loadCfg(): ICfg {
  if (!PER_CFG) {
    const raw = readFileSync("config.yaml", "utf-8");
    PER_CFG = YAML.load(raw) as ICfg;
  }

  return PER_CFG;
}

function generateData(options: Pick<IPerData, "type" | "status">): IPerData {
  const timestamp: string = new Date().toISOString();
  const env = loadEnv();
  const cfg = loadCfg();

  const data: IPerData = {
    type: options.type,
    status: options.status,
    target: `${env.target_hostname}:${env.target_port}`,
    device_type: cfg.device.device_type,
    time: timestamp,
  };

  return data;
}

function sockOpen<T = any>(socket: Socket<T>): void {
  console.log("🔌 Подключение к серверу принтера установлено");
  socket.write(
    generateData({
      type: "STATUS",
      status: "CONNECTED",
    }),
  );
}

function sockData<T = any>(socket: Socket<T>, data: Buffer): void {
  const timestamp = new Date().toISOString();

  console.log("📩 [Принтер получил сообщение]");
  console.log("⏱", timestamp);
  console.log("HEX:", data.toString("hex"));
  console.log("TEXT:", data.toString("utf-8"));
  console.log("RAW:", data);

  socket.write(
    generateData({
      type: "STATUS",
      status: "OK",
    }),
  );
}

function sockClose<T = any>(socket: Socket<T>): void {
  console.log("❌ Соединение сервера принтера закрыто");
  socket.write(
    generateData({
      type: "STATUS",
      status: "DISCONNECTED",
    }),
  );
  socket.end();
}

function sockError<T = any>(socket: Socket<T>, error: Error): void {
  console.log("💥 Ошибка сокета принтера:", error);
  socket.end();
}

async function socketRun(sockIntrvl: NodeJS.Timeout): Promise<void> {
  const env = loadEnv();
  const cfg = loadCfg();

  try {
    const socket = await Bun.connect({
      hostname: env.target_hostname,
      port: env.target_port,
      socket: {
        open: (sock) => sockOpen(sock),
        data: (sock, data) => sockData(sock, data),
        close: (sock) => sockClose(sock),
        error: (sock, err) => sockError(sock, err),
      },
    });

    socket.write(generateData({
      type: "INIT",
      status: "READY"
    }));

    const sendPackets = async (): Promise<void> => {
      const status: TPerDStatus =
        Math.random() < cfg.behavior.error_chance ? "ERROR" : "IDLE";
      const type: TPerDType = status === "ERROR"
        ? "STATUS"
        : "DATA";
      
      const data = generateData({type, status});

      const packet = {
        device_id: cfg.device.device_id,
        device_type: cfg.device.device_type,
        mac: cfg.device.mac,
        firmware: cfg.device.firmware,
        data,
      };

      socket.write(JSON.stringify(packet));
    };

    sockIntrvl.close();
    setInterval(() => sendPackets(), cfg.behavior.interval_ms);
    console.info(
      "✅  Подключение принтера к центральному серверу прошло успешно",
    );
  } catch (err) {
    sockIntrvl.refresh();
    console.warn("⚠️  Не удалось подключиться принтером к центральному серверу");
  }
}

async function serverRun(): Promise<void> {
  const env = loadEnv();
  const cfg = loadCfg();

  await Bun.listen({
    hostname: env.hostname,
    port: env.port,
    socket: {
      open: (sock) => sockOpen(sock),
      data: (sock, data) => sockData(sock, data),
      close: (sock) => sockClose(sock),
      error: (sock, err) => sockError(sock, err),
    },
  });

  const sockIntrvl: NodeJS.Timeout = setInterval(
    () => socketRun(sockIntrvl),
    cfg.behavior.jitter_ms,
  );
}

serverRun()
  .then((): void => {
    console.info("🚀 Сервер имитации принтера запущен!");
  })
  .catch((error: unknown): void => {
    console.error("💥 Сервер имитации принтера завершился с ошибкой:", error);
    process.exit(1);
  });
