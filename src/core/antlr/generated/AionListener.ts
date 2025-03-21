// Generated from src/core/antlr/Aion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `AionParser.import_stmt`.
	 * @param ctx the parse tree
	 */
	enterImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.import_stmt`.
	 * @param ctx the parse tree
	 */
	exitImport_stmt?: (ctx: Import_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.assignment_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssignment_stmt?: (ctx: Assignment_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.assignment_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssignment_stmt?: (ctx: Assignment_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.default_declaration`.
	 * @param ctx the parse tree
	 */
	enterDefault_declaration?: (ctx: Default_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.default_declaration`.
	 * @param ctx the parse tree
	 */
	exitDefault_declaration?: (ctx: Default_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.event_decl`.
	 * @param ctx the parse tree
	 */
	enterEvent_decl?: (ctx: Event_declContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.event_decl`.
	 * @param ctx the parse tree
	 */
	exitEvent_decl?: (ctx: Event_declContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.event_timing`.
	 * @param ctx the parse tree
	 */
	enterEvent_timing?: (ctx: Event_timingContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.event_timing`.
	 * @param ctx the parse tree
	 */
	exitEvent_timing?: (ctx: Event_timingContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.structured_event_stmt`.
	 * @param ctx the parse tree
	 */
	enterStructured_event_stmt?: (ctx: Structured_event_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.structured_event_stmt`.
	 * @param ctx the parse tree
	 */
	exitStructured_event_stmt?: (ctx: Structured_event_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.structured_event_field`.
	 * @param ctx the parse tree
	 */
	enterStructured_event_field?: (ctx: Structured_event_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.structured_event_field`.
	 * @param ctx the parse tree
	 */
	exitStructured_event_field?: (ctx: Structured_event_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.week_start_stmt`.
	 * @param ctx the parse tree
	 */
	enterWeek_start_stmt?: (ctx: Week_start_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.week_start_stmt`.
	 * @param ctx the parse tree
	 */
	exitWeek_start_stmt?: (ctx: Week_start_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.task_decl`.
	 * @param ctx the parse tree
	 */
	enterTask_decl?: (ctx: Task_declContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.task_decl`.
	 * @param ctx the parse tree
	 */
	exitTask_decl?: (ctx: Task_declContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.task_timing`.
	 * @param ctx the parse tree
	 */
	enterTask_timing?: (ctx: Task_timingContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.task_timing`.
	 * @param ctx the parse tree
	 */
	exitTask_timing?: (ctx: Task_timingContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.pomodoro_decl`.
	 * @param ctx the parse tree
	 */
	enterPomodoro_decl?: (ctx: Pomodoro_declContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.pomodoro_decl`.
	 * @param ctx the parse tree
	 */
	exitPomodoro_decl?: (ctx: Pomodoro_declContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.loop_stmt`.
	 * @param ctx the parse tree
	 */
	enterLoop_stmt?: (ctx: Loop_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.loop_stmt`.
	 * @param ctx the parse tree
	 */
	exitLoop_stmt?: (ctx: Loop_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.loop_unit`.
	 * @param ctx the parse tree
	 */
	enterLoop_unit?: (ctx: Loop_unitContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.loop_unit`.
	 * @param ctx the parse tree
	 */
	exitLoop_unit?: (ctx: Loop_unitContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.conditional_stmt`.
	 * @param ctx the parse tree
	 */
	enterConditional_stmt?: (ctx: Conditional_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.conditional_stmt`.
	 * @param ctx the parse tree
	 */
	exitConditional_stmt?: (ctx: Conditional_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.filter_stmt`.
	 * @param ctx the parse tree
	 */
	enterFilter_stmt?: (ctx: Filter_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.filter_stmt`.
	 * @param ctx the parse tree
	 */
	exitFilter_stmt?: (ctx: Filter_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.merge_stmt`.
	 * @param ctx the parse tree
	 */
	enterMerge_stmt?: (ctx: Merge_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.merge_stmt`.
	 * @param ctx the parse tree
	 */
	exitMerge_stmt?: (ctx: Merge_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.include_stmt`.
	 * @param ctx the parse tree
	 */
	enterInclude_stmt?: (ctx: Include_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.include_stmt`.
	 * @param ctx the parse tree
	 */
	exitInclude_stmt?: (ctx: Include_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.export_stmt`.
	 * @param ctx the parse tree
	 */
	enterExport_stmt?: (ctx: Export_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.export_stmt`.
	 * @param ctx the parse tree
	 */
	exitExport_stmt?: (ctx: Export_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.comparison_op`.
	 * @param ctx the parse tree
	 */
	enterComparison_op?: (ctx: Comparison_opContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.comparison_op`.
	 * @param ctx the parse tree
	 */
	exitComparison_op?: (ctx: Comparison_opContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.strategy`.
	 * @param ctx the parse tree
	 */
	enterStrategy?: (ctx: StrategyContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.strategy`.
	 * @param ctx the parse tree
	 */
	exitStrategy?: (ctx: StrategyContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.weekday`.
	 * @param ctx the parse tree
	 */
	enterWeekday?: (ctx: WeekdayContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.weekday`.
	 * @param ctx the parse tree
	 */
	exitWeekday?: (ctx: WeekdayContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.am_pm`.
	 * @param ctx the parse tree
	 */
	enterAm_pm?: (ctx: Am_pmContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.am_pm`.
	 * @param ctx the parse tree
	 */
	exitAm_pm?: (ctx: Am_pmContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.month_name`.
	 * @param ctx the parse tree
	 */
	enterMonth_name?: (ctx: Month_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.month_name`.
	 * @param ctx the parse tree
	 */
	exitMonth_name?: (ctx: Month_nameContext) => void;
}

