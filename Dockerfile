
# Etapa 1: Build Angular
FROM node:18-bullseye AS build-stage

WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build --prod

# Etapa 2: Servir app con NGINXd
FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist/Frontend-Activos-Fijos /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
