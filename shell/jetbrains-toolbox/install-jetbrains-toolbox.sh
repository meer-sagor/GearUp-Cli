#!/bin/bash

# Function to install JetBrains Toolbox
install_jetbrains_toolbox() {
    echo "Installing JetBrains Toolbox..."

    # Define the URL for the JetBrains Toolbox tarball
    TOOLBOX_URL="https://download.jetbrains.com/toolbox/jetbrains-toolbox-2.4.2.32922.tar.gz"
    TOOLBOX_FILE="${TOOLBOX_URL##*/}"  # Extract the file name from URL

    # Define the installation directory
    INSTALL_DIR="$PWD/toolbox"

    # Create the installation directory if it doesn't exist
    mkdir -p "$INSTALL_DIR"

    # Download the JetBrains Toolbox tarball
    wget -O "$INSTALL_DIR/$TOOLBOX_FILE" "$TOOLBOX_URL"
    
    # Extract the tarball
    tar -xzf "$INSTALL_DIR/$TOOLBOX_FILE" -C "$INSTALL_DIR"

    cd "$INSTALL_DIR/$TOOLBOX_FILE" ./jetbrains-toolbox

    # Remove the tarball
    # rm -rf "$INSTALL_DIR"

    # Create a symlink to the JetBrains Toolbox binary in the user's PATH
    # ln -s "$INSTALL_DIR/jetbrains-toolbox*/jetbrains-toolbox" "$HOME/.local/bin/jetbrains-toolbox"

    echo "JetBrains Toolbox installed successfully!"
}

# Check if the JetBrains Toolbox binary is already available
if command -v jetbrains-toolbox &> /dev/null; then
    echo "JetBrains Toolbox is already installed!"
else
    # Check if wget is available
    if command -v wget &> /dev/null; then
        install_jetbrains_toolbox
    else
        echo "wget is not available. Please install wget first."
        exit 1
    fi
fi
