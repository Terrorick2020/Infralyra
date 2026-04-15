import { serve, type Server, type Socket } from "bun";

interface IEnv {
  host: string;
  target: string;
  sshPort: number;
  httpPort: number;
  rpcPort: number;
  netBiosPort: number;
  httpsPort: number;
  smbPort: number;
  rdpPort: number;
  interval: number;
}

type THyperRes = undefined;

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;
  const sshPort = Number(process.env.SSH_PORT);
  const httpPort = Number(process.env.HTTP_PORT);
  const rpcPort = Number(process.env.RPC_PORT);
  const netBiosPort = Number(process.env.NETBIOS_PORT);
  const httpsPort = Number(process.env.HTTPS_PORT);
  const smbPort = Number(process.env.SMB_PORT);
  const rdpPort = Number(process.env.RDP_PORT);
  const interval = Number(process.env.INTERVAL_MS);

  if (
    !host ||
    !target ||
    Number.isNaN(sshPort) ||
    Number.isNaN(httpPort) ||
    Number.isNaN(rpcPort) ||
    Number.isNaN(netBiosPort) ||
    Number.isNaN(httpsPort) ||
    Number.isNaN(smbPort) ||
    Number.isNaN(rdpPort) ||
    Number.isNaN(interval)
  ) {
    throw new Error("🛑 Нет каких-то переменных среды для ноутбука (windows)!");
  }

  return {
    host,
    target,
    sshPort,
    httpPort,
    rpcPort,
    netBiosPort,
    httpsPort,
    smbPort,
    rdpPort,
    interval,
  };
}

async function socketOpen<T = any>(
  socket: Socket,
  service: string,
  text: T,
): Promise<void> {
  console.log(
    `🔌 Подключение к серверу ноутбука (windows) по ${service}  установлено`,
  );
  socket.write(text);
}

async function socketData<T = any>(
  socket: Socket,
  data: Buffer,
  service: string,
  text: T,
): Promise<void> {
  const timestamp: string = new Date().toISOString();

  console.log(`📩 [Ноутбук (windows) получил сообщение по ${service}]`);
  console.log("⏱", timestamp);
  console.log("HEX:", data.toString("hex"));
  console.log("TEXT:", data.toString("utf-8"));
  console.log("RAW:", data);

  socket.write(`TIME: ${timestamp}, MSG: ${text}`);
}

async function socketClose(
  socket: Socket,
  service: string,
  text: string,
): Promise<void> {
  console.log(`❌ Соединение с ноутбуком (windows) по ${service} закрыто`);
  socket.write(text);
  socket.end();
}

