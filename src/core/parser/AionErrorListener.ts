import { ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";
import { errorWithCodePositionReference } from "../exceptions/errorWithCodePositionReference";

export class AionErrorListener<T> implements ANTLRErrorListener<T> {
    private _hasErrors = false;

    constructor(private sourceCode: string, private fileName: string = "input.aion") {}

    public get hasErrors(): boolean {
        return this._hasErrors;
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
        console.error(errorMessage);
    }
}
