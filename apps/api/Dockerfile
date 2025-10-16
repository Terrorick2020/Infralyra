# 1. Берём Linux-образ с Go
FROM golang:1.21-bullseye

# 2. Устанавливаем libpcap-dev
RUN apt-get update && apt-get install -y libpcap-dev ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# 3. Создаём рабочую директорию и копируем проект
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .

# 4. Сборка Go приложения
RUN go build -o sniffer .

# 5. Точка входа
CMD ["./sniffer"]