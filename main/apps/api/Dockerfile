FROM golang:1.21-bullseye

RUN apt-get update && apt-get install -y libpcap-dev ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .

RUN go build -o sniffer .

CMD ["./sniffer"]
