import axios from 'axios';
import {execSync} from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';

// eslint-disable-next-line unicorn/no-static-only-class
export default class PackageHelper {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Check the current user's operating system.
     * Returns the platform string ('linux', 'darwin', 'win32').
     */
    static checkOS(): string {
        const platform = os.platform();
        if (!['darwin', 'linux', 'win32'].includes(platform)) {
            throw new Error('Unsupported platform. This script only supports Linux, macOS, and Windows.');
        }

        return platform;
    }

    /**
     * Download a file from a given URL and save it to the specified destination.
     * @param {string} url The URL to download the file from.
     * @param {string} destination The file path to save the downloaded file.
     * @returns {Promise<void>} Resolves when the file is downloaded and saved.
     */
    static async downloadFile(url: string, destination: string): Promise<void> {
        const response = await axios({
            method: 'GET',
            responseType: 'stream',
            url,
        });

        const writer = fs.createWriteStream(destination);
        response.data.pipe(writer);

        return new Promise<void>((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    }

    /**
     * Check if a package (command) is installed.
     * @param {string} packageName The name of the package/command (e.g., 'docker-compose').
     * @returns {boolean} True if installed, false otherwise.
     */
    static isPackageInstalled(packageName: string): boolean {
        try {
            execSync(`${packageName} --version`, {stdio: 'ignore'});
            return true;
        } catch {
            return false;
        }
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * Set the file permissions of a file.
     * @param {string} filePath The path to the file.
     * @param {string} permissions The permission string (e.g., '755').
     */
    static setFilePermissions(filePath: string, permissions: string): void {
        fs.chmodSync(filePath, permissions);
    }
}
