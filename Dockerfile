# Build Stage
FROM node:18 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci  # Faster and more reliable than npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Debugging: Check if the build directory exists
RUN ls -la /app/build || echo "Build directory not found!"

# Production Stage
FROM nginx:alpine


# Ensure the 'build' directory exists before copying
RUN mkdir -p /usr/share/nginx/html

# Copy built React app to Nginx's serving directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
