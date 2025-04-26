// Generated from d:/Projects/University/PBL/aion/src/core/antlr/Aion.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AionParser}.
 */
public interface AionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AionParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(AionParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(AionParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(AionParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(AionParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#import_stmt}.
	 * @param ctx the parse tree
	 */
	void enterImport_stmt(AionParser.Import_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#import_stmt}.
	 * @param ctx the parse tree
	 */
	void exitImport_stmt(AionParser.Import_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#assignment_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAssignment_stmt(AionParser.Assignment_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#assignment_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAssignment_stmt(AionParser.Assignment_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#value_assignment_stmt}.
	 * @param ctx the parse tree
	 */
	void enterValue_assignment_stmt(AionParser.Value_assignment_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#value_assignment_stmt}.
	 * @param ctx the parse tree
	 */
	void exitValue_assignment_stmt(AionParser.Value_assignment_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#default_declaration}.
	 * @param ctx the parse tree
	 */
	void enterDefault_declaration(AionParser.Default_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#default_declaration}.
	 * @param ctx the parse tree
	 */
	void exitDefault_declaration(AionParser.Default_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(AionParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(AionParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#event_decl}.
	 * @param ctx the parse tree
	 */
	void enterEvent_decl(AionParser.Event_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#event_decl}.
	 * @param ctx the parse tree
	 */
	void exitEvent_decl(AionParser.Event_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#event_time_spec}.
	 * @param ctx the parse tree
	 */
	void enterEvent_time_spec(AionParser.Event_time_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#event_time_spec}.
	 * @param ctx the parse tree
	 */
	void exitEvent_time_spec(AionParser.Event_time_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#recurrence_expr}.
	 * @param ctx the parse tree
	 */
	void enterRecurrence_expr(AionParser.Recurrence_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#recurrence_expr}.
	 * @param ctx the parse tree
	 */
	void exitRecurrence_expr(AionParser.Recurrence_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#structured_event_stmt}.
	 * @param ctx the parse tree
	 */
	void enterStructured_event_stmt(AionParser.Structured_event_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#structured_event_stmt}.
	 * @param ctx the parse tree
	 */
	void exitStructured_event_stmt(AionParser.Structured_event_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#structured_event_field}.
	 * @param ctx the parse tree
	 */
	void enterStructured_event_field(AionParser.Structured_event_fieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#structured_event_field}.
	 * @param ctx the parse tree
	 */
	void exitStructured_event_field(AionParser.Structured_event_fieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#task_decl}.
	 * @param ctx the parse tree
	 */
	void enterTask_decl(AionParser.Task_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#task_decl}.
	 * @param ctx the parse tree
	 */
	void exitTask_decl(AionParser.Task_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#task_time_spec}.
	 * @param ctx the parse tree
	 */
	void enterTask_time_spec(AionParser.Task_time_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#task_time_spec}.
	 * @param ctx the parse tree
	 */
	void exitTask_time_spec(AionParser.Task_time_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#pomodoro_decl}.
	 * @param ctx the parse tree
	 */
	void enterPomodoro_decl(AionParser.Pomodoro_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#pomodoro_decl}.
	 * @param ctx the parse tree
	 */
	void exitPomodoro_decl(AionParser.Pomodoro_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#loop_stmt}.
	 * @param ctx the parse tree
	 */
	void enterLoop_stmt(AionParser.Loop_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#loop_stmt}.
	 * @param ctx the parse tree
	 */
	void exitLoop_stmt(AionParser.Loop_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#loop_start}.
	 * @param ctx the parse tree
	 */
	void enterLoop_start(AionParser.Loop_startContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#loop_start}.
	 * @param ctx the parse tree
	 */
	void exitLoop_start(AionParser.Loop_startContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#loop_end}.
	 * @param ctx the parse tree
	 */
	void enterLoop_end(AionParser.Loop_endContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#loop_end}.
	 * @param ctx the parse tree
	 */
	void exitLoop_end(AionParser.Loop_endContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#loop_unit}.
	 * @param ctx the parse tree
	 */
	void enterLoop_unit(AionParser.Loop_unitContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#loop_unit}.
	 * @param ctx the parse tree
	 */
	void exitLoop_unit(AionParser.Loop_unitContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#conditional_stmt}.
	 * @param ctx the parse tree
	 */
	void enterConditional_stmt(AionParser.Conditional_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#conditional_stmt}.
	 * @param ctx the parse tree
	 */
	void exitConditional_stmt(AionParser.Conditional_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#filter_stmt}.
	 * @param ctx the parse tree
	 */
	void enterFilter_stmt(AionParser.Filter_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#filter_stmt}.
	 * @param ctx the parse tree
	 */
	void exitFilter_stmt(AionParser.Filter_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#merge_stmt}.
	 * @param ctx the parse tree
	 */
	void enterMerge_stmt(AionParser.Merge_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#merge_stmt}.
	 * @param ctx the parse tree
	 */
	void exitMerge_stmt(AionParser.Merge_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#identifier_list}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier_list(AionParser.Identifier_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#identifier_list}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier_list(AionParser.Identifier_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#include_stmt}.
	 * @param ctx the parse tree
	 */
	void enterInclude_stmt(AionParser.Include_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#include_stmt}.
	 * @param ctx the parse tree
	 */
	void exitInclude_stmt(AionParser.Include_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#export_stmt}.
	 * @param ctx the parse tree
	 */
	void enterExport_stmt(AionParser.Export_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#export_stmt}.
	 * @param ctx the parse tree
	 */
	void exitExport_stmt(AionParser.Export_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(AionParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(AionParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#comparison_op}.
	 * @param ctx the parse tree
	 */
	void enterComparison_op(AionParser.Comparison_opContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#comparison_op}.
	 * @param ctx the parse tree
	 */
	void exitComparison_op(AionParser.Comparison_opContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#strategy}.
	 * @param ctx the parse tree
	 */
	void enterStrategy(AionParser.StrategyContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#strategy}.
	 * @param ctx the parse tree
	 */
	void exitStrategy(AionParser.StrategyContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#value_expr}.
	 * @param ctx the parse tree
	 */
	void enterValue_expr(AionParser.Value_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#value_expr}.
	 * @param ctx the parse tree
	 */
	void exitValue_expr(AionParser.Value_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#function_call}.
	 * @param ctx the parse tree
	 */
	void enterFunction_call(AionParser.Function_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#function_call}.
	 * @param ctx the parse tree
	 */
	void exitFunction_call(AionParser.Function_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#date}.
	 * @param ctx the parse tree
	 */
	void enterDate(AionParser.DateContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#date}.
	 * @param ctx the parse tree
	 */
	void exitDate(AionParser.DateContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#date_specifier}.
	 * @param ctx the parse tree
	 */
	void enterDate_specifier(AionParser.Date_specifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#date_specifier}.
	 * @param ctx the parse tree
	 */
	void exitDate_specifier(AionParser.Date_specifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#weekday_list}.
	 * @param ctx the parse tree
	 */
	void enterWeekday_list(AionParser.Weekday_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#weekday_list}.
	 * @param ctx the parse tree
	 */
	void exitWeekday_list(AionParser.Weekday_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#weekday}.
	 * @param ctx the parse tree
	 */
	void enterWeekday(AionParser.WeekdayContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#weekday}.
	 * @param ctx the parse tree
	 */
	void exitWeekday(AionParser.WeekdayContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#time}.
	 * @param ctx the parse tree
	 */
	void enterTime(AionParser.TimeContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#time}.
	 * @param ctx the parse tree
	 */
	void exitTime(AionParser.TimeContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#time_at}.
	 * @param ctx the parse tree
	 */
	void enterTime_at(AionParser.Time_atContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#time_at}.
	 * @param ctx the parse tree
	 */
	void exitTime_at(AionParser.Time_atContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#time_range}.
	 * @param ctx the parse tree
	 */
	void enterTime_range(AionParser.Time_rangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#time_range}.
	 * @param ctx the parse tree
	 */
	void exitTime_range(AionParser.Time_rangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#duration}.
	 * @param ctx the parse tree
	 */
	void enterDuration(AionParser.DurationContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#duration}.
	 * @param ctx the parse tree
	 */
	void exitDuration(AionParser.DurationContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#time_unit}.
	 * @param ctx the parse tree
	 */
	void enterTime_unit(AionParser.Time_unitContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#time_unit}.
	 * @param ctx the parse tree
	 */
	void exitTime_unit(AionParser.Time_unitContext ctx);
	/**
	 * Enter a parse tree produced by {@link AionParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(AionParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link AionParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(AionParser.ValueContext ctx);
}