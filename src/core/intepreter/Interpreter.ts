import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { AionVisitor } from "../../core/antlr/generated/AionVisitor";
import * as AionParser from "../../core/antlr/generated/AionParser";
import { IcsEvent, IcsCalendar, generateIcsCalendar } from "ts-ics";
import { getProdId } from "./helpers/getProdId";
import { createIcsEvent } from "./helpers/createIcsEvent";

export class Interpreter
  extends AbstractParseTreeVisitor<void>
  implements AionVisitor<void>
{
  private events: IcsEvent[] = [];

  protected defaultResult(): void {}

  visitProgram(ctx: AionParser.ProgramContext): void {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }

    const calendar: IcsCalendar = {
      prodId: getProdId(),
      version: "2.0",
      events: this.events,
    };

    const icsString = generateIcsCalendar(calendar);
    console.log(icsString);
  }

  visitEvent_decl(ctx: AionParser.Event_declContext): void {
    const name = ctx.STRING().text.replace(/"/g, "");

    let start: Date;
    let end: Date;

    const timeSpec = ctx.event_time_spec();
    const dateCtx = ctx.date();

    if (timeSpec && dateCtx) {
      const times = timeSpec.time();

      if (times.length >= 2) {
        start = this.toDateTime(dateCtx, times[0]);
        end = this.toDateTime(dateCtx, times[1]);
      } else {
        start = this.toDateTime(dateCtx, times[0]);
        end = new Date(start.getTime() + 60 * 60 * 1000); // Default +1h
      }
    } else {
      start = new Date();
      end = new Date();
    }

    const event = createIcsEvent(name, start, end);
    this.events.push(event);
  }

  visitDefault_declaration(ctx: AionParser.Default_declarationContext): void {
    if (ctx.event_decl()) {
      this.visitEvent_decl(ctx.event_decl());
    }

    // Add here more
  }

  visitDeclaration(ctx: AionParser.DeclarationContext): void {
    if (ctx.event_decl()) {
      this.visitEvent_decl(ctx.event_decl());
    }
    // Later add task_decl() and pomodoro_decl()
  }

  visitStatement(ctx: AionParser.StatementContext): void {
    if (ctx.import_stmt()) {
      // later handle imports
    } else if (ctx.assignment_stmt()) {
      // later handle assignments
    } else if (ctx.structured_event_stmt()) {
      this.visitStructured_event_stmt(ctx.structured_event_stmt());
    } else if (ctx.default_declaration()) {
      this.visitDefault_declaration(ctx.default_declaration());
    }
    // Add more as needed
  }

  visitStructured_event_stmt(
    ctx: AionParser.Structured_event_stmtContext
  ): void {
    const fields = ctx.structured_event_field();
    let name = "Untitled Event";
    let startTime: Date = new Date();
    let durationMinutes = 60; // Default 1 hour
    let location = "Unknown";
    let category = "General";

    const today = new Date();
    const defaultDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    for (const field of fields) {
      if (field.STRING()) {
        const label = field.getChild(0).text; // e.g., 'name' or 'location' or 'category'
        const value = field.STRING().text.replace(/"/g, "");

        if (label === "name") {
          name = value;
        } else if (label === "location") {
          location = value;
        } else if (label === "category") {
          category = value;
        }
      } else if (field.time()) {
        const label = field.getChild(0).text; // should be 'start'
        if (label === "start") {
          const [hours, minutes] = field.time().text.split(":").map(Number);
          startTime = new Date(
            defaultDate.getFullYear(),
            defaultDate.getMonth(),
            defaultDate.getDate(),
            hours,
            minutes
          );
        }
      } else if (field.duration()) {
        const label = field.getChild(0).text; // should be 'duration'
        if (label === "duration") {
          // Parse something like '30m' or '2h'
          const durationParts =
            field.duration().text.match(/(\d+)([hm])/g) || [];
          for (const part of durationParts) {
            const value = parseInt(part);
            const unit = part[part.length - 1];
            if (unit === "h") {
              durationMinutes += value * 60;
            } else if (unit === "m") {
              durationMinutes += value;
            }
          }
        }
      }
    }

    const endTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000);

    const event = createIcsEvent(name, startTime, endTime);
    event.location = location;
    event.categories = [category];

    this.events.push(event);
  }

  private toDateTime(
    dateCtx: AionParser.DateContext,
    timeCtx: AionParser.TimeContext
  ): Date {
    const [d, m, y = new Date().getFullYear()] = dateCtx.text
      .split(".")
      .map(Number);
    const [h, min] = timeCtx.text.split(":").map(Number);
    return new Date(y, m - 1, d, h, min);
  }
}
