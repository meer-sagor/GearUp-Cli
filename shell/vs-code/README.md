# Visual Studio Code Installation Script

This script automates the installation of [Visual Studio Code](https://code.visualstudio.com/) on systems using `apt-get` package management, such as Ubuntu or Debian.

## Prerequisites

- **wget** and **gpg**: These tools are used to fetch and install the Microsoft GPG key and repository. The script automatically installs them if they are not already present.
- **Permissions**: The script requires `sudo` privileges to install software.
- **Operating System**: This script is designed for systems that use `apt-get`, such as Debian-based distributions.

## Script Overview

1. **install_vscode**:
    - Updates the system's package lists.
    - Installs `wget` and `gpg` if they are not already installed.
    - Downloads the Microsoft GPG key and adds it to the trusted keyrings.
    - Adds the Visual Studio Code repository to the system’s source list.
    - Installs Visual Studio Code from the official repository.

2. **Main Execution**:
    - The script checks if Visual Studio Code is already installed using `command -v code`.
    - If Visual Studio Code is already installed, it displays a message confirming this.
    - If Visual Studio Code is not installed and `apt-get` is available, the installation proceeds.
    - If `apt-get` is not available, the script exits and suggests a manual installation.

## How to Use

1. **Run the script**:
    - Make the script executable:
      ```bash
      chmod +x install_vscode.sh
      ```
    - Run the script:
      ```bash
      ./install_vscode.sh
      ```

   The script will install Visual Studio Code, and a success message will confirm the installation.

## Manual Installation

If the script does not work or `apt-get` is not available, you can install Visual Studio Code manually by following these steps:

1. **Install the Microsoft GPG key**:
   ```bash
   wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /usr/share/keyrings/microsoft-archive-keyring.gpg
