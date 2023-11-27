FROM node:18.6.0-alpine3.15

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

EXPOSE 5137

CMD ["npm", "run", "dev"]
