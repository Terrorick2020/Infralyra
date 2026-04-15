FROM oven/bun:latest

WORKDIR /app

COPY package.json .

RUN bun install --frozen-lockfile

COPY . .

EXPOSE ${PORT}

CMD ["bun", "run", "start"]
