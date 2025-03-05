# Use an official Node.js runtime as a parent image
FROM node:18 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Ensure the build directory is created
RUN npm run build && ls -la build  # Debugging: List contents of 'build' folder

# Use Nginx to serve the built app
FROM nginx:alpine

# Ensure the 'build' directory exists before copying
RUN mkdir -p /usr/share/nginx/html

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
