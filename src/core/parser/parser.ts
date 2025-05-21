import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AionLexer } from "../antlr/generated/AionLexer";
import { AionParser, ProgramContext } from "../antlr/generated/AionParser";
import { AionErrorListener } from "./AionErrorListener";

export class AionParserWrapper {
    private lexerErrorListener?: AionErrorListener<number>;
    private parserErrorListener?: AionErrorListener<any>;

    parse(aionSourceCode: string, fileName: string = "input.aion"): ProgramContext | undefined {
        const inputStream = CharStreams.fromString(aionSourceCode);
        const lexer = new AionLexer(inputStream);

        this.lexerErrorListener = new AionErrorListener<number>(aionSourceCode, fileName);
        lexer.removeErrorListeners();
        lexer.addErrorListener(this.lexerErrorListener);

        const tokenStream = new CommonTokenStream(lexer);
        const parser = new AionParser(tokenStream);

        this.parserErrorListener = new AionErrorListener<any>(aionSourceCode, fileName);
        parser.removeErrorListeners();
        parser.addErrorListener(this.parserErrorListener);

        const tree = parser.program();

        if (!this.hasErrors()) {
            return tree;
        } else {
            // console.log("Parsing failed due to syntax errors.");
        }
    }

    hasErrors(): boolean {
        return !!this.lexerErrorListener?.hasErrors || !!this.parserErrorListener?.hasErrors;
    }
    getErrors(): string[] {
        return this.parserErrorListener.getErrors();
    }
}
