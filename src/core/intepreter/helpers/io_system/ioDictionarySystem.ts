import {IOSystem} from "./ioSystem";

export class IoDictionarySystem implements IOSystem {

    importFile(path: string): string {
        return "";
    }

    saveFile(fileContents: string): boolean {
        return false;
    }
}
