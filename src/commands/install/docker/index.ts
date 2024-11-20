import {Command} from "@oclif/core";
import {execSync} from "node:child_process";

import {Platform} from "../../../enums/platform.js";
import PackageHelper from "../../../utils/package-helper.js";


export default class InstallDocker extends Command {
    static description = 'Install Docker if not already installed'
    static examples = [
        `$ docker-cli install`,
    ]

    // Install Docker using shell commands
    installDockerLinux() {
        this.log('Installing Docker on Linux...');
        try {
            execSync('sudo apt update', {stdio: 'inherit'})
            execSync('sudo apt install -y docker.io', {stdio: 'inherit'})
            execSync(`sudo usermod -aG docker ${process.env.USER}`, {stdio: 'inherit'})
            execSync('sudo systemctl enable docker', {stdio: 'inherit'})
            execSync('sudo systemctl start docker', {stdio: 'inherit'})

            this.log('Docker has been installed.');
            this.log('Please log out and log back in, or restart your computer, to apply Docker group changes.');
        } catch {
            this.error('Failed to install Docker.', {exit: 1})
        }
    }

    // Install Docker using shell commands for macOS (through Homebrew)
    installDockerMacOS() {
        this.log("Installing Docker on macOS...");
        try {
            if (!PackageHelper.isPackageInstalled('brew')) {
                this.error('Homebrew is not installed. Please install it from https://brew.sh/', {exit: 1});
            }

            execSync("brew install --cask docker", {stdio: "inherit"});

            this.log('Docker has been installed on macOS.');
            this.log('You may need to launch the Docker Desktop application from your Applications folder.');
        } catch {
            this.error("Failed to install Docker on macOS.", {exit: 1});
        }
    }

    // Notify the user for Windows installation
    installDockerWindows() {
        this.log('Windows detected.');
        this.log('Please install Docker Desktop from https://docs.docker.com/docker-for-windows/install/');
    }

    // Run the CLI command
    async run() {
        const platform = PackageHelper.checkOS();

        if (PackageHelper.isPackageInstalled("docker")) {
            this.log("Docker is already installed.");
        } else {
            // Perform the installation based on the user's platform
            switch (platform) {
                case Platform.LINUX: {
                    this.installDockerLinux();
                    break;
                }

                case Platform.MAC: {
                    this.installDockerMacOS();
                    break;
                }

                case Platform.WINDOWS: {
                    this.installDockerWindows();
                    break;
                }

                default: {
                    this.error("Unsupported platform. Docker installation is only supported for Linux, macOS, and Windows.");
                }
            }
        }
    }

}

