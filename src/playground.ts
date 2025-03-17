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

console.log(grammar.toBnfString())
