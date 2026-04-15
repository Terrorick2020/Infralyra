import { serve, type Server, type Socket } from "bun";

interface IEnv {
  host: string;
  target: string;

  adbPort: number;
  httpPort: number;
  httpsPort: number;

  binderPort: number;
  telephonyPort: number;
  wifiPort: number;

  pushPort: number;
  sensorPort: number;

  interval: number;
}

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;

  const adbPort = Number(process.env.ADB_PORT);
  const httpPort = Number(process.env.HTTP_PORT);
  const httpsPort = Number(process.env.HTTPS_PORT);

  const binderPort = Number(process.env.BINDER_PORT);
  const telephonyPort = Number(process.env.TELEPHONY_PORT);
  const wifiPort = Number(process.env.WIFI_PORT);

  const pushPort = Number(process.env.PUSH_PORT);
  const sensorPort = Number(process.env.SENSOR_PORT);

  const interval = Number(process.env.INTERVAL_MS);

  if (
    !host ||
    !target ||
    Number.isNaN(adbPort) ||
    Number.isNaN(httpPort) ||
    Number.isNaN(httpsPort) ||
    Number.isNaN(binderPort) ||
    Number.isNaN(telephonyPort) ||
    Number.isNaN(wifiPort) ||
    Number.isNaN(pushPort) ||
    Number.isNaN(sensorPort) ||
    Number.isNaN(interval)
  ) {
    throw new Error("Missing Android environment variables");
  }

  return {
    host,
    target,
    adbPort,
    httpPort,
    httpsPort,
    binderPort,
    telephonyPort,
    wifiPort,
    pushPort,
    sensorPort,
    interval,
  };
}

/* ---------------- Common socket utils ---------------- */

async function open(socket: Socket, svc: string, banner: any) {
  console.log(`📲 Android ${svc} connection opened`);
  socket.write(banner);
}

async function data(socket: Socket, dataBuf: Buffer, svc: string, msg: string) {
  const ts = new Date().toISOString();

  console.log(`📩 [Android ${svc}] packet`);
  console.log("⏱", ts);
  console.log("HEX:", dataBuf.toString("hex"));
  console.log("TEXT:", dataBuf.toString("utf-8"));

  socket.write(`[${ts}] ${msg}`);
}

async function close(socket: Socket, svc: string, msg: string) {
  console.log(`❌ Android ${svc} closed`);
  socket.write(msg);
  socket.end();
}

async function error(socket: Socket, svc: string, err: Error) {
  console.log(`💥 Android ${svc} error`, err);
  socket.end();
}

/* ---------------- HTTP UI (Android WebView) ---------------- */

async function androidHtml<T = any>(
  _req: Request,
  _server: Server<T>,
  title: string,
  subtitle: string,
  body: string,
) {
  const tpl = await Bun.file("./index.html").text();

  return new Response(
    tpl
      .replace("{{HEADLINE}}", title)
      .replace("{{SUBHEADLINE}}", subtitle)
      .replace("{{PARAGRAPH}}", body),
    { headers: { "Content-Type": "text/html" } },
  );
}

/* ---------------- Outbound traffic (Google sync simulation) ---------------- */

function syncTraffic(target: string, interval: number) {
  setInterval(async () => {
    try {
      await fetch(`https://${target}`, {
        headers: {
          "User-Agent": "Android/14 Dalvik/2.1.0",
        },
      });

      console.info(`📡 Android sync -> ${target}`);
    } catch {
      console.info(`⚠️ Android sync failed -> ${target}`);
    }
  }, interval);
}

/* ---------------- ADB ---------------- */

function adbService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) => open(s, "ADB", "Android Debug Bridge v1.0\r\n"),
      data: (s, d) => data(s, d, "ADB", "ADB command executed"),
      close: (s) => close(s, "ADB", "ADB session closed"),
      error: (s, e) => error(s, "ADB", e),
    },
  });

  console.info("🟢 ADB service started");
}

/* ---------------- Binder (Android IPC core) ---------------- */

function binderService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) => open(s, "Binder", "binder driver v4.0\r\n"),
      data: (s, d) => data(s, d, "Binder", "IPC transaction processed"),
      close: (s) => close(s, "Binder", "Binder session closed"),
      error: (s, e) => error(s, "Binder", e),
    },
  });

  console.info("🟢 Binder IPC started");
}

/* ---------------- Telephony ---------------- */

function telephonyService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        open(s, "Telephony", "RIL Android Radio Interface Layer\r\n"),
      data: (s, d) =>
        data(s, d, "Telephony", "Call/SMS event processed"),
      close: (s) => close(s, "Telephony", "Radio session closed"),
      error: (s, e) => error(s, "Telephony", e),
    },
  });

  console.info("🟢 Telephony started");
}

/* ---------------- Wi-Fi subsystem ---------------- */

function wifiService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        open(s, "WiFi", "wpa_supplicant Android v3.2\r\n"),
      data: (s, d) =>
        data(s, d, "WiFi", "Wi-Fi frame processed"),
      close: (s) => close(s, "WiFi", "Wi-Fi disconnected"),
      error: (s, e) => error(s, "WiFi", e),
    },
  });

  console.info("🟢 Wi-Fi started");
}

/* ---------------- Push notifications ---------------- */

function pushService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        open(s, "Push", "FCM connection established\r\n"),
      data: (s, d) =>
        data(s, d, "Push", "Push notification delivered"),
      close: (s) => close(s, "Push", "FCM disconnected"),
      error: (s, e) => error(s, "Push", e),
    },
  });

  console.info("🟢 Push service started");
}

/* ---------------- Sensors ---------------- */

function sensorService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        open(s, "Sensors", "Sensor HAL v2.1\r\n"),
      data: (s, d) =>
        data(s, d, "Sensors", "Sensor data streamed"),
      close: (s) => close(s, "Sensors", "Sensors offline"),
      error: (s, e) => error(s, "Sensors", e),
    },
  });

  console.info("🟢 Sensors started");
}

/* ---------------- HTTP ---------------- */

function httpService(host: string, port: number, target: string, interval: number) {
  serve({
    hostname: host,
    port,
    fetch: (req, server) =>
      androidHtml(
        req,
        server,
        "Android System WebView",
        "Chrome/WebKit runtime",
        "Android application container",
      ),
  });

  syncTraffic(target, interval);

  console.info("🟢 HTTP WebView started");
}

/* ---------------- HTTPS (Google stack simulation) ---------------- */

function httpsService(host: string, port: number, target: string, interval: number) {
  serve({
    hostname: host,
    port,
    fetch: (req, server) =>
      androidHtml(
        req,
        server,
        "Google Play Services",
        "Secure Android endpoint",
        "Account + sync service",
      ),
  });

  syncTraffic(target, interval);

  console.info("🟢 HTTPS Google stack started");
}

/* ---------------- Boot ---------------- */

async function run() {
  const env = loadEnv();

  adbService(env.host, env.adbPort);
  binderService(env.host, env.binderPort);
  telephonyService(env.host, env.telephonyPort);

  wifiService(env.host, env.wifiPort);
  pushService(env.host, env.pushPort);
  sensorService(env.host, env.sensorPort);

  httpService(env.host, env.httpPort, env.target, env.interval);
  httpsService(env.host, env.httpsPort, env.target, env.interval);
}

run()
  .then(() => console.log("🚀 Android simulator running"))
  .catch((e) => {
    console.error("💥 Crash:", e);
    process.exit(1);
  });
