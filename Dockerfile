# syntax=docker/dockerfile:1

# Etapa 1 - Build
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc 
    npm ci

COPY . .

RUN npm run build -- --configuration production --no-prerender


# Etapa 2 - Servir Angular
FROM node:24-alpine AS production

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist/supremenetwork-client-web/browser ./dist

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]