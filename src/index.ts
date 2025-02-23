import * as fs from 'fs';
const chalk = require('chalk'); // Use require() with chalk@4

fs.writeFileSync('example.txt', 'Hello from my language!');

console.log(chalk.green('✅ Created example.txt successfully.'));
console.error(chalk.red('❌ Created example.txt unsuccessfully!'));

throw new Error(chalk.bgRed.white("Something went wrong!"));

console.log(chalk.blue('hi'));
