# Docker Installation Script

This script checks if Docker is installed on the system and installs it if it’s not already installed.

## Prerequisites

- **OS**: This script is designed for systems running Ubuntu or other Debian-based distributions.
- **Permissions**: The script requires `sudo` privileges to install Docker.

## Script Breakdown

1. **check_docker_installed**:
    - This function checks if Docker is installed by running `command -v docker`.
    - If Docker is not found, the function returns `1`, indicating Docker is not installed.
    - If Docker is found, the function returns `0`.

2. **install_docker**:
    - This function installs Docker using the package manager `apt`.
    - It runs `sudo apt install docker.io` to install Docker.

3. **Main Execution**:
    - The script checks whether Docker is already installed.
    - If Docker is installed, it prints "Docker is already installed."
    - If Docker is not installed, it proceeds to install Docker using the `install_docker` function.

## How to Use

1. Clone or download the script to your local machine.
2. Make the script executable:
   ```bash
   chmod +x install_docker.sh
