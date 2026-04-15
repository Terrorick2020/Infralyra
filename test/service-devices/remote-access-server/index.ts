import { serve, type Socket } from "bun";

interface IEnv {
  host: string;
  sshPort: number;
  vpnPort: number;
  httpsPort: number;
}

function loadEnv(): IEnv {

  const host = process.env.HOST;

  const sshPort = Number(process.env.SSH_PORT);
  const vpnPort = Number(process.env.VPN_PORT);
  const httpsPort = Number(process.env.HTTPS_PORT);

  if (
    !host ||
    Number.isNaN(sshPort) ||
    Number.isNaN(vpnPort) ||
    Number.isNaN(httpsPort)
  ) {
    throw new Error("🛑 Нет переменных среды для remote-access сервера!");
  }

  return {
    host,
    sshPort,
    vpnPort,
    httpsPort,
  };

}

/* ================================
   SSH (Primary service)
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

        console.log("🔌 SSH подключение");

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

        console.log("❌ SSH соединение закрыто");

      },

      error: (socket: Socket, error: Error) => {

        console.log("💥 SSH ошибка", error);

        socket.end();

      },

    },

  });

  console.info("🟢 SSH bastion сервис запущен");

}

/* ================================
   VPN Service (OpenVPN-like)
================================ */

async function vpnService(
  hostname: string,
  port: number,
): Promise<void> {

  Bun.listen({
    hostname,
    port,

    socket: {

      open: (socket: Socket) => {

        console.log("🔌 VPN соединение");

        socket.write(
          Buffer.from([
            0x38, 0x00, 0x00, 0x00,
          ]),
        );

      },

      data: (socket: Socket, data: Buffer) => {

        console.log(
          "📩 VPN DATA",
          data.toString("hex"),
        );

        socket.write(
          Buffer.from([
            0x40, 0x00,
          ]),
        );

      },

      close: () => {

        console.log("❌ VPN соединение закрыто");

      },

      error: (socket: Socket, error: Error) => {

        console.log("💥 VPN ошибка", error);

        socket.end();

      },

    },

  });

  console.info("🟢 VPN сервис запущен");

}

/* ================================
   HTTPS Admin Panel
================================ */

async function httpsService(
  hostname: string,
  port: number,
): Promise<void> {

  serve({
    hostname,
    port,

    fetch: async (req: Request) => {

      const url = new URL(req.url);

      console.log(
        `🌐 HTTPS ${req.method} ${url.pathname}`,
      );

      if (url.pathname === "/login") {

        return new Response(
          `
<html>
<head>
<title>Remote Access Portal</title>
</head>

<body>
<h1>Remote Access Login</h1>
<form>
<input placeholder="username"/>
<input type="password"/>
<button>Login</button>
</form>
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

      }

      return new Response(
        `
<html>
<head>
<title>Remote Access Gateway</title>
</head>

<body>
<h1>Secure Remote Access</h1>
<p>Authorized users only</p>
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

  console.info(
    "🟢 HTTPS admin панель запущена",
  );

}

/* ================================
   MAIN
================================ */

async function serverRun(): Promise<void> {

  const env = loadEnv();

  await Promise.all([

    sshService(
      env.host,
      env.sshPort,
    ),

    vpnService(
      env.host,
      env.vpnPort,
    ),

    httpsService(
      env.host,
      env.httpsPort,
    ),

  ]);

}

serverRun()
  .then(() => {

    console.info(
      "🚀 Remote access сервер запущен!",
    );

  })
  .catch((error: unknown) => {

    console.error(
      "💥 Remote access сервер завершился:",
      error,
    );

    process.exit(1);

  });
