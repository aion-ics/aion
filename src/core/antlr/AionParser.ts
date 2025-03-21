// Generated from src/core/antlr/Aion.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AionListener } from "./AionListener";
import { AionVisitor } from "./AionVisitor";


export class AionParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly TIME = 12;
	public static readonly DURATION = 13;
	public static readonly DATE = 14;
	public static readonly INT = 15;
	public static readonly STRING = 16;
	public static readonly ID = 17;
	public static readonly DAY_OF_WEEK = 18;
	public static readonly NEW = 19;
	public static readonly TASK = 20;
	public static readonly EVENT = 21;
	public static readonly POMODORO = 22;
	public static readonly REPEAT = 23;
	public static readonly TIMES = 24;
	public static readonly EVERY = 25;
	public static readonly WITH = 26;
	public static readonly PAUSE = 27;
	public static readonly DAILY = 28;
	public static readonly AT = 29;
	public static readonly FOR = 30;
	public static readonly ON = 31;
	public static readonly FIND = 32;
	public static readonly BETWEEN = 33;
	public static readonly AND = 34;
	public static readonly ITERATE = 35;
	public static readonly WEEKS = 36;
	public static readonly DAYS = 37;
	public static readonly MONTHS = 38;
	public static readonly FROM = 39;
	public static readonly TO = 40;
	public static readonly STEP = 41;
	public static readonly EXPORT = 42;
	public static readonly ALL = 43;
	public static readonly DEFAULT = 44;
	public static readonly AS = 45;
	public static readonly INCLUDE = 46;
	public static readonly IN = 47;
	public static readonly MERGE = 48;
	public static readonly FILTER = 49;
	public static readonly WHERE = 50;
	public static readonly INTO = 51;
	public static readonly PLUS = 52;
	public static readonly MINUS = 53;
	public static readonly EQ = 54;
	public static readonly NEQ = 55;
	public static readonly COLON = 56;
	public static readonly SEMICOLON = 57;
	public static readonly COMMA = 58;
	public static readonly LBRACE = 59;
	public static readonly RBRACE = 60;
	public static readonly LPAREN = 61;
	public static readonly RPAREN = 62;
	public static readonly WS = 63;
	public static readonly COMMENT = 64;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_importStmt = 2;
	public static readonly RULE_taskStmt = 3;
	public static readonly RULE_eventStmt = 4;
	public static readonly RULE_eventField = 5;
	public static readonly RULE_pomodoroStmt = 6;
	public static readonly RULE_loopStmt = 7;
	public static readonly RULE_exportStmt = 8;
	public static readonly RULE_includeStmt = 9;
	public static readonly RULE_mergeStmt = 10;
	public static readonly RULE_filterStmt = 11;
	public static readonly RULE_assignmentStmt = 12;
	public static readonly RULE_expr = 13;
	public static readonly RULE_functionCall = 14;
	public static readonly RULE_recurrence = 15;
	public static readonly RULE_dateSpec = 16;
	public static readonly RULE_condition = 17;
	public static readonly RULE_ordinal = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "importStmt", "taskStmt", "eventStmt", "eventField", 
		"pomodoroStmt", "loopStmt", "exportStmt", "includeStmt", "mergeStmt", 
		"filterStmt", "assignmentStmt", "expr", "functionCall", "recurrence", 
		"dateSpec", "condition", "ordinal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'name'", "'start'", "'duration'", "'location'", 
		"'='", "'today'", "'st'", "'nd'", "'rd'", "'th'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'new'", "'task'", 
		"'event'", "'pomodoro'", "'repeat'", "'times'", "'every'", "'with'", "'pause'", 
		"'daily'", "'at'", "'for'", "'on'", "'find'", "'between'", "'and'", "'iterate'", 
		"'weeks'", "'days'", "'months'", "'from'", "'to'", "'step'", "'export'", 
		"'all'", "'default'", "'as'", "'include'", "'in'", "'merge'", "'filter'", 
		"'where'", "'into'", "'+'", "'-'", "'=='", "'!='", "':'", "';'", "','", 
		"'{'", "'}'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "TIME", "DURATION", 
		"DATE", "INT", "STRING", "ID", "DAY_OF_WEEK", "NEW", "TASK", "EVENT", 
		"POMODORO", "REPEAT", "TIMES", "EVERY", "WITH", "PAUSE", "DAILY", "AT", 
		"FOR", "ON", "FIND", "BETWEEN", "AND", "ITERATE", "WEEKS", "DAYS", "MONTHS", 
		"FROM", "TO", "STEP", "EXPORT", "ALL", "DEFAULT", "AS", "INCLUDE", "IN", 
		"MERGE", "FILTER", "WHERE", "INTO", "PLUS", "MINUS", "EQ", "NEQ", "COLON", 
		"SEMICOLON", "COMMA", "LBRACE", "RBRACE", "LPAREN", "RPAREN", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AionParser._LITERAL_NAMES, AionParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AionParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Aion.g4"; }

	// @Override
	public get ruleNames(): string[] { return AionParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AionParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AionParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AionParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.ID) | (1 << AionParser.NEW) | (1 << AionParser.EVENT) | (1 << AionParser.POMODORO))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (AionParser.ITERATE - 35)) | (1 << (AionParser.EXPORT - 35)) | (1 << (AionParser.INCLUDE - 35)) | (1 << (AionParser.MERGE - 35)) | (1 << (AionParser.FILTER - 35)))) !== 0)) {
				{
				{
				this.state = 38;
				this.statement();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this.match(AionParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AionParser.RULE_statement);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.taskStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.eventStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.pomodoroStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 50;
				this.loopStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 51;
				this.exportStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 52;
				this.includeStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 53;
				this.mergeStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 54;
				this.filterStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 55;
				this.assignmentStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AionParser.RULE_importStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(AionParser.T__0);
			this.state = 59;
			this.match(AionParser.STRING);
			this.state = 60;
			this.match(AionParser.AS);
			this.state = 61;
			this.match(AionParser.ID);
			this.state = 62;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public taskStmt(): TaskStmtContext {
		let _localctx: TaskStmtContext = new TaskStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AionParser.RULE_taskStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(AionParser.NEW);
			this.state = 65;
			this.match(AionParser.TASK);
			this.state = 66;
			this.match(AionParser.STRING);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.EVERY || _la === AionParser.DAILY) {
				{
				this.state = 67;
				this.recurrence();
				}
			}

			this.state = 70;
			this.match(AionParser.AT);
			this.state = 71;
			this.match(AionParser.TIME);
			this.state = 72;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventStmt(): EventStmtContext {
		let _localctx: EventStmtContext = new EventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AionParser.RULE_eventStmt);
		let _la: number;
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 74;
				this.match(AionParser.NEW);
				this.state = 75;
				this.match(AionParser.EVENT);
				this.state = 76;
				this.match(AionParser.STRING);
				this.state = 79;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AionParser.ON:
					{
					this.state = 77;
					this.dateSpec();
					}
					break;
				case AionParser.EVERY:
				case AionParser.DAILY:
					{
					this.state = 78;
					this.recurrence();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 81;
				this.match(AionParser.AT);
				this.state = 82;
				this.match(AionParser.TIME);
				this.state = 83;
				this.match(AionParser.FOR);
				this.state = 84;
				this.match(AionParser.DURATION);
				this.state = 85;
				this.match(AionParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.match(AionParser.EVENT);
				this.state = 88;
				this.match(AionParser.ID);
				this.state = 89;
				this.match(AionParser.FIND);
				this.state = 90;
				this.match(AionParser.BETWEEN);
				this.state = 91;
				this.match(AionParser.TIME);
				this.state = 92;
				this.match(AionParser.AND);
				this.state = 93;
				this.match(AionParser.TIME);
				this.state = 94;
				this.match(AionParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 95;
				this.match(AionParser.EVENT);
				this.state = 96;
				this.match(AionParser.ID);
				this.state = 97;
				this.match(AionParser.LBRACE);
				this.state = 98;
				this.eventField();
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AionParser.COMMA) {
					{
					{
					this.state = 99;
					this.match(AionParser.COMMA);
					this.state = 100;
					this.eventField();
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 106;
				this.match(AionParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventField(): EventFieldContext {
		let _localctx: EventFieldContext = new EventFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AionParser.RULE_eventField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__1) | (1 << AionParser.T__2) | (1 << AionParser.T__3) | (1 << AionParser.T__4))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 111;
			this.match(AionParser.COLON);
			this.state = 112;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.TIME) | (1 << AionParser.DURATION) | (1 << AionParser.STRING))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pomodoroStmt(): PomodoroStmtContext {
		let _localctx: PomodoroStmtContext = new PomodoroStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AionParser.RULE_pomodoroStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(AionParser.POMODORO);
			this.state = 115;
			this.match(AionParser.STRING);
			this.state = 116;
			this.match(AionParser.AT);
			this.state = 117;
			this.match(AionParser.TIME);
			this.state = 118;
			this.match(AionParser.REPEAT);
			this.state = 119;
			this.match(AionParser.INT);
			this.state = 120;
			this.match(AionParser.TIMES);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.EVERY) {
				{
				this.state = 121;
				this.match(AionParser.EVERY);
				this.state = 122;
				this.match(AionParser.DURATION);
				this.state = 123;
				this.match(AionParser.WITH);
				this.state = 124;
				this.match(AionParser.DURATION);
				this.state = 125;
				this.match(AionParser.PAUSE);
				}
			}

			this.state = 128;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStmt(): LoopStmtContext {
		let _localctx: LoopStmtContext = new LoopStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AionParser.RULE_loopStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(AionParser.ITERATE);
			this.state = 131;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AionParser.WEEKS - 36)) | (1 << (AionParser.DAYS - 36)) | (1 << (AionParser.MONTHS - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 132;
			this.match(AionParser.FROM);
			this.state = 133;
			this.expr(0);
			this.state = 134;
			this.match(AionParser.TO);
			this.state = 135;
			this.expr(0);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.STEP) {
				{
				this.state = 136;
				this.match(AionParser.STEP);
				this.state = 137;
				this.match(AionParser.INT);
				}
			}

			this.state = 140;
			this.match(AionParser.LBRACE);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.ID) | (1 << AionParser.NEW) | (1 << AionParser.EVENT) | (1 << AionParser.POMODORO))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (AionParser.ITERATE - 35)) | (1 << (AionParser.EXPORT - 35)) | (1 << (AionParser.INCLUDE - 35)) | (1 << (AionParser.MERGE - 35)) | (1 << (AionParser.FILTER - 35)))) !== 0)) {
				{
				{
				this.state = 141;
				this.statement();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 147;
			this.match(AionParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStmt(): ExportStmtContext {
		let _localctx: ExportStmtContext = new ExportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AionParser.RULE_exportStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(AionParser.EXPORT);
			this.state = 150;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (AionParser.ID - 17)) | (1 << (AionParser.ALL - 17)) | (1 << (AionParser.DEFAULT - 17)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.AS) {
				{
				this.state = 151;
				this.match(AionParser.AS);
				this.state = 152;
				this.match(AionParser.STRING);
				}
			}

			this.state = 155;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeStmt(): IncludeStmtContext {
		let _localctx: IncludeStmtContext = new IncludeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AionParser.RULE_includeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(AionParser.INCLUDE);
			this.state = 158;
			this.match(AionParser.ID);
			this.state = 159;
			this.match(AionParser.IN);
			this.state = 160;
			this.match(AionParser.ID);
			this.state = 161;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mergeStmt(): MergeStmtContext {
		let _localctx: MergeStmtContext = new MergeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AionParser.RULE_mergeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(AionParser.MERGE);
			this.state = 164;
			this.match(AionParser.ID);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.COMMA) {
				{
				{
				this.state = 165;
				this.match(AionParser.COMMA);
				this.state = 166;
				this.match(AionParser.ID);
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
			this.match(AionParser.INTO);
			this.state = 173;
			this.match(AionParser.ID);
			this.state = 174;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterStmt(): FilterStmtContext {
		let _localctx: FilterStmtContext = new FilterStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AionParser.RULE_filterStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(AionParser.FILTER);
			this.state = 177;
			this.match(AionParser.ID);
			this.state = 178;
			this.match(AionParser.WHERE);
			this.state = 179;
			this.condition();
			this.state = 180;
			this.match(AionParser.INTO);
			this.state = 181;
			this.match(AionParser.ID);
			this.state = 182;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentStmt(): AssignmentStmtContext {
		let _localctx: AssignmentStmtContext = new AssignmentStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AionParser.RULE_assignmentStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(AionParser.ID);
			this.state = 185;
			this.match(AionParser.T__5);
			this.state = 186;
			this.expr(0);
			this.state = 187;
			this.match(AionParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, AionParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 190;
				this.match(AionParser.ID);
				}
				break;

			case 2:
				{
				this.state = 191;
				this.match(AionParser.STRING);
				}
				break;

			case 3:
				{
				this.state = 192;
				this.match(AionParser.INT);
				}
				break;

			case 4:
				{
				this.state = 193;
				this.match(AionParser.DATE);
				}
				break;

			case 5:
				{
				this.state = 194;
				this.match(AionParser.TIME);
				}
				break;

			case 6:
				{
				this.state = 195;
				this.match(AionParser.DURATION);
				}
				break;

			case 7:
				{
				this.state = 196;
				this.functionCall();
				}
				break;

			case 8:
				{
				this.state = 197;
				this.match(AionParser.T__6);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, AionParser.RULE_expr);
					this.state = 200;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 201;
					_la = this._input.LA(1);
					if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (AionParser.PLUS - 52)) | (1 << (AionParser.MINUS - 52)) | (1 << (AionParser.EQ - 52)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 202;
					this.expr(2);
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AionParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(AionParser.ID);
			this.state = 209;
			this.match(AionParser.LPAREN);
			this.state = 210;
			this.expr(0);
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.COMMA) {
				{
				{
				this.state = 211;
				this.match(AionParser.COMMA);
				this.state = 212;
				this.expr(0);
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 218;
			this.match(AionParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recurrence(): RecurrenceContext {
		let _localctx: RecurrenceContext = new RecurrenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AionParser.RULE_recurrence);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.DAILY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 220;
				this.match(AionParser.DAILY);
				}
				break;
			case AionParser.EVERY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.match(AionParser.EVERY);
				this.state = 222;
				this.match(AionParser.DAY_OF_WEEK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateSpec(): DateSpecContext {
		let _localctx: DateSpecContext = new DateSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AionParser.RULE_dateSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(AionParser.ON);
			this.state = 230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.DATE:
				{
				this.state = 226;
				this.match(AionParser.DATE);
				}
				break;
			case AionParser.INT:
				{
				this.state = 227;
				this.ordinal();
				this.state = 228;
				this.match(AionParser.DAY_OF_WEEK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AionParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(AionParser.ID);
			this.state = 233;
			_la = this._input.LA(1);
			if (!(_la === AionParser.EQ || _la === AionParser.NEQ)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 234;
			this.match(AionParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ordinal(): OrdinalContext {
		let _localctx: OrdinalContext = new OrdinalContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AionParser.RULE_ordinal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(AionParser.INT);
			this.state = 237;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__7) | (1 << AionParser.T__8) | (1 << AionParser.T__9) | (1 << AionParser.T__10))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\xF2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05G\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06R" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x07\x06h\n\x06\f\x06\x0E\x06k\v\x06\x03\x06\x03" +
		"\x06\x05\x06o\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x81\n\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8D\n\t" +
		"\x03\t\x03\t\x07\t\x91\n\t\f\t\x0E\t\x94\v\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\x9C\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\xAA\n\f\f\f\x0E\f\xAD\v\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC9\n\x0F\x03\x0F\x03\x0F\x03\x0F\x07" +
		"\x0F\xCE\n\x0F\f\x0F\x0E\x0F\xD1\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x07\x10\xD8\n\x10\f\x10\x0E\x10\xDB\v\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\xE2\n\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\xE9\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x02\x02\x03\x1C\x15\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\t\x03\x02\x04\x07\x04\x02\x0E\x0F" +
		"\x12\x12\x03\x02&(\x04\x02\x13\x13-.\x03\x0268\x03\x0289\x03\x02\n\r\x02" +
		"\xFD\x02+\x03\x02\x02\x02\x04:\x03\x02\x02\x02\x06<\x03\x02\x02\x02\b" +
		"B\x03\x02\x02\x02\nn\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0Et\x03\x02\x02" +
		"\x02\x10\x84\x03\x02\x02\x02\x12\x97\x03\x02\x02\x02\x14\x9F\x03\x02\x02" +
		"\x02\x16\xA5\x03\x02\x02\x02\x18\xB2\x03\x02\x02\x02\x1A\xBA\x03\x02\x02" +
		"\x02\x1C\xC8\x03\x02\x02\x02\x1E\xD2\x03\x02\x02\x02 \xE1\x03\x02\x02" +
		"\x02\"\xE3\x03\x02\x02\x02$\xEA\x03\x02\x02\x02&\xEE\x03\x02\x02\x02(" +
		"*\x05\x04\x03\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02" +
		"+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02./\x07\x02\x02\x03" +
		"/\x03\x03\x02\x02\x020;\x05\x06\x04\x021;\x05\b\x05\x022;\x05\n\x06\x02" +
		"3;\x05\x0E\b\x024;\x05\x10\t\x025;\x05\x12\n\x026;\x05\x14\v\x027;\x05" +
		"\x16\f\x028;\x05\x18\r\x029;\x05\x1A\x0E\x02:0\x03\x02\x02\x02:1\x03\x02" +
		"\x02\x02:2\x03\x02\x02\x02:3\x03\x02\x02\x02:4\x03\x02\x02\x02:5\x03\x02" +
		"\x02\x02:6\x03\x02\x02\x02:7\x03\x02\x02\x02:8\x03\x02\x02\x02:9\x03\x02" +
		"\x02\x02;\x05\x03\x02\x02\x02<=\x07\x03\x02\x02=>\x07\x12\x02\x02>?\x07" +
		"/\x02\x02?@\x07\x13\x02\x02@A\x07;\x02\x02A\x07\x03\x02\x02\x02BC\x07" +
		"\x15\x02\x02CD\x07\x16\x02\x02DF\x07\x12\x02\x02EG\x05 \x11\x02FE\x03" +
		"\x02\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x07\x1F\x02\x02IJ\x07" +
		"\x0E\x02\x02JK\x07;\x02\x02K\t\x03\x02\x02\x02LM\x07\x15\x02\x02MN\x07" +
		"\x17\x02\x02NQ\x07\x12\x02\x02OR\x05\"\x12\x02PR\x05 \x11\x02QO\x03\x02" +
		"\x02\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x1F\x02\x02TU\x07\x0E" +
		"\x02\x02UV\x07 \x02\x02VW\x07\x0F\x02\x02WX\x07;\x02\x02Xo\x03\x02\x02" +
		"\x02YZ\x07\x17\x02\x02Z[\x07\x13\x02\x02[\\\x07\"\x02\x02\\]\x07#\x02" +
		"\x02]^\x07\x0E\x02\x02^_\x07$\x02\x02_`\x07\x0E\x02\x02`o\x07;\x02\x02" +
		"ab\x07\x17\x02\x02bc\x07\x13\x02\x02cd\x07=\x02\x02di\x05\f\x07\x02ef" +
		"\x07<\x02\x02fh\x05\f\x07\x02ge\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03" +
		"\x02\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02ki\x03\x02\x02\x02lm\x07" +
		">\x02\x02mo\x03\x02\x02\x02nL\x03\x02\x02\x02nY\x03\x02\x02\x02na\x03" +
		"\x02\x02\x02o\v\x03\x02\x02\x02pq\t\x02\x02\x02qr\x07:\x02\x02rs\t\x03" +
		"\x02\x02s\r\x03\x02\x02\x02tu\x07\x18\x02\x02uv\x07\x12\x02\x02vw\x07" +
		"\x1F\x02\x02wx\x07\x0E\x02\x02xy\x07\x19\x02\x02yz\x07\x11\x02\x02z\x80" +
		"\x07\x1A\x02\x02{|\x07\x1B\x02\x02|}\x07\x0F\x02\x02}~\x07\x1C\x02\x02" +
		"~\x7F\x07\x0F\x02\x02\x7F\x81\x07\x1D\x02\x02\x80{\x03\x02\x02\x02\x80" +
		"\x81\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x07;\x02\x02\x83" +
		"\x0F\x03\x02\x02\x02\x84\x85\x07%\x02\x02\x85\x86\t\x04\x02\x02\x86\x87" +
		"\x07)\x02\x02\x87\x88\x05\x1C\x0F\x02\x88\x89\x07*\x02\x02\x89\x8C\x05" +
		"\x1C\x0F\x02\x8A\x8B\x07+\x02\x02\x8B\x8D\x07\x11\x02\x02\x8C\x8A\x03" +
		"\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x92\x07" +
		"=\x02\x02\x8F\x91\x05\x04\x03\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03" +
		"\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03" +
		"\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x96\x07>\x02\x02\x96\x11\x03" +
		"\x02\x02\x02\x97\x98\x07,\x02\x02\x98\x9B\t\x05\x02\x02\x99\x9A\x07/\x02" +
		"\x02\x9A\x9C\x07\x12\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02" +
		"\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x07;\x02\x02\x9E\x13\x03\x02\x02" +
		"\x02\x9F\xA0\x070\x02\x02\xA0\xA1\x07\x13\x02\x02\xA1\xA2\x071\x02\x02" +
		"\xA2\xA3\x07\x13\x02\x02\xA3\xA4\x07;\x02\x02\xA4\x15\x03\x02\x02\x02" +
		"\xA5\xA6\x072\x02\x02\xA6\xAB\x07\x13\x02\x02\xA7\xA8\x07<\x02\x02\xA8" +
		"\xAA\x07\x13\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB" +
		"\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD" +
		"\xAB\x03\x02\x02\x02\xAE\xAF\x075\x02\x02\xAF\xB0\x07\x13\x02\x02\xB0" +
		"\xB1\x07;\x02\x02\xB1\x17\x03\x02\x02\x02\xB2\xB3\x073\x02\x02\xB3\xB4" +
		"\x07\x13\x02\x02\xB4\xB5\x074\x02\x02\xB5\xB6\x05$\x13\x02\xB6\xB7\x07" +
		"5\x02\x02\xB7\xB8\x07\x13\x02\x02\xB8\xB9\x07;\x02\x02\xB9\x19\x03\x02" +
		"\x02\x02\xBA\xBB\x07\x13\x02\x02\xBB\xBC\x07\b\x02\x02\xBC\xBD\x05\x1C" +
		"\x0F\x02\xBD\xBE\x07;\x02\x02\xBE\x1B\x03\x02\x02\x02\xBF\xC0\b\x0F\x01" +
		"\x02\xC0\xC9\x07\x13\x02\x02\xC1\xC9\x07\x12\x02\x02\xC2\xC9\x07\x11\x02" +
		"\x02\xC3\xC9\x07\x10\x02\x02\xC4\xC9\x07\x0E\x02\x02\xC5\xC9\x07\x0F\x02" +
		"\x02\xC6\xC9\x05\x1E\x10\x02\xC7\xC9\x07\t\x02\x02\xC8\xBF\x03\x02\x02" +
		"\x02\xC8\xC1\x03\x02\x02\x02\xC8\xC2\x03\x02\x02\x02\xC8\xC3\x03\x02\x02" +
		"\x02\xC8\xC4\x03\x02\x02\x02\xC8\xC5\x03\x02\x02\x02\xC8\xC6\x03\x02\x02" +
		"\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCF\x03\x02\x02\x02\xCA\xCB\f\x03\x02" +
		"\x02\xCB\xCC\t\x06\x02\x02\xCC\xCE\x05\x1C\x0F\x04\xCD\xCA\x03\x02\x02" +
		"\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02" +
		"\x02\xD0\x1D\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x07\x13\x02" +
		"\x02\xD3\xD4\x07?\x02\x02\xD4\xD9\x05\x1C\x0F\x02\xD5\xD6\x07<\x02\x02" +
		"\xD6\xD8\x05\x1C\x0F\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02" +
		"\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02" +
		"\xDB\xD9\x03\x02\x02\x02\xDC\xDD\x07@\x02\x02\xDD\x1F\x03\x02\x02\x02" +
		"\xDE\xE2\x07\x1E\x02\x02\xDF\xE0\x07\x1B\x02\x02\xE0\xE2\x07\x14\x02\x02" +
		"\xE1\xDE\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2!\x03\x02\x02\x02" +
		"\xE3\xE8\x07!\x02\x02\xE4\xE9\x07\x10\x02\x02\xE5\xE6\x05&\x14\x02\xE6" +
		"\xE7\x07\x14\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE4\x03\x02\x02\x02\xE8" +
		"\xE5\x03\x02\x02\x02\xE9#\x03\x02\x02\x02\xEA\xEB\x07\x13\x02\x02\xEB" +
		"\xEC\t\x07\x02\x02\xEC\xED\x07\x12\x02\x02\xED%\x03\x02\x02\x02\xEE\xEF" +
		"\x07\x11\x02\x02\xEF\xF0\t\b\x02\x02\xF0\'\x03\x02\x02\x02\x12+:FQin\x80" +
		"\x8C\x92\x9B\xAB\xC8\xCF\xD9\xE1\xE8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AionParser.__ATN) {
			AionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AionParser._serializedATN));
		}

		return AionParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(AionParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_program; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	public taskStmt(): TaskStmtContext | undefined {
		return this.tryGetRuleContext(0, TaskStmtContext);
	}
	public eventStmt(): EventStmtContext | undefined {
		return this.tryGetRuleContext(0, EventStmtContext);
	}
	public pomodoroStmt(): PomodoroStmtContext | undefined {
		return this.tryGetRuleContext(0, PomodoroStmtContext);
	}
	public loopStmt(): LoopStmtContext | undefined {
		return this.tryGetRuleContext(0, LoopStmtContext);
	}
	public exportStmt(): ExportStmtContext | undefined {
		return this.tryGetRuleContext(0, ExportStmtContext);
	}
	public includeStmt(): IncludeStmtContext | undefined {
		return this.tryGetRuleContext(0, IncludeStmtContext);
	}
	public mergeStmt(): MergeStmtContext | undefined {
		return this.tryGetRuleContext(0, MergeStmtContext);
	}
	public filterStmt(): FilterStmtContext | undefined {
		return this.tryGetRuleContext(0, FilterStmtContext);
	}
	public assignmentStmt(): AssignmentStmtContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_statement; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public AS(): TerminalNode { return this.getToken(AionParser.AS, 0); }
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_importStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterImportStmt) {
			listener.enterImportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitImportStmt) {
			listener.exitImportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitImportStmt) {
			return visitor.visitImportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskStmtContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(AionParser.NEW, 0); }
	public TASK(): TerminalNode { return this.getToken(AionParser.TASK, 0); }
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public AT(): TerminalNode { return this.getToken(AionParser.AT, 0); }
	public TIME(): TerminalNode { return this.getToken(AionParser.TIME, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	public recurrence(): RecurrenceContext | undefined {
		return this.tryGetRuleContext(0, RecurrenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_taskStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTaskStmt) {
			listener.enterTaskStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTaskStmt) {
			listener.exitTaskStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTaskStmt) {
			return visitor.visitTaskStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventStmtContext extends ParserRuleContext {
	public NEW(): TerminalNode | undefined { return this.tryGetToken(AionParser.NEW, 0); }
	public EVENT(): TerminalNode { return this.getToken(AionParser.EVENT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(AionParser.AT, 0); }
	public TIME(): TerminalNode[];
	public TIME(i: number): TerminalNode;
	public TIME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.TIME);
		} else {
			return this.getToken(AionParser.TIME, i);
		}
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(AionParser.FOR, 0); }
	public DURATION(): TerminalNode | undefined { return this.tryGetToken(AionParser.DURATION, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(AionParser.SEMICOLON, 0); }
	public dateSpec(): DateSpecContext | undefined {
		return this.tryGetRuleContext(0, DateSpecContext);
	}
	public recurrence(): RecurrenceContext | undefined {
		return this.tryGetRuleContext(0, RecurrenceContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(AionParser.ID, 0); }
	public FIND(): TerminalNode | undefined { return this.tryGetToken(AionParser.FIND, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(AionParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(AionParser.AND, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(AionParser.LBRACE, 0); }
	public eventField(): EventFieldContext[];
	public eventField(i: number): EventFieldContext;
	public eventField(i?: number): EventFieldContext | EventFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventFieldContext);
		} else {
			return this.getRuleContext(i, EventFieldContext);
		}
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(AionParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.COMMA);
		} else {
			return this.getToken(AionParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_eventStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterEventStmt) {
			listener.enterEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitEventStmt) {
			listener.exitEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitEventStmt) {
			return visitor.visitEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventFieldContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(AionParser.COLON, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(AionParser.TIME, 0); }
	public DURATION(): TerminalNode | undefined { return this.tryGetToken(AionParser.DURATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_eventField; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterEventField) {
			listener.enterEventField(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitEventField) {
			listener.exitEventField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitEventField) {
			return visitor.visitEventField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PomodoroStmtContext extends ParserRuleContext {
	public POMODORO(): TerminalNode { return this.getToken(AionParser.POMODORO, 0); }
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public AT(): TerminalNode { return this.getToken(AionParser.AT, 0); }
	public TIME(): TerminalNode { return this.getToken(AionParser.TIME, 0); }
	public REPEAT(): TerminalNode { return this.getToken(AionParser.REPEAT, 0); }
	public INT(): TerminalNode { return this.getToken(AionParser.INT, 0); }
	public TIMES(): TerminalNode { return this.getToken(AionParser.TIMES, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	public EVERY(): TerminalNode | undefined { return this.tryGetToken(AionParser.EVERY, 0); }
	public DURATION(): TerminalNode[];
	public DURATION(i: number): TerminalNode;
	public DURATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.DURATION);
		} else {
			return this.getToken(AionParser.DURATION, i);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(AionParser.WITH, 0); }
	public PAUSE(): TerminalNode | undefined { return this.tryGetToken(AionParser.PAUSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_pomodoroStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterPomodoroStmt) {
			listener.enterPomodoroStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitPomodoroStmt) {
			listener.exitPomodoroStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitPomodoroStmt) {
			return visitor.visitPomodoroStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopStmtContext extends ParserRuleContext {
	public ITERATE(): TerminalNode { return this.getToken(AionParser.ITERATE, 0); }
	public FROM(): TerminalNode { return this.getToken(AionParser.FROM, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(AionParser.TO, 0); }
	public LBRACE(): TerminalNode { return this.getToken(AionParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(AionParser.RBRACE, 0); }
	public WEEKS(): TerminalNode | undefined { return this.tryGetToken(AionParser.WEEKS, 0); }
	public DAYS(): TerminalNode | undefined { return this.tryGetToken(AionParser.DAYS, 0); }
	public MONTHS(): TerminalNode | undefined { return this.tryGetToken(AionParser.MONTHS, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(AionParser.STEP, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(AionParser.INT, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_loopStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterLoopStmt) {
			listener.enterLoopStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitLoopStmt) {
			listener.exitLoopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitLoopStmt) {
			return visitor.visitLoopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStmtContext extends ParserRuleContext {
	public EXPORT(): TerminalNode { return this.getToken(AionParser.EXPORT, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(AionParser.ID, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(AionParser.ALL, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(AionParser.DEFAULT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(AionParser.AS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_exportStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterExportStmt) {
			listener.enterExportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitExportStmt) {
			listener.exitExportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitExportStmt) {
			return visitor.visitExportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStmtContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(AionParser.INCLUDE, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.ID);
		} else {
			return this.getToken(AionParser.ID, i);
		}
	}
	public IN(): TerminalNode { return this.getToken(AionParser.IN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_includeStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterIncludeStmt) {
			listener.enterIncludeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitIncludeStmt) {
			listener.exitIncludeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitIncludeStmt) {
			return visitor.visitIncludeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MergeStmtContext extends ParserRuleContext {
	public MERGE(): TerminalNode { return this.getToken(AionParser.MERGE, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.ID);
		} else {
			return this.getToken(AionParser.ID, i);
		}
	}
	public INTO(): TerminalNode { return this.getToken(AionParser.INTO, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.COMMA);
		} else {
			return this.getToken(AionParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_mergeStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterMergeStmt) {
			listener.enterMergeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitMergeStmt) {
			listener.exitMergeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitMergeStmt) {
			return visitor.visitMergeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterStmtContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(AionParser.FILTER, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.ID);
		} else {
			return this.getToken(AionParser.ID, i);
		}
	}
	public WHERE(): TerminalNode { return this.getToken(AionParser.WHERE, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public INTO(): TerminalNode { return this.getToken(AionParser.INTO, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_filterStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterFilterStmt) {
			listener.enterFilterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitFilterStmt) {
			listener.exitFilterStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitFilterStmt) {
			return visitor.visitFilterStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(AionParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_assignmentStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterAssignmentStmt) {
			listener.enterAssignmentStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitAssignmentStmt) {
			listener.exitAssignmentStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitAssignmentStmt) {
			return visitor.visitAssignmentStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(AionParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(AionParser.INT, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(AionParser.DATE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(AionParser.TIME, 0); }
	public DURATION(): TerminalNode | undefined { return this.tryGetToken(AionParser.DURATION, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(AionParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(AionParser.MINUS, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(AionParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_expr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AionParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(AionParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.COMMA);
		} else {
			return this.getToken(AionParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecurrenceContext extends ParserRuleContext {
	public DAILY(): TerminalNode | undefined { return this.tryGetToken(AionParser.DAILY, 0); }
	public EVERY(): TerminalNode | undefined { return this.tryGetToken(AionParser.EVERY, 0); }
	public DAY_OF_WEEK(): TerminalNode | undefined { return this.tryGetToken(AionParser.DAY_OF_WEEK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_recurrence; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterRecurrence) {
			listener.enterRecurrence(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitRecurrence) {
			listener.exitRecurrence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitRecurrence) {
			return visitor.visitRecurrence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateSpecContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(AionParser.ON, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(AionParser.DATE, 0); }
	public ordinal(): OrdinalContext | undefined {
		return this.tryGetRuleContext(0, OrdinalContext);
	}
	public DAY_OF_WEEK(): TerminalNode | undefined { return this.tryGetToken(AionParser.DAY_OF_WEEK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_dateSpec; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDateSpec) {
			listener.enterDateSpec(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDateSpec) {
			listener.exitDateSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDateSpec) {
			return visitor.visitDateSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(AionParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(AionParser.NEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_condition; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrdinalContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(AionParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_ordinal; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterOrdinal) {
			listener.enterOrdinal(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitOrdinal) {
			listener.exitOrdinal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitOrdinal) {
			return visitor.visitOrdinal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


