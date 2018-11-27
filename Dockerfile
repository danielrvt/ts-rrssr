FROM node:10.13.0-alpine

COPY ./ /app/

WORKDIR /app

RUN yes | npm install
RUN npx webpack --config webpack.client.js 
RUN npx webpack --config webpack.server.js

ENV PORT=8087

EXPOSE $PORT

ENTRYPOINT node /app/build/server_bundle.js