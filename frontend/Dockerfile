# Use only Nginx for production
FROM nginx:alpine

# Copy the already built Angular files
COPY ./dist/angular-15-crud /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
