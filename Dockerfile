# syntax=docker/dockerfile:1
FROM node:alpine3.14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 80
CMD [ "node", "app.js" ]