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
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly IDENTIFIER = 84;
	public static readonly STRING = 85;
	public static readonly NUMBER = 86;
	public static readonly DAY = 87;
	public static readonly MONTH = 88;
	public static readonly YEAR = 89;
	public static readonly HOUR = 90;
	public static readonly MINUTE = 91;
	public static readonly HOUR_12 = 92;
	public static readonly WS = 93;
	public static readonly COMMENT = 94;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_import_stmt = 2;
	public static readonly RULE_assignment_stmt = 3;
	public static readonly RULE_value_assignment_stmt = 4;
	public static readonly RULE_default_declaration = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_event_decl = 7;
	public static readonly RULE_event_timing = 8;
	public static readonly RULE_structured_event_stmt = 9;
	public static readonly RULE_structured_event_field = 10;
	public static readonly RULE_week_start_stmt = 11;
	public static readonly RULE_task_decl = 12;
	public static readonly RULE_task_timing = 13;
	public static readonly RULE_pomodoro_decl = 14;
	public static readonly RULE_loop_stmt = 15;
	public static readonly RULE_loop_unit = 16;
	public static readonly RULE_conditional_stmt = 17;
	public static readonly RULE_filter_stmt = 18;
	public static readonly RULE_merge_stmt = 19;
	public static readonly RULE_include_stmt = 20;
	public static readonly RULE_export_stmt = 21;
	public static readonly RULE_condition = 22;
	public static readonly RULE_comparison_op = 23;
	public static readonly RULE_strategy = 24;
	public static readonly RULE_value_expr = 25;
	public static readonly RULE_date = 26;
	public static readonly RULE_weekday = 27;
	public static readonly RULE_time = 28;
	public static readonly RULE_duration = 29;
	public static readonly RULE_value = 30;
	public static readonly RULE_am_pm = 31;
	public static readonly RULE_month_name = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "import_stmt", "assignment_stmt", "value_assignment_stmt", 
		"default_declaration", "declaration", "event_decl", "event_timing", "structured_event_stmt", 
		"structured_event_field", "week_start_stmt", "task_decl", "task_timing", 
		"pomodoro_decl", "loop_stmt", "loop_unit", "conditional_stmt", "filter_stmt", 
		"merge_stmt", "include_stmt", "export_stmt", "condition", "comparison_op", 
		"strategy", "value_expr", "date", "weekday", "time", "duration", "value", 
		"am_pm", "month_name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'as'", "';'", "'='", "'new'", "'event'", "'at'", 
		"'on'", "'from'", "'to'", "'every'", "'{'", "'}'", "'name'", "':'", "'start'", 
		"'duration'", "'location'", "'weeknumber'", "'('", "')'", "'task'", "'named'", 
		"'with'", "'alarm'", "'find'", "'between'", "'and'", "'using'", "'each'", 
		"'pomodoro'", "'repeat'", "'times'", "'break'", "'day'", "'week'", "'month'", 
		"'if'", "'else'", "'filter'", "'where'", "'into'", "'merge'", "','", "'include'", 
		"'in'", "'export'", "'default'", "'all'", "'count'", "'=='", "'!='", "'<'", 
		"'<='", "'>'", "'>='", "'random'", "'earliest'", "'latest'", "'.'", "'Monday'", 
		"'Tuesday'", "'Wednesday'", "'Thursday'", "'Friday'", "'Saturday'", "'Sunday'", 
		"'m'", "'h'", "'AM'", "'PM'", "'January'", "'February'", "'March'", "'April'", 
		"'May'", "'June'", "'July'", "'August'", "'September'", "'October'", "'November'", 
		"'December'",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"IDENTIFIER", "STRING", "NUMBER", "DAY", "MONTH", "YEAR", "HOUR", "MINUTE", 
		"HOUR_12", "WS", "COMMENT",
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
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 66;
				this.statement();
				}
				}
				this.state = 71;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AionParser.RULE_statement);
		try {
			this.state = 83;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.import_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.assignment_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 74;
				this.value_assignment_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 75;
				this.loop_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 76;
				this.export_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 77;
				this.merge_stmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 78;
				this.filter_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 79;
				this.include_stmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 80;
				this.conditional_stmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 81;
				this.structured_event_stmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 82;
				this.week_start_stmt();
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
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AionParser.RULE_import_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(AionParser.T__0);
			this.state = 86;
			this.match(AionParser.STRING);
			this.state = 87;
			this.match(AionParser.T__1);
			this.state = 88;
			this.match(AionParser.IDENTIFIER);
			this.state = 89;
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
	public assignment_stmt(): Assignment_stmtContext {
		let _localctx: Assignment_stmtContext = new Assignment_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AionParser.RULE_assignment_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(AionParser.IDENTIFIER);
			this.state = 92;
			this.match(AionParser.T__3);
			this.state = 93;
			this.declaration();
			this.state = 94;
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
	public value_assignment_stmt(): Value_assignment_stmtContext {
		let _localctx: Value_assignment_stmtContext = new Value_assignment_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AionParser.RULE_value_assignment_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(AionParser.IDENTIFIER);
			this.state = 97;
			this.match(AionParser.T__3);
			this.state = 98;
			this.value_expr();
			this.state = 99;
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
	public default_declaration(): Default_declarationContext {
		let _localctx: Default_declarationContext = new Default_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AionParser.RULE_default_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(AionParser.T__4);
			this.state = 105;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__5:
				{
				this.state = 102;
				this.event_decl();
				}
				break;
			case AionParser.T__21:
				{
				this.state = 103;
				this.task_decl();
				}
				break;
			case AionParser.T__30:
				{
				this.state = 104;
				this.pomodoro_decl();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AionParser.RULE_declaration);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.event_decl();
				}
				break;
			case AionParser.T__21:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.task_decl();
				}
				break;
			case AionParser.T__30:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.pomodoro_decl();
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
	public event_decl(): Event_declContext {
		let _localctx: Event_declContext = new Event_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AionParser.RULE_event_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(AionParser.T__5);
			this.state = 113;
			this.match(AionParser.STRING);
			this.state = 114;
			this.event_timing();
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__6) {
				{
				this.state = 115;
				this.match(AionParser.T__6);
				this.state = 116;
				this.match(AionParser.STRING);
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
	public event_timing(): Event_timingContext {
		let _localctx: Event_timingContext = new Event_timingContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AionParser.RULE_event_timing);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.match(AionParser.T__7);
				this.state = 120;
				this.date();
				this.state = 121;
				this.match(AionParser.T__8);
				this.state = 122;
				this.time();
				this.state = 123;
				this.match(AionParser.T__9);
				this.state = 124;
				this.time();
				}
				break;
			case AionParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.match(AionParser.T__10);
				this.state = 127;
				this.weekday();
				this.state = 128;
				this.match(AionParser.T__8);
				this.state = 129;
				this.time();
				this.state = 130;
				this.match(AionParser.T__9);
				this.state = 131;
				this.time();
				}
				break;
			case AionParser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 133;
				this.match(AionParser.T__8);
				this.state = 134;
				this.time();
				this.state = 135;
				this.match(AionParser.T__9);
				this.state = 136;
				this.time();
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
	public structured_event_stmt(): Structured_event_stmtContext {
		let _localctx: Structured_event_stmtContext = new Structured_event_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AionParser.RULE_structured_event_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(AionParser.T__5);
			this.state = 141;
			this.match(AionParser.IDENTIFIER);
			this.state = 142;
			this.match(AionParser.T__11);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__13) | (1 << AionParser.T__15) | (1 << AionParser.T__16) | (1 << AionParser.T__17))) !== 0)) {
				{
				{
				this.state = 143;
				this.structured_event_field();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
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
	public structured_event_field(): Structured_event_fieldContext {
		let _localctx: Structured_event_fieldContext = new Structured_event_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AionParser.RULE_structured_event_field);
		try {
			this.state = 169;
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
				this.state = 154;
				this.match(AionParser.T__2);
				}
				break;
			case AionParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.match(AionParser.T__15);
				this.state = 156;
				this.match(AionParser.T__14);
				this.state = 157;
				this.time();
				this.state = 158;
				this.match(AionParser.T__2);
				}
				break;
			case AionParser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 160;
				this.match(AionParser.T__16);
				this.state = 161;
				this.match(AionParser.T__14);
				this.state = 162;
				this.duration();
				this.state = 163;
				this.match(AionParser.T__2);
				}
				break;
			case AionParser.T__17:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 165;
				this.match(AionParser.T__17);
				this.state = 166;
				this.match(AionParser.T__14);
				this.state = 167;
				this.match(AionParser.STRING);
				this.state = 168;
				this.match(AionParser.T__2);
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
	public week_start_stmt(): Week_start_stmtContext {
		let _localctx: Week_start_stmtContext = new Week_start_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AionParser.RULE_week_start_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(AionParser.IDENTIFIER);
			this.state = 172;
			this.match(AionParser.T__3);
			this.state = 173;
			this.match(AionParser.T__18);
			this.state = 174;
			this.match(AionParser.T__19);
			this.state = 175;
			this.date();
			this.state = 176;
			this.match(AionParser.T__20);
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
	public task_decl(): Task_declContext {
		let _localctx: Task_declContext = new Task_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AionParser.RULE_task_decl);
		let _la: number;
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.match(AionParser.T__21);
				this.state = 180;
				this.match(AionParser.T__22);
				this.state = 181;
				this.match(AionParser.STRING);
				this.state = 182;
				this.task_timing();
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__23) {
					{
					this.state = 183;
					this.match(AionParser.T__23);
					this.state = 184;
					this.match(AionParser.T__24);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.match(AionParser.T__21);
				this.state = 188;
				this.match(AionParser.T__22);
				this.state = 189;
				this.match(AionParser.STRING);
				this.state = 190;
				this.match(AionParser.T__25);
				this.state = 191;
				this.match(AionParser.T__26);
				this.state = 192;
				this.time();
				this.state = 193;
				this.match(AionParser.T__27);
				this.state = 194;
				this.time();
				this.state = 195;
				this.match(AionParser.T__28);
				this.state = 196;
				this.strategy();
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
	public task_timing(): Task_timingContext {
		let _localctx: Task_timingContext = new Task_timingContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AionParser.RULE_task_timing);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(AionParser.T__6);
			this.state = 201;
			this.time();
			this.state = 202;
			this.match(AionParser.T__7);
			this.state = 203;
			this.match(AionParser.T__29);
			this.state = 204;
			this.weekday();
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
	public pomodoro_decl(): Pomodoro_declContext {
		let _localctx: Pomodoro_declContext = new Pomodoro_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AionParser.RULE_pomodoro_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(AionParser.T__30);
			this.state = 207;
			this.match(AionParser.STRING);
			this.state = 208;
			this.match(AionParser.T__6);
			this.state = 209;
			this.time();
			this.state = 210;
			this.match(AionParser.T__31);
			this.state = 211;
			this.match(AionParser.NUMBER);
			this.state = 212;
			this.match(AionParser.T__32);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__23) {
				{
				this.state = 213;
				this.match(AionParser.T__23);
				this.state = 214;
				this.duration();
				this.state = 215;
				this.match(AionParser.T__33);
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
	public loop_stmt(): Loop_stmtContext {
		let _localctx: Loop_stmtContext = new Loop_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AionParser.RULE_loop_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(AionParser.T__29);
			this.state = 220;
			this.loop_unit();
			this.state = 221;
			this.match(AionParser.T__8);
			this.state = 222;
			this.date();
			this.state = 223;
			this.match(AionParser.T__9);
			this.state = 224;
			this.date();
			this.state = 225;
			this.match(AionParser.T__11);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 226;
				this.statement();
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
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
	public loop_unit(): Loop_unitContext {
		let _localctx: Loop_unitContext = new Loop_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AionParser.RULE_loop_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (AionParser.T__34 - 35)) | (1 << (AionParser.T__35 - 35)) | (1 << (AionParser.T__36 - 35)))) !== 0))) {
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
	public conditional_stmt(): Conditional_stmtContext {
		let _localctx: Conditional_stmtContext = new Conditional_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AionParser.RULE_conditional_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(AionParser.T__37);
			this.state = 237;
			this.match(AionParser.T__19);
			this.state = 238;
			this.condition();
			this.state = 239;
			this.match(AionParser.T__20);
			this.state = 240;
			this.match(AionParser.T__11);
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 241;
				this.statement();
				}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 247;
			this.match(AionParser.T__12);
			this.state = 264;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 248;
					this.match(AionParser.T__38);
					this.state = 249;
					this.match(AionParser.T__37);
					this.state = 250;
					this.match(AionParser.T__19);
					this.state = 251;
					this.condition();
					this.state = 252;
					this.match(AionParser.T__20);
					this.state = 253;
					this.match(AionParser.T__11);
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
						{
						{
						this.state = 254;
						this.statement();
						}
						}
						this.state = 259;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 260;
					this.match(AionParser.T__12);
					}
					}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__38) {
				{
				this.state = 267;
				this.match(AionParser.T__38);
				this.state = 268;
				this.match(AionParser.T__11);
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
					{
					{
					this.state = 269;
					this.statement();
					}
					}
					this.state = 274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 275;
				this.match(AionParser.T__12);
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
	public filter_stmt(): Filter_stmtContext {
		let _localctx: Filter_stmtContext = new Filter_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AionParser.RULE_filter_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(AionParser.T__39);
			this.state = 279;
			this.match(AionParser.IDENTIFIER);
			this.state = 280;
			this.match(AionParser.T__40);
			this.state = 281;
			this.condition();
			this.state = 282;
			this.match(AionParser.T__41);
			this.state = 283;
			this.match(AionParser.IDENTIFIER);
			this.state = 284;
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
	public merge_stmt(): Merge_stmtContext {
		let _localctx: Merge_stmtContext = new Merge_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AionParser.RULE_merge_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(AionParser.T__42);
			this.state = 287;
			this.match(AionParser.IDENTIFIER);
			this.state = 288;
			this.match(AionParser.T__43);
			this.state = 289;
			this.match(AionParser.IDENTIFIER);
			this.state = 290;
			this.match(AionParser.T__41);
			this.state = 291;
			this.match(AionParser.IDENTIFIER);
			this.state = 292;
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
	public include_stmt(): Include_stmtContext {
		let _localctx: Include_stmtContext = new Include_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AionParser.RULE_include_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(AionParser.T__44);
			this.state = 295;
			this.match(AionParser.IDENTIFIER);
			this.state = 296;
			this.match(AionParser.T__45);
			this.state = 297;
			this.match(AionParser.IDENTIFIER);
			this.state = 298;
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
	public export_stmt(): Export_stmtContext {
		let _localctx: Export_stmtContext = new Export_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AionParser.RULE_export_stmt);
		let _la: number;
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.match(AionParser.T__46);
				this.state = 301;
				this.match(AionParser.IDENTIFIER);
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__1) {
					{
					this.state = 302;
					this.match(AionParser.T__1);
					this.state = 303;
					this.match(AionParser.STRING);
					}
				}

				this.state = 306;
				this.match(AionParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 307;
				this.match(AionParser.T__46);
				this.state = 308;
				this.match(AionParser.T__47);
				this.state = 309;
				this.match(AionParser.T__1);
				this.state = 310;
				this.match(AionParser.STRING);
				this.state = 311;
				this.match(AionParser.T__2);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 312;
				this.match(AionParser.T__46);
				this.state = 313;
				this.match(AionParser.T__48);
				this.state = 314;
				this.match(AionParser.T__2);
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AionParser.RULE_condition);
		try {
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this.match(AionParser.IDENTIFIER);
				this.state = 318;
				this.comparison_op();
				this.state = 319;
				this.value();
				}
				break;
			case AionParser.T__49:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.match(AionParser.T__49);
				this.state = 322;
				this.match(AionParser.T__19);
				this.state = 323;
				this.weekday();
				this.state = 324;
				this.match(AionParser.T__20);
				this.state = 325;
				this.match(AionParser.T__45);
				this.state = 326;
				this.match(AionParser.T__36);
				this.state = 327;
				this.comparison_op();
				this.state = 328;
				this.match(AionParser.NUMBER);
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
	public comparison_op(): Comparison_opContext {
		let _localctx: Comparison_opContext = new Comparison_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AionParser.RULE_comparison_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (AionParser.T__50 - 51)) | (1 << (AionParser.T__51 - 51)) | (1 << (AionParser.T__52 - 51)) | (1 << (AionParser.T__53 - 51)) | (1 << (AionParser.T__54 - 51)) | (1 << (AionParser.T__55 - 51)))) !== 0))) {
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
	public strategy(): StrategyContext {
		let _localctx: StrategyContext = new StrategyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AionParser.RULE_strategy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (AionParser.T__56 - 57)) | (1 << (AionParser.T__57 - 57)) | (1 << (AionParser.T__58 - 57)))) !== 0))) {
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
	public value_expr(): Value_exprContext {
		let _localctx: Value_exprContext = new Value_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AionParser.RULE_value_expr);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 336;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 337;
				this.time();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 338;
				this.duration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 339;
				this.match(AionParser.STRING);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 340;
				this.match(AionParser.NUMBER);
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
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AionParser.RULE_date);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.match(AionParser.DAY);
				this.state = 344;
				this.match(AionParser.T__59);
				this.state = 345;
				this.match(AionParser.MONTH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 346;
				this.match(AionParser.DAY);
				this.state = 347;
				this.month_name();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 348;
				this.match(AionParser.YEAR);
				this.state = 349;
				this.match(AionParser.T__59);
				this.state = 350;
				this.match(AionParser.MONTH);
				this.state = 351;
				this.match(AionParser.T__59);
				this.state = 352;
				this.match(AionParser.DAY);
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
	public weekday(): WeekdayContext {
		let _localctx: WeekdayContext = new WeekdayContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AionParser.RULE_weekday);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			_la = this._input.LA(1);
			if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (AionParser.T__60 - 61)) | (1 << (AionParser.T__61 - 61)) | (1 << (AionParser.T__62 - 61)) | (1 << (AionParser.T__63 - 61)) | (1 << (AionParser.T__64 - 61)) | (1 << (AionParser.T__65 - 61)) | (1 << (AionParser.T__66 - 61)))) !== 0))) {
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
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AionParser.RULE_time);
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.HOUR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this.match(AionParser.HOUR);
				this.state = 358;
				this.match(AionParser.T__14);
				this.state = 359;
				this.match(AionParser.MINUTE);
				}
				break;
			case AionParser.HOUR_12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.match(AionParser.HOUR_12);
				this.state = 361;
				this.match(AionParser.T__14);
				this.state = 362;
				this.match(AionParser.MINUTE);
				this.state = 363;
				this.am_pm();
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
	public duration(): DurationContext {
		let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AionParser.RULE_duration);
		try {
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 366;
				this.match(AionParser.NUMBER);
				this.state = 367;
				this.match(AionParser.T__67);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.match(AionParser.NUMBER);
				this.state = 369;
				this.match(AionParser.T__68);
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AionParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			_la = this._input.LA(1);
			if (!(_la === AionParser.STRING || _la === AionParser.NUMBER)) {
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
	public am_pm(): Am_pmContext {
		let _localctx: Am_pmContext = new Am_pmContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AionParser.RULE_am_pm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			_la = this._input.LA(1);
			if (!(_la === AionParser.T__69 || _la === AionParser.T__70)) {
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
	public month_name(): Month_nameContext {
		let _localctx: Month_nameContext = new Month_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AionParser.RULE_month_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			_la = this._input.LA(1);
			if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (AionParser.T__71 - 72)) | (1 << (AionParser.T__72 - 72)) | (1 << (AionParser.T__73 - 72)) | (1 << (AionParser.T__74 - 72)) | (1 << (AionParser.T__75 - 72)) | (1 << (AionParser.T__76 - 72)) | (1 << (AionParser.T__77 - 72)) | (1 << (AionParser.T__78 - 72)) | (1 << (AionParser.T__79 - 72)) | (1 << (AionParser.T__80 - 72)) | (1 << (AionParser.T__81 - 72)) | (1 << (AionParser.T__82 - 72)))) !== 0))) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u017D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x07\x02F\n\x02\f\x02\x0E\x02I\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03V\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07l\n\x07\x03\b\x03\b\x03\b\x05\bq\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\tx\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\x8D\n\n\x03\v\x03\v\x03\v\x03\v\x07\v\x93\n\v\f\v\x0E\v\x96\v\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xAC\n\f\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\xBC\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC9\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xDC" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x07\x11\xE6\n\x11\f\x11\x0E\x11\xE9\v\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xF5\n\x13" +
		"\f\x13\x0E\x13\xF8\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\u0102\n\x13\f\x13\x0E\x13\u0105\v\x13\x03\x13" +
		"\x03\x13\x07\x13\u0109\n\x13\f\x13\x0E\x13\u010C\v\x13\x03\x13\x03\x13" +
		"\x03\x13\x07\x13\u0111\n\x13\f\x13\x0E\x13\u0114\v\x13\x03\x13\x05\x13" +
		"\u0117\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u0133\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u013E\n\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u014D\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0158\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0164\n\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u016F\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0175\n\x1F" +
		"\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x02\x02\x02#\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02\x02\t\x03\x02%\'\x03\x02" +
		"5:\x03\x02;=\x03\x02?E\x03\x02WX\x03\x02HI\x03\x02JU\x02\u0186\x02G\x03" +
		"\x02\x02\x02\x04U\x03\x02\x02\x02\x06W\x03\x02\x02\x02\b]\x03\x02\x02" +
		"\x02\nb\x03\x02\x02\x02\fg\x03\x02\x02\x02\x0Ep\x03\x02\x02\x02\x10r\x03" +
		"\x02\x02\x02\x12\x8C\x03\x02\x02\x02\x14\x8E\x03\x02\x02\x02\x16\xAB\x03" +
		"\x02\x02\x02\x18\xAD\x03\x02\x02\x02\x1A\xC8\x03\x02\x02\x02\x1C\xCA\x03" +
		"\x02\x02\x02\x1E\xD0\x03\x02\x02\x02 \xDD\x03\x02\x02\x02\"\xEC\x03\x02" +
		"\x02\x02$\xEE\x03\x02\x02\x02&\u0118\x03\x02\x02\x02(\u0120\x03\x02\x02" +
		"\x02*\u0128\x03\x02\x02\x02,\u013D\x03\x02\x02\x02.\u014C\x03\x02\x02" +
		"\x020\u014E\x03\x02\x02\x022\u0150\x03\x02\x02\x024\u0157\x03\x02\x02" +
		"\x026\u0163\x03\x02\x02\x028\u0165\x03\x02\x02\x02:\u016E\x03\x02\x02" +
		"\x02<\u0174\x03\x02\x02\x02>\u0176\x03\x02\x02\x02@\u0178\x03\x02\x02" +
		"\x02B\u017A\x03\x02\x02\x02DF\x05\x04\x03\x02ED\x03\x02\x02\x02FI\x03" +
		"\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\x03\x03\x02\x02\x02" +
		"IG\x03\x02\x02\x02JV\x05\x06\x04\x02KV\x05\b\x05\x02LV\x05\n\x06\x02M" +
		"V\x05 \x11\x02NV\x05,\x17\x02OV\x05(\x15\x02PV\x05&\x14\x02QV\x05*\x16" +
		"\x02RV\x05$\x13\x02SV\x05\x14\v\x02TV\x05\x18\r\x02UJ\x03\x02\x02\x02" +
		"UK\x03\x02\x02\x02UL\x03\x02\x02\x02UM\x03\x02\x02\x02UN\x03\x02\x02\x02" +
		"UO\x03\x02\x02\x02UP\x03\x02\x02\x02UQ\x03\x02\x02\x02UR\x03\x02\x02\x02" +
		"US\x03\x02\x02\x02UT\x03\x02\x02\x02V\x05\x03\x02\x02\x02WX\x07\x03\x02" +
		"\x02XY\x07W\x02\x02YZ\x07\x04\x02\x02Z[\x07V\x02\x02[\\\x07\x05\x02\x02" +
		"\\\x07\x03\x02\x02\x02]^\x07V\x02\x02^_\x07\x06\x02\x02_`\x05\x0E\b\x02" +
		"`a\x07\x05\x02\x02a\t\x03\x02\x02\x02bc\x07V\x02\x02cd\x07\x06\x02\x02" +
		"de\x054\x1B\x02ef\x07\x05\x02\x02f\v\x03\x02\x02\x02gk\x07\x07\x02\x02" +
		"hl\x05\x10\t\x02il\x05\x1A\x0E\x02jl\x05\x1E\x10\x02kh\x03\x02\x02\x02" +
		"ki\x03\x02\x02\x02kj\x03\x02\x02\x02l\r\x03\x02\x02\x02mq\x05\x10\t\x02" +
		"nq\x05\x1A\x0E\x02oq\x05\x1E\x10\x02pm\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"po\x03\x02\x02\x02q\x0F\x03\x02\x02\x02rs\x07\b\x02\x02st\x07W\x02\x02" +
		"tw\x05\x12\n\x02uv\x07\t\x02\x02vx\x07W\x02\x02wu\x03\x02\x02\x02wx\x03" +
		"\x02\x02\x02x\x11\x03\x02\x02\x02yz\x07\n\x02\x02z{\x056\x1C\x02{|\x07" +
		"\v\x02\x02|}\x05:\x1E\x02}~\x07\f\x02\x02~\x7F\x05:\x1E\x02\x7F\x8D\x03" +
		"\x02\x02\x02\x80\x81\x07\r\x02\x02\x81\x82\x058\x1D\x02\x82\x83\x07\v" +
		"\x02\x02\x83\x84\x05:\x1E\x02\x84\x85\x07\f\x02\x02\x85\x86\x05:\x1E\x02" +
		"\x86\x8D\x03\x02\x02\x02\x87\x88\x07\v\x02\x02\x88\x89\x05:\x1E\x02\x89" +
		"\x8A\x07\f\x02\x02\x8A\x8B\x05:\x1E\x02\x8B\x8D\x03\x02\x02\x02\x8Cy\x03" +
		"\x02\x02\x02\x8C\x80\x03\x02\x02\x02\x8C\x87\x03\x02\x02\x02\x8D\x13\x03" +
		"\x02\x02\x02\x8E\x8F\x07\b\x02\x02\x8F\x90\x07V\x02\x02\x90\x94\x07\x0E" +
		"\x02\x02\x91\x93\x05\x16\f\x02\x92\x91\x03\x02\x02\x02\x93\x96\x03\x02" +
		"\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02" +
		"\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98\x07\x0F\x02\x02\x98\x15\x03\x02" +
		"\x02\x02\x99\x9A\x07\x10\x02\x02\x9A\x9B\x07\x11\x02\x02\x9B\x9C\x07W" +
		"\x02\x02\x9C\xAC\x07\x05\x02\x02\x9D\x9E\x07\x12\x02\x02\x9E\x9F\x07\x11" +
		"\x02\x02\x9F\xA0\x05:\x1E\x02\xA0\xA1\x07\x05\x02\x02\xA1\xAC\x03\x02" +
		"\x02\x02\xA2\xA3\x07\x13\x02\x02\xA3\xA4\x07\x11\x02\x02\xA4\xA5\x05<" +
		"\x1F\x02\xA5\xA6\x07\x05\x02\x02\xA6\xAC\x03\x02\x02\x02\xA7\xA8\x07\x14" +
		"\x02\x02\xA8\xA9\x07\x11\x02\x02\xA9\xAA\x07W\x02\x02\xAA\xAC\x07\x05" +
		"\x02\x02\xAB\x99\x03\x02\x02\x02\xAB\x9D\x03\x02\x02\x02\xAB\xA2\x03\x02" +
		"\x02\x02\xAB\xA7\x03\x02\x02\x02\xAC\x17\x03\x02\x02\x02\xAD\xAE\x07V" +
		"\x02\x02\xAE\xAF\x07\x06\x02\x02\xAF\xB0\x07\x15\x02\x02\xB0\xB1\x07\x16" +
		"\x02\x02\xB1\xB2\x056\x1C\x02\xB2\xB3\x07\x17\x02\x02\xB3\xB4\x07\x05" +
		"\x02\x02\xB4\x19\x03\x02\x02\x02\xB5\xB6\x07\x18\x02\x02\xB6\xB7\x07\x19" +
		"\x02\x02\xB7\xB8\x07W\x02\x02\xB8\xBB\x05\x1C\x0F\x02\xB9\xBA\x07\x1A" +
		"\x02\x02\xBA\xBC\x07\x1B\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02" +
		"\x02\x02\xBC\xC9\x03\x02\x02\x02\xBD\xBE\x07\x18\x02\x02\xBE\xBF\x07\x19" +
		"\x02\x02\xBF\xC0\x07W\x02\x02\xC0\xC1\x07\x1C\x02\x02\xC1\xC2\x07\x1D" +
		"\x02\x02\xC2\xC3\x05:\x1E\x02\xC3\xC4\x07\x1E\x02\x02\xC4\xC5\x05:\x1E" +
		"\x02\xC5\xC6\x07\x1F\x02\x02\xC6\xC7\x052\x1A\x02\xC7\xC9\x03\x02\x02" +
		"\x02\xC8\xB5\x03\x02\x02\x02\xC8\xBD\x03\x02\x02\x02\xC9\x1B\x03\x02\x02" +
		"\x02\xCA\xCB\x07\t\x02\x02\xCB\xCC\x05:\x1E\x02\xCC\xCD\x07\n\x02\x02" +
		"\xCD\xCE\x07 \x02\x02\xCE\xCF\x058\x1D\x02\xCF\x1D\x03\x02\x02\x02\xD0" +
		"\xD1\x07!\x02\x02\xD1\xD2\x07W\x02\x02\xD2\xD3\x07\t\x02\x02\xD3\xD4\x05" +
		":\x1E\x02\xD4\xD5\x07\"\x02\x02\xD5\xD6\x07X\x02\x02\xD6\xDB\x07#\x02" +
		"\x02\xD7\xD8\x07\x1A\x02\x02\xD8\xD9\x05<\x1F\x02\xD9\xDA\x07$\x02\x02" +
		"\xDA\xDC\x03\x02\x02\x02\xDB\xD7\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02" +
		"\xDC\x1F\x03\x02\x02\x02\xDD\xDE\x07 \x02\x02\xDE\xDF\x05\"\x12\x02\xDF" +
		"\xE0\x07\v\x02\x02\xE0\xE1\x056\x1C\x02\xE1\xE2\x07\f\x02\x02\xE2\xE3" +
		"\x056\x1C\x02\xE3\xE7\x07\x0E\x02\x02\xE4\xE6\x05\x04\x03\x02\xE5\xE4" +
		"\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8" +
		"\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB" +
		"\x07\x0F\x02\x02\xEB!\x03\x02\x02\x02\xEC\xED\t\x02\x02\x02\xED#\x03\x02" +
		"\x02\x02\xEE\xEF\x07(\x02\x02\xEF\xF0\x07\x16\x02\x02\xF0\xF1\x05.\x18" +
		"\x02\xF1\xF2\x07\x17\x02\x02\xF2\xF6\x07\x0E\x02\x02\xF3\xF5\x05\x04\x03" +
		"\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02" +
		"\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xF6\x03\x02\x02" +
		"\x02\xF9\u010A\x07\x0F\x02\x02\xFA\xFB\x07)\x02\x02\xFB\xFC\x07(\x02\x02" +
		"\xFC\xFD\x07\x16\x02\x02\xFD\xFE\x05.\x18\x02\xFE\xFF\x07\x17\x02\x02" +
		"\xFF\u0103\x07\x0E\x02\x02\u0100\u0102\x05\x04\x03\x02\u0101\u0100\x03" +
		"\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103" +
		"\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03\x02" +
		"\x02\x02\u0106\u0107\x07\x0F\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108" +
		"\xFA\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02" +
		"\x02\u010A\u010B\x03\x02\x02\x02\u010B\u0116\x03\x02\x02\x02\u010C\u010A" +
		"\x03\x02\x02\x02\u010D\u010E\x07)\x02\x02\u010E\u0112\x07\x0E\x02\x02" +
		"\u010F\u0111\x05\x04\x03\x02\u0110\u010F\x03\x02\x02\x02\u0111\u0114\x03" +
		"\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"\u0115\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0117\x07\x0F" +
		"\x02\x02\u0116\u010D\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
		"%\x03\x02\x02\x02\u0118\u0119\x07*\x02\x02\u0119\u011A\x07V\x02\x02\u011A" +
		"\u011B\x07+\x02\x02\u011B\u011C\x05.\x18\x02\u011C\u011D\x07,\x02\x02" +
		"\u011D\u011E\x07V\x02\x02\u011E\u011F\x07\x05\x02\x02\u011F\'\x03\x02" +
		"\x02\x02\u0120\u0121\x07-\x02\x02\u0121\u0122\x07V\x02\x02\u0122\u0123" +
		"\x07.\x02\x02\u0123\u0124\x07V\x02\x02\u0124\u0125\x07,\x02\x02\u0125" +
		"\u0126\x07V\x02\x02\u0126\u0127\x07\x05\x02\x02\u0127)\x03\x02\x02\x02" +
		"\u0128\u0129\x07/\x02\x02\u0129\u012A\x07V\x02\x02\u012A\u012B\x070\x02" +
		"\x02\u012B\u012C\x07V\x02\x02\u012C\u012D\x07\x05\x02\x02\u012D+\x03\x02" +
		"\x02\x02\u012E\u012F\x071\x02\x02\u012F\u0132\x07V\x02\x02\u0130\u0131" +
		"\x07\x04\x02\x02\u0131\u0133\x07W\x02\x02\u0132\u0130\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u013E\x07" +
		"\x05\x02\x02\u0135\u0136\x071\x02\x02\u0136\u0137\x072\x02\x02\u0137\u0138" +
		"\x07\x04\x02\x02\u0138\u0139\x07W\x02\x02\u0139\u013E\x07\x05\x02\x02" +
		"\u013A\u013B\x071\x02\x02\u013B\u013C\x073\x02\x02\u013C\u013E\x07\x05" +
		"\x02\x02\u013D\u012E\x03\x02\x02\x02\u013D\u0135\x03\x02\x02\x02\u013D" +
		"\u013A\x03\x02\x02\x02\u013E-\x03\x02\x02\x02\u013F\u0140\x07V\x02\x02" +
		"\u0140\u0141\x050\x19\x02\u0141\u0142\x05> \x02\u0142\u014D\x03\x02\x02" +
		"\x02\u0143\u0144\x074\x02\x02\u0144\u0145\x07\x16\x02\x02\u0145\u0146" +
		"\x058\x1D\x02\u0146\u0147\x07\x17\x02\x02\u0147\u0148\x070\x02\x02\u0148" +
		"\u0149\x07\'\x02\x02\u0149\u014A\x050\x19\x02\u014A\u014B\x07X\x02\x02" +
		"\u014B\u014D\x03\x02\x02\x02\u014C\u013F\x03\x02\x02\x02\u014C\u0143\x03" +
		"\x02\x02\x02\u014D/\x03\x02\x02\x02\u014E\u014F\t\x03\x02\x02\u014F1\x03" +
		"\x02\x02\x02\u0150\u0151\t\x04\x02\x02\u01513\x03\x02\x02\x02\u0152\u0158" +
		"\x056\x1C\x02\u0153\u0158\x05:\x1E\x02\u0154\u0158\x05<\x1F\x02\u0155" +
		"\u0158\x07W\x02\x02\u0156\u0158\x07X\x02\x02\u0157\u0152\x03\x02\x02\x02" +
		"\u0157\u0153\x03\x02\x02\x02\u0157\u0154\x03\x02\x02\x02\u0157\u0155\x03" +
		"\x02\x02\x02\u0157\u0156\x03\x02\x02\x02\u01585\x03\x02\x02\x02\u0159" +
		"\u015A\x07Y\x02\x02\u015A\u015B\x07>\x02\x02\u015B\u0164\x07Z\x02\x02" +
		"\u015C\u015D\x07Y\x02\x02\u015D\u0164\x05B\"\x02\u015E\u015F\x07[\x02" +
		"\x02\u015F\u0160\x07>\x02\x02\u0160\u0161\x07Z\x02\x02\u0161\u0162\x07" +
		">\x02\x02\u0162\u0164\x07Y\x02\x02\u0163\u0159\x03\x02\x02\x02\u0163\u015C" +
		"\x03\x02\x02\x02\u0163\u015E\x03\x02\x02\x02\u01647\x03\x02\x02\x02\u0165" +
		"\u0166\t\x05\x02\x02\u01669\x03\x02\x02\x02\u0167\u0168\x07\\\x02\x02" +
		"\u0168\u0169\x07\x11\x02\x02\u0169\u016F\x07]\x02\x02\u016A\u016B\x07" +
		"^\x02\x02\u016B\u016C\x07\x11\x02\x02\u016C\u016D\x07]\x02\x02\u016D\u016F" +
		"\x05@!\x02\u016E\u0167\x03\x02\x02\x02\u016E\u016A\x03\x02\x02\x02\u016F" +
		";\x03\x02\x02\x02\u0170\u0171\x07X\x02\x02\u0171\u0175\x07F\x02\x02\u0172" +
		"\u0173\x07X\x02\x02\u0173\u0175\x07G\x02\x02\u0174\u0170\x03\x02\x02\x02" +
		"\u0174\u0172\x03\x02\x02\x02\u0175=\x03\x02\x02\x02\u0176\u0177\t\x06" +
		"\x02\x02\u0177?\x03\x02\x02\x02\u0178\u0179\t\x07\x02\x02\u0179A\x03\x02" +
		"\x02\x02\u017A\u017B\t\b\x02\x02\u017BC\x03\x02\x02\x02\x1AGUkpw\x8C\x94" +
		"\xAB\xBB\xC8\xDB\xE7\xF6\u0103\u010A\u0112\u0116\u0132\u013D\u014C\u0157" +
		"\u0163\u016E\u0174";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AionParser.__ATN) {
			AionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AionParser._serializedATN));
		}

		return AionParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
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
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
	}
	public assignment_stmt(): Assignment_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assignment_stmtContext);
	}
	public value_assignment_stmt(): Value_assignment_stmtContext | undefined {
		return this.tryGetRuleContext(0, Value_assignment_stmtContext);
	}
	public loop_stmt(): Loop_stmtContext | undefined {
		return this.tryGetRuleContext(0, Loop_stmtContext);
	}
	public export_stmt(): Export_stmtContext | undefined {
		return this.tryGetRuleContext(0, Export_stmtContext);
	}
	public merge_stmt(): Merge_stmtContext | undefined {
		return this.tryGetRuleContext(0, Merge_stmtContext);
	}
	public filter_stmt(): Filter_stmtContext | undefined {
		return this.tryGetRuleContext(0, Filter_stmtContext);
	}
	public include_stmt(): Include_stmtContext | undefined {
		return this.tryGetRuleContext(0, Include_stmtContext);
	}
	public conditional_stmt(): Conditional_stmtContext | undefined {
		return this.tryGetRuleContext(0, Conditional_stmtContext);
	}
	public structured_event_stmt(): Structured_event_stmtContext | undefined {
		return this.tryGetRuleContext(0, Structured_event_stmtContext);
	}
	public week_start_stmt(): Week_start_stmtContext | undefined {
		return this.tryGetRuleContext(0, Week_start_stmtContext);
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


export class Import_stmtContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(AionParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_import_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterImport_stmt) {
			listener.enterImport_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitImport_stmt) {
			listener.exitImport_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitImport_stmt) {
			return visitor.visitImport_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AionParser.IDENTIFIER, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_assignment_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterAssignment_stmt) {
			listener.enterAssignment_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitAssignment_stmt) {
			listener.exitAssignment_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitAssignment_stmt) {
			return visitor.visitAssignment_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_assignment_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AionParser.IDENTIFIER, 0); }
	public value_expr(): Value_exprContext {
		return this.getRuleContext(0, Value_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_value_assignment_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterValue_assignment_stmt) {
			listener.enterValue_assignment_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitValue_assignment_stmt) {
			listener.exitValue_assignment_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitValue_assignment_stmt) {
			return visitor.visitValue_assignment_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Default_declarationContext extends ParserRuleContext {
	public event_decl(): Event_declContext | undefined {
		return this.tryGetRuleContext(0, Event_declContext);
	}
	public task_decl(): Task_declContext | undefined {
		return this.tryGetRuleContext(0, Task_declContext);
	}
	public pomodoro_decl(): Pomodoro_declContext | undefined {
		return this.tryGetRuleContext(0, Pomodoro_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_default_declaration; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDefault_declaration) {
			listener.enterDefault_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDefault_declaration) {
			listener.exitDefault_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDefault_declaration) {
			return visitor.visitDefault_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public event_decl(): Event_declContext | undefined {
		return this.tryGetRuleContext(0, Event_declContext);
	}
	public task_decl(): Task_declContext | undefined {
		return this.tryGetRuleContext(0, Task_declContext);
	}
	public pomodoro_decl(): Pomodoro_declContext | undefined {
		return this.tryGetRuleContext(0, Pomodoro_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_declaration; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_declContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.STRING);
		} else {
			return this.getToken(AionParser.STRING, i);
		}
	}
	public event_timing(): Event_timingContext {
		return this.getRuleContext(0, Event_timingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_event_decl; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterEvent_decl) {
			listener.enterEvent_decl(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitEvent_decl) {
			listener.exitEvent_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitEvent_decl) {
			return visitor.visitEvent_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_timingContext extends ParserRuleContext {
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public time(): TimeContext[];
	public time(i: number): TimeContext;
	public time(i?: number): TimeContext | TimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeContext);
		} else {
			return this.getRuleContext(i, TimeContext);
		}
	}
	public weekday(): WeekdayContext | undefined {
		return this.tryGetRuleContext(0, WeekdayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_event_timing; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterEvent_timing) {
			listener.enterEvent_timing(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitEvent_timing) {
			listener.exitEvent_timing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitEvent_timing) {
			return visitor.visitEvent_timing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Structured_event_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AionParser.IDENTIFIER, 0); }
	public structured_event_field(): Structured_event_fieldContext[];
	public structured_event_field(i: number): Structured_event_fieldContext;
	public structured_event_field(i?: number): Structured_event_fieldContext | Structured_event_fieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Structured_event_fieldContext);
		} else {
			return this.getRuleContext(i, Structured_event_fieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_structured_event_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStructured_event_stmt) {
			listener.enterStructured_event_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStructured_event_stmt) {
			listener.exitStructured_event_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStructured_event_stmt) {
			return visitor.visitStructured_event_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Structured_event_fieldContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_structured_event_field; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStructured_event_field) {
			listener.enterStructured_event_field(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStructured_event_field) {
			listener.exitStructured_event_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStructured_event_field) {
			return visitor.visitStructured_event_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Week_start_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AionParser.IDENTIFIER, 0); }
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_week_start_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterWeek_start_stmt) {
			listener.enterWeek_start_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitWeek_start_stmt) {
			listener.exitWeek_start_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitWeek_start_stmt) {
			return visitor.visitWeek_start_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_declContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public task_timing(): Task_timingContext | undefined {
		return this.tryGetRuleContext(0, Task_timingContext);
	}
	public time(): TimeContext[];
	public time(i: number): TimeContext;
	public time(i?: number): TimeContext | TimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeContext);
		} else {
			return this.getRuleContext(i, TimeContext);
		}
	}
	public strategy(): StrategyContext | undefined {
		return this.tryGetRuleContext(0, StrategyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_task_decl; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTask_decl) {
			listener.enterTask_decl(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTask_decl) {
			listener.exitTask_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTask_decl) {
			return visitor.visitTask_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_timingContext extends ParserRuleContext {
	public time(): TimeContext {
		return this.getRuleContext(0, TimeContext);
	}
	public weekday(): WeekdayContext {
		return this.getRuleContext(0, WeekdayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_task_timing; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTask_timing) {
			listener.enterTask_timing(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTask_timing) {
			listener.exitTask_timing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTask_timing) {
			return visitor.visitTask_timing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pomodoro_declContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public time(): TimeContext {
		return this.getRuleContext(0, TimeContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(AionParser.NUMBER, 0); }
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_pomodoro_decl; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterPomodoro_decl) {
			listener.enterPomodoro_decl(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitPomodoro_decl) {
			listener.exitPomodoro_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitPomodoro_decl) {
			return visitor.visitPomodoro_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Loop_stmtContext extends ParserRuleContext {
	public loop_unit(): Loop_unitContext {
		return this.getRuleContext(0, Loop_unitContext);
	}
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
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
	public get ruleIndex(): number { return AionParser.RULE_loop_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterLoop_stmt) {
			listener.enterLoop_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitLoop_stmt) {
			listener.exitLoop_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitLoop_stmt) {
			return visitor.visitLoop_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Loop_unitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_loop_unit; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterLoop_unit) {
			listener.enterLoop_unit(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitLoop_unit) {
			listener.exitLoop_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitLoop_unit) {
			return visitor.visitLoop_unit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_stmtContext extends ParserRuleContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
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
	public get ruleIndex(): number { return AionParser.RULE_conditional_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterConditional_stmt) {
			listener.enterConditional_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitConditional_stmt) {
			listener.exitConditional_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitConditional_stmt) {
			return visitor.visitConditional_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Filter_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.IDENTIFIER);
		} else {
			return this.getToken(AionParser.IDENTIFIER, i);
		}
	}
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_filter_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterFilter_stmt) {
			listener.enterFilter_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitFilter_stmt) {
			listener.exitFilter_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitFilter_stmt) {
			return visitor.visitFilter_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Merge_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.IDENTIFIER);
		} else {
			return this.getToken(AionParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_merge_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterMerge_stmt) {
			listener.enterMerge_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitMerge_stmt) {
			listener.exitMerge_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitMerge_stmt) {
			return visitor.visitMerge_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Include_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.IDENTIFIER);
		} else {
			return this.getToken(AionParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_include_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterInclude_stmt) {
			listener.enterInclude_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitInclude_stmt) {
			listener.exitInclude_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitInclude_stmt) {
			return visitor.visitInclude_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Export_stmtContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_export_stmt; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterExport_stmt) {
			listener.enterExport_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitExport_stmt) {
			listener.exitExport_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitExport_stmt) {
			return visitor.visitExport_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
	public comparison_op(): Comparison_opContext {
		return this.getRuleContext(0, Comparison_opContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public weekday(): WeekdayContext | undefined {
		return this.tryGetRuleContext(0, WeekdayContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AionParser.NUMBER, 0); }
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


export class Comparison_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_comparison_op; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterComparison_op) {
			listener.enterComparison_op(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitComparison_op) {
			listener.exitComparison_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitComparison_op) {
			return visitor.visitComparison_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrategyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_strategy; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterStrategy) {
			listener.enterStrategy(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitStrategy) {
			listener.exitStrategy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitStrategy) {
			return visitor.visitStrategy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_exprContext extends ParserRuleContext {
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AionParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_value_expr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterValue_expr) {
			listener.enterValue_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitValue_expr) {
			listener.exitValue_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitValue_expr) {
			return visitor.visitValue_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public DAY(): TerminalNode { return this.getToken(AionParser.DAY, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(AionParser.MONTH, 0); }
	public month_name(): Month_nameContext | undefined {
		return this.tryGetRuleContext(0, Month_nameContext);
	}
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(AionParser.YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_date; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WeekdayContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_weekday; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterWeekday) {
			listener.enterWeekday(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitWeekday) {
			listener.exitWeekday(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitWeekday) {
			return visitor.visitWeekday(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(AionParser.HOUR, 0); }
	public MINUTE(): TerminalNode { return this.getToken(AionParser.MINUTE, 0); }
	public HOUR_12(): TerminalNode | undefined { return this.tryGetToken(AionParser.HOUR_12, 0); }
	public am_pm(): Am_pmContext | undefined {
		return this.tryGetRuleContext(0, Am_pmContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_time; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTime) {
			return visitor.visitTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(AionParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_duration; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDuration) {
			listener.enterDuration(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDuration) {
			listener.exitDuration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDuration) {
			return visitor.visitDuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AionParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_value; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Am_pmContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_am_pm; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterAm_pm) {
			listener.enterAm_pm(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitAm_pm) {
			listener.exitAm_pm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitAm_pm) {
			return visitor.visitAm_pm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Month_nameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_month_name; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterMonth_name) {
			listener.enterMonth_name(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitMonth_name) {
			listener.exitMonth_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitMonth_name) {
			return visitor.visitMonth_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


