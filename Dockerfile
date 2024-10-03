# Stage 1: Build the application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the application using a lightweight HTTP server
FROM nginx:alpine AS serve

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
