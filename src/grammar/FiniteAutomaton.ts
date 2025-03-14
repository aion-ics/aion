export class FiniteAutomaton {
    Q: Set<string>; // States
    Sigma: Set<string>; // Alphabet
    Delta: Map<string, Map<string, Set<string>>>; // Transitions
    Q0: string; // Initial state
    QF: Set<string>; // Final states

    constructor(Q: Set<string>, Sigma: Set<string>, Delta: Map<string, Map<string, Set<string>>>, Q0: string, QF: Set<string>) {
        this.Q = Q;
        this.Sigma = Sigma;
        this.Delta = Delta;
        this.Q0 = Q0;
        this.QF = QF;
    }

    doesStringBelongToLanguage(inputString: string): boolean {
        let currentStates = new Set([this.Q0]); 
        console.log(`\nChecking string: "${inputString}"`);

        for (const letter of inputString) {
            console.log(`Processing letter: "${letter}"`);

            if (!this.Sigma.has(letter)) {
                console.log(`Invalid character "${letter}".`);
                return false;
            }

            const nextStates = new Set<string>();

            for (const state of currentStates) {
                if (this.Delta.has(state) && this.Delta.get(state)!.has(letter)) {
                    this.Delta.get(state)!.get(letter)!.forEach((s) => nextStates.add(s));
                }
            }

            if (nextStates.size === 0) {
                console.log(`No valid transitions found. "${inputString}" is INVALID.`);
                return false;
            }

            currentStates = nextStates;
            console.log(`Possible next states: ${Array.from(currentStates).join(", ")}`);
        }

        const isValid = Array.from(currentStates).some(state => this.QF.has(state));
        console.log(`Final states: ${Array.from(currentStates).join(", ")}`);
        console.log(`Result: "${inputString}" is ${isValid ? "VALID ✓" : "INVALID ✗"}`);

        return isValid;
    }

    generateValidString(maxLength: number = 10): string | null {
        let currentState = this.Q0;
        let result = '';
        let steps = 0;

        while (steps < maxLength) {
            const possibleTransitions = this.Delta.get(currentState);
            if (!possibleTransitions) break;

            const transitions = Array.from(possibleTransitions.entries());
            if (transitions.length === 0) break;

            const [letter, nextStates] = transitions[Math.floor(Math.random() * transitions.length)];
            const nextState = Array.from(nextStates)[Math.floor(Math.random() * nextStates.size)];

            result += letter;
            currentState = nextState;
            steps++;

            if (this.QF.has(currentState)) {
                return result;
            }
        }

        return null;
    }

    showValidTransitions(): void {
        console.log("\nValid State Transitions:");
        console.log("------------------------");
        this.Delta.forEach((transitions, state) => {
            transitions.forEach((nextStates, symbol) => {
                nextStates.forEach(nextState => {
                    console.log(`State ${state} --${symbol}--> State ${nextState}`);
                });
            });
        });
    }
}
