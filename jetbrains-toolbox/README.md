# JetBrains Toolbox Installation Script

This script installs the JetBrains Toolbox application on your system. JetBrains Toolbox is a convenient tool for managing JetBrains products such as IntelliJ IDEA, PyCharm, WebStorm, and more.

## Prerequisites

- **wget**: Ensure that `wget` is installed on your system before running the script.
- **Permissions**: The script requires `sudo` privileges for certain operations, though this particular script avoids the use of `sudo` for most of its actions.
- **Operating System**: This script is designed for Linux systems.

## Script Overview

1. **install_jetbrains_toolbox**:
    - Downloads the JetBrains Toolbox tarball from the official JetBrains website.
    - Extracts the tarball into a defined installation directory.
    - Runs the JetBrains Toolbox application from the extracted location.
    - Optionally removes the tarball and creates a symlink for easy access.

2. **Main Execution**:
    - Checks if JetBrains Toolbox is already installed using `command -v jetbrains-toolbox`.
    - If not installed, it checks if `wget` is available on the system and then proceeds with the installation.
    - If `wget` is not available, the script exits with an error, requesting manual installation of `wget`.

## How to Use

1. **Ensure `wget` is installed**:  
   Before running the script, ensure that `wget` is installed on your system. If it’s not installed, use the following commands:
    - For Ubuntu/Debian:
      ```bash
      sudo apt-get update && sudo apt-get install wget
      ```
    - For Fedora:
      ```bash
      sudo dnf install wget
      ```
    - For CentOS/RHEL:
      ```bash
      sudo yum install wget
      ```
    - For Arch Linux:
      ```bash
      sudo pacman -S wget
      ```

2. **Run the script**:
    - Make the script executable:
      ```bash
      chmod +x install_jetbrains_toolbox.sh
      ```
    - Run the script:
      ```bash
      ./install_jetbrains_toolbox.sh
      ```

   The script will download the latest version of JetBrains Toolbox, extract it, and launch the application. A message will confirm the successful installation.
