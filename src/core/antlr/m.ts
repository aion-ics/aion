import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { AionLexer } from './AionLexer';
import { AionParser } from './AionParser';

// Create the lexer and parser
let inputStream = new ANTLRInputStream("text");
let lexer = new AionLexer(inputStream);
console.log(lexer)
let tokenStream = new CommonTokenStream(lexer);
let parser = new AionParser(tokenStream);


