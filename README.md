# OS Setup Automation

This repository contains scripts for automating the installation of various software on Linux systems. Each software has its own directory with a specific installation script and a corresponding `README.md` file.

## Available Software

- **Docker**: Install Docker for container management.
- **cURL**: Install cURL for transferring data with URLs.
- **Powerline Fonts**: Install Powerline fonts for enhanced terminal appearance.
- **Git**: Install Git for version control.
- **JetBrains Toolbox**: Install JetBrains Toolbox for managing JetBrains IDEs.
- **NVM (Node Version Manager)**: Install NVM for managing Node.js versions.
- **Visual Studio Code**: Install Visual Studio Code, a popular code editor.
- **Zsh Plugins**: Install various Zsh plugins for enhanced shell functionality.
- **Docker Compose**: Install Docker Compose for managing multi-container Docker applications.

## Setup Script

The `setup.sh` script in the root directory allows you to choose which software to install. Follow these steps to use it:

1. **Make the script executable**:
   ```bash
   chmod +x setup.sh
2. **Run the script:**

    ```bash
    ./setup.sh
   
3. **Follow the on-screen prompts** to select the software you want to install.

## Directory Structure
Each directory in this repository corresponds to a specific piece of software and contains:

1. **install_*.sh:** The installation script for that software.
2. **README.md:** Documentation for the software and its installation script.

## Contributing
Feel free to contribute to the repository by adding new installation scripts or improving existing ones. Please ensure that any new scripts follow the same structure and include a corresponding **README.md.**

## License
This project is open source and available under the MIT License.
