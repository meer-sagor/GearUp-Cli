#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install a package if it's not installed
install_package() {
    local package=$1
    if ! command_exists "$package"; then
        echo "$package is not installed on your machine."
        sudo apt-get update
        sudo apt-get install -y "$package"
    fi
}

# Function to install Oh-My-Zsh
install_oh_my_zsh() {
    if [ ! -d "$HOME/.oh-my-zsh" ]; then
        echo "Oh-My-Zsh is not installed on your machine."
        sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    fi
}

# Check and install Zsh
if ! command_exists zsh; then
    install_package zsh
    # Change default shell to Zsh
    chsh -s "$(which zsh)"
    echo "Zsh installed successfully. Please restart your terminal."
else
    echo "Zsh is already installed on your machine."
fi

# Check and install Oh-My-Zsh
install_oh_my_zsh
echo "Zsh and Oh-My-Zsh installation checks completed."

