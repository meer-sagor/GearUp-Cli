
import {Command} from '@oclif/core'
import * as os from 'node:os'

import { Platform } from '../../../enums/platform.js';
import PackageHelper from '../../../utils/package-helper.js';

export default class InstallDockerCompose extends Command {
  static description = 'Check OS and install docker-compose if necessary'

  async installDockerComposeUnix(platform: string, arch: string) {
    try {
        const composeUrl = `https://github.com/docker/compose/releases/latest/download/docker-compose-${platform}-${arch}`;
        const destination = '/usr/local/bin/docker-compose';
  
        this.log(`Installing docker-compose for ${platform} (${arch})...`);
  
        // Download the docker-compose binary
        await PackageHelper.downloadFile(composeUrl, destination);
  
        // Set executable permissions
        PackageHelper.setFilePermissions(destination, '755');
  
        this.log(`docker-compose installed successfully at ${destination}`);
      } catch (error:any) {
      this.error(`Failed to install docker-compose for ${platform}. Error: ${error.message}`, { exit: 1 });
      }
  }

  // Method for Windows installation
  installDockerComposeWindows(): void {
    this.log('Windows detected.')
    this.log(
      'Please install Docker Desktop, which includes docker-compose, from: https://docs.docker.com/docker-for-windows/install/',
    )
  }

  public async run(): Promise<void> {
    const platform = PackageHelper.checkOS()
    const arch = os.arch()
    this.log(`Detected platform: ${platform}, architecture: ${arch}`)

    if (PackageHelper.isPackageInstalled('docker-compose')) {
        this.log('docker-compose is already installed.');
      } else {
        // Install docker-compose based on platform
        switch (platform) {
          case Platform.LINUX:
          case Platform.MAC: {
            await this.installDockerComposeUnix(platform, arch);
            break;
          }
  
          case Platform.WINDOWS: {
            this.installDockerComposeWindows();
            break;
          }
  
          default: {
            this.error('Unsupported platform for docker-compose installation.', { exit: 1 });
          }
        }
      }
  }
}
