#!/bin/bash

check_docker_installed() {
    if ! command -v docker &>/dev/null; then
        return 1
    else
        return 0
    fi
}

install_docker() {
    sudo apt update
    sudo apt install -y docker.io

    # Add the current user to the docker group to avoid permission issues
    sudo usermod -aG docker "$USER"

    # Restart Docker service to apply the changes
    sudo systemctl enable docker
    sudo systemctl start docker

    # Inform the user to log out and log back in
    echo "Docker has been installed. Please log out and log back in to apply group changes."

    exit 0
}
if check_docker_installed; then
    echo "Docker is already installed."
else
    install_docker
fi
