FROM debian:12-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    iputils-ping \
    dnsutils \
    netcat-openbsd \
    bash \
    cron \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m -s /bin/bash device \
    && echo "device:device123" | chpasswd

WORKDIR /home/device

COPY traffic.sh /home/device/traffic.sh
RUN chmod +x /home/device/traffic.sh

RUN echo "* * * * * /home/device/traffic.sh" > /etc/cron.d/traffic
RUN chmod 0644 /etc/cron.d/traffic

CMD cron && tail -f /dev/null
