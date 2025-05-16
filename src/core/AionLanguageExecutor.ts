import { Interpreter } from "./intepreter/Interpreter";
import { AionParserWrapper } from "./parser/parser";
import { AionErrorListener } from "./parser/AionErrorListener";
import { IOSystem } from "./intepreter/helpers/io_system/ioSystem";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AionLexer } from "./antlr/generated/AionLexer";
import { AionParser } from "./antlr/generated/AionParser";
import { TimeValidationNormal } from "./helpers/time_validation";

/**
 * T
 */
export class AionLanguageExecutor {

    /**
     * The IO system used to handle input and output operations.
     * @see IOSystem
     * @see IOFileSystem
     * @see IODictionarySystem
     */
    private ioSystem: IOSystem;
    private interpreter: Interpreter;


    public constructor(ioSystem: IOSystem) {
        this.ioSystem = ioSystem;
        this.interpreter = new Interpreter({ioSystem: this.ioSystem, timeValidator: new TimeValidationNormal()});
    }

    public start(aionFilePath: string): Array<AionRuntimeLoggingMessage> {
        
        const code = this.ioSystem.importFile(aionFilePath);
        const parserWrapper = new AionParserWrapper();
        let tree = parserWrapper.parse(code, aionFilePath);

        this.interpreter.visitProgram(tree);

        return Array.of();
    }
}

export class AionRuntimeLoggingMessage {
    public datetime: Date;
    public message: string;

    public constructor(message: string) {
        this.datetime = new Date();
        this.message = message;
    }
    
    public toString(): string {
        return `${this.datetime.toISOString()} - ${this.message}`;
    }
}