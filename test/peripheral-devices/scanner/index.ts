import type {
  IEnv,
  ICfg,
  TPerDStatus,
  IPerData,
  TPerDType,
  IPerChunk,
} from "./types";

import { readFileSync } from "fs";
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

function generateChunk(
  sessionId: string,
  chunkIndex: number,
  lastChunk: boolean,
  buffer: Buffer,
): IPerChunk {
  const type: TPerDType = "DATA";
  const timestamp = new Date().toISOString();
  const data = generateData({
    type,
    status: "OK",
  });

  return { sessionId, chunkIndex, lastChunk, buffer, timestamp, data };
}

function sockOpen<T = any>(socket: Socket<T>): void {
  console.log("🔌 Подключение к серверу сканнера установлено");
  socket.write(generateData({type: "STATUS", status: "CONNECTED"}));
  socket.write(generateData({type: "DATA", status: "READY"}));
}


function sockData<T = any>(socket: Socket<T>, data: Buffer): void {
  const timestamp = new Date().toISOString();

  console.log("📥 [Сканнер получил сообщение]");
  console.log("⏱", timestamp);
  console.log("HEX:", data.toString("hex"));
  console.log("TEXT:", data.toString("utf-8"));

  socket.write(generateData({type: "DATA", status: "OK"}))

  const sessionId = crypto.randomUUID();
  const fakeImage = Buffer.from("FAKE_IMAGE_BINARY_DATA____SCANNED_PAGE");

  const chunkSize = 10;
  let index = 0;

  for (let offset = 0; offset < fakeImage.length; offset += chunkSize) {
    const chunk = fakeImage.subarray(offset, offset + chunkSize);

    socket.write(
      generateChunk(
        sessionId,
        index++,
        offset + chunkSize >= fakeImage.length,
        chunk,
      ),
    );
  }

  socket.write(generateData({type: "STATUS", status: "IDLE"}))
}

function sockClose<T = any>(socket: Socket<T>): void {
  console.log("❌ Соединение сервера сканнера закрыто");
  socket.write(generateData({type: "STATUS", status: "DISCONNECTED"}));
  socket.end();
}

function sockError<T = any>(socket: Socket<T>, error: Error): void {
  console.error("💥 Ошибка сокета сканнера:", error);
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

    socket.write(
      generateData({
        type: "INIT",
        status: "READY",
      }),
    );

    const sendPackets = async (): Promise<void> => {
      const type: TPerDType = "STATUS";
      const status: TPerDStatus =
        Math.random() < cfg.behavior.error_chance ? "ERROR" : "IDLE";

      const data = generateData({ type, status });

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
      "✅  Подключение сканнера к центральному серверу прошло успешно",
    );
  } catch (err) {
    sockIntrvl.refresh();
    console.warn("⚠️  Не удалось подключиться сканнеру к центральному серверу");
  }
}

async function serverRun(): Promise<void> {
  const env = loadEnv();
  const cfg = loadCfg();

  Bun.listen({
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
    console.info("🚀 Сервер имитации сканнера запущен!");
  })
  .catch((error: unknown): void => {
    console.error("💥 Сервер имитации сканнера завершился с ошибкой:", error);
    process.exit(1);
  });
