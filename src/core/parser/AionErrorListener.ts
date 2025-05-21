import { ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";
import { errorWithCodePositionReference } from "../exceptions/errorWithCodePositionReference";

export class AionErrorListener<T> implements ANTLRErrorListener<T> {
    private _hasErrors = false;
    private errors: string[] = [];

    constructor(private sourceCode: string, private fileName: string = "input.aion") {}

    public get hasErrors(): boolean {
        return this._hasErrors;
    }

    public getErrors(): string[] {
        return this.errors;
    }

    syntaxError(
        recognizer: Recognizer<T, any>,
        offendingSymbol: T | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        this._hasErrors = true;
        const errorMessage = errorWithCodePositionReference(
            line,
            charPositionInLine + 1,
            this.sourceCode,
            msg,
            this.fileName
        );
        this.errors.push(errorMessage);
    }
}
