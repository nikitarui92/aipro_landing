FROM node:14 as build

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci
COPY . .
RUN npm run prod

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
