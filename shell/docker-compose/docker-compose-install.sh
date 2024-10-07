#!/bin/bash

check_docker_compose_installed() {
    if ! command -v docker-compose &>/dev/null; then
        return 1
    else
        return 0
    fi
}

install_docker_compose() {
    # Install docker-compose
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

    # permission
    sudo chmod +x /usr/local/bin/docker-compose

    # Output compose version
    docker-compose -v
}

if check_docker_compose_installed; then
    echo "docker-compose is already installed."
else
    install_docker_compose
fi