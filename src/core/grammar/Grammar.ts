import { FiniteAutomaton } from './FiniteAutomaton';

export class Grammar {
    VN: Set<string>;
    VT: Set<string>;
    P: Map<string, string[]>;
    S: string;

    constructor(vN: Set<string>, vT: Set<string>, p: Map<string, string[]>, s: string) {
        this.VN = vN;
        this.VT = vT;
        this.P = p;
        this.S = s;
    }

    createWord(): string {
        let wordInProgress  = this.S;
        console.log("\nGenerating word:", wordInProgress);

        while (true) {
            let foundNonTerminal = false;

            for (let i = 0; i < wordInProgress.length; i++) {
                let currentChar = wordInProgress[i];
                if (this.VN.has(currentChar)) {
                    foundNonTerminal  = true;
                    const rules = this.P.get(currentChar);
                    if (!rules) continue;

                    const usedReplacement = rules[Math.floor(Math.random() * rules.length)];
                    wordInProgress = wordInProgress.substring(0, i) + usedReplacement + wordInProgress.substring(i + 1);

                    console.log(" =>", wordInProgress);
                    break;
                }
            }

            if (!foundNonTerminal) break;
        }

        return wordInProgress;
    }

    toFiniteAutomaton(): FiniteAutomaton {
        const qF = new Set(["q_F"]); 
        const q = new Set([...this.VN, ...qF]);
        const sigma = new Set([...this.VT]);
        const q0 = this.S;
        const delta = new Map<string, Map<string, Set<string>>>();

        for (const [key, products] of this.P.entries()) {
            for (const product of products) {
                const terminal = product[0];
                const nonTerminal = product.length > 1 ? product[1] : "q_F";

                if (!this.VT.has(terminal)) continue;

                const stateTransitions = delta.get(key) ?? new Map<string, Set<string>>();
                const targetStates = stateTransitions.get(terminal) ?? new Set<string>();

                targetStates.add(nonTerminal);
                stateTransitions.set(terminal, targetStates);
                delta.set(key, stateTransitions);
            }
        }

        return new FiniteAutomaton(q, sigma, delta, q0, qF);
    }

    toString(): string {
        let output = `V_N = { ${Array.from(this.VN).join(", ")} }\n`;
        output += `V_T = { ${Array.from(this.VT).join(", ")} }\n`;
        output += `P = {\n`;

        for (const [key, values] of this.P.entries()) {
            output += `    ${key} ---> ${values.join(" | ")}\n`;
        }
        output += "}\n";
        output += `S = { ${this.S} }\n`;

        return output;
    }
}
