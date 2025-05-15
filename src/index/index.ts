/**
 * This is the entry point of the npm library package. It should have all the necessary exports from `/core` or other directories, which will be used in any other Node.js projects.
*/

import { AionLanguageExecutor } from "../core/AionLanguageExecutor";
import { IODictionarySystem } from "../core/intepreter/helpers/io_system/ioDictionarySystem";


/**
 * 
 * @param code The Aion source code to be executed.
 * @param filename The name of the file containing the Aion source code.
 * @param existingCalendars - A map of existing calendars (.ics) to be used with filename as a key (without the .ics extension) and the calendar code as a value.
 * @returns updated and created calendars in form of the map. 
 */
export function executeAionCode(code: string, filename: string = "input.aion", existingCalendars: Map<String, String>): Map<String, String> {
    const ioSystem = new IODictionarySystem(null);
    const aionLanguageExecutor = new AionLanguageExecutor(ioSystem);
    aionLanguageExecutor.start(code);
    
    return null;
}

