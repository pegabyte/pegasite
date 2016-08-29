FROM mhart/alpine-node:6

LABEL name "pegabyte"

WORKDIR /src
ADD . .

EXPOSE 80
RUN npm install -g yarn
RUN yarn build
RUN yarn install --production

CMD ["npm", "start"]
