FROM node:17-alpine as dev

WORKDIR /opt/tigercoders/app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]