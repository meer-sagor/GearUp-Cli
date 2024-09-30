#!/bin/bash

# Function to check if cloudflared is installed
check_cloudflared() {
  if command -v cloudflared &> /dev/null; then
    echo "cloudflared is already installed."
  else
    echo "cloudflared is not installed."
    install_prompt
  fi
}

# Function to prompt user for installation
install_prompt() {
  read -p "Do you want to install cloudflared? (y/n): " choice
  case "$choice" in
    y|Y )
      install_cloudflared
      ;;
    n|N )
      echo "Installation aborted."
      exit 0
      ;;
    * )
      echo "Invalid option. Please enter y or n."
      install_prompt
      ;;
  esac
}

# Function to install cloudflared
install_cloudflared() {
  echo "Installing cloudflared..."

  # Detect OS and download the appropriate version
  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
    sudo mv cloudflared /usr/local/bin/
    sudo chmod +x /usr/local/bin/cloudflared
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    brew install cloudflare/cloudflare/cloudflared
  else
    echo "Unsupported OS."
    exit 1
  fi

  # Verify installation
  if command -v cloudflared &> /dev/null; then
    echo "cloudflared installed successfully."
  else
    echo "Failed to install cloudflared."
    exit 1
  fi
}

# Function to prompt for starting a tunnel
tunnel_prompt() {
  read -p "Do you want to start a tunnel? (y/n): " start_tunnel
  case "$start_tunnel" in
    y|Y )
      read -p "Enter the URL to tunnel: " tunnel_url
      start_tunnel "$tunnel_url"
      ;;
    n|N )
      echo "Tunnel start aborted."
      exit 0
      ;;
    * )
      echo "Invalid option. Please enter y or n."
      tunnel_prompt
      ;;
  esac
}

# Function to start the tunnel using nohup
start_tunnel() {
 local url="$1"
   echo "Starting tunnel to $url..."

   # Run cloudflared tunnel in the background using nohup and redirect output to cloudflared_tunnel.log
   nohup cloudflared tunnel --url "$url" &> cloudflared_tunnel.log &

   # Get the process ID (PID) of the last background command
   tunnel_pid=$!

   # Wait and use tail to monitor the log file for the tunnel URL
   echo "Waiting for the tunnel URL..."
   while true; do
     tunnel_info=$(grep -m 1 'https://.*trycloudflare.com' cloudflared_tunnel.log)
     if [[ -n "$tunnel_info" ]]; then
       echo "Tunnel started successfully."
       echo "Access your service at: $tunnel_info"
       break
     fi
     sleep 1
   done

   echo "Tunnel is running in the background (PID: $tunnel_pid)."
}

# Main script logic
check_cloudflared
tunnel_prompt
