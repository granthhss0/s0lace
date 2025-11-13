# Use a lightweight web server
FROM nginx:alpine

# Copy website files into nginx container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
