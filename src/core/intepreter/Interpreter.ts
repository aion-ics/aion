import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { AionVisitor } from "../../core/antlr/generated/AionVisitor";
import * as AionParser from "../../core/antlr/generated/AionParser";
import { IcsEvent, IcsCalendar, generateIcsCalendar } from "@timurcravtov/ts-ics";
import { getProdId } from "./helpers/getProdId";
import { createIcsEvent } from "./helpers/createIcsEvent";

export class Interpreter
  extends AbstractParseTreeVisitor<void>
  implements AionVisitor<void>
{
  private calendars: Map<string, IcsEvent[]> = new Map();
  private variables: Map<string, any> = new Map();
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
    } else if (ctx.import_stmt()) {
      this.visitImport_stmt(ctx.import_stmt());
    } else if (ctx.assignment_stmt()) {
      this.visitAssignment_stmt(ctx.assignment_stmt());
    } else if (ctx.value_assignment_stmt()) {
      this.visitValue_assignment_stmt(ctx.value_assignment_stmt());
    } else if (ctx.merge_stmt()) {
      this.visitMerge_stmt(ctx.merge_stmt());
    } else if (ctx.include_stmt()) {
      this.visitInclude_stmt(ctx.include_stmt());
    } else if (ctx.export_stmt()) {
      this.visitExport_stmt(ctx.export_stmt());
    } else if (ctx.loop_stmt()) {
      this.visitLoop_stmt(ctx.loop_stmt());
    } else if (ctx.conditional_stmt()) {
      this.visitConditional_stmt(ctx.conditional_stmt());
    }
  }

  visitImport_stmt(ctx: AionParser.Import_stmtContext): void {
    const file = ctx.STRING().text.replace(/"/g, "");
    const alias = ctx.IDENTIFIER().text;
    console.log(`(Import) Pretending to import file: ${file} as ${alias}`);
  }

  visitAssignment_stmt(ctx: AionParser.Assignment_stmtContext): void {
    const name = ctx.IDENTIFIER().text;
    const declaration = ctx.declaration();
    if (declaration) {
      this.variables.set(name, declaration);
      console.log(`(Assignment) Stored declaration in variable: ${name}`);
    }
  }

  visitValue_assignment_stmt(
    ctx: AionParser.Value_assignment_stmtContext
  ): void {
    const name = ctx.IDENTIFIER().text;
    const value = ctx.value_expr().text;
    this.variables.set(name, value);
    console.log(
      `(Value Assignment) Stored value in variable: ${name} = ${value}`
    );
  }

  visitMerge_stmt(ctx: AionParser.Merge_stmtContext): void {
    const identifiers = ctx.identifier_list().IDENTIFIER();
    const target = identifiers[identifiers.length - 1].text; // use last IDENTIFIER
    const list: IcsEvent[] = [];

    for (let id of identifiers) {
      const events = this.calendars.get(id.text) || [];
      list.push(...events);
    }

    this.calendars.set(target, list);
    console.log(`(Merge) Merged into: ${target}`);
  }

  visitInclude_stmt(ctx: AionParser.Include_stmtContext): void {
    const identifiers = ctx.IDENTIFIER();
    const from = identifiers[0]?.text || "";
    const to = identifiers[1]?.text || "";
    const sourceEvents = this.calendars.get(from) || [];
    const destEvents = this.calendars.get(to) || [];
    destEvents.push(...sourceEvents);
    this.calendars.set(to, destEvents);
    console.log(`(Include) Included ${from} into ${to}`);
  }

  visitExport_stmt(ctx: AionParser.Export_stmtContext): void {
    console.log(`(Export) Calendar exported`);
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
      const matches = raw.match(/(\d+)([hm])/g);
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
      const matches = raw.match(/(\d+)([hm])/g);
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
    const startDate = this.resolveLoopStart(ctx.loop_start());
    const endDate = this.resolveLoopEnd(ctx.loop_end(), startDate);

    const stepSize = ctx.NUMBER() ? parseInt(ctx.NUMBER().text) : 1;
    const unit = ctx.loop_unit().text.toLowerCase();

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      (this as any).currentLoopDate = currentDate;

      for (const stmt of ctx.statement()) {
        this.visit(stmt);
      }

      if (unit.includes("day")) {
        currentDate.setDate(currentDate.getDate() + stepSize);
      } else if (unit.includes("week")) {
        currentDate.setDate(currentDate.getDate() + stepSize * 7);
      } else if (unit.includes("month")) {
        currentDate.setMonth(currentDate.getMonth() + stepSize);
      } else {
        throw new Error(`Unknown loop unit: ${unit}`);
      }
    }

    delete (this as any).currentLoopDate;
  }

  private resolveLoopStart(ctx: AionParser.Loop_startContext): Date {
    if (ctx.date()) {
      const dateText = ctx.date().text.trim().toLowerCase();
      if (dateText === "today") {
        return new Date();
      }
      return this.parseDate(dateText);
    }
    if (ctx.IDENTIFIER()) {
      const variable = ctx.IDENTIFIER().text;
      const value = this.variables.get(variable);
      if (value instanceof Date) {
        return value;
      }
      throw new Error(`Unknown loop start variable: ${variable}`);
    }
    throw new Error("Invalid loop start");
  }

  private resolveLoopEnd(
    ctx: AionParser.Loop_endContext,
    startDate: Date
  ): Date {
    if (ctx.date()) {
      return this.parseDate(ctx.date().text);
    }
    if (ctx.IDENTIFIER()) {
      const value = this.variables.get(ctx.IDENTIFIER().text);
      if (value instanceof Date) {
        return value;
      }
      throw new Error(`Unknown loop end variable: ${ctx.IDENTIFIER().text}`);
    }
    if (ctx.loop_start() && ctx.NUMBER()) {
      const baseDate = this.resolveLoopStart(ctx.loop_start());
      const offsetDays = parseInt(ctx.NUMBER().text);
      const result = new Date(baseDate);
      result.setDate(result.getDate() + offsetDays);
      return result;
    }
    throw new Error("Invalid loop end");
  }

  private parseDate(text: string): Date {
    const parts = text.split(".").map(Number);
    const [d, m, y = new Date().getFullYear()] = parts;
    return new Date(y, m - 1, d);
  }

  visitConditional_stmt(ctx: AionParser.Conditional_stmtContext): void {
    let conditionMet = false;

    // Step 1: Evaluate the first condition (if condition)
    if (this.evaluateCondition(ctx.condition(0))) {
      conditionMet = true; // The first condition is true
      this.visitBlock(ctx.statement(0)); // Visit the "if" block
    } else {
      // Step 2: Check for "else if" conditions if the "if" condition is not met
      for (let i = 1; i < ctx.condition().length; i++) {
        if (this.evaluateCondition(ctx.condition(i))) {
          conditionMet = true;
          this.visitBlock(ctx.statement(i)); // Visit the "else if" block
          break;
        }
      }

      // Step 3: Check for "else" block if no conditions matched
      if (!conditionMet && ctx.statement(ctx.condition().length)) {
        this.visitBlock(ctx.statement(ctx.condition().length)); // Execute the "else" block
      }
    }
  }

  private evaluateCondition(
    conditionCtx: AionParser.ConditionContext
  ): boolean {
    if (conditionCtx.IDENTIFIER()) {
      const variable = conditionCtx.IDENTIFIER().text;
      const value = this.variables.get(variable);
      const comparisonValue = this.evaluateComparisonValue(
        conditionCtx.value()
      );

      switch (conditionCtx.comparison_op().text) {
        case "==":
          return value === comparisonValue;
        case "!=":
          return value !== comparisonValue;
        case "<":
          return value < comparisonValue;
        case "<=":
          return value <= comparisonValue;
        case ">":
          return value > comparisonValue;
        case ">=":
          return value >= comparisonValue;
        default:
          return false;
      }
    }
    return false; // If condition is not handled, return false.
  }

  private evaluateComparisonValue(valueCtx: AionParser.ValueContext): any {
    if (valueCtx.NUMBER()) {
      return parseInt(valueCtx.NUMBER().text);
    } else if (valueCtx.STRING()) {
      return valueCtx.STRING().text.replace(/"/g, ""); // Remove quotes
    }
    return null; // For other types of values, we should handle appropriately
  }

  private visitBlock(
    statements: AionParser.StatementContext | AionParser.StatementContext[]
  ): void {
    // If we only have a single statement, convert it into an array
    if (!Array.isArray(statements)) {
      statements = [statements]; // Wrap the single statement in an array
    }

    // Now, iterate through the statements array and visit each one
    for (const stmt of statements) {
      this.visit(stmt); // Visit each statement inside the block
    }
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
