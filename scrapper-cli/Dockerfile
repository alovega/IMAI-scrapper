FROM node:16.18-alpine AS build
WORKDIR /app/scrapper-cli
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli@14.2.8 && npm install  && ng build

COPY . .

FROM nginx:1.17.1-alpine
WORKDIR /app
COPY --from=build /app/scrapper-cli/dist/scrapper-cli /usr/share/nginx/html