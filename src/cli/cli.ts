#!/usr/bin/env node

/**
 * This is the entry point of the CLI of the Aion. It is used as entry point if running `npm run cli` or if called from any executables.
 */


import * as fs from 'fs';

import chalk from 'chalk';
import { getAionVersion } from '../core/intepreter/helpers/getVersion';
import { AionLanguageExecutor } from '../core/AionLanguageExecutor';
import { IOFileSystem } from '../core/intepreter/helpers/io_system/ioFileSystem';

const args = process.argv;
const version = getAionVersion()

if (args.length == 2) {
    console.log("This is " + chalk.blue("Aion") + " version " + version);
    console.log("Please provide an " + chalk.blue(".aion") + " file to get it compiled.");
    console.log("The documentation is available at https://aion-ics.github.io/" )

// this part will handle compiler flags and the compilation process itself
} else {

    const arg = args.at(2)

    switch(arg) {
        case "--version":
        case "-v":
            console.log("Aion " + version);
            break;
        case "--help":
        case "-h":
            displayHelpMessageCLI();
            break;
        default:
            handleDefaultArgumentCLI(arg);
            break;
    }
}



function handleDefaultArgumentCLI(arg: string) {
    if (arg.endsWith(".aion")) {
        let aionLanguageExecutor: AionLanguageExecutor = new AionLanguageExecutor(new IOFileSystem());
        aionLanguageExecutor.start(arg)
    }
}

function displayHelpMessageCLI() {
    console.log("No help, no mercy")
}