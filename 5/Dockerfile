# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the styles.css and mall.jpg files to the "public" directory
COPY styles.css public/
COPY mall.jpg public/

# Expose the port on which your Node.js application listens
EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]
