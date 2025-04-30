import {IOSystem} from "./ioSystem";

/**
 * Uses a dictionary for storing the data
 */
export class IODictionarySystem implements IOSystem {

    private existingCalendarData: Map<string, string>;
    private addedCalendarData: Map<string, string>;

    constructor(private existingCalendars: Map<string, string> ) {
        this.existingCalendarData = existingCalendars;
    }

    importFile(path: string): string {
        return this.existingCalendarData.get(path);
    }

    saveFile(fileName: string, fileContents: string): boolean {
        this.addedCalendarData.set(fileName, fileContents);
        return true; // return something meaningful;
    }
}

