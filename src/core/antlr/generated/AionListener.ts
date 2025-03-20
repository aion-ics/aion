// Generated from src/core/antlr/Aion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./AionParser";
import { StatementContext } from "./AionParser";
import { ImportStmtContext } from "./AionParser";
import { TaskStmtContext } from "./AionParser";
import { EventStmtContext } from "./AionParser";
import { PomodoroStmtContext } from "./AionParser";
import { StructuredEventStmtContext } from "./AionParser";
import { StructuredEventBodyContext } from "./AionParser";
import { StructuredEventFieldContext } from "./AionParser";
import { ExportDefaultStmtContext } from "./AionParser";
import { StartWeekStmtContext } from "./AionParser";
import { IterateStmtContext } from "./AionParser";
import { ConditionalStmtContext } from "./AionParser";
import { IncludeStmtContext } from "./AionParser";
import { MergeStmtContext } from "./AionParser";
import { FilterStmtContext } from "./AionParser";
import { ExportStmtContext } from "./AionParser";
import { ExportTargetContext } from "./AionParser";
import { RecurrenceContext } from "./AionParser";
import { DateExprContext } from "./AionParser";
import { DayOfWeekExprContext } from "./AionParser";
import { OrdinalExprContext } from "./AionParser";
import { TimeExprContext } from "./AionParser";
import { DurationExprContext } from "./AionParser";
import { DurationValueContext } from "./AionParser";
import { DurationPartContext } from "./AionParser";
import { PomodoroExtrasContext } from "./AionParser";
import { IterateFromContext } from "./AionParser";
import { IterateToContext } from "./AionParser";
import { StepExprContext } from "./AionParser";
import { ConditionExprContext } from "./AionParser";
import { FilterConditionContext } from "./AionParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AionParser`.
 */
