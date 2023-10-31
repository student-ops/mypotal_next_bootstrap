# nginxの安定版を使用します
FROM nginx:stable-alpine

# 'out'ディレクトリの内容をnginxのhtmlディレクトリにコピーします。
COPY ./my-project/out /usr/share/nginx/html/

# nginxの設定
RUN echo "worker_processes  1;" > /etc/nginx/nginx.conf && \
    echo "events {" >> /etc/nginx/nginx.conf && \
    echo "    worker_connections  1024;" >> /etc/nginx/nginx.conf && \
    echo "}" >> /etc/nginx/nginx.conf && \
    echo "http {" >> /etc/nginx/nginx.conf && \
    echo "    server {" >> /etc/nginx/nginx.conf && \
    echo "        listen 80;" >> /etc/nginx/nginx.conf && \
    echo "        server_name localhost;" >> /etc/nginx/nginx.conf && \
    echo "        location / {" >> /etc/nginx/nginx.conf && \
    echo "            root   /usr/share/nginx/html;" >> /etc/nginx/nginx.conf && \
    echo "            index  index.html index.htm;" >> /etc/nginx/nginx.conf && \
    echo "        }" >> /etc/nginx/nginx.conf && \
    echo "    }" >> /etc/nginx/nginx.conf && \
    echo "}" >> /etc/nginx/nginx.conf

# 80番ポートを開放
EXPOSE 80

# Nginxを起動
CMD ["nginx", "-g", "daemon off;"]
