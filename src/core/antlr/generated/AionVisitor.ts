// Generated from src/core/antlr/Aion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./AionParser";
import { StatementContext } from "./AionParser";
import { Import_stmtContext } from "./AionParser";
import { Assignment_stmtContext } from "./AionParser";
import { Default_declarationContext } from "./AionParser";
import { DeclarationContext } from "./AionParser";
import { Event_declContext } from "./AionParser";
import { Event_timingContext } from "./AionParser";
import { Structured_event_stmtContext } from "./AionParser";
import { Structured_event_fieldContext } from "./AionParser";
import { Week_start_stmtContext } from "./AionParser";
import { Task_declContext } from "./AionParser";
import { Task_timingContext } from "./AionParser";
import { Pomodoro_declContext } from "./AionParser";
import { Loop_stmtContext } from "./AionParser";
import { Loop_unitContext } from "./AionParser";
import { Conditional_stmtContext } from "./AionParser";
import { Filter_stmtContext } from "./AionParser";
import { Merge_stmtContext } from "./AionParser";
import { Include_stmtContext } from "./AionParser";
import { Export_stmtContext } from "./AionParser";
import { ConditionContext } from "./AionParser";
import { Comparison_opContext } from "./AionParser";
import { StrategyContext } from "./AionParser";
import { DateContext } from "./AionParser";
import { WeekdayContext } from "./AionParser";
import { TimeContext } from "./AionParser";
import { DurationContext } from "./AionParser";
import { ValueContext } from "./AionParser";
import { Am_pmContext } from "./AionParser";
import { Month_nameContext } from "./AionParser";


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
	 * Visit a parse tree produced by `AionParser.import_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_stmt?: (ctx: Import_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.assignment_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_stmt?: (ctx: Assignment_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.default_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_declaration?: (ctx: Default_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.event_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_decl?: (ctx: Event_declContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.event_timing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_timing?: (ctx: Event_timingContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.structured_event_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructured_event_stmt?: (ctx: Structured_event_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.structured_event_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructured_event_field?: (ctx: Structured_event_fieldContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.week_start_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeek_start_stmt?: (ctx: Week_start_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.task_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_decl?: (ctx: Task_declContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.task_timing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask_timing?: (ctx: Task_timingContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.pomodoro_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPomodoro_decl?: (ctx: Pomodoro_declContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.loop_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop_stmt?: (ctx: Loop_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.loop_unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop_unit?: (ctx: Loop_unitContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.conditional_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_stmt?: (ctx: Conditional_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.filter_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter_stmt?: (ctx: Filter_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.merge_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_stmt?: (ctx: Merge_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.include_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude_stmt?: (ctx: Include_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.export_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExport_stmt?: (ctx: Export_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.comparison_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_op?: (ctx: Comparison_opContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.strategy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrategy?: (ctx: StrategyContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.weekday`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeekday?: (ctx: WeekdayContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.am_pm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAm_pm?: (ctx: Am_pmContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.month_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonth_name?: (ctx: Month_nameContext) => Result;
}

