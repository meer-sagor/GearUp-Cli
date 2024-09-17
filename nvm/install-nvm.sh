#!/bin/bash

# Function to install nvm
install_nvm() {
    echo "Installing nvm..."

    # Download and install nvm script from GitHub
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

    echo "nvm installed successfully!"
    echo "Now you can install Node.js using: nvm install --lts"
}

# Check if nvm is already installed
if command -v nvm &> /dev/null; then
    echo "nvm is already installed!"
else
    install_nvm
fi
