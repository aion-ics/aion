/**
 * This is the entry point of the npm library package. It should have all the necessary exports from `/core` or other directories, which will be used in any other Node.js projects.
*/

import { AionLanguageExecutor } from "../core/AionLanguageExecutor";
import { IODictionarySystem } from "../core/intepreter/helpers/io_system/ioDictionarySystem";


/**
 * This piece of code starts compilation of Aion source file. In case you provide <code>aionSourceCode</code>, then it will be considered the aion script file. Otherwise, you include an Aion source file in <code>availableFiles</code>
 *
 * @param filename The name of the file containing the Aion source code.
 * @param aionSourceCode - source code of Aion file.
 * @param fileMap - A map of existing calendars (.ics) to be used with filename as a key (without the .ics extension) and the calendar code as a value. Can also include the aion script source code. If <code>aionSourceCode</code> is null, the source must be included in <code>availableFiles</code> under filename.
 * @returns updated and created calendars in form of the map.
 */
export function executeAionCode(filename: string, fileMap: Map<string, string> = new Map(), aionSourceCode: string = null, ): Map<string, string> {

    if (aionSourceCode != null) {
        fileMap.set(filename, aionSourceCode);
    }

    if (fileMap.has(filename)) {
        const ioSystem = new IODictionarySystem(fileMap);
        const aionLanguageExecutor = new AionLanguageExecutor(ioSystem);
        aionLanguageExecutor.start(filename);
    }
    return fileMap;
}
