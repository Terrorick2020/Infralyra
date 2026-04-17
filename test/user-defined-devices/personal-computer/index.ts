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
    const sshPort = Number(process.env.SSH_PORT);
    const httpPort = Number(process.env.HTTP_PORT);
    const rpcPort = Number(process.env.RPC_PORT);
    const httpsPort = Number(process.env.HTTPS_PORT);
    const smbPort = Number(process.env.SMB_PORT);
    const nfsPort = Number(process.env.NFS_PORT);
    const dockerPort = Number(process.env.DOCKER_PORT);
    const syslogPort = Number(process.env.SYSLOG_PORT);
    const target_port = Number(process.env.TARGET_PORT);

    if (
      !hostname ||
      !target_hostname ||
      Number.isNaN(sshPort) ||
      Number.isNaN(httpPort) ||
      Number.isNaN(rpcPort) ||
      Number.isNaN(nfsPort) ||
      Number.isNaN(httpsPort) ||
      Number.isNaN(smbPort) ||
      Number.isNaN(dockerPort) ||
      Number.isNaN(syslogPort) ||
      Number.isNaN(target_port)
    ) {
      throw new Error(
        "🛑 Нет каких-то переменных среды для ноутбука (windows)!",
      );
    }

    PER_ENV = {
      hostname,
      sshPort,
      httpPort,
      rpcPort,
      httpsPort,
      smbPort,
      nfsPort,
      dockerPort,
      syslogPort,
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
    `🔌 Подключение к серверу ПК (ubuntu) по ${service}  установлено`,
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

  console.log(`🖥️ ПК (ubuntu) получил сообщение по ${service}]`);
  console.log("⏱", timestamp);
  console.log("HEX:", buffer.toString("hex"));
  console.log("TEXT:", buffer.toString("utf-8"));
  console.log("RAW:", buffer);

  socket.write(`TIME:${timestamp} MSG:${text}`);
}

async function sockClose(socket: Socket, service: string, text: string) {
  console.log(`❌ Соединение с ПК (ubuntu) по ${service} закрыто`);
  socket.write(text);
  socket.end();
}

async function sockError(socket: Socket, service: string, error: Error) {
  console.log(
    `💥 Произошла ошибка соединения сокета ПК (ubuntu) по ${service}`,
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

  console.log(`🖥️ ПК (ubuntu) получил сообщение HTTP от: ${server.requestIP}`);
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

async function sshService() {
  const serviceName = "SSH";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.sshPort,
    socket: {
      open: (sock) =>
        sockOpen(
          sock,
          serviceName,
          `${serviceName}-2.0-OpenSSH_9.6p1 Ubuntu\r\n`,
        ),
      data: (sock, buffer) =>
        sockData(
          sock,
          buffer,
          serviceName,
          `Ubuntu ${serviceName} request processed`,
        ),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(`🟢 ${serviceName} сервис имитации ПК (ubuntu) запущен...`);
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
        "Ubuntu Apache2",
        `${serviceName} endpoint`,
        "Ubuntu web node",
      ),
  });

  startOutboundTraffic(
    serviceName,
    `${env.target_hostname}:${env.target_port}`,
    cfg.behavior.interval_ms,
  );

  console.info(`🟢 ${serviceName} сервис имитации ПК (ubuntu) запущен...`);
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
        "Ubuntu Nginx",
        `${serviceName} endpoint`,
        "TLS service node",
      ),
  });

  startOutboundTraffic(
    serviceName,
    `${env.target_hostname}:${env.target_port}`,
    cfg.behavior.interval_ms,
  );

  console.info(`🟢 ${serviceName} сервис имитации ПК (ubuntu) запущен...`);
}

async function rpcService() {
  const serviceName = "RPC";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.rpcPort,
    socket: {
      open: (sock) => sockOpen(sock, serviceName, "rpcbind v3 (Ubuntu)\r\n"),
      data: (sock, buffer) =>
        sockData(sock, buffer, serviceName, `${serviceName} call handled`),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(`🟢 ${serviceName} сервис имитации ПК (ubuntu) запущен...`);
}

async function smbService() {
  const serviceName = "SMB";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.rpcPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, serviceName, Buffer.from("FF534D42", "hex")),
      data: (sock, buffer) =>
        sockData(sock, buffer, serviceName, `${serviceName} request handled`),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(`🟢 ${serviceName} сервис имитации ПК (ubuntu) запущен...`);
}

async function dockerService() {
  const serviceName = "Docker";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.dockerPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, serviceName, "Docker Engine API v1.45\r\n"),
      data: (sock, buffer) =>
        sockData(sock, buffer, serviceName, `${serviceName} request handled`),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(`🟢 ${serviceName} сервис имитации ПК (ubuntu) запущен...`);
}

async function syslogService() {
  const serviceName = "Docker";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.syslogPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, serviceName, "<134>Ubuntu systemd journal\r\n"),
      data: (sock, buffer) =>
        sockData(sock, buffer, serviceName, `${serviceName} entry received`),
      close: (sock) =>
        sockClose(sock, serviceName, `${serviceName} session closed`),
      error: (sock, error) => sockError(sock, serviceName, error),
    },
  });

  console.info(`🟢 ${serviceName} сервис имитации ПК (ubuntu) запущен...`);
}

async function serverRun() {
  await Promise.all([
    sshService(),
    httpService(),
    httpsService(),
    rpcService(),
    smbService(),
    dockerService(),
    syslogService(),
  ]);
}

serverRun()
  .then((): void => {
    console.info("🚀 Сервер имитации ПК (ubuntu) запущен!");
  })
  .catch((error: unknown): void => {
    console.error(
      "💥 Сервер имитации ПК (ubuntu) завершился с ошибкой:",
      error,
    );
    process.exit(1);
  });
