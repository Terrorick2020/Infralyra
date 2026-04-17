import { readFileSync } from "fs";
import type { IEnv, ICfg } from "./types";
import YAML from "js-yaml";

let PER_ENV: IEnv | undefined = undefined;
let PER_CFG: ICfg | undefined = undefined;

function loadEnv(): IEnv {
  if (!PER_ENV) {
    const hostname = process.env.HOSTNAME;
    const target_hostname = process.env.TARGET_HOSTNAME;
    const mqttPort = Number(process.env.MQTT_PORT);
    const httpPort = Number(process.env.HTTP_PORT);
    const udpPort = Number(process.env.UDP_PORT);
    const telemetryPort = Number(process.env.TELEMETRY_PORT);
    const target_port = Number(process.env.TARGET_PORT);

    if (
      !hostname ||
      !target_hostname ||
      Number.isNaN(mqttPort) ||
      Number.isNaN(httpPort) ||
      Number.isNaN(udpPort) ||
      Number.isNaN(target_port)
    ) {
      throw new Error(
        "🛑 Нет каких-то переменных среды для iot (интеллектуальный датчик передачи сигнала)",
      );
    }

    PER_ENV = {
      hostname,
      mqttPort,
      httpPort,
      udpPort,
      telemetryPort,
      target_hostname,
      target_port,
    };
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

async function loadTLSFiles() {
  const cert = Bun.file("./ssl/cert.pem");
  const key = Bun.file("./ssl/key.pem");

  if (!(await cert.exists())) {
    throw new Error("Файл cert.pem не найден");
  }

  if (!(await key.exists())) {
    throw new Error("Файл key.pem не найден");
  }

  if (cert.size === 0) {
    throw new Error("Файл cert.pem пустой");
  }

  if (key.size === 0) {
    throw new Error("Файл key.pem пустой");
  }

  return { cert, key };
}

function generateTelemetry() {
  const cfg = loadCfg();

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomFloat = (min: number, max: number): number => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  return JSON.stringify({
    device_id: cfg.device.device_id,
    timestamp: new Date().toISOString(),
    telemetry: {
      signal_strength_dbm: getRandomInt(-75, -45),
      noise_level_dbm: getRandomInt(-100, -85),
      snr_db: getRandomInt(20, 40),
      latency_ms: getRandomInt(10, 50),
      packet_loss_percent: getRandomFloat(0, 0.5),
      bandwidth_usage_mbps: getRandomInt(1, 20),
      cpu_usage_percent: getRandomInt(5, 35),
      memory_usage_percent: getRandomInt(20, 60),
      temperature_celsius: getRandomFloat(30, 55),
      battery_level_percent: getRandomInt(40, 100),
      voltage_v: getRandomFloat(3.6, 4.2),
      status: "active",
      error_count: getRandomInt(0, 3),
    },
  });
}

async function mqttService() {
  const serviceName = "MQTT";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.mqttPort,
    socket: {
      open: (socket) => {
        console.log(
          `🔌 Подключение к серверу iot (интеллектуальный датчик передачи сигнала) по ${serviceName}  установлено`,
        );
        socket.write(Buffer.from([0x20, 0x02, 0x00, 0x00]));
      },
      data: (socket, buffer) => {
        const timestamp = new Date().toISOString();

        console.log(
          `📲 Iot (интеллектуальный датчик передачи сигнала) получил сообщение по ${serviceName}]`,
        );
        console.log("⏱", timestamp);
        console.log("HEX:", buffer.toString("hex"));
        console.log("TEXT:", buffer.toString("utf-8"));
        console.log("RAW:", buffer);

        socket.write(Buffer.from(generateTelemetry()));
      },
      close: (socket) => {
        console.log(
          `❌ Соединение со смартфоном (android) по ${serviceName} закрыто`,
        );
        socket.write("Session closed!");
        socket.end();
      },
      error: (socket, error) => {
        console.log(
          `💥 Произошла ошибка соединения сокета iot (интеллектуальный датчик передачи сигнала) по ${serviceName}`,
          error,
        );
        socket.end();
      },
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации iot (интеллектуальный датчик передачи сигнала) запущен...`,
  );
}

async function httpService() {
  const serviceName = "HTTP";
  const env = loadEnv();
  const cfg = loadCfg();

  Bun.serve({
    hostname: env.hostname,
    port: env.httpPort,
    fetch: async (req: Request) => {
      const url = new URL(req.url);

      if(url.pathname.includes("sys")) {
        return Response.json({
          device: cfg.device,
          network: cfg.network,
          status: "online",
          firmware: "1.4.2",
          uptime: process.uptime(),
        });
      }

      return new Response("IoT Sensor Endpoint");
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации iot (интеллектуальный датчик передачи сигнала) запущен...`,
  );
}

async function udpHeartbeat() {
  const serviceName = "UDP";
  const env = loadEnv();
  const cfg = loadCfg();

  const socket = await Bun.udpSocket({
    hostname: env.hostname,
    port: env.udpPort,
  });

  setInterval(() => {
    try {
      const payload = Buffer.from(JSON.stringify(cfg.network));
      socket.send(payload, env.target_port, env.target_hostname);
      console.log(`!!!! ${serviceName} сообщение отправлено`);
    } catch {
      console.warn(`⚠️ Сообщение ${serviceName} не отправлено`)
    }
  }, cfg.behavior.jitter_ms);

  console.info(
    `🟢 ${serviceName} сервис имитации iot (интеллектуальный датчик передачи сигнала) запущен...`,
  );
}

async function startTelemetryPush() {
  const cfg = loadCfg();
  const env = loadEnv();

  setInterval(async () => {
    try {
      await fetch(`http://${env.target_hostname}:${env.target_port}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: generateTelemetry(),
      });

      console.log("📡 Телеметрия отправлена");
    } catch {
      console.warn("⚠️ Ошибка отправки телеметрии");
    }
  }, cfg.behavior.interval_ms);
}

async function serverRun() {
  Promise.all([
    mqttService(),
    httpService(),
    udpHeartbeat(),
    startTelemetryPush(),
  ]);
}

serverRun()
  .then((): void => {
    console.info(
      "🚀 Сервер имитации iot (интеллектуальный датчик передачи сигнала) запущен!",
    );
  })
  .catch((error: unknown): void => {
    console.error(
      "💥 Сервер имитации iot (интеллектуальный датчик передачи сигнала) завершился с ошибкой:",
      error,
    );
    process.exit(1);
  });
