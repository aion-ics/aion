// Generated from src/core/antlr/Aion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./AionParser";
import { StatementContext } from "./AionParser";
import { ImportStmtContext } from "./AionParser";
import { TaskStmtContext } from "./AionParser";
import { EventStmtContext } from "./AionParser";
import { EventFieldContext } from "./AionParser";
import { PomodoroStmtContext } from "./AionParser";
import { LoopStmtContext } from "./AionParser";
import { ExportStmtContext } from "./AionParser";
import { IncludeStmtContext } from "./AionParser";
import { MergeStmtContext } from "./AionParser";
import { FilterStmtContext } from "./AionParser";
import { AssignmentStmtContext } from "./AionParser";
import { ExprContext } from "./AionParser";
import { FunctionCallContext } from "./AionParser";
import { RecurrenceContext } from "./AionParser";
import { DateSpecContext } from "./AionParser";
import { ConditionContext } from "./AionParser";
import { OrdinalContext } from "./AionParser";


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
	 * Visit a parse tree produced by `AionParser.eventField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventField?: (ctx: EventFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.pomodoroStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPomodoroStmt?: (ctx: PomodoroStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.loopStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStmt?: (ctx: LoopStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.exportStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStmt?: (ctx: ExportStmtContext) => Result;

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
	 * Visit a parse tree produced by `AionParser.assignmentStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStmt?: (ctx: AssignmentStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.recurrence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecurrence?: (ctx: RecurrenceContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.dateSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateSpec?: (ctx: DateSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `AionParser.ordinal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal?: (ctx: OrdinalContext) => Result;
}

