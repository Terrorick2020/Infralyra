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
    const netBiosPort = Number(process.env.NETBIOS_PORT);
    const httpsPort = Number(process.env.HTTPS_PORT);
    const smbPort = Number(process.env.SMB_PORT);
    const rdpPort = Number(process.env.RDP_PORT);
    const target_port = Number(process.env.TARGET_PORT);

    if (
      !hostname ||
      !target_hostname ||
      Number.isNaN(sshPort) ||
      Number.isNaN(httpPort) ||
      Number.isNaN(rpcPort) ||
      Number.isNaN(netBiosPort) ||
      Number.isNaN(httpsPort) ||
      Number.isNaN(smbPort) ||
      Number.isNaN(rdpPort) ||
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
      netBiosPort,
      httpsPort,
      smbPort,
      rdpPort,
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

async function sockOpen<T = any>(
  socket: Socket,
  service: string,
  text: T,
): Promise<void> {
  console.log(
    `🔌 Подключение к серверу ноутбука (windows) по ${service}  установлено`,
  );
  socket.write(text);
}

async function sockData<T = any>(
  socket: Socket,
  buffer: Buffer,
  service: string,
  text: T,
): Promise<void> {
  const timestamp: string = new Date().toISOString();

  console.log(`💻 Ноутбук (windows) получил сообщение по ${service}]`);
  console.log("⏱", timestamp);
  console.log("HEX:", buffer.toString("hex"));
  console.log("TEXT:", buffer.toString("utf-8"));
  console.log("RAW:", buffer);

  socket.write(`TIME: ${timestamp}, MSG: ${text}`);
}

async function sockClose(
  socket: Socket,
  service: string,
  text: string,
): Promise<void> {
  console.log(`❌ Соединение с ноутбуком (windows) по ${service} закрыто`);
  socket.write(text);
  socket.end();
}

async function sockError(
  socket: Socket,
  service: string,
  error: Error,
): Promise<void> {
  console.log(
    `💥 Произошла ошибка соединения сокета ноутбука (windows) по ${service}`,
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
    `💻 Ноутбук (windows) получил сообщение HTTP от: ${server.requestIP}`,
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
): Promise<void> {
  const cfg = loadCfg();

  setInterval(async () => {
    try {
      await fetch(`${protocol}://${target}`, {
        headers: {
          "User-Agent": "Microsoft-CryptoAPI/10.0/11.0",
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

async function simulateDnsTraffic() {
  const domains = [
    "time.windows.com",
    "dns.msftncsi.com",
    "www.microsoft.com",
    "windowsupdate.com",
  ];

  setInterval(async () => {
    const domain = domains[Math.floor(Math.random() * domains.length)];

    try {
      await fetch(`http://${domain}`);
      console.log("DNS трафик отправлен");
    } catch {
      console.warn("DNS трафик не отправлен");
    }
  }, 8000);
}

async function sshService(): Promise<void> {
  const serviceName = "SSH";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.sshPort,
    socket: {
      open: (sock) =>
        sockOpen<string>(
          sock,
          serviceName,
          "SSH-2.0-OpenSSH_for_Windows_8.9\r\n",
        ),
      data: (socket, buffer) =>
        sockData<string>(
          socket,
          buffer,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        sockClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => sockError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function httpService(): Promise<void> {
  const serviceName = "HTTP";
  const env = loadEnv();
  const cfg = loadCfg();

  Bun.serve({
    hostname: env.hostname,
    port: env.httpPort,
    fetch: (req: Request, server: Server<undefined>) =>
      hyperRes(
        req,
        server,
        "Microsoft IIS Windows",
        `Protoсol: ${serviceName}`,
        "Windows 10/11 Service Endpoint",
      ),
  });

  startOutboundTraffic(
    serviceName,
    `${env.target_hostname}:${env.target_port}`,
    cfg.behavior.interval_ms,
  );

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function rpcService(): Promise<void> {
  const serviceName = "RPC";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.rpcPort,
    socket: {
      open: (socket) =>
        sockOpen<string>(
          socket,
          serviceName,
          "Microsoft RPC Endpoint Mapper 6.0\r\n",
        ),
      data: (socket, buffer) =>
        sockData<string>(
          socket,
          buffer,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        sockClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => sockError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function netBiosService(): Promise<void> {
  const serviceName = "NetBIOS";
  const env = loadEnv();
  const cfg = loadCfg();

  Bun.listen({
    hostname: env.hostname,
    port: env.netBiosPort,
    socket: {
      open: (socket) =>
        sockOpen<Buffer>(
          socket,
          serviceName,
          Buffer.concat([
            Buffer.from([0x82, 0x28, 0x00, 0x00]),
            Buffer.from(cfg.device.hostname),
          ]),
        ),
      data: (socket, buffer) =>
        sockData<string>(
          socket,
          buffer,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        sockClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => sockError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function httpsService(): Promise<void> {
  const serviceName = "HTTPS";
  const env = loadEnv();
  const cfg = loadCfg();

  const tlsFiles = await loadTLSFiles();
  Bun.serve({
    hostname: env.hostname,
    port: env.httpsPort,
    tls: tlsFiles,
    fetch: (req: Request, server: Server<undefined>) =>
      hyperRes(
        req,
        server,
        cfg.network.server,
        `Protoсol: ${serviceName}`,
        "Windows 10/11 Service Endpoint",
      ),
  });

  startOutboundTraffic(
    serviceName,
    `${env.target_hostname}:${env.target_port}`,
    cfg.behavior.interval_ms,
  );

  console.info("🟢 HTTPS сервис имитации ноутбука (windows) запущен...");
}

async function smbService(): Promise<void> {
  const serviceName = "SMB";
  const env = loadEnv();
  const cfg = loadCfg();

  Bun.listen({
    hostname: env.hostname,
    port: env.smbPort,
    socket: {
      open: (socket) =>
        sockOpen<Buffer>(
          socket,
          serviceName,
          Buffer.concat([
            Buffer.from("FF534D42", "hex"),
            Buffer.from(cfg.device.hostname),
            Buffer.from(cfg.os.name),
          ]),
        ),
      data: (socket, buffer) =>
        sockData<string>(
          socket,
          buffer,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        sockClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => sockError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function rdpService(): Promise<void> {
  const serviceName = "RDP";
  const env = loadEnv();

  Bun.listen({
    hostname: env.hostname,
    port: env.rdpPort,
    socket: {
      open: (socket) =>
        sockOpen<Buffer>(
          socket,
          serviceName,
          Buffer.from([
            0x03, 0x00, 0x00, 0x0b, 0x06, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x00,
          ]),
        ),
      data: (socket, buffer) =>
        sockData<string>(
          socket,
          buffer,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        sockClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => sockError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function serverRun(): Promise<void> {
  await Promise.all([
    sshService(),
    rpcService(),
    netBiosService(),
    smbService(),
    rdpService(),
    httpService(),
    httpsService(),
    simulateDnsTraffic(),
  ]);
}

serverRun()
  .then((): void => {
    console.info("🚀 Сервер имитации ноутбука (windows) запущен!");
  })
  .catch((error: unknown): void => {
    console.error(
      "💥 Сервер имитации ноутбука (windows) завершился с ошибкой:",
      error,
    );
    process.exit(1);
  });
