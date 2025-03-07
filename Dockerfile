# Stage 1: Build the React App
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Stage 2: Serve the App with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# ✅ Create the missing /opt/resource/out file
RUN mkdir -p /opt/resource && echo '#!/bin/sh\necho "Executing resource out script"' > /opt/resource/out && chmod +x /opt/resource/out

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
