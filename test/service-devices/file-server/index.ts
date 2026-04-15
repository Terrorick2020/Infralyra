import { serve, type Socket } from "bun";

interface IEnv {
  host: string;
  target: string;
  httpPort: number;
  sshPort: number;
  interval: number;
}

function loadEnv(): IEnv {
  const host = process.env.HOST;
  const target = process.env.TARGET;

  const httpPort = Number(process.env.HTTP_PORT);
  const sshPort = Number(process.env.SSH_PORT);
  const interval = Number(process.env.INTERVAL_MS);

  if (
    !host ||
    !target ||
    Number.isNaN(httpPort) ||
    Number.isNaN(sshPort) ||
    Number.isNaN(interval)
  ) {
    throw new Error("🛑 Нет переменных среды для file-processing сервера!");
  }

  return {
    host,
    target,
    httpPort,
    sshPort,
    interval,
  };
}

/* ================================
   Outbound Traffic (storage-like)
================================ */

async function startOutboundTraffic(
  target: string,
  interval: number,
): Promise<void> {
  setInterval(async () => {
    try {
      await fetch(`http://${target}`, {
        headers: {
          "User-Agent": "Debian FileProcessor/1.0",
        },
      });

      console.info(`📡 Storage outbound -> ${target}`);
    } catch {
      console.info(`⚠️ Storage outbound failed -> ${target}`);
    }
  }, interval);
}

/* ================================
   File Processing Simulation
================================ */

async function simulateProcessing(): Promise<void> {

  const delay =
    Math.floor(Math.random() * 3000) + 1000;

  await new Promise((r) =>
    setTimeout(r, delay),
  );

}

/* ================================
   HTTP API
================================ */

async function fileService(
  hostname: string,
  port: number,
  target: string,
  interval: number,
): Promise<void> {

  serve({
    hostname,
    port,

    fetch: async (req: Request) => {

      const url = new URL(req.url);
      const path = url.pathname;

      console.log(
        `📂 ${req.method} ${path}`,
      );

      /* health */

      if (path === "/health") {

        return new Response(
          JSON.stringify({
            status: "ok",
            service: "file-processor",
            timestamp: new Date().toISOString(),
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "Server": "nginx/1.22.1",
            },
          },
        );

      }

      /* upload */

      if (
        path === "/upload" &&
        req.method === "POST"
      ) {

        console.log(
          "📥 Получен файл",
        );

        await simulateProcessing();

        return new Response(
          JSON.stringify({
            status: "uploaded",
            id: crypto.randomUUID(),
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

      }

      /* process */

      if (
        path === "/process" &&
        req.method === "POST"
      ) {

        console.log(
          "⚙️ Обработка файла",
        );

        await simulateProcessing();

        return new Response(
          JSON.stringify({
            status: "processed",
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

      }

      /* download */

      if (
        path.startsWith("/download")
      ) {

        console.log(
          "📤 Выдача файла",
        );

        return new Response(
          "FAKE_FILE_CONTENT",
          {
            headers: {
              "Content-Type":
                "application/octet-stream",
            },
          },
        );

      }

      /* default */

      return new Response(
        `
<html>
<head>
<title>File Processing Service</title>
</head>

<body>
<h1>Debian File Processing Server</h1>
<p>Service endpoint operational</p>
</body>
</html>
        `,
        {
          headers: {
            "Content-Type": "text/html",
            "Server": "nginx/1.22.1",
          },
        },
      );

    },

  });

  startOutboundTraffic(
    target,
    interval,
  );

  console.info(
    "🟢 File processing HTTP сервис запущен",
  );

}

/* ================================
   SSH
================================ */

async function sshService(
  hostname: string,
  port: number,
): Promise<void> {

  Bun.listen({
    hostname,
    port,

    socket: {

      open: (socket: Socket) => {

        console.log(
          "🔌 SSH соединение",
        );

        socket.write(
          "SSH-2.0-OpenSSH_9.2p1 Debian-2\r\n",
        );

      },

      data: (socket: Socket, data: Buffer) => {

        console.log(
          "📩 SSH DATA",
          data.toString("hex"),
        );

        socket.write(
          "Permission denied\r\n",
        );

      },

      close: () => {

        console.log(
          "❌ SSH закрыт",
        );

      },

      error: (socket: Socket, error: Error) => {

        console.log(
          "💥 SSH ошибка",
          error,
        );

        socket.end();

      },

    },

  });

  console.info(
    "🟢 SSH сервис запущен",
  );

}

/* ================================
   MAIN
================================ */

async function serverRun(): Promise<void> {

  const env = loadEnv();

  await Promise.all([

    fileService(
      env.host,
      env.httpPort,
      env.target,
      env.interval,
    ),

    sshService(
      env.host,
      env.sshPort,
    ),

  ]);

}

serverRun()
  .then(() => {

    console.info(
      "🚀 File processing сервер запущен!",
    );

  })
  .catch((error: unknown) => {

    console.error(
      "💥 File processing сервер завершился:",
      error,
    );

    process.exit(1);

  });
