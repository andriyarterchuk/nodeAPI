FROM node:latest as node_ms
COPY app /app
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh
WORKDIR /app
RUN npm install && npm run build
ENTRYPOINT ["/app/docker-entrypoint.sh"]

FROM nginx:latest as gateway
COPY ./.docker/nginx.conf /etc/nginx/nginx.conf