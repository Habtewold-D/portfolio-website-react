# Use Node.js 18 LTS as required by dependencies
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and build the app in one layer
COPY . .
RUN npm install && npm run build

# Install serve to run the app
RUN npm install -g serve@14.2.0

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"]
