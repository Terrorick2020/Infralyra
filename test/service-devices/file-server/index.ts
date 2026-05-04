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
    const nfsPort = Number(process.env.NFS_PORT);
    const ftpPort = Number(process.env.FTP_PORT);
    const smbPort = Number(process.env.SMB_PORT);
    const target_port = Number(process.env.TARGET_PORT);

    if (
      !hostname ||
      !target_hostname ||
      Number.isNaN(sshPort) ||
      Number.isNaN(nfsPort) ||
      Number.isNaN(ftpPort) ||
      Number.isNaN(smbPort) ||
      Number.isNaN(target_port)
    ) {
      throw new Error(
        "🛑 Нет каких-то переменных среды для файлового сервера!",
      );
    }

    PER_ENV = {
      hostname,
      sshPort,
      nfsPort,
      ftpPort,
      smbPort,
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

async function sockOpen(socket: Socket, service: string, text: any) {
  console.log(`🔌 Подключение к файловому серверу по ${service} установлено`);
  socket.write(text);
}

async function sockData(
  socket: Socket,
  buffer: Buffer,
  service: string,
  text: string,
) {
  const timestamp = new Date().toISOString();

  console.log(`💾 Файловый сервер получил сообщение по ${service}`);
  console.log("⏱", timestamp);
  console.log("HEX:", buffer.toString("hex"));
  console.log("TEXT:", buffer.toString("utf-8"));

  socket.write(`TIME: ${timestamp}, MSG: ${text}`);
}

async function sockClose(socket: Socket, service: string, text: string) {
  console.log(`❌ Соединение по ${service} закрыто`);
  socket.write(text);
  socket.end();
}

async function sockError(socket: Socket, service: string, error: Error) {
  console.log(`💥 Ошибка на файловом сервере (${service})`, error);
  socket.end();
}


async function sshService() {
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.sshPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, "SSH", "SSH-2.0-OpenSSH_9.6p1 ArchLinux\r\n"),
      data: (sock, buf) =>
        sockData(sock, buf, "SSH", "Файловый сервер получил SSH запрос"),
      close: (sock) =>
        sockClose(sock, "SSH", "SSH соединение закрыто"),
      error: (sock, err) => sockError(sock, "SSH", err),
    },
  });

  console.info("🟢 SSH файлового сервера запущен");
}

async function smbService() {
  const env = loadEnv();
  const cfg = loadCfg();

  Bun.listen({
    hostname: env.hostname,
    port: env.smbPort,
    socket: {
      open: (sock) =>
        sockOpen(
          sock,
          "SMB",
          Buffer.concat([
            Buffer.from("FF534D42", "hex"),
            Buffer.from(cfg.device.hostname),
            Buffer.from("Samba"),
          ]),
        ),
      data: (sock, buf) =>
        sockData(sock, buf, "SMB", "Доступ к файловой шаре"),
      close: (sock) =>
        sockClose(sock, "SMB", "SMB соединение закрыто"),
      error: (sock, err) => sockError(sock, "SMB", err),
    },
  });

  console.info("🟢 SMB файловый сервис запущен");
}

async function nfsService() {
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.nfsPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, "NFS", "NFSv4 File Server Ready\n"),
      data: (sock, buf) =>
        sockData(sock, buf, "NFS", "Операция с NFS хранилищем"),
      close: (sock) =>
        sockClose(sock, "NFS", "NFS соединение закрыто"),
      error: (sock, err) => sockError(sock, "NFS", err),
    },
  });

  console.info("🟢 NFS сервис запущен");
}

async function ftpService() {
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.ftpPort,
    socket: {
      open: (sock) =>
        sockOpen(sock, "FTP", "220 File Server FTP Ready\r\n"),
      data: (sock, buf) =>
        sockData(sock, buf, "FTP", "FTP команда получена"),
      close: (sock) =>
        sockClose(sock, "FTP", "FTP соединение закрыто"),
      error: (sock, err) => sockError(sock, "FTP", err),
    },
  });

  console.info("🟢 FTP сервис запущен");
}

async function startOutboundTraffic() {
  const env = loadEnv();
  const cfg = loadCfg();

  setInterval(async () => {
    try {
      await fetch(`http://${env.target_hostname}:${env.target_port}`);
      console.log("📡 Файловый сервер отправил heartbeat");
    } catch {
      console.log("⚠️ Не удалось отправить heartbeat");
    }
  }, cfg.behavior.interval_ms);
}

async function serverRun() {
  await Promise.all([
    sshService(),
    smbService(),
    nfsService(),
    ftpService(),
    startOutboundTraffic(),
  ]);
}

serverRun()
  .then(() => {
    console.info("🚀 Файловый сервер запущен!");
  })
  .catch((err) => {
    console.error("💥 Ошибка запуска файлового сервера:", err);
    process.exit(1);
  });
