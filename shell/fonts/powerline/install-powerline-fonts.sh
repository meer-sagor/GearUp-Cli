#!/bin/bash

# Function to install Powerline fonts using apt-get
install_powerline_fonts() {
    echo "Installing Powerline fonts..."

    # Update package lists
    sudo apt-get update

    # Install Powerline fonts
    sudo apt-get install -y fonts-powerline

    echo "Powerline fonts installed successfully!"
}

# Check if apt-get is available
if command -v apt-get &> /dev/null; then
    install_powerline_fonts
else
    echo "apt-get is not available. Please use the manual installation method."
    exit 1
fi
