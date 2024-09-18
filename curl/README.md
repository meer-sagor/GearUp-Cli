# cURL Installation Script

This script checks if `cURL` is installed on the system and installs it if it’s not already present, using the appropriate package manager for your Linux distribution.

## Prerequisites

- **OS**: This script supports multiple Linux distributions, including:
    - Debian/Ubuntu
    - CentOS/RHEL
    - Fedora
    - SUSE
    - Arch Linux
- **Permissions**: The script requires `sudo` privileges to install `cURL`.

## Script Overview

1. **install_curl**:
    - Installs `cURL` using the package manager available on the system.
    - The script detects and installs using one of the following package managers:
        - `apt-get` (Debian/Ubuntu)
        - `yum` (CentOS/RHEL)
        - `dnf` (Fedora)
        - `zypper` (SUSE)
        - `pacman` (Arch Linux)
    - If an unsupported package manager is detected, the script exits with an error message.

2. **Main Execution**:
    - Checks if `cURL` is already installed using `command -v curl`.
    - If `cURL` is already installed, the script prints a message indicating this.
    - If not installed, the `install_curl` function is invoked to install `cURL`.

## How to Use

1. Clone or download the script to your local machine.
2. Make the script executable:
   ```bash
   chmod +x install_curl.sh
