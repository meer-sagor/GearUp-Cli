import {Command} from '@oclif/core';
import {execSync, exec} from 'node:child_process';
import * as fs from 'fs';
import * as readline from 'readline';
import * as os from 'node:os';
import PackageHelper from '../../../utils/package-helper.js';
import {Platform} from '../../../enums/platform.js';

export default class TunnelCommand extends Command {
    static description = 'Check for cloudflared, install if necessary, and start a tunnel';

    // Check if cloudflared is installed
    async checkCloudflared() {
        try {
            execSync('cloudflared --version', { stdio: 'ignore' });
            this.log('cloudflared is already installed.');
            return true;
        } catch (error) {
            this.log('cloudflared is not installed.');
            return false;
        }
    }

    // Install cloudflared based on platform
    async installCloudflared(platform: string) {
        try {
            this.log('Installing cloudflared...');

            if (platform === Platform.LINUX) {
                execSync('curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared');
                execSync('sudo mv cloudflared /usr/local/bin/');
                execSync('sudo chmod +x /usr/local/bin/cloudflared');
            } else if (platform === Platform.MAC) {
                execSync('brew install cloudflare/cloudflare/cloudflared', { stdio: 'inherit' });
            } else {
                this.error('Unsupported platform for automatic cloudflared installation.', { exit: 1 });
            }

            this.log('cloudflared installed successfully.');
        } catch (error) {
            this.error('Failed to install cloudflared.', { exit: 1 });
        }
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

    // Main command logic
    async run() {
        const platform = PackageHelper.checkOS();

        const cloudflaredInstalled = await this.checkCloudflared();
        if (!cloudflaredInstalled) {
            await this.installCloudflared(platform);
        }

        // Ask user for tunnel URL
        const { tunnelUrl } = await this.prompt([
            {
                type: 'input',
                name: 'tunnelUrl',
                message: 'Enter the URL to tunnel (e.g., http://localhost:8080):',
                validate: (input: string) => input.startsWith('http') ? true : 'Please enter a valid URL',
            }
        ]);

        // Start the tunnel
        await this.startTunnel(tunnelUrl);
    }
}
