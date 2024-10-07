# Powerline Fonts Installation Script

This script installs Powerline fonts on systems that use `apt-get` as the package manager. Powerline fonts are useful for enhancing the appearance of terminal prompts and other applications, especially when using tools like `vim`, `tmux`, and `zsh`.

## Prerequisites

- **OS**: This script is designed for systems that support `apt-get`, such as Ubuntu or Debian-based distributions.
- **Permissions**: The script requires `sudo` privileges to install Powerline fonts.

## Script Overview

1. **install_powerline_fonts**:
    - This function updates the package lists and installs Powerline fonts using `apt-get`.
    - The installation is done silently with the `-y` flag, which automatically confirms the installation.

2. **Main Execution**:
    - The script checks whether `apt-get` is available on the system using `command -v apt-get`.
    - If `apt-get` is available, it proceeds to install Powerline fonts by calling `install_powerline_fonts`.
    - If `apt-get` is not available, the script exits with an error, and manual installation is recommended.

## How to Use

1. Clone or download the script to your local machine.
2. Make the script executable:
   ```bash
   chmod +x install_powerline_fonts.sh
