# Use nginx to serve plain HTML/JS/CSS
FROM nginx:alpine

# Copy all files into nginx's public directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g"]
