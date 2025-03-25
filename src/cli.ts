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
}
