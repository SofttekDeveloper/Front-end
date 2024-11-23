FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache git && \
    git clone https://github.com/JCUSDeveloper/FrontendAngular.git . 

RUN npm install

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]