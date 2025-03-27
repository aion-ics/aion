#!/usr/bin/env node

/**
 * This is the entry point of the CLI of the Aion. It is used as entry point if running `npm run cli` or if called from any executables.
 */


import * as fs from 'fs';

import chalk from 'chalk';

// @ts-ignore
import packageJson from '../package.json';

const args = process.argv;

const version = packageJson.version;

if (args.length == 2) {
    console.log("This is " + chalk.blue("Aion") + " version " + packageJson.version );
    console.log("Please provide an " + chalk.blue(".aion") + " file to get it compiled.");
    console.log("The documentation is available at https://aion-ics.github.io/" )

} else {

    const arg = args.at(2)

    if (arg === "--version") {
        console.log("Aion " + version)
    } else {
        const file = fs.readFileSync(arg, 'utf-8');
        console.log(file);

    }

}
