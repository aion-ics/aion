/**
 * This is the entry point of the npm library package. It should have all the necessary exports from `/core` or other directories, which will be used in any other Node.js projects.
*/

import { AionLanguageExecutor } from "../core/AionLanguageExecutor";
import { IODictionarySystem } from "../core/intepreter/helpers/io_system/ioDictionarySystem";

export function runAionCode(code: string, fileName: string = "input.aion") {
    const ioSystem = new IODictionarySystem(null);
    const aionLanguageExecutor = new AionLanguageExecutor(ioSystem);
    aionLanguageExecutor.start(code);
}
