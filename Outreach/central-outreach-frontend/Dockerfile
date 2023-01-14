# Dockerfile to build and deploy VLabs Central Outreachportal  React Js frontend app
# Stage 1 : Build
FROM node:12.13.0 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm ci --quiet && npm run build

# Stage 2 nginx serving
FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]



