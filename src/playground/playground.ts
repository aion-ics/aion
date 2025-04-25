// import { AionParser } from "./core/antlr/generated/AionParser";
// import { AionLexer } from "./core/antlr/generated/AionLexer";
// import antlr4, { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts'
// import { ParseTree } from "antlr4ts/tree/ParseTree";


// import * as fs from 'fs';
// import * as path from 'path';

// const filePath = path.join(__dirname, '..', 'docs/examples', 'main.aion');
// const content = fs.readFileSync(filePath, 'utf8');


// function printParseTree(tree: ParseTree, parser: AionParser, indent: string = "", level: number = 0): string {
//     let output = "";

//     // Parser Rule node
//     if (tree instanceof ParserRuleContext) {
//         const ruleName = parser.ruleNames[tree.ruleIndex];
//         output += `${indent}${level === 0 ? "" : "└─"}<${ruleName}>\n`;
//     } 
//     // Terminal node (Token)
//     else {
//         const token = tree['symbol']; // Access the token object behind the terminal node
//         const tokenText = tree.text.replace(/\s+/g, ' ').trim();
//         const tokenType = token.type;
//         const tokenTypeName = AionLexer.VOCABULARY.getSymbolicName(tokenType) || "UNKNOWN";

//         output += `${indent}└─"${tokenText}" [${tokenTypeName}]\n`;
//     }

//     // Recursively print children
//     for (let i = 0; i < tree.childCount; i++) {
//         const child = tree.getChild(i);
//         const childIsLast = (i === tree.childCount - 1);
//         const childIndent = indent + (level > 0 ? (childIsLast ? "   " : "│  ") : "");
//         output += printParseTree(child, parser, childIndent, level + 1);
//     }

//     return output;
// }


// let input = 'import "orar-231" as orar;';


// let inputStream = new ANTLRInputStream(content);
// let lexer = new AionLexer(inputStream);
// let tokenStream = new CommonTokenStream(lexer);
// let parser = new AionParser(tokenStream);
// console.log(parser)
// const tree = parser.program();

// // Print the parse tree
// console.log(printParseTree(tree, parser));


// import { generateIcsCalendar, type IcsCalendar } from "ts-ics";


// const ICAL = require('ical.js');

// // Create the VCALENDAR
// const vcalendar = new ICAL.Component(['vcalendar', [], []]);
// vcalendar.updatePropertyWithValue('prodid', '-//Aion//Aion CLI v1.0//EN');
// vcalendar.updatePropertyWithValue('version', '2.0');

// // Function to make a VEVENT
// function createEvent(summary, startDate, endDate) {
//   const vevent = new ICAL.Component('vevent');
//   const event = new ICAL.Event(vevent);

//   event.summary = summary;
//   event.startDate = ICAL.Time.fromJSDate(new Date(startDate), true);
//   event.endDate = ICAL.Time.fromJSDate(new Date(endDate), true);

//   return vevent;
// }

// // Add multiple events
// vcalendar.addSubcomponent(createEvent('Work Session', '2025-04-10T09:00:00', '2025-04-10T11:00:00'));
// vcalendar.addSubcomponent(createEvent('Lunch with Sarah', '2025-04-10T13:00:00', '2025-04-10T14:00:00'));

// console.log(vcalendar.toString()); // Write to file if needed

import { generateIcsCalendar, IcsCalendar, IcsEvent, IcsDateObject } from 'ts-ics';
import {errorWithCodePositionReference} from "../core/exceptions/errorWithCodePositionReference";
import { parse } from '../core/parser/parser';

// Define a date object for the event
const createIcsDateObject = (date: Date): IcsDateObject => ({
  date,
  type: 'DATE-TIME', // Can be 'DATE' or 'DATE-TIME'
});

// Define an event
const event: IcsEvent = {
  summary: 'Team Meeting',
  uid: 'event-12345@example.com', // Unique identifier for the event
  stamp: createIcsDateObject(new Date()), // Timestamp of creation
  start: createIcsDateObject(new Date('2025-04-10T10:00:00Z')), // Start time (UTC)
  end: createIcsDateObject(new Date('2025-04-10T11:00:00Z')), // End time (UTC)
  description: 'A team sync-up meeting.',
  location: 'Office Room 101',
  status: 'CONFIRMED'
};

// // Define the calendar
// const calendar: IcsCalendar = {
//   version: '2.0', // Required iCalendar version
//   prodId: getProdId(),
//   events: [event], // Array of events
//   method: 'PUBLISH', // Optional: calendar method
//   name: 'Team Calendar', // Optional: calendar name
// };
//
// calendar.events.push(event);
//
// // Generate the ICS string
// const icsContent = generateIcsCalendar(calendar);
// console.log(icsContent);
//
// import { getAionVersion } from '../core/intepreter/helpers/getVersion';
// import { getProdId } from '../core/intepreter/helpers/getProdId';
//

// console.log(errorWithCodePositionReference(1, 5, "let a = 5", "unexpected a", "input.aion"));

parse(`new event "kill myself" daily from 13:30 to 15:30;`);