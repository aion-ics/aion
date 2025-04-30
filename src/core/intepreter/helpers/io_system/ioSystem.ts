export interface IOSystem {
    importFile(path: string): string;
    saveFile(fileName: string, fileContents: string): boolean;
}


