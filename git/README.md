# Git Installation Script

This script checks if Git is installed on the system and installs it if it’s not already present, using the appropriate package manager for your Linux distribution.

## Prerequisites

- **OS**: This script supports multiple Linux distributions, including:
    - Debian/Ubuntu
    - CentOS/RHEL
    - Fedora
    - SUSE
    - Arch Linux
- **Permissions**: The script requires `sudo` privileges to install Git.

## Script Overview

1. **install_git**:
    - Installs Git using the package manager available on the system.
    - The script supports the following package managers:
        - `apt-get` (Debian/Ubuntu)
        - `yum` (CentOS/RHEL)
        - `dnf` (Fedora)
        - `zypper` (SUSE)
        - `pacman` (Arch Linux)
    - If an unsupported package manager is detected, the script exits with an error, recommending manual installation.

2. **Main Execution**:
    - The script checks whether Git is already installed using `command -v git`.
    - If Git is already installed, it prints a message indicating this.
    - If not installed, the `install_git` function is invoked to install Git.

## How to Use

1. Clone or download the script to your local machine.
2. Make the script executable:
   ```bash
   chmod +x install_git.sh