export interface AionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AionParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportStmt?: (ctx: ImportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportStmt?: (ctx: ImportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.taskStmt`.
	 * @param ctx the parse tree
	 */
	enterTaskStmt?: (ctx: TaskStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.taskStmt`.
	 * @param ctx the parse tree
	 */
	exitTaskStmt?: (ctx: TaskStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.eventStmt`.
	 * @param ctx the parse tree
	 */
	enterEventStmt?: (ctx: EventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.eventStmt`.
	 * @param ctx the parse tree
	 */
	exitEventStmt?: (ctx: EventStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.pomodoroStmt`.
	 * @param ctx the parse tree
	 */
	enterPomodoroStmt?: (ctx: PomodoroStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.pomodoroStmt`.
	 * @param ctx the parse tree
	 */
	exitPomodoroStmt?: (ctx: PomodoroStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.structuredEventStmt`.
	 * @param ctx the parse tree
	 */
	enterStructuredEventStmt?: (ctx: StructuredEventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.structuredEventStmt`.
	 * @param ctx the parse tree
	 */
	exitStructuredEventStmt?: (ctx: StructuredEventStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.structuredEventBody`.
	 * @param ctx the parse tree
	 */
	enterStructuredEventBody?: (ctx: StructuredEventBodyContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.structuredEventBody`.
	 * @param ctx the parse tree
	 */
	exitStructuredEventBody?: (ctx: StructuredEventBodyContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.structuredEventField`.
	 * @param ctx the parse tree
	 */
	enterStructuredEventField?: (ctx: StructuredEventFieldContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.structuredEventField`.
	 * @param ctx the parse tree
	 */
	exitStructuredEventField?: (ctx: StructuredEventFieldContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.exportDefaultStmt`.
	 * @param ctx the parse tree
	 */
	enterExportDefaultStmt?: (ctx: ExportDefaultStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.exportDefaultStmt`.
	 * @param ctx the parse tree
	 */
	exitExportDefaultStmt?: (ctx: ExportDefaultStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.startWeekStmt`.
	 * @param ctx the parse tree
	 */
	enterStartWeekStmt?: (ctx: StartWeekStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.startWeekStmt`.
	 * @param ctx the parse tree
	 */
	exitStartWeekStmt?: (ctx: StartWeekStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.iterateStmt`.
	 * @param ctx the parse tree
	 */
	enterIterateStmt?: (ctx: IterateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.iterateStmt`.
	 * @param ctx the parse tree
	 */
	exitIterateStmt?: (ctx: IterateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.conditionalStmt`.
	 * @param ctx the parse tree
	 */
	enterConditionalStmt?: (ctx: ConditionalStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.conditionalStmt`.
	 * @param ctx the parse tree
	 */
	exitConditionalStmt?: (ctx: ConditionalStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.includeStmt`.
	 * @param ctx the parse tree
	 */
	enterIncludeStmt?: (ctx: IncludeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.includeStmt`.
	 * @param ctx the parse tree
	 */
	exitIncludeStmt?: (ctx: IncludeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.mergeStmt`.
	 * @param ctx the parse tree
	 */
	enterMergeStmt?: (ctx: MergeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.mergeStmt`.
	 * @param ctx the parse tree
	 */
	exitMergeStmt?: (ctx: MergeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.filterStmt`.
	 * @param ctx the parse tree
	 */
	enterFilterStmt?: (ctx: FilterStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.filterStmt`.
	 * @param ctx the parse tree
	 */
	exitFilterStmt?: (ctx: FilterStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.exportStmt`.
	 * @param ctx the parse tree
	 */
	enterExportStmt?: (ctx: ExportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.exportStmt`.
	 * @param ctx the parse tree
	 */
	exitExportStmt?: (ctx: ExportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.exportTarget`.
	 * @param ctx the parse tree
	 */
	enterExportTarget?: (ctx: ExportTargetContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.exportTarget`.
	 * @param ctx the parse tree
	 */
	exitExportTarget?: (ctx: ExportTargetContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.recurrence`.
	 * @param ctx the parse tree
	 */
	enterRecurrence?: (ctx: RecurrenceContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.recurrence`.
	 * @param ctx the parse tree
	 */
	exitRecurrence?: (ctx: RecurrenceContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.dateExpr`.
	 * @param ctx the parse tree
	 */
	enterDateExpr?: (ctx: DateExprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.dateExpr`.
	 * @param ctx the parse tree
	 */
	exitDateExpr?: (ctx: DateExprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.dayOfWeekExpr`.
	 * @param ctx the parse tree
	 */
	enterDayOfWeekExpr?: (ctx: DayOfWeekExprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.dayOfWeekExpr`.
	 * @param ctx the parse tree
	 */
	exitDayOfWeekExpr?: (ctx: DayOfWeekExprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.ordinalExpr`.
	 * @param ctx the parse tree
	 */
	enterOrdinalExpr?: (ctx: OrdinalExprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.ordinalExpr`.
	 * @param ctx the parse tree
	 */
	exitOrdinalExpr?: (ctx: OrdinalExprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.timeExpr`.
	 * @param ctx the parse tree
	 */
	enterTimeExpr?: (ctx: TimeExprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.timeExpr`.
	 * @param ctx the parse tree
	 */
	exitTimeExpr?: (ctx: TimeExprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.durationExpr`.
	 * @param ctx the parse tree
	 */
	enterDurationExpr?: (ctx: DurationExprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.durationExpr`.
	 * @param ctx the parse tree
	 */
	exitDurationExpr?: (ctx: DurationExprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.durationValue`.
	 * @param ctx the parse tree
	 */
	enterDurationValue?: (ctx: DurationValueContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.durationValue`.
	 * @param ctx the parse tree
	 */
	exitDurationValue?: (ctx: DurationValueContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.durationPart`.
	 * @param ctx the parse tree
	 */
	enterDurationPart?: (ctx: DurationPartContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.durationPart`.
	 * @param ctx the parse tree
	 */
	exitDurationPart?: (ctx: DurationPartContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.pomodoroExtras`.
	 * @param ctx the parse tree
	 */
	enterPomodoroExtras?: (ctx: PomodoroExtrasContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.pomodoroExtras`.
	 * @param ctx the parse tree
	 */
	exitPomodoroExtras?: (ctx: PomodoroExtrasContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.iterateFrom`.
	 * @param ctx the parse tree
	 */
	enterIterateFrom?: (ctx: IterateFromContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.iterateFrom`.
	 * @param ctx the parse tree
	 */
	exitIterateFrom?: (ctx: IterateFromContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.iterateTo`.
	 * @param ctx the parse tree
	 */
	enterIterateTo?: (ctx: IterateToContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.iterateTo`.
	 * @param ctx the parse tree
	 */
	exitIterateTo?: (ctx: IterateToContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.stepExpr`.
	 * @param ctx the parse tree
	 */
	enterStepExpr?: (ctx: StepExprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.stepExpr`.
	 * @param ctx the parse tree
	 */
	exitStepExpr?: (ctx: StepExprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.conditionExpr`.
	 * @param ctx the parse tree
	 */
	enterConditionExpr?: (ctx: ConditionExprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.conditionExpr`.
	 * @param ctx the parse tree
	 */
	exitConditionExpr?: (ctx: ConditionExprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.filterCondition`.
	 * @param ctx the parse tree
	 */
	enterFilterCondition?: (ctx: FilterConditionContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.filterCondition`.
	 * @param ctx the parse tree
	 */
	exitFilterCondition?: (ctx: FilterConditionContext) => void;
}

