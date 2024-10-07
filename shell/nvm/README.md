# NVM Installation Script

This script installs [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm), which allows you to manage multiple versions of Node.js on your system.

## Prerequisites

- **curl**: Ensure that `curl` is installed on your system to download the NVM installation script.
- **Permissions**: The script does not require `sudo` privileges, as NVM is installed in the user’s home directory.
- **Operating System**: This script is designed for Linux systems or any Unix-like environment with bash shell support.

## Script Overview

1. **install_nvm**:
   - Downloads the NVM installation script from the official NVM GitHub repository using `curl`.
   - Executes the script to install NVM in the user's environment.
   - After installation, you can easily install Node.js using NVM.

2. **Main Execution**:
   - The script checks if NVM is already installed using `command -v nvm`.
   - If NVM is detected, it prints a message indicating that NVM is already installed.
   - If NVM is not installed, it proceeds with the installation by invoking the `install_nvm` function.

## How to Use

1. **Ensure `curl` is installed**:  
   Before running the script, make sure `curl` is installed on your system. You can install it with the following commands:

   - For Ubuntu/Debian:
     ```bash
     sudo apt-get update && sudo apt-get install curl
     ```
   - For Fedora:
     ```bash
     sudo dnf install curl
     ```
   - For CentOS/RHEL:
     ```bash
     sudo yum install curl
     ```
   - For Arch Linux:
     ```bash
     sudo pacman -S curl
     ```

2. **Run the script**:
   - Make the script executable:
     ```bash
     chmod +x install_nvm.sh
     ```
   - Run the script:
     ```bash
     ./install_nvm.sh
     ```

   The script will download and install NVM in your system. A message will confirm the successful installation.

## Post Installation

- **Install Node.js**:  
  Once NVM is installed, you can use it to install Node.js:
   ```bash
   nvm install --lts
