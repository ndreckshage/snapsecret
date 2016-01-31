FROM node:5.4.1-slim

RUN apt-get update -y && \
    apt-get install -y gcc make build-essential

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
RUN NODE_ENV=production npm install

COPY . /usr/src/app

EXPOSE 3000
CMD ["npm", "start"]
