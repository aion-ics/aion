import { Grammar } from './core/grammar/Grammar';
import * as readline from 'readline';

function generateRandomString(vT: Set<string>): string {
    let someString = '';
    const alphabetArray = Array.from(vT);
    const length = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

    for (let i = 0; i < length; i++) {
        someString += alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    }
    return someString;
}

console.log("DSL: Regular grammars. Finite Automata.\n");
console.log("----aion----\n");

const vN = new Set(["S", "A", "B", "C"]);
const vT = new Set(['a', 'b', 'c', 'd']);
const p = new Map<string, string[]>([
    ["S", ["dA"]],
    ["A", ["aB", "bA"]],
    ["B", ["bC", "aB", "d"]],
    ["C", ["cB"]]
]);
const s = "S";

const grammar = new Grammar(vN, vT, p, s);
console.log("Grammar:");
console.log(grammar.toString());

console.log("\n5 valid strings by grammar:");
for (let i = 0; i < 5; i++) {
    console.log(`\nString ${i + 1}:`);
    const generatedString = grammar.createWord();
    console.log("Final string:", generatedString);
}

const finiteAutomaton = grammar.toFiniteAutomaton();

console.log("\nTesting random strings with the Finite Automaton:");
for (let i = 0; i < 5; i++) {
    const testString = generateRandomString(vT);
    console.log(`\nTest string ${i + 1}: ${testString}`);
    const belongs = finiteAutomaton.doesStringBelongToLanguage(testString);
    console.log(`String belongs to language: ${belongs}`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nEnter a string to check if it belongs to the language (type 'exit' to quit):");

function promptInput() {
    rl.question("> ", (inputString) => {
        if (inputString.toLowerCase() === "exit") {
            console.log("Exiting...");
            rl.close();
        } else {
            const belongs = finiteAutomaton.doesStringBelongToLanguage(inputString);
            console.log(`String belongs to language: ${belongs}`);
            promptInput();
        }
    });
}

promptInput();
