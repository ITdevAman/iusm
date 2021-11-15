FROM nginx:latest

WORKDIR /app

COPY /out /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]