/**
 * IOSystem interface for file operations.
 * This interface defines the methods for importing and saving files.
 * 
 */

export interface IOSystem {
    importFile(path: string): string;
    saveFile(fileName: string, fileContents: string): boolean;
}


