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
  private calendars: Map<string, IcsEvent[]> = new Map();
  private currentCalendar: string = "main";

  protected defaultResult(): void {}

  visitProgram(ctx: AionParser.ProgramContext): void {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }

    const events = this.calendars.get(this.currentCalendar) || [];

    const calendar: IcsCalendar = {
      prodId: getProdId(),
      version: "2.0",
      events,
    };

    const icsString = generateIcsCalendar(calendar);
    console.log(icsString);
  }

  visitStatement(ctx: AionParser.StatementContext): void {
    if (ctx.structured_event_stmt()) {
      this.visitStructured_event_stmt(ctx.structured_event_stmt());
    } else if (ctx.default_declaration()) {
      this.visitDefault_declaration(ctx.default_declaration());
    } else if (ctx.loop_stmt()) {
      this.visitLoop_stmt(ctx.loop_stmt());
    } else if (ctx.conditional_stmt()) {
      this.visitConditional_stmt(ctx.conditional_stmt());
    }
    // TODO: more statements as needed
  }

  visitDefault_declaration(ctx: AionParser.Default_declarationContext): void {
    if (ctx.event_decl()) {
      this.visitEvent_decl(ctx.event_decl());
    } else if (ctx.task_decl()) {
      this.visitTask_decl(ctx.task_decl());
    } else if (ctx.pomodoro_decl()) {
      this.visitPomodoro_decl(ctx.pomodoro_decl());
    }
  }

  visitDeclaration(ctx: AionParser.DeclarationContext): void {
    if (ctx.event_decl()) {
      this.visitEvent_decl(ctx.event_decl());
    } else if (ctx.task_decl()) {
      this.visitTask_decl(ctx.task_decl());
    } else if (ctx.pomodoro_decl()) {
      this.visitPomodoro_decl(ctx.pomodoro_decl());
    }
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
        end = new Date(start.getTime() + 60 * 60 * 1000);
      }
    } else {
      start = new Date();
      end = new Date(start.getTime() + 60 * 60 * 1000);
    }

    const event = createIcsEvent(name, start, end);
    const list = this.calendars.get(this.currentCalendar) || [];
    list.push(event);
    this.calendars.set(this.currentCalendar, list);
  }

  visitTask_decl(ctx: AionParser.Task_declContext): void {
    const name = ctx.STRING().text.replace(/"/g, "");
    const dateCtx = ctx.date();
    const timeCtx = ctx.task_time_spec().time()[0];
    const [h, m] = timeCtx.text.split(":").map(Number);
    const [d, mo, y = new Date().getFullYear()] = dateCtx.text
      .split(".")
      .map(Number);

    const start = new Date(y, mo - 1, d, h, m);
    const end = new Date(start.getTime() + 30 * 60 * 1000); // default 30m duration

    const event = createIcsEvent(name, start, end);
    const list = this.calendars.get(this.currentCalendar) || [];
    list.push(event);
    this.calendars.set(this.currentCalendar, list);
  }

  visitPomodoro_decl(ctx: AionParser.Pomodoro_declContext): void {
    const name = ctx.STRING().text.replace(/"/g, "");
    const dateCtx = ctx.date();
    const timeCtx = ctx.time();

    const numberTokens = ctx.children?.filter(
      (c) => c.text && /^\d+$/.test(c.text)
    );
    const repeatCount =
      numberTokens && numberTokens.length > 0
        ? parseInt(numberTokens[0].text)
        : 1;

    const [h, m] = timeCtx.text.split(":").map(Number);
    const [d, mo, y = new Date().getFullYear()] = dateCtx.text
      .split(".")
      .map(Number);
    const base = new Date(y, mo - 1, d, h, m);

    let workDuration = 25;
    let breakDuration = 5;

    if (ctx.duration().length >= 1) {
      const raw = ctx.duration()[0].text;
      const matches = raw.match(/(\\d+)([hm])/g);
      if (matches) {
        for (const m of matches) {
          const num = parseInt(m);
          const unit = m[m.length - 1];
          if (unit === "h") workDuration += num * 60;
          else if (unit === "m") workDuration += num;
        }
      }
    }

    if (ctx.duration().length >= 2) {
      const raw = ctx.duration()[1].text;
      const matches = raw.match(/(\\d+)([hm])/g);
      if (matches) {
        for (const m of matches) {
          const num = parseInt(m);
          const unit = m[m.length - 1];
          if (unit === "h") breakDuration += num * 60;
          else if (unit === "m") breakDuration += num;
        }
      }
    }

    let current = new Date(base);
    for (let i = 0; i < repeatCount; i++) {
      const start = new Date(current);
      const end = new Date(current.getTime() + workDuration * 60 * 1000);
      current = new Date(end.getTime() + breakDuration * 60 * 1000);

      const event = createIcsEvent(`${name} #${i + 1}`, start, end);
      const list = this.calendars.get(this.currentCalendar) || [];
      list.push(event);
      this.calendars.set(this.currentCalendar, list);
    }
  }

  visitStructured_event_stmt(
    ctx: AionParser.Structured_event_stmtContext
  ): void {
    const fields = ctx.structured_event_field();
    let name = "Untitled Event";
    let startTime: Date = new Date();
    let durationMinutes = 60;
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
        const label = field.getChild(0).text;
        const value = field.STRING().text.replace(/"/g, "");

        if (label === "name") name = value;
        else if (label === "location") location = value;
        else if (label === "category") category = value;
      } else if (field.time()) {
        const label = field.getChild(0).text;
        if (label === "start") {
          const [h, m] = field.time().text.split(":").map(Number);
          startTime = new Date(
            defaultDate.getFullYear(),
            defaultDate.getMonth(),
            defaultDate.getDate(),
            h,
            m
          );
        }
      } else if (field.duration()) {
        const label = field.getChild(0).text;
        if (label === "duration") {
          const matches = field.duration().text.match(/(\d+)([hm])/g) || [];
          durationMinutes = 0;
          for (const match of matches) {
            const num = parseInt(match);
            const unit = match[match.length - 1];
            if (unit === "h") durationMinutes += num * 60;
            else if (unit === "m") durationMinutes += num;
          }
        }
      }
    }

    const endTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000);
    const event = createIcsEvent(name, startTime, endTime);
    event.location = location;
    event.categories = [category];

    const list = this.calendars.get(this.currentCalendar) || [];
    list.push(event);
    this.calendars.set(this.currentCalendar, list);
  }

  visitLoop_stmt(ctx: AionParser.Loop_stmtContext): void {
    // Placeholder: will need date math and loop execution
  }

  visitConditional_stmt(ctx: AionParser.Conditional_stmtContext): void {
    // Placeholder: will need expression evaluation engine
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
