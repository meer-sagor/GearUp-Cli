#!/bin/bash

# Function to install Visual Studio Code
install_vscode() {
    echo "Installing Visual Studio Code..."

    # Install prerequisites
    sudo apt-get update
    sudo apt-get install -y wget gpg

    # Download and install Microsoft GPG key
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /usr/share/keyrings/microsoft-archive-keyring.gpg

    # Add the VS Code repository
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-archive-keyring.gpg] https://packages.microsoft.com/repos/vscode stable main" | sudo tee /etc/apt/sources.list.d/vscode.list

    # Update package lists and install VS Code
    sudo apt-get update
    sudo apt-get install -y code

    echo "Visual Studio Code installed successfully!"
}

# Check if Visual Studio Code is already installed
if command -v code &> /dev/null; then
    echo "Visual Studio Code is already installed!"
else
    # Check if apt-get is available
    if command -v apt-get &> /dev/null; then
        install_vscode
    else
        echo "apt-get is not available. Please use the manual installation method."
        exit 1
    fi
fi
