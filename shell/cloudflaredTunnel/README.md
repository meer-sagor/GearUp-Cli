# Cloudflared CLI Installer

A shell script to install the Cloudflared CLI, check for an existing installation, and run tunnels in the background with real-time display of the tunnel URL. Ideal for quickly setting up Cloudflare tunnels on various systems.

## Features
- Checks if `cloudflared` is already installed.
- Optionally installs `cloudflared` if it's missing.
- Prompts to start a tunnel and runs it in the background using `nohup`.
- Displays the Cloudflare tunnel URL in real-time.

---

## Prerequisites

- **Supported Operating Systems:**
    - Linux (Debian/Ubuntu-based distributions)
    - macOS

- **Requirements:**
    - `curl` for Linux installation.
    - `brew` for macOS installation.

---

## How to Use

1. Clone or download the script to your local machine.
2. Make the script executable:
   ```bash
   chmod +x cloudflare-tunnel-install.sh
