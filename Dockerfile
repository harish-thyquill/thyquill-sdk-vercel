# Use the official Node.js 20 image as the base image
FROM node:20 AS builder

# Install necessary packages for SSH, nginx and file editing
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssh-server nginx certbot python3-certbot-nginx vim nano sed \
    && echo "root:Docker!" | chpasswd \
    && mkdir -p /var/run/sshd \
    && chmod 0755 /var/run/sshd

# Copy the SSH configuration file into the container
COPY sshd_config /etc/ssh/sshd_config

# Copy nginx configuration
COPY stage.nginx.conf /etc/nginx/sites-available/default

# Set the working directory
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Ensure entrypoint script is executable
RUN chmod +x /usr/src/app/entrypoint.sh

# Install dependencies
RUN npm install

# Build the Next.js application
RUN npm run build:stage

# Use a minimal Node.js 18 image to run the application
FROM node:18-slim AS runner

# Install SSH server, nginx, certbot, cron and file editing tools
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssh-server nginx certbot python3-certbot-nginx cron vim nano sed \
    && echo "root:Docker!" | chpasswd \
    && mkdir -p /var/run/sshd /var/www/certbot \
    && chmod 0755 /var/run/sshd /var/www/certbot

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/next.config.ts ./

# Ensure entrypoint script is copied
COPY --from=builder /usr/src/app/entrypoint.sh ./

# Copy the SSH configuration file into the container
COPY sshd_config /etc/ssh/sshd_config

# Copy nginx configuration
COPY stage.nginx.conf /etc/nginx/sites-available/default

# Expose the ports for Next.js, SSH, and nginx
EXPOSE 3000 2222 80 443

# Add Certbot cron job for automatic renewal
RUN echo "0 0,12 * * * certbot renew --quiet && nginx -s reload" >> /etc/crontab

# Start the cron service in the background, then run the entrypoint script
CMD service cron start && ./entrypoint.sh
