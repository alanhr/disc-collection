FROM node:10-alpine

EXPOSE 3000

RUN apk update && apk upgrade && \
	apk add --no-cache bash git openssh

ADD .env package.json yarn.lock /app/
ADD .server /app/.server
ADD .next /app/.next

WORKDIR /app

RUN npm i -g yarn
RUN yarn install

ENV NODE_ENV production

CMD ["yarn","start"]
