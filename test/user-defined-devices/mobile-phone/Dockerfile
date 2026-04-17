FROM oven/bun:latest

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

COPY package.json .

RUN bun install --frozen-lockfile

COPY . .

RUN mkdir -p /app/ssl \
  && openssl req -x509 -newkey rsa:2048 \
  -keyout /app/ssl/key.pem \
  -out /app/ssl/cert.pem \
  -days 365 \
  -nodes \
  -subj "/CN=MOBILE_PHONE-01/O=Android MobilePhone/C=RU"

EXPOSE ${PORT}

CMD ["bun", "run", "start"]
