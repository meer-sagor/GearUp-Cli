import {Command} from "@oclif/core";
import {execSync} from "node:child_process";


export default class InstallDocker extends Command {
    static description = 'Install Docker if not already installed'
    static examples = [
        `$ docker-cli install`,
    ]

    // Check if Docker is installed
    checkDockerInstalled(): boolean {
        try {
            execSync('docker --version', { stdio: 'ignore' })
            return true
        } catch (error) {
            return false
        }
    }

    // Install Docker using shell commands
    installDocker() {
        try {
            this.log('Installing Docker...')

            execSync('sudo apt update', { stdio: 'inherit' })
            execSync('sudo apt install -y docker.io', { stdio: 'inherit' })
            execSync(`sudo usermod -aG docker ${process.env.USER}`, { stdio: 'inherit' })
            execSync('sudo systemctl enable docker', { stdio: 'inherit' })
            execSync('sudo systemctl start docker', { stdio: 'inherit' })

            this.log('Docker has been installed. Please log out and log back in to apply group changes.')
        } catch (error) {
            this.error('Failed to install Docker.', { exit: 1 })
        }
    }

    // Run the CLI command
    async run() {
        if (this.checkDockerInstalled()) {
            this.log('Docker is already installed.')
        } else {
            this.installDocker()
        }
    }

}
