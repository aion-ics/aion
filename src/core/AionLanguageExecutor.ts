import { Interpreter } from "./intepreter/Interpreter";
import { parse } from "./parser/parser";
import { AionErrorListener } from "./parser/AionErrorListener";
import { IOSystem } from "./intepreter/helpers/io_system/ioSystem";

/**
 * T
 */
export class AionLanguageExecutor {

    private ioSystem: IOSystem;
   
    public constructor(ioSystem: IOSystem) {
        this.ioSystem = ioSystem;
    }

    private static Interpreter: Interpreter = new Interpreter();

    public start(aionFilePath: string) {

    }
}