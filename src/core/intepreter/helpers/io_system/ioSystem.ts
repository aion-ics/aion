export interface IOSystem {
    importFile(path: string): string;
    saveFile(fileContents: string): boolean;
}


