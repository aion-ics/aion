import { getAionVersion } from "./getVersion";

export function getProdId(): string {
    const aionVersion = getAionVersion()

    return `-//Aion//Aion v${aionVersion}//EN`;
}
