import { serve } from "bun";

interface IEnv {
  host: string;
  mqttPort: number;
  httpPort: number;
  udpPort: number;
  target: string;
  interval: number;
  deviceId: string;
}

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;

  const mqttPort = Number(process.env.MQTT_PORT);
  const httpPort = Number(process.env.HTTP_PORT);
  const udpPort = Number(process.env.UDP_PORT);

  const interval = Number(process.env.INTERVAL_MS);
  const deviceId = process.env.DEVICE_ID;

  if (
    !host ||
    !target ||
    !deviceId ||
    Number.isNaN(mqttPort) ||
    Number.isNaN(httpPort) ||
    Number.isNaN(udpPort) ||
    Number.isNaN(interval)
  ) {
    throw new Error("🛑 Нет каких-то переменных среды для IoT устройства!");
  }

  return {
    host,
    mqttPort,
    httpPort,
    udpPort,
    target,
    interval,
    deviceId,
  };
}

function generateTelemetry(deviceId: string) {
  return JSON.stringify({
    deviceId,
    firmware: "iot-sensor-fw-1.4.2",
    rssi: Math.floor(-30 - Math.random() * 60),
    battery: Math.floor(50 + Math.random() * 50),
    signalStrength: Math.random(),
    timestamp: new Date().toISOString(),
  });
}

async function mqttService(hostname: string, port: number, deviceId: string) {
  const serviceName = "MQTT";

  Bun.listen({
    hostname,
    port,

    socket: {
      open: (socket) => {
        console.log("📡 MQTT connection opened");

        socket.write(
          Buffer.from([
            0x20,
            0x02,
            0x00,
            0x00, // CONNACK
          ]),
        );
      },

      data: (socket, data) => {
        console.log("MQTT DATA:", data.toString("hex"));

        const telemetry = generateTelemetry(deviceId);

        socket.write(Buffer.from(telemetry));
      },

      close: () => {
        console.log("MQTT closed");
      },
    },
  });

  console.info("🟢 MQTT IoT сервис запущен...");
}

async function httpService(hostname: string, port: number, deviceId: string) {
  serve({
    hostname,
    port,

    fetch: async (req: Request) => {
      const url = new URL(req.url);

      if (url.pathname === "/status") {
        return Response.json({
          deviceId,
          status: "online",
          firmware: "1.4.2",
          uptime: process.uptime(),
        });
      }

      if (url.pathname === "/metrics") {
        return Response.json(JSON.parse(generateTelemetry(deviceId)));
      }

      return new Response("IoT Sensor Endpoint");
    },
  });

  console.info("🟢 HTTP IoT сервис запущен...");
}

async function udpHeartbeat(hostname: string, port: number, deviceId: string) {
  const socket = Bun.udpSocket({
    hostname,
    port,

    socket: {
    },
  });

  setInterval(() => {
    const payload = Buffer.from(generateTelemetry(deviceId));
  }, 5000);

  console.info("🟢 UDP heartbeat активирован...");
}

async function startTelemetryPush(
  target: string,
  interval: number,
  deviceId: string,
) {
  setInterval(async () => {
    try {
      await fetch(`http://${target}/iot/data`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: generateTelemetry(deviceId),
      });

      console.log("📡 Telemetry pushed");
    } catch {
      console.log("⚠️ Telemetry push failed");
    }
  }, interval);
}

async function serverRun() {
  const env = loadEnv();

  mqttService(env.host, env.mqttPort, env.deviceId);

  httpService(env.host, env.httpPort, env.deviceId);

  udpHeartbeat(env.host, env.udpPort, env.deviceId);

  startTelemetryPush(env.target, env.interval, env.deviceId);
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
