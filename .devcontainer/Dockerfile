FROM node:18

# Install essential tools
RUN apt-get update && apt-get -y install git procps

# Set working directory
WORKDIR /workspace

# Add a non-root user to prevent permission issues
# The 'node' user already exists in the base image
USER node