async function socketError(
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

async function hyperRes<T = THyperRes>(
  _req: Request,
  _server: Server<T>,
  headline: string,
  subHeadline: string,
  paragraph: string,
): Promise<Response> {
  const headLbl = "{{HEADLINE}}";
  const subHeadLbl = "{{SUBHEADLINE}}";
  const paraLbl = "{{PARAGRAPH}}";
  const htmlTmpl = await Bun.file("./index.html").text();

  const html = htmlTmpl
    .replace(headLbl, headline)
    .replace(subHeadLbl, subHeadline)
    .replace(paraLbl, paragraph);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

async function startOutboundTraffic(
  protocol: "http" | "https",
  target: string,
  interval: number,
): Promise<void> {
  setInterval(async () => {
    try {
      await fetch(`${protocol}://${target}`, {
        headers: {
          "User-Agent": "Microsoft-CryptoAPI/10.0/11.0",
        },
      });

      console.info(`📡 ${protocol.toUpperCase()} outbound -> ${target}`);
    } catch {
      console.info(`⚠️ ${protocol.toUpperCase()} outbound failed -> ${target}`);
    }
  }, interval);
}

async function sshService(
  hostname: IEnv["host"],
  port: IEnv["sshPort"],
): Promise<void> {
  const serviceName = "SSH";

  Bun.listen({
    hostname,
    port,
    socket: {
      open: (socket) =>
        socketOpen<string>(
          socket,
          serviceName,
          "SSH-2.0-OpenSSH_for_Windows_8.9\r\n",
        ),
      data: (socket, data) =>
        socketData<string>(
          socket,
          data,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        socketClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => socketError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function httpService(
  hostname: IEnv["host"],
  port: IEnv["httpPort"],
  target: IEnv["target"],
  interval: IEnv["interval"],
): Promise<void> {
  serve({
    hostname,
    port,
    fetch: (req: Request, server: Server<THyperRes>) =>
      hyperRes(
        req,
        server,
        "Microsoft IIS Windows",
        "Protoсol: HTTP",
        "Windows 10/11 Service Endpoint",
      ),
  });

  startOutboundTraffic("http", target, interval);

  console.info("🟢 HTTP сервис имитации ноутбука (windows) запущен...");
}

async function rpcService(
  hostname: IEnv["host"],
  port: IEnv["rpcPort"],
): Promise<void> {
  const serviceName = "RPC";

  Bun.listen({
    hostname,
    port,
    socket: {
      open: (socket) =>
        socketOpen<string>(
          socket,
          serviceName,
          "Microsoft RPC Endpoint Mapper 6.0\r\n",
        ),
      data: (socket, data) =>
        socketData<string>(
          socket,
          data,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        socketClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => socketError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function netBiosService(
  hostname: IEnv["host"],
  port: IEnv["netBiosPort"],
): Promise<void> {
  const serviceName = "NetBIOS";

  Bun.listen({
    hostname,
    port,
    socket: {
      open: (socket) =>
        socketOpen<Buffer>(
          socket,
          serviceName,
          Buffer.from([0x82, 0x28, 0x00, 0x00]),
        ),
      data: (socket, data) =>
        socketData<string>(
          socket,
          data,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        socketClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => socketError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function httpsService(
  hostname: IEnv["host"],
  port: IEnv["httpsPort"],
  target: IEnv["target"],
  interval: IEnv["interval"],
): Promise<void> {
  serve({
    hostname,
    port,
    fetch: (req: Request, server: Server<THyperRes>) =>
      hyperRes<THyperRes>(
        req,
        server,
        "Microsoft IIS Windows",
        "Protoсol: HTTPS",
        "Windows 10/11 Service Endpoint",
      ),
  });

  startOutboundTraffic("https", target, interval);

  console.info("🟢 HTTPS сервис имитации ноутбука (windows) запущен...");
}

async function smbService(
  hostname: IEnv["host"],
  port: IEnv["smbPort"],
): Promise<void> {
  const serviceName = "SMB";

  Bun.listen({
    hostname,
    port,
    socket: {
      open: (socket) =>
        socketOpen<Buffer>(socket, serviceName, Buffer.from("FF534D42", "hex")),
      data: (socket, data) =>
        socketData<string>(
          socket,
          data,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        socketClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => socketError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function rdpService(
  hostname: IEnv["host"],
  port: IEnv["rdpPort"],
): Promise<void> {
  const serviceName = "RDP";

  Bun.listen({
    hostname,
    port,
    socket: {
      open: (socket) =>
        socketOpen<Buffer>(
          socket,
          serviceName,
          Buffer.from([
            0x03, 0x00, 0x00, 0x0b, 0x06, 0xe0, 0x00, 0x00, 0x00, 0x00, 0x00,
          ]),
        ),
      data: (socket, data) =>
        socketData<string>(
          socket,
          data,
          serviceName,
          `Ноутбук (windows) по ${serviceName} получил сообщение`,
        ),
      close: (socket) =>
        socketClose(
          socket,
          serviceName,
          `Соединение ${serviceName} с ноутбуком (windows) закрыто`,
        ),
      error: (socket, error) => socketError(socket, serviceName, error),
    },
  });

  console.info(
    `🟢 ${serviceName} сервис имитации ноутбука (windows) запущен...`,
  );
}

async function serverRun(): Promise<void> {
  const env = loadEnv();

  sshService(env.host, env.sshPort);
  rpcService(env.host, env.rpcPort);
  netBiosService(env.host, env.netBiosPort);
  smbService(env.host, env.smbPort);
  rdpService(env.host, env.rdpPort);
  httpService(env.host, env.httpPort, env.target, env.interval);
  httpsService(env.host, env.httpPort, env.target, env.interval);
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
