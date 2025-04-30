import {IOSystem} from "./ioSystem";

export class IOFileSystem implements IOSystem {
    importFile(path: string): string {
        return "";
    }

    saveFile(fileContents: string): boolean {
        return false;
    }

}