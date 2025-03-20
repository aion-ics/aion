import { AionParser } from "./core/antlr/generated/AionParser";
import { AionLexer } from "./core/antlr/generated/AionLexer";
import antlr4, { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts'
import { ParseTree } from "antlr4ts/tree/ParseTree";

import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '..', 'docs/examples', 'main.aion');
const content = fs.readFileSync(filePath, 'utf8');


function printParseTree(tree: ParseTree, parser: AionParser, indent: string = "", level: number = 0): string {
    let output = "";

    // Determine node type: Rule or Terminal
    if (tree instanceof ParserRuleContext) {
        const ruleName = parser.ruleNames[tree.ruleIndex];
        output += `${indent}${level === 0 ? "" : "└─"}<${ruleName}>\n`;
    } else {
        const text = tree.text.replace(/\s+/g, ' ').trim();
        output += `${indent}└─"${text}"\n`;
    }

    // Recursively print children
    for (let i = 0; i < tree.childCount; i++) {
        const child = tree.getChild(i);
        const childIsLast = (i === tree.childCount - 1);
        const childIndent = indent + (level > 0 ? (childIsLast ? "   " : "│  ") : "");
        output += printParseTree(child, parser, childIndent, level + 1);
    }

    return output;
}


let input = 'import "orar-231" as orar;';


let inputStream = new ANTLRInputStream(content);
let lexer = new AionLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new AionParser(tokenStream);
console.log(parser)
const tree = parser.program();

// Print the parse tree
console.log(printParseTree(tree, parser));
