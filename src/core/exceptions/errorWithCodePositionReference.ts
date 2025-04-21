/**
 * A python-like method which uses pointer to point to a syntax/runtime error with its position in source code.
 * <br>
 * Example:
 *
 * <pre>
 * input.aion:1:5
 *   let a = 5
 *       ^
 * Error: unexpected a
 * </pre>
 * @param lineNumber line number
 * @param columnNumber column number
 * @param sourceCode a full <code>.aion</code> source code snippet
 * @param message message to be displayed
 * @param fileName  <code>.aion</code> filename where the error is met
 */
export function errorWithCodePositionReference(
    lineNumber: number,
    columnNumber: number,
    sourceCode: string,
    message: string,
    fileName: string = "input.aion"
): string {
    const lines = sourceCode.split(/\r?\n/);
    const line = lines[lineNumber - 1] ?? "";

    const pointer = " ".repeat(columnNumber - 1) + "^";

    return [
        `${fileName}:${lineNumber}:${columnNumber}`,
        `  ${line}`,
        `  ${pointer}`,
        `\x1b[31mError:\x1b[0m ${message}`
    ].join("\n");
}

