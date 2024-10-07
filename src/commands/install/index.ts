import {Command} from "@oclif/core";

export default class InstallCommand extends Command {
    async run() {
        this.log('Welcome to personal CLI')
    }
}