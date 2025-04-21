import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { AionLexer } from "../antlr/generated/AionLexer";
import { AionParser } from "../antlr/generated/AionParser";
import { ANTLRErrorListener, Recognizer, RecognitionException } from "antlr4ts";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { errorWithCodePositionReference } from "../exceptions/errorWithCodePositionReference";
import { AionErrorListener } from "./AionErrorListener";


export function parse(aionSourceCode: string, fileName: string = "input.aion"): void {
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

    parser.program();

    if (!lexerErrorListener.hasErrors && !parserErrorListener.hasErrors) {
        console.log("Parsing successful. Proceeding to semantic analysis or other processing...");
    } else {
    
        // console.log("Parsing failed due to syntax errors.");
    }
}

