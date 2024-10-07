import {execSync} from "child_process";

export class PackageChecker {
    static check(command: string): boolean {
        try {
            execSync(`${command} --version`, { stdio: 'ignore' })
            return true
        } catch (error) {
            return false
        }
    }
    static checkDocker(): boolean {
        return this.check('docker')
    }

    static checkDockerCompose(): boolean {
        return this.check('docker-compose')
    }
}