// Generated from src/core/antlr/Aion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./AionParser";
import { StatementContext } from "./AionParser";
import { Import_stmtContext } from "./AionParser";
import { Assignment_stmtContext } from "./AionParser";
import { Value_assignment_stmtContext } from "./AionParser";
import { Default_declarationContext } from "./AionParser";
import { DeclarationContext } from "./AionParser";
import { Event_declContext } from "./AionParser";
import { Task_declContext } from "./AionParser";
import { Repetition_in_declContext } from "./AionParser";
import { Task_time_strictContext } from "./AionParser";
import { Event_time_strictContext } from "./AionParser";
import { Event_time_exprContext } from "./AionParser";
import { Rep_periodContext } from "./AionParser";
import { Pomodoro_declContext } from "./AionParser";
import { Structured_event_stmtContext } from "./AionParser";
import { Structured_event_fieldContext } from "./AionParser";
import { Loop_stmtContext } from "./AionParser";
import { Loop_startContext } from "./AionParser";
import { Loop_endContext } from "./AionParser";
import { Loop_unitContext } from "./AionParser";
import { Conditional_stmtContext } from "./AionParser";
import { Filter_stmtContext } from "./AionParser";
import { Merge_stmtContext } from "./AionParser";
import { Identifier_listContext } from "./AionParser";
import { Include_stmtContext } from "./AionParser";
import { Export_stmtContext } from "./AionParser";
import { Week_start_stmtContext } from "./AionParser";
import { ConditionContext } from "./AionParser";
import { Comparison_opContext } from "./AionParser";
import { StrategyContext } from "./AionParser";
import { Value_exprContext } from "./AionParser";
import { Function_callContext } from "./AionParser";
import { DateContext } from "./AionParser";
import { TimeContext } from "./AionParser";
import { DurationContext } from "./AionParser";
import { Time_unitContext } from "./AionParser";
import { ValueContext } from "./AionParser";
import { IdentifierContext } from "./AionParser";
import { StringContext } from "./AionParser";
import { NumberContext } from "./AionParser";
import { WeekdayContext } from "./AionParser";
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
	 * Enter a parse tree produced by `AionParser.value_assignment_stmt`.
	 * @param ctx the parse tree
	 */
	enterValue_assignment_stmt?: (ctx: Value_assignment_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.value_assignment_stmt`.
	 * @param ctx the parse tree
	 */
	exitValue_assignment_stmt?: (ctx: Value_assignment_stmtContext) => void;

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
	 * Enter a parse tree produced by `AionParser.repetition_in_decl`.
	 * @param ctx the parse tree
	 */
	enterRepetition_in_decl?: (ctx: Repetition_in_declContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.repetition_in_decl`.
	 * @param ctx the parse tree
	 */
	exitRepetition_in_decl?: (ctx: Repetition_in_declContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.task_time_strict`.
	 * @param ctx the parse tree
	 */
	enterTask_time_strict?: (ctx: Task_time_strictContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.task_time_strict`.
	 * @param ctx the parse tree
	 */
	exitTask_time_strict?: (ctx: Task_time_strictContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.event_time_strict`.
	 * @param ctx the parse tree
	 */
	enterEvent_time_strict?: (ctx: Event_time_strictContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.event_time_strict`.
	 * @param ctx the parse tree
	 */
	exitEvent_time_strict?: (ctx: Event_time_strictContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.event_time_expr`.
	 * @param ctx the parse tree
	 */
	enterEvent_time_expr?: (ctx: Event_time_exprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.event_time_expr`.
	 * @param ctx the parse tree
	 */
	exitEvent_time_expr?: (ctx: Event_time_exprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.rep_period`.
	 * @param ctx the parse tree
	 */
	enterRep_period?: (ctx: Rep_periodContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.rep_period`.
	 * @param ctx the parse tree
	 */
	exitRep_period?: (ctx: Rep_periodContext) => void;

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
	 * Enter a parse tree produced by `AionParser.loop_start`.
	 * @param ctx the parse tree
	 */
	enterLoop_start?: (ctx: Loop_startContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.loop_start`.
	 * @param ctx the parse tree
	 */
	exitLoop_start?: (ctx: Loop_startContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.loop_end`.
	 * @param ctx the parse tree
	 */
	enterLoop_end?: (ctx: Loop_endContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.loop_end`.
	 * @param ctx the parse tree
	 */
	exitLoop_end?: (ctx: Loop_endContext) => void;

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
	 * Enter a parse tree produced by `AionParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_list?: (ctx: Identifier_listContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_list?: (ctx: Identifier_listContext) => void;

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
	 * Enter a parse tree produced by `AionParser.value_expr`.
	 * @param ctx the parse tree
	 */
	enterValue_expr?: (ctx: Value_exprContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.value_expr`.
	 * @param ctx the parse tree
	 */
	exitValue_expr?: (ctx: Value_exprContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

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
	 * Enter a parse tree produced by `AionParser.time_unit`.
	 * @param ctx the parse tree
	 */
	enterTime_unit?: (ctx: Time_unitContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.time_unit`.
	 * @param ctx the parse tree
	 */
	exitTime_unit?: (ctx: Time_unitContext) => void;

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
	 * Enter a parse tree produced by `AionParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `AionParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `AionParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

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

