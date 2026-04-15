import { serve, type Socket } from "bun";

interface IEnv {
  host: string;
  target: string;
  httpPort: number;
  httpsPort: number;
  sshPort: number;
  interval: number;
}

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;

  const httpPort = Number(process.env.HTTP_PORT);
  const httpsPort = Number(process.env.HTTPS_PORT);
  const sshPort = Number(process.env.SSH_PORT);
  const interval = Number(process.env.INTERVAL_MS);

  if (
    !host ||
    !target ||
    Number.isNaN(httpPort) ||
    Number.isNaN(httpsPort) ||
    Number.isNaN(sshPort) ||
    Number.isNaN(interval)
  ) {
    throw new Error("🛑 Нет переменных среды для Debian web сервера!");
  }

  return {
    host,
    target,
    httpPort,
    httpsPort,
    sshPort,
    interval,
  };
}

/* ================================
   Outbound (APT-like traffic)
================================ */

async function startOutboundTraffic(
  protocol: "http" | "https",
  target: string,
  interval: number,
): Promise<void> {
  setInterval(async () => {
    try {
      await fetch(`${protocol}://${target}`, {
        headers: {
          "User-Agent": "Debian APT-HTTP/1.3 (2.6.1)",
        },
      });

      console.info(`📡 ${protocol.toUpperCase()} outbound -> ${target}`);
    } catch {
      console.info(`⚠️ ${protocol.toUpperCase()} outbound failed -> ${target}`);
    }
  }, interval);
}

/* ================================
   HTTP / HTTPS (nginx)
================================ */

async function webService(
  hostname: string,
  port: number,
  protocol: "HTTP" | "HTTPS",
  target: string,
  interval: number,
): Promise<void> {
  serve({
    hostname,
    port,

    fetch: async (req: Request) => {
      const url = new URL(req.url);
      const path = url.pathname;

      console.log(`🌐 ${protocol} ${req.method} ${path}`);

      /* health */

      if (path === "/health") {
        return new Response(
          JSON.stringify({
            status: "ok",
            service: "nginx",
            os: "debian",
            timestamp: new Date().toISOString(),
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Server: "nginx/1.22.1",
            },
          },
        );
      }

      /* robots.txt */

      if (path === "/robots.txt") {
        return new Response("User-agent: *\nDisallow:", {
          headers: {
            "Content-Type": "text/plain",
            Server: "nginx/1.22.1",
          },
        });
      }

      /* favicon */

      if (path === "/favicon.ico") {
        return new Response(null, {
          status: 204,
          headers: {
            Server: "nginx/1.22.1",
          },
        });
      }

      /* fake api */

      if (path.startsWith("/api")) {
        return new Response(
          JSON.stringify({
            message: "nginx backend",
            path,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Server: "nginx/1.22.1",
            },
          },
        );
      }

      /* default */

      return new Response(
        `
<html>
<head>
<title>Welcome to nginx!</title>
</head>

<body>
<h1>Welcome to nginx on Debian</h1>
<p>If you see this page, the nginx web server is successfully installed.</p>
</body>
</html>
        `,
        {
          headers: {
            "Content-Type": "text/html",
            Server: "nginx/1.22.1",
          },
        },
      );
    },
  });

  startOutboundTraffic(
    protocol.toLowerCase() as "http" | "https",
    target,
    interval,
  );

  console.info(`🟢 ${protocol} nginx сервис запущен`);
}

/* ================================
   SSH (Linux characteristic)
================================ */

async function sshService(hostname: string, port: number): Promise<void> {
  Bun.listen({
    hostname,
    port,

    socket: {
      open: (socket: Socket) => {
        console.log("🔌 SSH соединение");

        socket.write("SSH-2.0-OpenSSH_9.2p1 Debian-2\r\n");
      },

      data: (socket: Socket, data: Buffer) => {
        console.log("📩 SSH DATA", data.toString("hex"));

        socket.write("Protocol mismatch.\r\n");
      },

      close: () => {
        console.log("❌ SSH закрыт");
      },

      error: (socket: Socket, error: Error) => {
        console.log("💥 SSH ошибка", error);

        socket.end();
      },
    },
  });

  console.info("🟢 SSH сервис Debian запущен");
}

/* ================================
   MAIN
================================ */

async function serverRun(): Promise<void> {
  const env = loadEnv();

  await Promise.all([
    webService(env.host, env.httpPort, "HTTP", env.target, env.interval),

    webService(env.host, env.httpsPort, "HTTPS", env.target, env.interval),

    sshService(env.host, env.sshPort),
  ]);
}

serverRun()
  .then(() => {
    console.info("🚀 Debian nginx сервер имитации запущен!");
  })
  .catch((error: unknown) => {
    console.error("💥 Debian сервер завершился с ошибкой:", error);

    process.exit(1);
  });
