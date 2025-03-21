// Generated from src/core/antlr/Aion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AionParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AionVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AionParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStmt?: (ctx: ImportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.taskStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskStmt?: (ctx: TaskStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.eventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventStmt?: (ctx: EventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.pomodoroStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPomodoroStmt?: (ctx: PomodoroStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.structuredEventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructuredEventStmt?: (ctx: StructuredEventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.structuredEventBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructuredEventBody?: (ctx: StructuredEventBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.structuredEventField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructuredEventField?: (ctx: StructuredEventFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.exportDefaultStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportDefaultStmt?: (ctx: ExportDefaultStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.startWeekStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartWeekStmt?: (ctx: StartWeekStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.iterateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterateStmt?: (ctx: IterateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.conditionalStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStmt?: (ctx: ConditionalStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.includeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeStmt?: (ctx: IncludeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.mergeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStmt?: (ctx: MergeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.filterStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterStmt?: (ctx: FilterStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.exportStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStmt?: (ctx: ExportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.exportTarget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportTarget?: (ctx: ExportTargetContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.recurrence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecurrence?: (ctx: RecurrenceContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.dateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateExpr?: (ctx: DateExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.dayOfWeekExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDayOfWeekExpr?: (ctx: DayOfWeekExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.ordinalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinalExpr?: (ctx: OrdinalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.timeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeExpr?: (ctx: TimeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.durationExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationExpr?: (ctx: DurationExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.durationValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationValue?: (ctx: DurationValueContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.durationPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationPart?: (ctx: DurationPartContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.pomodoroExtras`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPomodoroExtras?: (ctx: PomodoroExtrasContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.iterateFrom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterateFrom?: (ctx: IterateFromContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.iterateTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterateTo?: (ctx: IterateToContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.stepExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStepExpr?: (ctx: StepExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.conditionExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionExpr?: (ctx: ConditionExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.filterCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterCondition?: (ctx: FilterConditionContext) => Result;
}

