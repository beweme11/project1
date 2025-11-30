# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the html file to the nginx server directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 (Standard web port)
EXPOSE 80
