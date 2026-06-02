FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /etc/nginx/certs && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/dummy.key \
    -out /etc/nginx/certs/dummy.crt \
    -subj "/CN=localhost"

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./html/404/404.html /usr/share/nginx/html/errors/404.html
COPY ./html/500/500.html /usr/share/nginx/html/errors/500.html

CMD ["nginx", "-g", "daemon off;"]
