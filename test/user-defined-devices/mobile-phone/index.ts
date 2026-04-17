import { readFileSync } from "fs";
import type { IEnv, ICfg } from "./types";
import type { Socket, Server } from "bun";
import YAML from "js-yaml";

let PER_ENV: IEnv | undefined = undefined;
let PER_CFG: ICfg | undefined = undefined;

function loadEnv(): IEnv {
  if (!PER_ENV) {
    const hostname = process.env.HOSTNAME;
    const target_hostname = process.env.TARGET_HOSTNAME;
    const adpPort = Number(process.env.ADB_PORT);
    const httpPort = Number(process.env.HTTP_PORT);
    const binderPort = Number(process.env.BINDER_PORT);
    const httpsPort = Number(process.env.HTTPS_PORT);
    const telephonyPort = Number(process.env.TELEPHONY_PORT);
    const target_port = Number(process.env.TARGET_PORT);

    if (
      !hostname ||
      !target_hostname ||
      Number.isNaN(adpPort) ||
      Number.isNaN(httpPort) ||
      Number.isNaN(binderPort) ||
      Number.isNaN(telephonyPort) ||
      Number.isNaN(httpsPort) ||
      Number.isNaN(target_port)
    ) {
      throw new Error(
        "🛑 Нет каких-то переменных среды для смартфона (android)!",
      );
    }

    PER_ENV = {
      hostname,
      adpPort,
      httpPort,
      binderPort,
      httpsPort,
      telephonyPort,
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

async function sockOpen<T>(
  socket: Socket,
  service: string,
  banner: T,
): Promise<void> {
  console.log(
    `🔌 Подключение к серверу смартфона (android) по ${service}  установлено`,
  );
  socket.write(banner);
}

async function sockData<T>(
  socket: Socket,
  buffer: Buffer,
  service: string,
  text: T,
): Promise<void> {
  const timestamp = new Date().toISOString();

  console.log(`📲 Смартфон (android) получил сообщение по ${service}]`);
  console.log("⏱", timestamp);
  console.log("HEX:", buffer.toString("hex"));
  console.log("TEXT:", buffer.toString("utf-8"));
  console.log("RAW:", buffer);

  socket.write(`TIME:${timestamp} MSG:${text}`);
}

async function sockClose(
  socket: Socket,
  service: string,
  text: string,
): Promise<void> {
  console.log(`❌ Соединение со смартфоном (android) по ${service} закрыто`);
  socket.write(text);
  socket.end();
}

async function sockError(
  socket: Socket,
  service: string,
  error: Error,
): Promise<void> {
  console.log(
    `💥 Произошла ошибка соединения сокета смартфона (android) по ${service}`,
    error,
  );
  socket.end();
}

async function hyperRes<T = undefined>(
  req: Request,
  server: Server<T>,
  headline: string,
  subHeadline: string,
  paragraph: string,
): Promise<Response> {
  const url = new URL(req.url);
  const cfg = loadCfg();

  console.log(
    `📲 Смартфон (android) получил сообщение HTTP от: ${server.requestIP}`,
  );
  console.log(`Cообщение: ${req}`);

  const headers = {
    "Content-Type": "text/html",
    Server: cfg.network.server,
    "X-Powered-By": cfg.network.powered,
    "X-Hostname": cfg.device.hostname,
  };

  if (url.pathname.includes("/sys")) {
    return new Response(
      {
        hostname: cfg.device.hostname,
        os: cfg.os,
        hardware: cfg.hardware,
        performance: cfg.performance,
        power: cfg.power,
        security: cfg.security,
      },
      { headers },
    );
  }

  const headLbl = "{{HEADLINE}}";
  const subHeadLbl = "{{SUBHEADLINE}}";
  const paraLbl = "{{PARAGRAPH}}";
  const htmlTmpl = await Bun.file("./index.html").text();
  const html = htmlTmpl
    .replace(headLbl, headline)
    .replace(subHeadLbl, subHeadline)
    .replace(paraLbl, paragraph);

  return new Response(html, { headers });
}

async function startOutboundTraffic(
  protocol: "HTTP" | "HTTPS",
  target: string,
  interval: number,
) {
  const cfg = loadCfg();

  setInterval(async () => {
    try {
      await fetch(`${protocol}://${target}`, {
        headers: {
          "User-Agent": "Ubuntu/22.04-systemd",
          Server: cfg.network.server,
          "X-Powered-By": cfg.network.powered,
          "X-Hostname": cfg.device.hostname,
        },
      });

      console.log(`📡 ${protocol} отправилось сообщение -> ${target}`);
    } catch {
      console.log(`⚠️ ${protocol} сообщение не отправлено -> ${target}`);
    }
  }, interval);
}

async function adbService() {
  const serviceName = "ADP";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.adpPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, serviceName, "Android Debug Bridge v1.0\r\n"),
      data: (sock, buffer) =>
        sockData(
          sock,
          buffer,
          serviceName,
          `Android ${serviceName} request processed`,
        ),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации смартфона (android) запущен...`,
  );
}

async function binderService() {
  const serviceName = "Binder";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.binderPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, serviceName, `${serviceName} driver v4.0\r\n`),
      data: (sock, buffer) =>
        sockData(
          sock,
          buffer,
          serviceName,
          `Android ${serviceName} request processed`,
        ),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации смартфона (android) запущен...`,
  );
}

async function telephonyService() {
  const serviceName = "Telephony";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.telephonyPort,
    socket: {
      open: (sock) =>
        sockOpen(
          sock,
          serviceName,
          `${serviceName} (RIL) Android Radio Interface Layer\r\n`,
        ),
      data: (sock, buffer) =>
        sockData(
          sock,
          buffer,
          serviceName,
          `Android ${serviceName} request processed`,
        ),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации смартфона (android) запущен...`,
  );
}

async function httpService() {
  const serviceName = "HTTP";
  const env = loadEnv();
  const cfg = loadCfg();

  Bun.serve({
    hostname: env.hostname,
    port: env.httpPort,
    fetch: (req, server) =>
      hyperRes(
        req,
        server,
        "Android System WebView",
        `${serviceName} protocol`,
        "Android application container",
      ),
  });

  startOutboundTraffic(
    serviceName,
    `${env.target_hostname}:${env.target_port}`,
    cfg.behavior.interval_ms,
  );

  console.info(
    `🟢 ${serviceName} сервис имитации смартфона (android) запущен...`,
  );
}

async function httpsService() {
  const serviceName = "HTTPS";
  const env = loadEnv();
  const cfg = loadCfg();
  const tlsFiles = await loadTLSFiles();

  Bun.serve({
    hostname: env.hostname,
    port: env.httpsPort,
    tls: tlsFiles,
    fetch: (req, server) =>
      hyperRes(
        req,
        server,
        "Android System WebView",
        `${serviceName} protocol`,
        "Android application container",
      ),
  });

  startOutboundTraffic(
    serviceName,
    `${env.target_hostname}:${env.target_port}`,
    cfg.behavior.interval_ms,
  );

  console.info(
    `🟢 ${serviceName} сервис имитации смартфона (android) запущен...`,
  );
}

async function serverRun(): Promise<void> {
  await Promise.all([
    adbService(),
    binderService(),
    telephonyService(),
    httpService(),
    httpsService(),
  ]);
}

serverRun()
  .then((): void => {
    console.info("🚀 Сервер имитации смартфона (android) запущен!");
  })
  .catch((error: unknown): void => {
    console.error(
      "💥 Сервер имитации смартфона (android) завершился с ошибкой:",
      error,
    );
    process.exit(1);
  });
