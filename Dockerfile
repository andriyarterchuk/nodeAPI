FROM node:alpine as node_ms
RUN mkdir -p /app
COPY app /app
COPY docker-entrypoint.sh /app/services/docker-entrypoint.sh
RUN chmod +x /app/services/docker-entrypoint.sh
WORKDIR /app
RUN apk add --no-cache bash \ 
  && npm install \
   && npm run build
ENTRYPOINT ["/app/services/docker-entrypoint.sh"]

FROM nginx:latest as gateway
COPY nginx.conf /etc/nginx/nginx.conf