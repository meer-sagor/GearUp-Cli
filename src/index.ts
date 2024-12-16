// export {run} from '@oclif/core'
import { run } from '@oclif/core'
import updateNotifier from 'update-notifier';

import packageJson from '../package.json' assert {type: 'json'}


// Notify user about updates
updateNotifier({ pkg: packageJson }).notify();

try {
    await run();
} catch (error) {
    process.exitCode = 1;

    // Improved error handling
    if (error instanceof Error) {
        console.error(`[ERROR]: ${error.message}`);
        if (error.stack) {
            console.error(error.stack);
        }
    } else {
        console.error(`[ERROR]: ${String(error)}`);
    }
}
