# Use the official Node.js 18 image as the base image
FROM node:20 AS builder

# Install necessary packages for SSH
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && mkdir -p /var/run/sshd \
    && chmod 0755 /var/run/sshd

# Copy the SSH configuration file into the container
COPY sshd_config /etc/ssh/sshd_config

# Set the working directory
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Ensure entrypoint script is executable
RUN chmod +x /usr/src/app/entrypoint.sh

# Install dependencies
RUN npm install

# Build the Next.js application
RUN npm run build:prod

# Use a minimal Node.js 18 image to run the application
FROM node:18-slim AS runner

# Install SSH server
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && mkdir -p /var/run/sshd \
    && chmod 0755 /var/run/sshd

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
# COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/next.config.ts ./

# Ensure entrypoint script is copied
COPY --from=builder /usr/src/app/entrypoint.sh ./

# Copy the SSH configuration file into the container
COPY sshd_config /etc/ssh/sshd_config

# Expose the port the app runs on
EXPOSE 3000 2222

# Start the Next.js application
ENTRYPOINT ["./entrypoint.sh"]
