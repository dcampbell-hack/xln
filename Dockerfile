FROM node:16

WORKDIR /

COPY package*.json ./

RUN yarn setUp

COPY . .

ENV PORT=8001

EXPOSE 8001

CMD [ "yarn", "dev" ]


