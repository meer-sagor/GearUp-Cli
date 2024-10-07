# Zsh Plugin Installation Script

This script automates the installation of popular Zsh plugins for users of [Oh My Zsh](https://ohmyz.sh/).

## Plugins Included

The script installs the following Zsh plugins:

1. **zsh-autosuggestions**:  
   [zsh-users/zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)  
   Provides suggestions for commands based on history.

2. **zsh-syntax-highlighting**:  
   [zsh-users/zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)  
   Highlights commands as they're typed for better readability.

3. **fast-syntax-highlighting**:  
   [zdharma-continuum/fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting)  
   Provides high-performance syntax highlighting.

4. **zsh-autocomplete**:  
   [marlonrichert/zsh-autocomplete](https://github.com/marlonrichert/zsh-autocomplete)  
   Adds intelligent autocompletion features to Zsh.

## Prerequisites

- **Zsh**: Ensure Zsh is installed on your system.
- **Oh My Zsh**: This script requires [Oh My Zsh](https://ohmyz.sh/) to manage plugins.

## Script Overview

The script does the following:

1. Checks if Zsh is installed. If not, it will prompt the user to install Zsh before proceeding.
2. Verifies if Oh My Zsh is installed in the default custom directory (`~/.oh-my-zsh/custom`).
3. For each plugin:
   - Checks if the plugin is already installed.
   - If not, clones the plugin repository into the Oh My Zsh custom plugins directory.
4. Displays a message if a plugin is already installed.

## How to Use

1. **Clone this repository** (if applicable) or download the script directly.
2. **Make the script executable**:
   ```bash
   chmod +x install_zsh_plugins.sh
