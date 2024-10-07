#!/bin/bash

# Function to install curl
install_curl() {
    echo "Installing curl..."

    if [ -x "$(command -v apt-get)" ]; then
        # For Debian/Ubuntu
        sudo apt-get update
        sudo apt-get install -y curl

    elif [ -x "$(command -v yum)" ]; then
        # For CentOS/RHEL
        sudo yum install -y curl

    elif [ -x "$(command -v dnf)" ]; then
        # For Fedora
        sudo dnf install -y curl

    elif [ -x "$(command -v zypper)" ]; then
        # For SUSE
        sudo zypper install -y curl

    elif [ -x "$(command -v pacman)" ]; then
        # For Arch Linux
        sudo pacman -Syu curl --noconfirm

    else
        echo "Unsupported package manager. Please install curl manually."
        exit 1
    fi

    echo "curl installed successfully!"
}

# Check if curl is already installed
if command -v curl &> /dev/null; then
    echo "curl is already installed!"
else
    install_curl
fi
