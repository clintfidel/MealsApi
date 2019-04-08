FROM node:7
WORKDIR /app
COPY package*.json .
RUN yarn global add typescript && yarn install
COPY . .
CMD yarn start
EXPOSE 5600