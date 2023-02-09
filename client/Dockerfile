# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# RUN npm run build
CMD ["npm", "run", "start"]

# # Install NGINX
# RUN apt-get update && apt-get install -y nginx

# # Copy the built Create React App files to the NGINX default folder
# COPY build /var/www/html

# # Expose the NGINX port
# EXPOSE 80


# # Start NGINX
# CMD ["nginx", "-g", "daemon off;"]