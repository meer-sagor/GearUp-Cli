
import { input } from '@inquirer/prompts';
import {Command} from '@oclif/core';
import {exec, execSync} from 'node:child_process';
import * as fs from 'node:fs';
import * as readline from 'node:readline';

import { Platform } from '../../enums/platform.js';
import PackageHelper from '../../utils/package-helper.js';

export default class TunnelCommand extends Command {
    static description = 'Check for cloudflared, install if necessary, and start a tunnel';

    // Install cloudflared based on platform
    installCloudflaredLinux() {
        try {
            execSync('curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared');
            execSync('sudo mv cloudflared /usr/local/bin/');
            execSync('sudo chmod +x /usr/local/bin/cloudflared');
            this.log('cloudflared installed successfully.');
        } catch {
            this.error('Failed to install cloudflared.', {exit: 1});
        }
    }

    installCloudflaredMacOS() {
        try {
            this.log('Installing cloudflared...');

            execSync('brew install cloudflare/cloudflare/cloudflared', {stdio: 'inherit'});

            this.log('cloudflared installed successfully.');
        } catch {
            this.error('Failed to install cloudflared.', {exit: 1});
        }
    }

    installCloudflaredWindows() {
        this.error('Unsupported platform for automatic cloudflared installation.', {exit: 1});
    }

    // Main command logic
    async run() {
        const platform = PackageHelper.checkOS();

        if(PackageHelper.isPackageInstalled('cloudflared')){
            this.log('cloudflared is already installed.');
        }else{
            switch (platform) {
                case Platform.LINUX: {
                    this.installCloudflaredLinux()
                    break
                }

                case Platform.MAC: {
                    this.installCloudflaredMacOS()
                    break
                }

                case Platform.WINDOWS: {
                    this.installCloudflaredWindows()
                    break
                }

                default: {
                    this.error("Unsupported platform. Docker installation is only supported for Linux, macOS, and Windows.");
                }

            }
        }

        // Ask user for tunnel URL
        const tunnelUrl = await input({
            message: 'Enter the URL to tunnel (e.g., localhost:8080):',
            required: true,
            validate: (input: string) => input.startsWith('http') ? true : 'Please enter a valid URL',
        });

        // Start the tunnel
        await this.startTunnel(tunnelUrl);
    }

    // Start the tunnel using nohup and capture the tunnel URL
    async startTunnel(tunnelUrl: string) {
        const logFile = 'cloudflared_tunnel.log';
        this.log(`Starting tunnel to ${tunnelUrl}...`);

        // Run cloudflared tunnel in the background with nohup
        exec(`nohup cloudflared tunnel --url ${tunnelUrl} &> ${logFile} &`);

        // Wait for the tunnel URL to appear in the log file
        const rl = readline.createInterface({
            input: fs.createReadStream(logFile),
            output: process.stdout,
            terminal: false
        });

        this.log('Waiting for the tunnel URL...');
        rl.on('line', (line) => {
            const match = line.match(/https:\/\/.*trycloudflare.com/);
            if (match) {
                this.log(`Tunnel started successfully. Access your service at: ${match[0]}`);
                rl.close();
            }
        });
    }
}
