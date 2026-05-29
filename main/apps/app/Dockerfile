FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

CMD ["bun", "run", "start"]
