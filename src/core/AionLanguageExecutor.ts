import { Interpreter } from "./intepreter/Interpreter";
import { parse } from "./parser/parser";
import { AionErrorListener } from "./parser/AionErrorListener";
import { IOSystem } from "./intepreter/helpers/io_system/ioSystem";

/**
 * T
 */
export class AionLanguageExecutor {

    /**
     * The IO system used to handle input and output operations. @see IOSystem, @see IOFileSystem, @see IODictionarySystem
     */
    private ioSystem: IOSystem;
    private interpreter: Interpreter;

    public constructor(ioSystem: IOSystem) {
        this.ioSystem = ioSystem;
        this.interpreter = new Interpreter(ioSystem);
    }


    public start(aionFilePath: string) {

    }
}