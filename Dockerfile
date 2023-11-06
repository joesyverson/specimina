FROM nginx
COPY . /usr/share/nginx/html/
COPY etc/nginx/conf.d/default.conf /etc/nginx/conf.d/
EXPOSE 8080