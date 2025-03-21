export enum TokenType {
    IDENTIFIER = "IDENTIFIER",
    KEYWORD = "KEYWORD",
    STRING = "STRING",
    NUMBER = "NUMBER",
    OPERATOR = "OPERATOR",
    PUNCTUATION = "PUNCTUATION",
    NEWLINE = "NEWLINE",
    TIMESTAMP = "TIMESTAMP",
    DURATION = "DURATION",
    DATE = "DATE",
    COMMENT = "COMMENT",  // Added COMMENT type
    UNKNOWN = "UNKNOWN"
}

export interface Token {
    type: TokenType;
    value: string;
    line?: number;    // Added line number for better error reporting
    column?: number;  // Added column number for better error reporting
}

const keywords = new Set([
    "event", "task", "pomodoro", "import", "export", "new", "iterate",
    "on", "at", "for", "daily", "weekly", "monthly", "repeat", "find",
    "between", "every", "from", "to", "where", "filter", "merge",
    "include", "if", "else", "before", "after", "until", "as", "now"
]);

const operators = new Set(["=", "+", "-", "*", "/", "==", "!=", "<", ">", "<=", ">="]);
const punctuation = new Set([";", ",", "{", "}", "(", ")", "[", "]"]);
const days = new Set(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
const months = new Set(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
const durationPattern = /^[0-9]+(h|m)$/;

export class Lexer {
    private input: string;
    private position: number = 0;
    private tokens: Token[] = [];
    private line: number = 1;     // Track line number
    private column: number = 0;    // Track column number

    constructor(input: string) {
        this.input = input;
    }

    private advance(): string {
        const char = this.input[this.position++];
        if (char === '\n') {
            this.line++;
            this.column = 0;
        } else {
            this.column++;
        }
        return char;
    }

    private peek(offset = 0): string {
        return this.input[this.position + offset] || "";
    }

    private isAlpha(char: string): boolean {
        return /[a-zA-Z_]/.test(char);
    }

    private isDigit(char: string): boolean {
        return /[0-9]/.test(char);
    }

    private isWhitespace(char: string): boolean {
        return /\s/.test(char);
    }

    private skipWhitespace(): void {
        while (this.position < this.input.length && this.isWhitespace(this.peek()) && this.peek() !== '\n') {
            this.advance();
        }
    }

    private readWord(): string {
        let word = "";
        while (this.position < this.input.length && (this.isAlpha(this.peek()) || this.isDigit(this.peek()))) {
            word += this.advance();
        }
        return word;
    }

    private readNumber(): string {
        let num = "";
        while (this.position < this.input.length && this.isDigit(this.peek())) {
            num += this.advance();
        }
        
        // Handle ordinal suffixes
        if (this.position + 1 < this.input.length && 
            ["st", "nd", "rd", "th"].includes(this.peek() + this.peek(1))) {
            num += this.advance() + this.advance();
        }
        
        return num;
    }

    private readString(): string {
        const startLine = this.line;
        const startColumn = this.column;
        
        let str = "";
        this.advance(); // Skip opening quote
        
        while (this.position < this.input.length && this.peek() !== '"') {
            // Handle escape characters
            if (this.peek() === '\\' && this.position + 1 < this.input.length) {
                this.advance(); // Skip backslash
                const next = this.peek();
                if (next === 'n') str += '\n';
                else if (next === 't') str += '\t';
                else if (next === 'r') str += '\r';
                else if (next === '"') str += '"';
                else if (next === '\\') str += '\\';
                else str += '\\' + next; // Unrecognized escape sequence
                this.advance();
            } else {
                str += this.advance();
            }
        }
        
        if (this.position >= this.input.length) {
            throw new Error(`Unterminated string starting at line ${startLine}, column ${startColumn}`);
        }
        
        this.advance(); // Skip closing quote
        return str;
    }

    private readComment(): string {
        const startPosition = this.position;
        this.advance(); // Skip first '/'
        this.advance(); // Skip second '/'
        
        while (this.position < this.input.length && this.peek() !== '\n') {
            this.advance();
        }
        
        return this.input.substring(startPosition, this.position).trim();
    }

    public tokenize(): Token[] {
        while (this.position < this.input.length) {
            const startLine = this.line;
            const startColumn = this.column;
            let char = this.peek();

            if (this.isWhitespace(char)) {
                if (char === "\n") {
                    this.tokens.push({ 
                        type: TokenType.NEWLINE, 
                        value: "\n",
                        line: startLine,
                        column: startColumn
                    });
                }
                this.advance();
            } else if (this.isAlpha(char)) {
                let word = this.readWord();
                if (keywords.has(word)) {
                    this.tokens.push({ 
                        type: TokenType.KEYWORD, 
                        value: word,
                        line: startLine,
                        column: startColumn
                    });
                } else if (days.has(word) || months.has(word)) {
                    if (this.tokens.length > 0 && this.tokens[this.tokens.length - 1].type === TokenType.NUMBER) {
                        this.tokens[this.tokens.length - 1].value += " " + word;
                        this.tokens[this.tokens.length - 1].type = TokenType.DATE;
                    } else {
                        this.tokens.push({ 
                            type: TokenType.DATE, 
                            value: word,
                            line: startLine,
                            column: startColumn
                        });
                    }
                } else {
                    this.tokens.push({ 
                        type: TokenType.IDENTIFIER, 
                        value: word,
                        line: startLine,
                        column: startColumn
                    });
                }
            } else if (this.isDigit(char)) {
                let number = this.readNumber();
                if (this.peek() === ':') {
                    number += this.advance() + this.readNumber();
                    this.tokens.push({ 
                        type: TokenType.TIMESTAMP, 
                        value: number,
                        line: startLine,
                        column: startColumn
                    });
                } else if (durationPattern.test(number + this.peek())) {
                    this.tokens.push({ 
                        type: TokenType.DURATION, 
                        value: number + this.advance(),
                        line: startLine,
                        column: startColumn
                    });
                } else {
                    this.tokens.push({ 
                        type: TokenType.NUMBER, 
                        value: number,
                        line: startLine,
                        column: startColumn
                    });
                }
            } else if (char === '"') {
                try {
                    const stringValue = this.readString();
                    this.tokens.push({ 
                        type: TokenType.STRING, 
                        value: stringValue,
                        line: startLine,
                        column: startColumn
                    });
                } catch (error) {
                    console.error(error);
                    this.tokens.push({ 
                        type: TokenType.UNKNOWN, 
                        value: "ERROR: Unterminated string",
                        line: startLine,
                        column: startColumn
                    });
                }
            } else if (char === '/' && this.peek(1) === '/') {
                // Handle comments - add them as tokens instead of skipping
                const commentValue = this.readComment();
                this.tokens.push({ 
                    type: TokenType.COMMENT, 
                    value: commentValue,
                    line: startLine,
                    column: startColumn
                });
            } else if (operators.has(char)) {
                // Check for multi-character operators
                if (operators.has(char + this.peek(1))) {
                    const operator = char + this.peek(1);
                    this.advance(); // Advance for the first character
                    this.advance(); // Advance for the second character
                    this.tokens.push({ 
                        type: TokenType.OPERATOR, 
                        value: operator,
                        line: startLine,
                        column: startColumn
                    });
                } else {
                    this.tokens.push({ 
                        type: TokenType.OPERATOR, 
                        value: this.advance(),
                        line: startLine,
                        column: startColumn
                    });
                }
            } else if (punctuation.has(char)) {
                this.tokens.push({ 
                    type: TokenType.PUNCTUATION, 
                    value: this.advance(),
                    line: startLine,
                    column: startColumn
                });
            } else {
                this.tokens.push({ 
                    type: TokenType.UNKNOWN, 
                    value: this.advance(),
                    line: startLine,
                    column: startColumn
                });
            }
        }
        return this.tokens;
    }
}
