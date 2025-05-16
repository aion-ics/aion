import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { AionLexer } from "../antlr/generated/AionLexer";
import { AionParser, ProgramContext } from "../antlr/generated/AionParser";
import { ANTLRErrorListener, Recognizer, RecognitionException } from "antlr4ts";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { errorWithCodePositionReference } from "../exceptions/errorWithCodePositionReference";
import { AionErrorListener } from "./AionErrorListener";
import { Program } from "typescript";

export class AionParserWrapper {

    constructor() {
        
    }
    
    parse(aionSourceCode: string, fileName: string = "input.aion"): ProgramContext {
        const inputStream = new ANTLRInputStream(aionSourceCode);
        const lexer = new AionLexer(inputStream);
    
        const lexerErrorListener = new AionErrorListener<number>(aionSourceCode, fileName);
        lexer.removeErrorListeners();
        lexer.addErrorListener(lexerErrorListener);
    
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new AionParser(tokenStream);
    
        const parserErrorListener = new AionErrorListener<any>(aionSourceCode, fileName);
        parser.removeErrorListeners();
        parser.addErrorListener(parserErrorListener);
    
        let tree = parser.program();
    
        if (!lexerErrorListener.hasErrors && !parserErrorListener.hasErrors) {
            console.log("Parsing successful. Proceeding to semantic analysis or other processing...");
            return tree;
        } else {
    
            console.log("Parsing failed due to syntax errors.");
        }
    }
}


