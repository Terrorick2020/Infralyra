import { serve, type Server, type Socket } from "bun";

interface IEnv {
  host: string;
  target: string;
  sshPort: number;
  httpPort: number;
  httpsPort: number;
  rpcPort: number;
  nfsPort: number;
  smbPort: number;
  dockerPort: number;
  syslogPort: number;
  interval: number;
}

type THyperRes = undefined;

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;

  const sshPort = Number(process.env.SSH_PORT);
  const httpPort = Number(process.env.HTTP_PORT);
  const httpsPort = Number(process.env.HTTPS_PORT);

  const rpcPort = Number(process.env.RPC_PORT);
  const nfsPort = Number(process.env.NFS_PORT);
  const smbPort = Number(process.env.SMB_PORT);

  const dockerPort = Number(process.env.DOCKER_PORT);
  const syslogPort = Number(process.env.SYSLOG_PORT);

  const interval = Number(process.env.INTERVAL_MS);

  if (
    !host ||
    !target ||
    Number.isNaN(sshPort) ||
    Number.isNaN(httpPort) ||
    Number.isNaN(httpsPort) ||
    Number.isNaN(rpcPort) ||
    Number.isNaN(nfsPort) ||
    Number.isNaN(smbPort) ||
    Number.isNaN(dockerPort) ||
    Number.isNaN(syslogPort) ||
    Number.isNaN(interval)
  ) {
    throw new Error("🛑 Missing Ubuntu env variables");
  }

  return {
    host,
    target,
    sshPort,
    httpPort,
    httpsPort,
    rpcPort,
    nfsPort,
    smbPort,
    dockerPort,
    syslogPort,
    interval,
  };
}

async function socketOpen<T>(
  socket: Socket,
  service: string,
  banner: T,
): Promise<void> {
  console.log(`🔌 Ubuntu ${service} connection opened`);
  socket.write(banner);
}

async function socketData<T>(
  socket: Socket,
  data: Buffer,
  service: string,
  text: T,
): Promise<void> {
  const ts = new Date().toISOString();

  console.log(`📩 [Ubuntu ${service}] incoming packet`);
  console.log("⏱", ts);
  console.log("HEX:", data.toString("hex"));
  console.log("TEXT:", data.toString("utf-8"));

  socket.write(`TS=${ts} MSG=${text}`);
}

async function socketClose(socket: Socket, service: string, text: string) {
  console.log(`❌ Ubuntu ${service} connection closed`);
  socket.write(text);
  socket.end();
}

async function socketError(socket: Socket, service: string, error: Error) {
  console.log(`💥 Ubuntu ${service} socket error`, error);
  socket.end();
}

async function hyperRes<T = THyperRes>(
  _req: Request,
  _server: Server<T>,
  title: string,
  subtitle: string,
  body: string,
): Promise<Response> {
  const html = (await Bun.file("./index.html").text())
    .replace("{{HEADLINE}}", title)
    .replace("{{SUBHEADLINE}}", subtitle)
    .replace("{{PARAGRAPH}}", body);

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}

async function outbound(protocol: "http" | "https", target: string, interval: number) {
  setInterval(async () => {
    try {
      await fetch(`${protocol}://${target}`, {
        headers: { "User-Agent": "Ubuntu/22.04-systemd" },
      });

      console.info(`📡 ${protocol.toUpperCase()} -> ${target}`);
    } catch {
      console.info(`⚠️ ${protocol.toUpperCase()} failed -> ${target}`);
    }
  }, interval);
}

/* ---------------- SSH (Ubuntu) ---------------- */
async function sshService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        socketOpen(s, "SSH", "SSH-2.0-OpenSSH_9.6p1 Ubuntu\r\n"),
      data: (s, d) =>
        socketData(s, d, "SSH", "Ubuntu SSH request processed"),
      close: (s) =>
        socketClose(s, "SSH", "SSH session closed"),
      error: (s, e) => socketError(s, "SSH", e),
    },
  });

  console.info("🟢 SSH (Ubuntu) started");
}

/* ---------------- HTTP ---------------- */
async function httpService(host: string, port: number, target: string, interval: number) {
  serve({
    hostname: host,
    port,
    fetch: (req, server) =>
      hyperRes(req, server, "Ubuntu Apache2", "HTTP endpoint", "Ubuntu web node"),
  });

  outbound("http", target, interval);
  console.info("🟢 HTTP (Ubuntu Apache emulation) started");
}

/* ---------------- HTTPS ---------------- */
async function httpsService(host: string, port: number, target: string, interval: number) {
  serve({
    hostname: host,
    port,
    fetch: (req, server) =>
      hyperRes(req, server, "Ubuntu Nginx", "HTTPS endpoint", "TLS service node"),
  });

  outbound("https", target, interval);
  console.info("🟢 HTTPS (Ubuntu Nginx emulation) started");
}

/* ---------------- RPC / NFS ---------------- */
async function rpcService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        socketOpen(s, "RPC/NFS", "rpcbind v3 (Ubuntu)\r\n"),
      data: (s, d) =>
        socketData(s, d, "RPC/NFS", "RPC call handled"),
      close: (s) => socketClose(s, "RPC/NFS", "RPC closed"),
      error: (s, e) => socketError(s, "RPC/NFS", e),
    },
  });

  console.info("🟢 RPC/NFS started");
}

/* ---------------- SMB (Samba) ---------------- */
async function smbService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        socketOpen(s, "SMB/Samba", Buffer.from("FF534D42", "hex")),
      data: (s, d) =>
        socketData(s, d, "SMB/Samba", "Samba request handled"),
      close: (s) => socketClose(s, "SMB/Samba", "Session closed"),
      error: (s, e) => socketError(s, "SMB/Samba", e),
    },
  });

  console.info("🟢 Samba started");
}

/* ---------------- Docker API ---------------- */
async function dockerService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        socketOpen(s, "Docker", "Docker Engine API v1.45\r\n"),
      data: (s, d) =>
        socketData(s, d, "Docker", "Container request processed"),
      close: (s) => socketClose(s, "Docker", "Docker session closed"),
      error: (s, e) => socketError(s, "Docker", e),
    },
  });

  console.info("🟢 Docker API started");
}

/* ---------------- Syslog ---------------- */
async function syslogService(host: string, port: number) {
  Bun.listen({
    hostname: host,
    port,
    socket: {
      open: (s) =>
        socketOpen(s, "Syslog", "<134>Ubuntu systemd journal\r\n"),
      data: (s, d) =>
        socketData(s, d, "Syslog", "Log entry received"),
      close: (s) => socketClose(s, "Syslog", "Log stream closed"),
      error: (s, e) => socketError(s, "Syslog", e),
    },
  });

  console.info("🟢 Syslog started");
}

async function serverRun() {
  const env = loadEnv();

  sshService(env.host, env.sshPort);
  httpService(env.host, env.httpPort, env.target, env.interval);
  httpsService(env.host, env.httpsPort, env.target, env.interval);

  rpcService(env.host, env.rpcPort);
  smbService(env.host, env.smbPort);

  dockerService(env.host, env.dockerPort);
  syslogService(env.host, env.syslogPort);
}

serverRun()
  .then(() => console.log("🚀 Ubuntu simulator running"))
  .catch((e) => {
    console.error("💥 Crash:", e);
    process.exit(1);
  });
