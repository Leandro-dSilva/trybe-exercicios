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

