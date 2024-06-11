# frontend/Dockerfile

# Stage 1: Build the React application
FROM node:16 as build

WORKDIR /app

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Ensure Bun's binary path is set
ENV PATH="/root/.bun/bin:${PATH}"

# Copy package.json and bun.lockb first to leverage Docker cache
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Stage 2: Serve the built application using Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
