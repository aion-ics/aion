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
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly ID = 59;
	public static readonly INT = 60;
	public static readonly TIME = 61;
	public static readonly DATE = 62;
	public static readonly STRING = 63;
	public static readonly DAY_OF_WEEK = 64;
	public static readonly WS = 65;
	public static readonly COMMENT = 66;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_importStmt = 2;
	public static readonly RULE_taskStmt = 3;
	public static readonly RULE_eventStmt = 4;
	public static readonly RULE_pomodoroStmt = 5;
	public static readonly RULE_structuredEventStmt = 6;
	public static readonly RULE_structuredEventBody = 7;
	public static readonly RULE_structuredEventField = 8;
	public static readonly RULE_exportDefaultStmt = 9;
	public static readonly RULE_startWeekStmt = 10;
	public static readonly RULE_iterateStmt = 11;
	public static readonly RULE_conditionalStmt = 12;
	public static readonly RULE_includeStmt = 13;
	public static readonly RULE_mergeStmt = 14;
	public static readonly RULE_filterStmt = 15;
	public static readonly RULE_exportStmt = 16;
	public static readonly RULE_exportTarget = 17;
	public static readonly RULE_recurrence = 18;
	public static readonly RULE_dateExpr = 19;
	public static readonly RULE_dayOfWeekExpr = 20;
	public static readonly RULE_ordinalExpr = 21;
	public static readonly RULE_timeExpr = 22;
	public static readonly RULE_durationExpr = 23;
	public static readonly RULE_durationValue = 24;
	public static readonly RULE_durationPart = 25;
	public static readonly RULE_pomodoroExtras = 26;
	public static readonly RULE_iterateFrom = 27;
	public static readonly RULE_iterateTo = 28;
	public static readonly RULE_stepExpr = 29;
	public static readonly RULE_conditionExpr = 30;
	public static readonly RULE_filterCondition = 31;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "importStmt", "taskStmt", "eventStmt", "pomodoroStmt", 
		"structuredEventStmt", "structuredEventBody", "structuredEventField", 
		"exportDefaultStmt", "startWeekStmt", "iterateStmt", "conditionalStmt", 
		"includeStmt", "mergeStmt", "filterStmt", "exportStmt", "exportTarget", 
		"recurrence", "dateExpr", "dayOfWeekExpr", "ordinalExpr", "timeExpr", 
		"durationExpr", "durationValue", "durationPart", "pomodoroExtras", "iterateFrom", 
		"iterateTo", "stepExpr", "conditionExpr", "filterCondition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'as'", "';'", "'new'", "'task'", "'at'", "'event'", 
		"'='", "'pomodoro'", "'repeat'", "'times'", "'{'", "'}'", "'name'", "':'", 
		"'start'", "'duration'", "'location'", "'export'", "'default'", "'weeknumber'", 
		"'('", "')'", "'iterate'", "'weeks'", "'days'", "'months'", "'from'", 
		"'to'", "'if'", "'else'", "'include'", "'in'", "'merge'", "','", "'into'", 
		"'filter'", "'where'", "'all'", "'daily'", "'on'", "'1st'", "'2nd'", "'3rd'", 
		"'4th'", "'5th'", "'for'", "'h'", "'m'", "'every'", "'with'", "'pause'", 
		"'today'", "'+'", "'step'", "'=='", "'category'", "'!='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ID", "INT", "TIME", "DATE", "STRING", 
		"DAY_OF_WEEK", "WS", "COMMENT",
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
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__3) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__8) | (1 << AionParser.T__18) | (1 << AionParser.T__23) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__33 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.ID - 32)))) !== 0)) {
				{
				{
				this.state = 64;
				this.statement();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
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
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.taskStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 74;
				this.eventStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 75;
				this.pomodoroStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 76;
				this.structuredEventStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 77;
				this.exportDefaultStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 78;
				this.startWeekStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 79;
				this.iterateStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 80;
				this.conditionalStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 81;
				this.includeStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 82;
				this.mergeStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 83;
				this.filterStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 84;
				this.exportStmt();
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
			this.state = 87;
			this.match(AionParser.T__0);
			this.state = 88;
			this.match(AionParser.STRING);
			this.state = 89;
			this.match(AionParser.T__1);
			this.state = 90;
			this.match(AionParser.ID);
			this.state = 91;
			this.match(AionParser.T__2);
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
			this.state = 93;
			this.match(AionParser.T__3);
			this.state = 94;
			this.match(AionParser.T__4);
			this.state = 95;
			this.match(AionParser.STRING);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__39) {
				{
				this.state = 96;
				this.recurrence();
				}
			}

			this.state = 99;
			this.match(AionParser.T__5);
			this.state = 100;
			this.timeExpr();
			this.state = 101;
			this.match(AionParser.T__2);
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(AionParser.T__3);
			this.state = 104;
			this.match(AionParser.T__6);
			this.state = 105;
			this.match(AionParser.STRING);
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__39) {
				{
				this.state = 106;
				this.recurrence();
				}
			}

			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__40) {
				{
				this.state = 109;
				this.dateExpr();
				}
			}

			this.state = 112;
			this.match(AionParser.T__5);
			this.state = 113;
			this.timeExpr();
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__46) {
				{
				this.state = 114;
				this.durationExpr();
				}
			}

			this.state = 117;
			this.match(AionParser.T__2);
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
		this.enterRule(_localctx, 10, AionParser.RULE_pomodoroStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.ID) {
				{
				this.state = 119;
				this.match(AionParser.ID);
				}
			}

			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__7) {
				{
				this.state = 122;
				this.match(AionParser.T__7);
				}
			}

			this.state = 125;
			this.match(AionParser.T__8);
			this.state = 126;
			this.match(AionParser.STRING);
			this.state = 127;
			this.match(AionParser.T__5);
			this.state = 128;
			this.timeExpr();
			this.state = 129;
			this.match(AionParser.T__9);
			this.state = 130;
			this.match(AionParser.INT);
			this.state = 131;
			this.match(AionParser.T__10);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__49) {
				{
				this.state = 132;
				this.pomodoroExtras();
				}
			}

			this.state = 135;
			this.match(AionParser.T__2);
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
	public structuredEventStmt(): StructuredEventStmtContext {
		let _localctx: StructuredEventStmtContext = new StructuredEventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AionParser.RULE_structuredEventStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(AionParser.T__6);
			this.state = 138;
			this.match(AionParser.ID);
			this.state = 139;
			this.match(AionParser.T__11);
			this.state = 140;
			this.structuredEventBody();
			this.state = 141;
			this.match(AionParser.T__12);
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
	public structuredEventBody(): StructuredEventBodyContext {
		let _localctx: StructuredEventBodyContext = new StructuredEventBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AionParser.RULE_structuredEventBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__13) | (1 << AionParser.T__15) | (1 << AionParser.T__16) | (1 << AionParser.T__17))) !== 0)) {
				{
				{
				this.state = 143;
				this.structuredEventField();
				this.state = 144;
				this.match(AionParser.T__2);
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public structuredEventField(): StructuredEventFieldContext {
		let _localctx: StructuredEventFieldContext = new StructuredEventFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AionParser.RULE_structuredEventField);
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.match(AionParser.T__13);
				this.state = 152;
				this.match(AionParser.T__14);
				this.state = 153;
				this.match(AionParser.STRING);
				}
				break;
			case AionParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 154;
				this.match(AionParser.T__15);
				this.state = 155;
				this.match(AionParser.T__14);
				this.state = 156;
				this.timeExpr();
				}
				break;
			case AionParser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				this.match(AionParser.T__16);
				this.state = 158;
				this.match(AionParser.T__14);
				this.state = 159;
				this.durationExpr();
				}
				break;
			case AionParser.T__17:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 160;
				this.match(AionParser.T__17);
				this.state = 161;
				this.match(AionParser.T__14);
				this.state = 162;
				this.match(AionParser.STRING);
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
	public exportDefaultStmt(): ExportDefaultStmtContext {
		let _localctx: ExportDefaultStmtContext = new ExportDefaultStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AionParser.RULE_exportDefaultStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(AionParser.T__18);
			this.state = 166;
			this.match(AionParser.T__19);
			this.state = 167;
			this.match(AionParser.T__1);
			this.state = 168;
			this.match(AionParser.STRING);
			this.state = 169;
			this.match(AionParser.T__2);
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
	public startWeekStmt(): StartWeekStmtContext {
		let _localctx: StartWeekStmtContext = new StartWeekStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AionParser.RULE_startWeekStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(AionParser.ID);
			this.state = 172;
			this.match(AionParser.T__7);
			this.state = 173;
			this.match(AionParser.T__20);
			this.state = 174;
			this.match(AionParser.T__21);
			this.state = 175;
			this.match(AionParser.DATE);
			this.state = 176;
			this.match(AionParser.T__22);
			this.state = 177;
			this.match(AionParser.T__2);
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
	public iterateStmt(): IterateStmtContext {
		let _localctx: IterateStmtContext = new IterateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AionParser.RULE_iterateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(AionParser.T__23);
			this.state = 180;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__24) | (1 << AionParser.T__25) | (1 << AionParser.T__26))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 181;
			this.match(AionParser.T__27);
			this.state = 182;
			this.iterateFrom();
			this.state = 183;
			this.match(AionParser.T__28);
			this.state = 184;
			this.iterateTo();
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__54) {
				{
				this.state = 185;
				this.stepExpr();
				}
			}

			this.state = 188;
			this.match(AionParser.T__11);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__3) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__8) | (1 << AionParser.T__18) | (1 << AionParser.T__23) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__33 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.ID - 32)))) !== 0)) {
				{
				{
				this.state = 189;
				this.statement();
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 195;
			this.match(AionParser.T__12);
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
	public conditionalStmt(): ConditionalStmtContext {
		let _localctx: ConditionalStmtContext = new ConditionalStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AionParser.RULE_conditionalStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(AionParser.T__29);
			this.state = 198;
			this.match(AionParser.T__21);
			this.state = 199;
			this.conditionExpr();
			this.state = 200;
			this.match(AionParser.T__22);
			this.state = 201;
			this.match(AionParser.T__11);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__3) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__8) | (1 << AionParser.T__18) | (1 << AionParser.T__23) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__33 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.ID - 32)))) !== 0)) {
				{
				{
				this.state = 202;
				this.statement();
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.match(AionParser.T__12);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__30) {
				{
				this.state = 209;
				this.match(AionParser.T__30);
				this.state = 231;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AionParser.T__29:
					{
					this.state = 210;
					this.match(AionParser.T__29);
					this.state = 211;
					this.match(AionParser.T__21);
					this.state = 212;
					this.conditionExpr();
					this.state = 213;
					this.match(AionParser.T__22);
					this.state = 214;
					this.match(AionParser.T__11);
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__3) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__8) | (1 << AionParser.T__18) | (1 << AionParser.T__23) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__33 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.ID - 32)))) !== 0)) {
						{
						{
						this.state = 215;
						this.statement();
						}
						}
						this.state = 220;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 221;
					this.match(AionParser.T__12);
					}
					break;
				case AionParser.T__11:
					{
					this.state = 223;
					this.match(AionParser.T__11);
					this.state = 227;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__3) | (1 << AionParser.T__6) | (1 << AionParser.T__7) | (1 << AionParser.T__8) | (1 << AionParser.T__18) | (1 << AionParser.T__23) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__33 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.ID - 32)))) !== 0)) {
						{
						{
						this.state = 224;
						this.statement();
						}
						}
						this.state = 229;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 230;
					this.match(AionParser.T__12);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
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
	public includeStmt(): IncludeStmtContext {
		let _localctx: IncludeStmtContext = new IncludeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AionParser.RULE_includeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(AionParser.T__31);
			this.state = 236;
			this.match(AionParser.ID);
			this.state = 237;
			this.match(AionParser.T__32);
			this.state = 238;
			this.match(AionParser.ID);
			this.state = 239;
			this.match(AionParser.T__2);
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
		this.enterRule(_localctx, 28, AionParser.RULE_mergeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(AionParser.T__33);
			this.state = 242;
			this.match(AionParser.ID);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.T__34) {
				{
				{
				this.state = 243;
				this.match(AionParser.T__34);
				this.state = 244;
				this.match(AionParser.ID);
				}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 250;
			this.match(AionParser.T__35);
			this.state = 251;
			this.match(AionParser.ID);
			this.state = 252;
			this.match(AionParser.T__2);
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
		this.enterRule(_localctx, 30, AionParser.RULE_filterStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(AionParser.T__36);
			this.state = 255;
			this.match(AionParser.ID);
			this.state = 256;
			this.match(AionParser.T__37);
			this.state = 257;
			this.filterCondition();
			this.state = 258;
			this.match(AionParser.T__35);
			this.state = 259;
			this.match(AionParser.ID);
			this.state = 260;
			this.match(AionParser.T__2);
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
		this.enterRule(_localctx, 32, AionParser.RULE_exportStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(AionParser.T__18);
			this.state = 263;
			this.exportTarget();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__1) {
				{
				this.state = 264;
				this.match(AionParser.T__1);
				this.state = 265;
				this.match(AionParser.STRING);
				}
			}

			this.state = 268;
			this.match(AionParser.T__2);
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
	public exportTarget(): ExportTargetContext {
		let _localctx: ExportTargetContext = new ExportTargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AionParser.RULE_exportTarget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			_la = this._input.LA(1);
			if (!(_la === AionParser.T__38 || _la === AionParser.ID)) {
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
	public recurrence(): RecurrenceContext {
		let _localctx: RecurrenceContext = new RecurrenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AionParser.RULE_recurrence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(AionParser.T__39);
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
	public dateExpr(): DateExprContext {
		let _localctx: DateExprContext = new DateExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AionParser.RULE_dateExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(AionParser.T__40);
			this.state = 277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.DATE:
				{
				this.state = 275;
				this.match(AionParser.DATE);
				}
				break;
			case AionParser.DAY_OF_WEEK:
				{
				this.state = 276;
				this.dayOfWeekExpr();
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
	public dayOfWeekExpr(): DayOfWeekExprContext {
		let _localctx: DayOfWeekExprContext = new DayOfWeekExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AionParser.RULE_dayOfWeekExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(AionParser.DAY_OF_WEEK);
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (AionParser.T__41 - 42)) | (1 << (AionParser.T__42 - 42)) | (1 << (AionParser.T__43 - 42)) | (1 << (AionParser.T__44 - 42)) | (1 << (AionParser.T__45 - 42)))) !== 0)) {
				{
				this.state = 280;
				this.ordinalExpr();
				}
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
	public ordinalExpr(): OrdinalExprContext {
		let _localctx: OrdinalExprContext = new OrdinalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AionParser.RULE_ordinalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			_la = this._input.LA(1);
			if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (AionParser.T__41 - 42)) | (1 << (AionParser.T__42 - 42)) | (1 << (AionParser.T__43 - 42)) | (1 << (AionParser.T__44 - 42)) | (1 << (AionParser.T__45 - 42)))) !== 0))) {
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
	public timeExpr(): TimeExprContext {
		let _localctx: TimeExprContext = new TimeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AionParser.RULE_timeExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(AionParser.TIME);
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
	public durationExpr(): DurationExprContext {
		let _localctx: DurationExprContext = new DurationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AionParser.RULE_durationExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(AionParser.T__46);
			this.state = 288;
			this.durationValue();
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
	public durationValue(): DurationValueContext {
		let _localctx: DurationValueContext = new DurationValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AionParser.RULE_durationValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.durationPart();
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.INT) {
				{
				{
				this.state = 291;
				this.durationPart();
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public durationPart(): DurationPartContext {
		let _localctx: DurationPartContext = new DurationPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AionParser.RULE_durationPart);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this.match(AionParser.INT);
				this.state = 298;
				this.match(AionParser.T__47);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 299;
				this.match(AionParser.INT);
				this.state = 300;
				this.match(AionParser.T__48);
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
	public pomodoroExtras(): PomodoroExtrasContext {
		let _localctx: PomodoroExtrasContext = new PomodoroExtrasContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AionParser.RULE_pomodoroExtras);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(AionParser.T__49);
			this.state = 304;
			this.durationValue();
			this.state = 305;
			this.match(AionParser.T__50);
			this.state = 306;
			this.durationValue();
			this.state = 307;
			this.match(AionParser.T__51);
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
	public iterateFrom(): IterateFromContext {
		let _localctx: IterateFromContext = new IterateFromContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AionParser.RULE_iterateFrom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			_la = this._input.LA(1);
			if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (AionParser.T__52 - 53)) | (1 << (AionParser.ID - 53)) | (1 << (AionParser.DATE - 53)))) !== 0))) {
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
	public iterateTo(): IterateToContext {
		let _localctx: IterateToContext = new IterateToContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AionParser.RULE_iterateTo);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.DATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 311;
				this.match(AionParser.DATE);
				}
				break;
			case AionParser.T__53:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 312;
				this.match(AionParser.T__53);
				this.state = 313;
				this.match(AionParser.INT);
				}
				break;
			case AionParser.T__52:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.match(AionParser.T__52);
				this.state = 315;
				this.match(AionParser.T__53);
				this.state = 316;
				this.match(AionParser.INT);
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
	public stepExpr(): StepExprContext {
		let _localctx: StepExprContext = new StepExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AionParser.RULE_stepExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(AionParser.T__54);
			this.state = 320;
			this.match(AionParser.INT);
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
	public conditionExpr(): ConditionExprContext {
		let _localctx: ConditionExprContext = new ConditionExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AionParser.RULE_conditionExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(AionParser.ID);
			this.state = 323;
			this.match(AionParser.T__55);
			this.state = 324;
			this.match(AionParser.INT);
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
	public filterCondition(): FilterConditionContext {
		let _localctx: FilterConditionContext = new FilterConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AionParser.RULE_filterCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.match(AionParser.T__56);
			this.state = 327;
			_la = this._input.LA(1);
			if (!(_la === AionParser.T__55 || _la === AionParser.T__57)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 328;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\u014D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x07\x02" +
		"D\n\x02\f\x02\x0E\x02G\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03X\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05d\n\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06n\n\x06\x03\x06\x05\x06q\n" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06v\n\x06\x03\x06\x03\x06\x03\x07\x05" +
		"\x07{\n\x07\x03\x07\x05\x07~\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\x88\n\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\x95\n\t\f\t\x0E\t\x98" +
		"\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x05\n\xA6\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\xBD\n\r\x03\r\x03\r\x07\r\xC1\n\r\f\r\x0E\r\xC4\v\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xCE\n\x0E\f" +
		"\x0E\x0E\x0E\xD1\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\xDB\n\x0E\f\x0E\x0E\x0E\xDE\v\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x07\x0E\xE4\n\x0E\f\x0E\x0E\x0E\xE7\v\x0E\x03\x0E" +
		"\x05\x0E\xEA\n\x0E\x05\x0E\xEC\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF8\n\x10\f\x10\x0E" +
		"\x10\xFB\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\u010D\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u0118\n\x15\x03\x16\x03\x16\x05\x16\u011C" +
		"\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x07\x1A\u0127\n\x1A\f\x1A\x0E\x1A\u012A\v\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0130\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0140\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03!\x02\x02\x02\"\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02\x02\x07\x03\x02\x1B\x1D\x04\x02))==\x03\x02" +
		",0\x05\x0277==@@\x04\x02::<<\x02\u0153\x02E\x03\x02\x02\x02\x04W\x03\x02" +
		"\x02\x02\x06Y\x03\x02\x02\x02\b_\x03\x02\x02\x02\ni\x03\x02\x02\x02\f" +
		"z\x03\x02\x02\x02\x0E\x8B\x03\x02\x02\x02\x10\x96\x03\x02\x02\x02\x12" +
		"\xA5\x03\x02\x02\x02\x14\xA7\x03\x02\x02\x02\x16\xAD\x03\x02\x02\x02\x18" +
		"\xB5\x03\x02\x02\x02\x1A\xC7\x03\x02\x02\x02\x1C\xED\x03\x02\x02\x02\x1E" +
		"\xF3\x03\x02\x02\x02 \u0100\x03\x02\x02\x02\"\u0108\x03\x02\x02\x02$\u0110" +
		"\x03\x02\x02\x02&\u0112\x03\x02\x02\x02(\u0114\x03\x02\x02\x02*\u0119" +
		"\x03\x02\x02\x02,\u011D\x03\x02\x02\x02.\u011F\x03\x02\x02\x020\u0121" +
		"\x03\x02\x02\x022\u0124\x03\x02\x02\x024\u012F\x03\x02\x02\x026\u0131" +
		"\x03\x02\x02\x028\u0137\x03\x02\x02\x02:\u013F\x03\x02\x02\x02<\u0141" +
		"\x03\x02\x02\x02>\u0144\x03\x02\x02\x02@\u0148\x03\x02\x02\x02BD\x05\x04" +
		"\x03\x02CB\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02" +
		"\x02\x02FH\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x07\x02\x02\x03I\x03\x03" +
		"\x02\x02\x02JX\x05\x06\x04\x02KX\x05\b\x05\x02LX\x05\n\x06\x02MX\x05\f" +
		"\x07\x02NX\x05\x0E\b\x02OX\x05\x14\v\x02PX\x05\x16\f\x02QX\x05\x18\r\x02" +
		"RX\x05\x1A\x0E\x02SX\x05\x1C\x0F\x02TX\x05\x1E\x10\x02UX\x05 \x11\x02" +
		"VX\x05\"\x12\x02WJ\x03\x02\x02\x02WK\x03\x02\x02\x02WL\x03\x02\x02\x02" +
		"WM\x03\x02\x02\x02WN\x03\x02\x02\x02WO\x03\x02\x02\x02WP\x03\x02\x02\x02" +
		"WQ\x03\x02\x02\x02WR\x03\x02\x02\x02WS\x03\x02\x02\x02WT\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02WV\x03\x02\x02\x02X\x05\x03\x02\x02\x02YZ\x07\x03\x02" +
		"\x02Z[\x07A\x02\x02[\\\x07\x04\x02\x02\\]\x07=\x02\x02]^\x07\x05\x02\x02" +
		"^\x07\x03\x02\x02\x02_`\x07\x06\x02\x02`a\x07\x07\x02\x02ac\x07A\x02\x02" +
		"bd\x05&\x14\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02" +
		"ef\x07\b\x02\x02fg\x05.\x18\x02gh\x07\x05\x02\x02h\t\x03\x02\x02\x02i" +
		"j\x07\x06\x02\x02jk\x07\t\x02\x02km\x07A\x02\x02ln\x05&\x14\x02ml\x03" +
		"\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02oq\x05(\x15\x02po\x03" +
		"\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x07\b\x02\x02su\x05" +
		".\x18\x02tv\x050\x19\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x03\x02" +
		"\x02\x02wx\x07\x05\x02\x02x\v\x03\x02\x02\x02y{\x07=\x02\x02zy\x03\x02" +
		"\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|~\x07\n\x02\x02}|\x03\x02" +
		"\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x07\v\x02\x02" +
		"\x80\x81\x07A\x02\x02\x81\x82\x07\b\x02\x02\x82\x83\x05.\x18\x02\x83\x84" +
		"\x07\f\x02\x02\x84\x85\x07>\x02\x02\x85\x87\x07\r\x02\x02\x86\x88\x05" +
		"6\x1C\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03" +
		"\x02\x02\x02\x89\x8A\x07\x05\x02\x02\x8A\r\x03\x02\x02\x02\x8B\x8C\x07" +
		"\t\x02\x02\x8C\x8D\x07=\x02\x02\x8D\x8E\x07\x0E\x02\x02\x8E\x8F\x05\x10" +
		"\t\x02\x8F\x90\x07\x0F\x02\x02\x90\x0F\x03\x02\x02\x02\x91\x92\x05\x12" +
		"\n\x02\x92\x93\x07\x05\x02\x02\x93\x95\x03\x02\x02\x02\x94\x91\x03\x02" +
		"\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02" +
		"\x02\x02\x97\x11\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9A\x07\x10" +
		"\x02\x02\x9A\x9B\x07\x11\x02\x02\x9B\xA6\x07A\x02\x02\x9C\x9D\x07\x12" +
		"\x02\x02\x9D\x9E\x07\x11\x02\x02\x9E\xA6\x05.\x18\x02\x9F\xA0\x07\x13" +
		"\x02\x02\xA0\xA1\x07\x11\x02\x02\xA1\xA6\x050\x19\x02\xA2\xA3\x07\x14" +
		"\x02\x02\xA3\xA4\x07\x11\x02\x02\xA4\xA6\x07A\x02\x02\xA5\x99\x03\x02" +
		"\x02\x02\xA5\x9C\x03\x02\x02\x02\xA5\x9F\x03\x02\x02\x02\xA5\xA2\x03\x02" +
		"\x02\x02\xA6\x13\x03\x02\x02\x02\xA7\xA8\x07\x15\x02\x02\xA8\xA9\x07\x16" +
		"\x02\x02\xA9\xAA\x07\x04\x02\x02\xAA\xAB\x07A\x02\x02\xAB\xAC\x07\x05" +
		"\x02\x02\xAC\x15\x03\x02\x02\x02\xAD\xAE\x07=\x02\x02\xAE\xAF\x07\n\x02" +
		"\x02\xAF\xB0\x07\x17\x02\x02\xB0\xB1\x07\x18\x02\x02\xB1\xB2\x07@\x02" +
		"\x02\xB2\xB3\x07\x19\x02\x02\xB3\xB4\x07\x05\x02\x02\xB4\x17\x03\x02\x02" +
		"\x02\xB5\xB6\x07\x1A\x02\x02\xB6\xB7\t\x02\x02\x02\xB7\xB8\x07\x1E\x02" +
		"\x02\xB8\xB9\x058\x1D\x02\xB9\xBA\x07\x1F\x02\x02\xBA\xBC\x05:\x1E\x02" +
		"\xBB\xBD\x05<\x1F\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02" +
		"\xBD\xBE\x03\x02\x02\x02\xBE\xC2\x07\x0E\x02\x02\xBF\xC1\x05\x04\x03\x02" +
		"\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02" +
		"\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02" +
		"\xC5\xC6\x07\x0F\x02\x02\xC6\x19\x03\x02\x02\x02\xC7\xC8\x07 \x02\x02" +
		"\xC8\xC9\x07\x18\x02\x02\xC9\xCA\x05> \x02\xCA\xCB\x07\x19\x02\x02\xCB" +
		"\xCF\x07\x0E\x02\x02\xCC\xCE\x05\x04\x03\x02\xCD\xCC\x03\x02\x02\x02\xCE" +
		"\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0" +
		"\xD2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xEB\x07\x0F\x02\x02\xD3" +
		"\xE9\x07!\x02\x02\xD4\xD5\x07 \x02\x02\xD5\xD6\x07\x18\x02\x02\xD6\xD7" +
		"\x05> \x02\xD7\xD8\x07\x19\x02\x02\xD8\xDC\x07\x0E\x02\x02\xD9\xDB\x05" +
		"\x04\x03\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xDC\x03" +
		"\x02\x02\x02\xDF\xE0\x07\x0F\x02\x02\xE0\xEA\x03\x02\x02\x02\xE1\xE5\x07" +
		"\x0E\x02\x02\xE2\xE4\x05\x04\x03\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7\x03" +
		"\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE8\x03" +
		"\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEA\x07\x0F\x02\x02\xE9\xD4\x03" +
		"\x02\x02\x02\xE9\xE1\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xD3\x03" +
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\x1B\x03\x02\x02\x02\xED\xEE\x07" +
		"\"\x02\x02\xEE\xEF\x07=\x02\x02\xEF\xF0\x07#\x02\x02\xF0\xF1\x07=\x02" +
		"\x02\xF1\xF2\x07\x05\x02\x02\xF2\x1D\x03\x02\x02\x02\xF3\xF4\x07$\x02" +
		"\x02\xF4\xF9\x07=\x02\x02\xF5\xF6\x07%\x02\x02\xF6\xF8\x07=\x02\x02\xF7" +
		"\xF5\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9" +
		"\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC" +
		"\xFD\x07&\x02\x02\xFD\xFE\x07=\x02\x02\xFE\xFF\x07\x05\x02\x02\xFF\x1F" +
		"\x03\x02\x02\x02\u0100\u0101\x07\'\x02\x02\u0101\u0102\x07=\x02\x02\u0102" +
		"\u0103\x07(\x02\x02\u0103\u0104\x05@!\x02\u0104\u0105\x07&\x02\x02\u0105" +
		"\u0106\x07=\x02\x02\u0106\u0107\x07\x05\x02\x02\u0107!\x03\x02\x02\x02" +
		"\u0108\u0109\x07\x15\x02\x02\u0109\u010C\x05$\x13\x02\u010A\u010B\x07" +
		"\x04\x02\x02\u010B\u010D\x07A\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x07\x05" +
		"\x02\x02\u010F#\x03\x02\x02\x02\u0110\u0111\t\x03\x02\x02\u0111%\x03\x02" +
		"\x02\x02\u0112\u0113\x07*\x02\x02\u0113\'\x03\x02\x02\x02\u0114\u0117" +
		"\x07+\x02\x02\u0115\u0118\x07@\x02\x02\u0116\u0118\x05*\x16\x02\u0117" +
		"\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118)\x03\x02\x02" +
		"\x02\u0119\u011B\x07B\x02\x02\u011A\u011C\x05,\x17\x02\u011B\u011A\x03" +
		"\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C+\x03\x02\x02\x02\u011D" +
		"\u011E\t\x04\x02\x02\u011E-\x03\x02\x02\x02\u011F\u0120\x07?\x02\x02\u0120" +
		"/\x03\x02\x02\x02\u0121\u0122\x071\x02\x02\u0122\u0123\x052\x1A\x02\u0123" +
		"1\x03\x02\x02\x02\u0124\u0128\x054\x1B\x02\u0125\u0127\x054\x1B\x02\u0126" +
		"\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02" +
		"\x02\x02\u0128\u0129\x03\x02\x02\x02\u01293\x03\x02\x02\x02\u012A\u0128" +
		"\x03\x02\x02\x02\u012B\u012C\x07>\x02\x02\u012C\u0130\x072\x02\x02\u012D" +
		"\u012E\x07>\x02\x02\u012E\u0130\x073\x02\x02\u012F\u012B\x03\x02\x02\x02" +
		"\u012F\u012D\x03\x02\x02\x02\u01305\x03\x02\x02\x02\u0131\u0132\x074\x02" +
		"\x02\u0132\u0133\x052\x1A\x02\u0133\u0134\x075\x02\x02\u0134\u0135\x05" +
		"2\x1A\x02\u0135\u0136\x076\x02\x02\u01367\x03\x02\x02\x02\u0137\u0138" +
		"\t\x05\x02\x02\u01389\x03\x02\x02\x02\u0139\u0140\x07@\x02\x02\u013A\u013B" +
		"\x078\x02\x02\u013B\u0140\x07>\x02\x02\u013C\u013D\x077\x02\x02\u013D" +
		"\u013E\x078\x02\x02\u013E\u0140\x07>\x02\x02\u013F\u0139\x03\x02\x02\x02" +
		"\u013F\u013A\x03\x02\x02\x02\u013F\u013C\x03\x02\x02\x02\u0140;\x03\x02" +
		"\x02\x02\u0141\u0142\x079\x02\x02\u0142\u0143\x07>\x02\x02\u0143=\x03" +
		"\x02\x02\x02\u0144\u0145\x07=\x02\x02\u0145\u0146\x07:\x02\x02\u0146\u0147" +
		"\x07>\x02\x02\u0147?\x03\x02\x02\x02\u0148\u0149\x07;\x02\x02\u0149\u014A" +
		"\t\x06\x02\x02\u014A\u014B\x07A\x02\x02\u014BA\x03\x02\x02\x02\x1BEWc" +
		"mpuz}\x87\x96\xA5\xBC\xC2\xCF\xDC\xE5\xE9\xEB\xF9\u010C\u0117\u011B\u0128" +
		"\u012F\u013F";
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
	public structuredEventStmt(): StructuredEventStmtContext | undefined {
		return this.tryGetRuleContext(0, StructuredEventStmtContext);
	}
	public exportDefaultStmt(): ExportDefaultStmtContext | undefined {
		return this.tryGetRuleContext(0, ExportDefaultStmtContext);
	}
	public startWeekStmt(): StartWeekStmtContext | undefined {
		return this.tryGetRuleContext(0, StartWeekStmtContext);
	}
	public iterateStmt(): IterateStmtContext | undefined {
		return this.tryGetRuleContext(0, IterateStmtContext);
	}
	public conditionalStmt(): ConditionalStmtContext | undefined {
		return this.tryGetRuleContext(0, ConditionalStmtContext);
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
	public exportStmt(): ExportStmtContext | undefined {
		return this.tryGetRuleContext(0, ExportStmtContext);
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
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
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
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public timeExpr(): TimeExprContext {
		return this.getRuleContext(0, TimeExprContext);
	}
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
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public timeExpr(): TimeExprContext {
		return this.getRuleContext(0, TimeExprContext);
	}
	public recurrence(): RecurrenceContext | undefined {
		return this.tryGetRuleContext(0, RecurrenceContext);
	}
	public dateExpr(): DateExprContext | undefined {
		return this.tryGetRuleContext(0, DateExprContext);
	}
	public durationExpr(): DurationExprContext | undefined {
		return this.tryGetRuleContext(0, DurationExprContext);
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


export class PomodoroStmtContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public timeExpr(): TimeExprContext {
		return this.getRuleContext(0, TimeExprContext);
	}
	public INT(): TerminalNode { return this.getToken(AionParser.INT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(AionParser.ID, 0); }
	public pomodoroExtras(): PomodoroExtrasContext | undefined {
		return this.tryGetRuleContext(0, PomodoroExtrasContext);
	}
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


export class StructuredEventStmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	public structuredEventBody(): StructuredEventBodyContext {
		return this.getRuleContext(0, StructuredEventBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_structuredEventStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStructuredEventStmt) {
			listener.enterStructuredEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStructuredEventStmt) {
			listener.exitStructuredEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStructuredEventStmt) {
			return visitor.visitStructuredEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructuredEventBodyContext extends ParserRuleContext {
	public structuredEventField(): StructuredEventFieldContext[];
	public structuredEventField(i: number): StructuredEventFieldContext;
	public structuredEventField(i?: number): StructuredEventFieldContext | StructuredEventFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructuredEventFieldContext);
		} else {
			return this.getRuleContext(i, StructuredEventFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_structuredEventBody; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStructuredEventBody) {
			listener.enterStructuredEventBody(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStructuredEventBody) {
			listener.exitStructuredEventBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStructuredEventBody) {
			return visitor.visitStructuredEventBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructuredEventFieldContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public timeExpr(): TimeExprContext | undefined {
		return this.tryGetRuleContext(0, TimeExprContext);
	}
	public durationExpr(): DurationExprContext | undefined {
		return this.tryGetRuleContext(0, DurationExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_structuredEventField; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStructuredEventField) {
			listener.enterStructuredEventField(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStructuredEventField) {
			listener.exitStructuredEventField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStructuredEventField) {
			return visitor.visitStructuredEventField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportDefaultStmtContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_exportDefaultStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterExportDefaultStmt) {
			listener.enterExportDefaultStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitExportDefaultStmt) {
			listener.exitExportDefaultStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitExportDefaultStmt) {
			return visitor.visitExportDefaultStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartWeekStmtContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	public DATE(): TerminalNode { return this.getToken(AionParser.DATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_startWeekStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStartWeekStmt) {
			listener.enterStartWeekStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStartWeekStmt) {
			listener.exitStartWeekStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStartWeekStmt) {
			return visitor.visitStartWeekStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterateStmtContext extends ParserRuleContext {
	public iterateFrom(): IterateFromContext {
		return this.getRuleContext(0, IterateFromContext);
	}
	public iterateTo(): IterateToContext {
		return this.getRuleContext(0, IterateToContext);
	}
	public stepExpr(): StepExprContext | undefined {
		return this.tryGetRuleContext(0, StepExprContext);
	}
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
	public get ruleIndex(): number { return AionParser.RULE_iterateStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterIterateStmt) {
			listener.enterIterateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitIterateStmt) {
			listener.exitIterateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitIterateStmt) {
			return visitor.visitIterateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalStmtContext extends ParserRuleContext {
	public conditionExpr(): ConditionExprContext[];
	public conditionExpr(i: number): ConditionExprContext;
	public conditionExpr(i?: number): ConditionExprContext | ConditionExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionExprContext);
		} else {
			return this.getRuleContext(i, ConditionExprContext);
		}
	}
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
	public get ruleIndex(): number { return AionParser.RULE_conditionalStmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterConditionalStmt) {
			listener.enterConditionalStmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitConditionalStmt) {
			listener.exitConditionalStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitConditionalStmt) {
			return visitor.visitConditionalStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStmtContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.ID);
		} else {
			return this.getToken(AionParser.ID, i);
		}
	}
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.ID);
		} else {
			return this.getToken(AionParser.ID, i);
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.ID);
		} else {
			return this.getToken(AionParser.ID, i);
		}
	}
	public filterCondition(): FilterConditionContext {
		return this.getRuleContext(0, FilterConditionContext);
	}
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


export class ExportStmtContext extends ParserRuleContext {
	public exportTarget(): ExportTargetContext {
		return this.getRuleContext(0, ExportTargetContext);
	}
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


export class ExportTargetContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_exportTarget; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterExportTarget) {
			listener.enterExportTarget(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitExportTarget) {
			listener.exitExportTarget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitExportTarget) {
			return visitor.visitExportTarget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecurrenceContext extends ParserRuleContext {
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


export class DateExprContext extends ParserRuleContext {
	public DATE(): TerminalNode | undefined { return this.tryGetToken(AionParser.DATE, 0); }
	public dayOfWeekExpr(): DayOfWeekExprContext | undefined {
		return this.tryGetRuleContext(0, DayOfWeekExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_dateExpr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDateExpr) {
			listener.enterDateExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDateExpr) {
			listener.exitDateExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDateExpr) {
			return visitor.visitDateExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DayOfWeekExprContext extends ParserRuleContext {
	public DAY_OF_WEEK(): TerminalNode { return this.getToken(AionParser.DAY_OF_WEEK, 0); }
	public ordinalExpr(): OrdinalExprContext | undefined {
		return this.tryGetRuleContext(0, OrdinalExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_dayOfWeekExpr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDayOfWeekExpr) {
			listener.enterDayOfWeekExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDayOfWeekExpr) {
			listener.exitDayOfWeekExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDayOfWeekExpr) {
			return visitor.visitDayOfWeekExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrdinalExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_ordinalExpr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterOrdinalExpr) {
			listener.enterOrdinalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitOrdinalExpr) {
			listener.exitOrdinalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitOrdinalExpr) {
			return visitor.visitOrdinalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeExprContext extends ParserRuleContext {
	public TIME(): TerminalNode { return this.getToken(AionParser.TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_timeExpr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTimeExpr) {
			listener.enterTimeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTimeExpr) {
			listener.exitTimeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTimeExpr) {
			return visitor.visitTimeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationExprContext extends ParserRuleContext {
	public durationValue(): DurationValueContext {
		return this.getRuleContext(0, DurationValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_durationExpr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDurationExpr) {
			listener.enterDurationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDurationExpr) {
			listener.exitDurationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDurationExpr) {
			return visitor.visitDurationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationValueContext extends ParserRuleContext {
	public durationPart(): DurationPartContext[];
	public durationPart(i: number): DurationPartContext;
	public durationPart(i?: number): DurationPartContext | DurationPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DurationPartContext);
		} else {
			return this.getRuleContext(i, DurationPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_durationValue; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDurationValue) {
			listener.enterDurationValue(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDurationValue) {
			listener.exitDurationValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDurationValue) {
			return visitor.visitDurationValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationPartContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(AionParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_durationPart; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDurationPart) {
			listener.enterDurationPart(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDurationPart) {
			listener.exitDurationPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDurationPart) {
			return visitor.visitDurationPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PomodoroExtrasContext extends ParserRuleContext {
	public durationValue(): DurationValueContext[];
	public durationValue(i: number): DurationValueContext;
	public durationValue(i?: number): DurationValueContext | DurationValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DurationValueContext);
		} else {
			return this.getRuleContext(i, DurationValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_pomodoroExtras; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterPomodoroExtras) {
			listener.enterPomodoroExtras(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitPomodoroExtras) {
			listener.exitPomodoroExtras(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitPomodoroExtras) {
			return visitor.visitPomodoroExtras(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterateFromContext extends ParserRuleContext {
	public DATE(): TerminalNode | undefined { return this.tryGetToken(AionParser.DATE, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(AionParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_iterateFrom; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterIterateFrom) {
			listener.enterIterateFrom(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitIterateFrom) {
			listener.exitIterateFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitIterateFrom) {
			return visitor.visitIterateFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterateToContext extends ParserRuleContext {
	public DATE(): TerminalNode | undefined { return this.tryGetToken(AionParser.DATE, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(AionParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_iterateTo; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterIterateTo) {
			listener.enterIterateTo(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitIterateTo) {
			listener.exitIterateTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitIterateTo) {
			return visitor.visitIterateTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StepExprContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(AionParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_stepExpr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStepExpr) {
			listener.enterStepExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStepExpr) {
			listener.exitStepExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStepExpr) {
			return visitor.visitStepExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionExprContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AionParser.ID, 0); }
	public INT(): TerminalNode { return this.getToken(AionParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_conditionExpr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterConditionExpr) {
			listener.enterConditionExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitConditionExpr) {
			listener.exitConditionExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitConditionExpr) {
			return visitor.visitConditionExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterConditionContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_filterCondition; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterFilterCondition) {
			listener.enterFilterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitFilterCondition) {
			listener.exitFilterCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitFilterCondition) {
			return visitor.visitFilterCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


