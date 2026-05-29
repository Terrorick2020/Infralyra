FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY ./ssl/ /etc/nginx/certs/

CMD ["nginx", "-g", "daemon off;"]
