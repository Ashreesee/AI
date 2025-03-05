# Use the official Node.js 18 image as the base
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before running npm install
COPY package.json package-lock.json ./

# Install dependencies using npm 9
RUN npm install -g npm@9 && npm ci

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Nginx image for serving the built React app
FROM nginx:alpine

# Copy the built app from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
