FROM node:14-alpine AS build

# Definimos o workdir
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# multi-stage build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html

# porta
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Para criar uma imagem
# docker image build -t react-dockerized:v1 .

# Para rodar a imagem
# docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1
