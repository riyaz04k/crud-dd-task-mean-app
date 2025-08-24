# -------------------------
# 1. Build Angular app
# -------------------------
FROM node:20 AS build

WORKDIR /app

# Copy package files & install dependencies
COPY package*.json ./
RUN npm install

# Copy source code & build for production
COPY . .
RUN npm run build -- --configuration production

# -------------------------
# 2. Serve with Nginx
# -------------------------
FROM nginx:alpine

# Copy built Angular app to Nginx html folder
COPY --from=build /app/dist/angular-15-crud /usr/share/nginx/html

# Expose Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

