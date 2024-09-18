# Docker Compose Installation Script

This script automates the installation of [Docker Compose](https://docs.docker.com/compose/), a tool for defining and running multi-container Docker applications.

## Script Overview

The script performs the following tasks:

1. **Check if Docker Compose is already installed**:
   - Uses `command -v docker-compose` to determine if Docker Compose is installed.

2. **Install Docker Compose**:
   - Downloads the latest Docker Compose binary from GitHub.
   - Saves the binary to `/usr/local/bin/docker-compose`.
   - Sets the correct permissions to make it executable.
   - Outputs the installed version of Docker Compose.

## Prerequisites

- **Docker**: Docker Compose requires Docker to be installed. Ensure Docker is installed and running before using this script.

## How to Use

1. **Download or create the script file**:
   - Save the script to a file, e.g., `install_docker_compose.sh`.

2. **Make the script executable**:
   ```bash
   chmod +x install_docker_compose.sh
