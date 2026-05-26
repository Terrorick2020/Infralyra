FROM golang:1.24-bullseye

RUN apt-get update && apt-get install -y libpcap-dev ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN go mod tidy

RUN go build -o infraserver ./cmd/app

CMD ["./infraserver"]
