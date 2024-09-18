#!/bin/bash

# Function to display the menu
display_menu() {
    echo "Select the software to install (separate choices with space):"
    echo "[1] Docker"
    echo "[2] cURL"
    echo "[3] Powerline Fonts"
    echo "[4] Git"
    echo "[5] JetBrains Toolbox"
    echo "[6] NVM (Node Version Manager)"
    echo "[7] Visual Studio Code"
    echo "[8] Zsh Plugins"
    echo "[9] Docker Compose"
    echo "[0] Exit"
}

# Function to run the selected scripts
run_scripts() {
    local choices=($@)
    for choice in "${choices[@]}"; do
        case $choice in
            1) ./docker/install_docker.sh ;;
            2) ./curl/install_curl.sh ;;
            3) ./powerline_fonts/install_powerline_fonts.sh ;;
            4) ./git/install_git.sh ;;
            5) ./jetbrains_toolbox/install_jetbrains_toolbox.sh ;;
            6) ./nvm/install_nvm.sh ;;
            7) ./vscode/install_vscode.sh ;;
            8) ./zsh_plugins/install_zsh_plugins.sh ;;
            9) ./docker-compose/install_docker_compose.sh ;;
            0) echo "Exiting..."; exit 0 ;;
            *) echo "Invalid choice: $choice. Please select a valid option." ;;
        esac
    done
}

# Main script loop
while true; do
    display_menu
    read -p "Enter your choices: " -a choices
    run_scripts "${choices[@]}"
done
