import { IcsEvent } from "@timurcravtov/ts-ics";

export function createIcsEvent(
  summary: string,
  start: Date,
  end: Date
): IcsEvent {
  const now = new Date();
  return {
    uid: `aion-${now.getTime()}`,
    summary,
    start: { date: start },
    end: { date: end },
    stamp: { date: now },
  };
}


