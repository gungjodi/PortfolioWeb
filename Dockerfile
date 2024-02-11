FROM node:18-alpine as build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM node:18-alpine as runner

WORKDIR /app

RUN npm install serve -g

COPY --from=build /app/dist /app

EXPOSE 3000

CMD ["serve","-s","/app"]