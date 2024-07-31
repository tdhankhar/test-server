FROM node:20

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmjs.org/ && npm install

ENTRYPOINT ["npm", "run"]

CMD ["start"]