FROM nginx:alpine

RUN apk update && apk add --no-cache bash curl

RUN rm -rf /usr/share/nginx/html/*

COPY ./conf.d/default.conf /etc/nginx/conf.d/default.conf

COPY healthcheck.sh /healthcheck.sh
RUN chmod +x /healthcheck.sh

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=3s CMD /healthcheck.sh

CMD ["nginx", "-g", "daemon off;"]