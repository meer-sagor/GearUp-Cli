#!/bin/bash

check_docker_installed() {
    if ! command -v docker &>/dev/null; then
        return 1
    else
        return 0
    fi
}

install_docker() {

    sudo apt install docker.io

    exit 0
}

if check_docker_installed; then
    echo "docker is already installed."
else
    install_docker
fi