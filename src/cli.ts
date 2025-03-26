#!/usr/bin/env node

/**
 * This is the entry point of the CLI of the Aion. It is used as entry point if running `npm run cli` or if called from any executables.
 */


import * as fs from 'fs';

import chalk from 'chalk';

// @ts-ignore
import packageJson from '../package.json';

const args = process.argv;

if (args.length == 2) {
    const version = packageJson.version;
    console.log("This is " + chalk.blue("Aion") + " version " + packageJson.version );
    console.log("Please provide an " + chalk.blue(".aion") + " file to get it compiled.");
    console.log("The documentation is available at https://aion-ics.github.io/" )

} else {
    console.log(args.at(2));
    const fileName = args.at(2);
    const file = fs.readFileSync(fileName, 'utf-8');
    console.log(file);
}
