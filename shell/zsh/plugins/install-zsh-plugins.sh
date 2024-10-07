#!/bin/bash

# Variables
ZSH_CUSTOM=${ZSH_CUSTOM:-~/.oh-my-zsh/custom}  # Default Oh My Zsh custom directory

# Plugins
PLUGINS=(
    "zsh-autosuggestions|https://github.com/zsh-users/zsh-autosuggestions.git"
    "zsh-syntax-highlighting|https://github.com/zsh-users/zsh-syntax-highlighting.git"
    "fast-syntax-highlighting|https://github.com/zdharma-continuum/fast-syntax-highlighting.git"
    "zsh-autocomplete|https://github.com/marlonrichert/zsh-autocomplete.git"
)

# Function to install a Zsh plugin
install_zsh_plugin() {
    local plugin_name=$1
    local plugin_repo=$2
    local plugin_dir="$ZSH_CUSTOM/plugins/$plugin_name"

    echo "Installing $plugin_name plugin..."

    # Check if Oh My Zsh is installed
    if [ ! -d "$ZSH_CUSTOM" ]; then
        echo "Oh My Zsh is not installed. Please install Oh My Zsh first."
        exit 1
    fi

    # Clone the plugin if not already installed
    if [ ! -d "$plugin_dir" ]; then
        git clone $plugin_repo $plugin_dir
        echo "$plugin_name plugin installed successfully!"
    else
        echo "$plugin_name is already installed!"
    fi
}

# Check if Zsh is installed
if ! command -v zsh &> /dev/null; then
    echo "Zsh is not installed. Please install Zsh first."
    exit 1
fi

# Install all plugins
for plugin in "${PLUGINS[@]}"; do
    IFS="|" read plugin_name plugin_repo <<< "$plugin"
    install_zsh_plugin "$plugin_name" "$plugin_repo"
done
