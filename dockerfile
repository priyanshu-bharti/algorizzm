# Base image for dependencies
FROM node:alpine AS base

# Stage for building the application
FROM base AS build
WORKDIR /node/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Install Next.js globally (optional, but not needed for building standalone)
RUN npm install -g next;

# Copy the source code into the container
COPY . .

# Build the Next.js application
RUN npm run build;

# Final stage: Production image
FROM base AS production

WORKDIR /node/app

# Copy the standalone build output
COPY --from=build /node/app/.next/standalone ./
COPY --from=build /node/app/.next/static ./.next/static
COPY --from=build /node/app/public ./public

# Expose the necessary port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
