FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./html/404/404.html /usr/share/nginx/html/errors/404.html
COPY ./html/500/500.html /usr/share/nginx/html/errors/500.html

CMD ["nginx", "-g", "daemon off;"]
