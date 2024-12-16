# Gearup-CLI Documentation

## Overview
The gearup-cli is a tool designed to simplify and speed up the setup process for development environments. It automates the installation of essential tools, saving time and reducing manual effort.

### Current Features
- gearup install docker
- gearup install docker-compose
- gearup tunnel

### Planned Features
- Install curl
- Install git
- Install nvm
- Install zsh
- Additional tools (to be determined)

---

## Installation

### Prerequisites
- A Unix-based operating system (Linux, macOS)
- Basic knowledge of terminal usage

### Install the CLI
1. with npm:
   ```bash
   npm install -g gearup-cli
   ```
1. with yarn:
   ```bash
   yarn add global gearup-cli
   ```

---

## Usage

### Basic Commands
1. **Install Docker:**
   ```bash
   gearup install docker
   ```
   
2. **Install Docker Compose:**
   ```bash
   gearup install docker-compose
   ```
   
3. **Cloudflared Tunnel:**
   ```bash
   gearup tunnel
   ```

### Planned Commands
1. **Install curl:**
   ```bash
   gearup install curl
   ```

2. **Install git:**
   ```bash
   gearup install git
   ```

3. **Install nvm:**
   ```bash
   gearup install nvm
   ```

4. **Install zsh:**
   ```bash
   gearup install zsh
   ```

## Contributing
We welcome contributions! To add features or suggest improvements:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-new-tool
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add support for new tool"
   ```
4. Open a pull request.

---

## License
This project is licensed under the [MIT License](https://github.com/meer-sagor/GearUp-Cli?tab=MIT-1-ov-file). You can use, modify, and distribute it freely, provided attribution is given.

