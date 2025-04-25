import {generateIcsCalendar, generateIcsEvent, IcsCalendar, IcsEvent, IcsComponent, IcsTodo, generateIcsTodo} from '@timurcravtov/ts-ics';
import {getProdId} from "./getProdId";

const c: IcsComponent = "STANDARD";

const todo: IcsTodo = {
    due: {
        date: new Date(2025, 10, 10)
    },
    stamp: {
        date: new Date(2025, 10, 10)
    },
    uid: "1231231",
}

const event: IcsEvent = {

    start: {
        date: new Date(2025, 1, 2, 14, 30)
    },

    end: null,
    uid: "1231231",
    stamp: {
        date: new Date(2025, 1, 2, 14, 30)
    },
    summary: 'Project Meeting',
    description: 'Discuss quarterly project status',
    location: 'Conference Room A',
    url: 'https://example.com/meeting',
    categories: ['Meeting', 'Work'],
    organizer: { name: 'John Doe', email: 'john@example.com' },
};

// Create multiple events
const events: IcsEvent[] = [
    event,
];

let icsContent = generateIcsTodo(todo);
console.log(icsContent)

// let calendar: IcsCalendar = {
//     prodId: getProdId(),
//     events: [event],
//     version: "2.0"
// }

// const icsCalendar = generateIcsCalendar(calendar);

// console.log(icsCalendar);
