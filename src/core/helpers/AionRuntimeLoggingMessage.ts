import chalk from "chalk";

export class AionRuntimeLoggingMessage {
    public datetime: Date;
    public message: string;
    public speakingNode: string;

    constructor(message: string, speakingNode: string = "main") {
        this.datetime = new Date();
        this.message = message;
        this.speakingNode = speakingNode;
    }

    public toString(): string {
        // Format: 2025-05-21 15:25:30.123  INFO  speakingNode --- Message
        const datePart = this.datetime.toISOString().replace("T", " ").slice(0, 23);
        const level = "INFO";  // or dynamic level if you want
        return `${chalk.gray(datePart)}  ${chalk.green(level)}  ${chalk.blue(this.speakingNode)} --- ${this.message}`;
    }
}
