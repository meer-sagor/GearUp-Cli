#!/bin/bash

# Function to install git
install_git() {
    echo "Installing git..."

    if [ -x "$(command -v apt-get)" ]; then
        # For Debian/Ubuntu
        sudo apt-get update
        sudo apt-get install -y git

    elif [ -x "$(command -v yum)" ]; then
        # For CentOS/RHEL
        sudo yum install -y git

    elif [ -x "$(command -v dnf)" ]; then
        # For Fedora
        sudo dnf install -y git

    elif [ -x "$(command -v zypper)" ]; then
        # For SUSE
        sudo zypper install -y git

    elif [ -x "$(command -v pacman)" ]; then
        # For Arch Linux
        sudo pacman -Syu git --noconfirm

    else
        echo "Unsupported package manager. Please install git manually."
        exit 1
    fi

    echo "git installed successfully!"
}

# Check if git is already installed
if command -v git &> /dev/null; then
    echo "git is already installed!"
else
    install_git
fi
