import {Command} from '@oclif/core'
import * as os from "node:os";
import PackageHelper from "../../../utils/package-helper.js";
import {Platform} from "../../../enums/platform.js";


export default class InstallDockerCompose extends Command {
    static description = 'Check OS and install docker-compose if necessary';

    async installDockerCompose(platform: string) {
        if (platform === Platform.MAC || platform === Platform.LINUX) {
            // Unix-based installation
            const arch = os.arch();
            const composeUrl = `https://github.com/docker/compose/releases/latest/download/docker-compose-${platform}-${arch}`;
            const destination = '/usr/local/bin/docker-compose';

            this.log(`Installing docker-compose for ${platform}...`);

            await PackageHelper.downloadFile(composeUrl, destination);
            PackageHelper.setFilePermissions(destination, '755');

            this.log(`docker-compose installed successfully!`);
        } else if (platform === 'win32') {
            this.log('Windows detected. Please install Docker Desktop from https://docs.docker.com/docker-for-windows/install/');
        }
    }


    public async run(): Promise<void> {
        const platform = PackageHelper.checkOS();
        this.log(`Detected platform: ${platform}`);

        if (PackageHelper.isPackageInstalled('docker-compose')) {
            this.log('docker-compose is already installed.');
        } else {
            await this.installDockerCompose(platform);
        }
    }
}
