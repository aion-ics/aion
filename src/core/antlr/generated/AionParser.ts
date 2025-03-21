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
	public static readonly RULE_default_declaration = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_event_decl = 6;
	public static readonly RULE_event_timing = 7;
	public static readonly RULE_structured_event_stmt = 8;
	public static readonly RULE_structured_event_field = 9;
	public static readonly RULE_week_start_stmt = 10;
	public static readonly RULE_task_decl = 11;
	public static readonly RULE_task_timing = 12;
	public static readonly RULE_pomodoro_decl = 13;
	public static readonly RULE_loop_stmt = 14;
	public static readonly RULE_loop_unit = 15;
	public static readonly RULE_conditional_stmt = 16;
	public static readonly RULE_filter_stmt = 17;
	public static readonly RULE_merge_stmt = 18;
	public static readonly RULE_include_stmt = 19;
	public static readonly RULE_export_stmt = 20;
	public static readonly RULE_condition = 21;
	public static readonly RULE_comparison_op = 22;
	public static readonly RULE_strategy = 23;
	public static readonly RULE_date = 24;
	public static readonly RULE_weekday = 25;
	public static readonly RULE_time = 26;
	public static readonly RULE_duration = 27;
	public static readonly RULE_value = 28;
	public static readonly RULE_am_pm = 29;
	public static readonly RULE_month_name = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "import_stmt", "assignment_stmt", "default_declaration", 
		"declaration", "event_decl", "event_timing", "structured_event_stmt", 
		"structured_event_field", "week_start_stmt", "task_decl", "task_timing", 
		"pomodoro_decl", "loop_stmt", "loop_unit", "conditional_stmt", "filter_stmt", 
		"merge_stmt", "include_stmt", "export_stmt", "condition", "comparison_op", 
		"strategy", "date", "weekday", "time", "duration", "value", "am_pm", "month_name",
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
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 62;
				this.statement();
				}
				}
				this.state = 67;
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
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.import_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.assignment_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.loop_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.export_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 72;
				this.merge_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 73;
				this.filter_stmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 74;
				this.include_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 75;
				this.conditional_stmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 76;
				this.structured_event_stmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 77;
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
			this.state = 80;
			this.match(AionParser.T__0);
			this.state = 81;
			this.match(AionParser.STRING);
			this.state = 82;
			this.match(AionParser.T__1);
			this.state = 83;
			this.match(AionParser.IDENTIFIER);
			this.state = 84;
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
			this.state = 86;
			this.match(AionParser.IDENTIFIER);
			this.state = 87;
			this.match(AionParser.T__3);
			this.state = 88;
			this.declaration();
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
	public default_declaration(): Default_declarationContext {
		let _localctx: Default_declarationContext = new Default_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AionParser.RULE_default_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(AionParser.T__4);
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__5:
				{
				this.state = 92;
				this.event_decl();
				}
				break;
			case AionParser.T__21:
				{
				this.state = 93;
				this.task_decl();
				}
				break;
			case AionParser.T__30:
				{
				this.state = 94;
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
		this.enterRule(_localctx, 10, AionParser.RULE_declaration);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.event_decl();
				}
				break;
			case AionParser.T__21:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.task_decl();
				}
				break;
			case AionParser.T__30:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
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
		this.enterRule(_localctx, 12, AionParser.RULE_event_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(AionParser.T__5);
			this.state = 103;
			this.match(AionParser.STRING);
			this.state = 104;
			this.event_timing();
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__6) {
				{
				this.state = 105;
				this.match(AionParser.T__6);
				this.state = 106;
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
		this.enterRule(_localctx, 14, AionParser.RULE_event_timing);
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.match(AionParser.T__7);
				this.state = 110;
				this.date();
				this.state = 111;
				this.match(AionParser.T__8);
				this.state = 112;
				this.time();
				this.state = 113;
				this.match(AionParser.T__9);
				this.state = 114;
				this.time();
				}
				break;
			case AionParser.T__10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.match(AionParser.T__10);
				this.state = 117;
				this.weekday();
				this.state = 118;
				this.match(AionParser.T__8);
				this.state = 119;
				this.time();
				this.state = 120;
				this.match(AionParser.T__9);
				this.state = 121;
				this.time();
				}
				break;
			case AionParser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.match(AionParser.T__8);
				this.state = 124;
				this.time();
				this.state = 125;
				this.match(AionParser.T__9);
				this.state = 126;
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
		this.enterRule(_localctx, 16, AionParser.RULE_structured_event_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(AionParser.T__5);
			this.state = 131;
			this.match(AionParser.IDENTIFIER);
			this.state = 132;
			this.match(AionParser.T__11);
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__13) | (1 << AionParser.T__15) | (1 << AionParser.T__16) | (1 << AionParser.T__17))) !== 0)) {
				{
				{
				this.state = 133;
				this.structured_event_field();
				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 139;
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
		this.enterRule(_localctx, 18, AionParser.RULE_structured_event_field);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 141;
				this.match(AionParser.T__13);
				this.state = 142;
				this.match(AionParser.T__14);
				this.state = 143;
				this.match(AionParser.STRING);
				this.state = 144;
				this.match(AionParser.T__2);
				}
				break;
			case AionParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.match(AionParser.T__15);
				this.state = 146;
				this.match(AionParser.T__14);
				this.state = 147;
				this.time();
				this.state = 148;
				this.match(AionParser.T__2);
				}
				break;
			case AionParser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 150;
				this.match(AionParser.T__16);
				this.state = 151;
				this.match(AionParser.T__14);
				this.state = 152;
				this.duration();
				this.state = 153;
				this.match(AionParser.T__2);
				}
				break;
			case AionParser.T__17:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 155;
				this.match(AionParser.T__17);
				this.state = 156;
				this.match(AionParser.T__14);
				this.state = 157;
				this.match(AionParser.STRING);
				this.state = 158;
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
		this.enterRule(_localctx, 20, AionParser.RULE_week_start_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(AionParser.IDENTIFIER);
			this.state = 162;
			this.match(AionParser.T__3);
			this.state = 163;
			this.match(AionParser.T__18);
			this.state = 164;
			this.match(AionParser.T__19);
			this.state = 165;
			this.date();
			this.state = 166;
			this.match(AionParser.T__20);
			this.state = 167;
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
		this.enterRule(_localctx, 22, AionParser.RULE_task_decl);
		let _la: number;
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.match(AionParser.T__21);
				this.state = 170;
				this.match(AionParser.T__22);
				this.state = 171;
				this.match(AionParser.STRING);
				this.state = 172;
				this.task_timing();
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__23) {
					{
					this.state = 173;
					this.match(AionParser.T__23);
					this.state = 174;
					this.match(AionParser.T__24);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.match(AionParser.T__21);
				this.state = 178;
				this.match(AionParser.T__22);
				this.state = 179;
				this.match(AionParser.STRING);
				this.state = 180;
				this.match(AionParser.T__25);
				this.state = 181;
				this.match(AionParser.T__26);
				this.state = 182;
				this.time();
				this.state = 183;
				this.match(AionParser.T__27);
				this.state = 184;
				this.time();
				this.state = 185;
				this.match(AionParser.T__28);
				this.state = 186;
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
		this.enterRule(_localctx, 24, AionParser.RULE_task_timing);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(AionParser.T__6);
			this.state = 191;
			this.time();
			this.state = 192;
			this.match(AionParser.T__7);
			this.state = 193;
			this.match(AionParser.T__29);
			this.state = 194;
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
		this.enterRule(_localctx, 26, AionParser.RULE_pomodoro_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(AionParser.T__30);
			this.state = 197;
			this.match(AionParser.STRING);
			this.state = 198;
			this.match(AionParser.T__6);
			this.state = 199;
			this.time();
			this.state = 200;
			this.match(AionParser.T__31);
			this.state = 201;
			this.match(AionParser.NUMBER);
			this.state = 202;
			this.match(AionParser.T__32);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__23) {
				{
				this.state = 203;
				this.match(AionParser.T__23);
				this.state = 204;
				this.duration();
				this.state = 205;
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
		this.enterRule(_localctx, 28, AionParser.RULE_loop_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(AionParser.T__29);
			this.state = 210;
			this.loop_unit();
			this.state = 211;
			this.match(AionParser.T__8);
			this.state = 212;
			this.date();
			this.state = 213;
			this.match(AionParser.T__9);
			this.state = 214;
			this.date();
			this.state = 215;
			this.match(AionParser.T__11);
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 216;
				this.statement();
				}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 222;
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
		this.enterRule(_localctx, 30, AionParser.RULE_loop_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
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
		this.enterRule(_localctx, 32, AionParser.RULE_conditional_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(AionParser.T__37);
			this.state = 227;
			this.match(AionParser.T__19);
			this.state = 228;
			this.condition();
			this.state = 229;
			this.match(AionParser.T__20);
			this.state = 230;
			this.match(AionParser.T__11);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 231;
				this.statement();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.match(AionParser.T__12);
			this.state = 254;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 238;
					this.match(AionParser.T__38);
					this.state = 239;
					this.match(AionParser.T__37);
					this.state = 240;
					this.match(AionParser.T__19);
					this.state = 241;
					this.condition();
					this.state = 242;
					this.match(AionParser.T__20);
					this.state = 243;
					this.match(AionParser.T__11);
					this.state = 247;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
						{
						{
						this.state = 244;
						this.statement();
						}
						}
						this.state = 249;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 250;
					this.match(AionParser.T__12);
					}
					}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__38) {
				{
				this.state = 257;
				this.match(AionParser.T__38);
				this.state = 258;
				this.match(AionParser.T__11);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__5) | (1 << AionParser.T__29))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (AionParser.T__37 - 38)) | (1 << (AionParser.T__39 - 38)) | (1 << (AionParser.T__42 - 38)) | (1 << (AionParser.T__44 - 38)) | (1 << (AionParser.T__46 - 38)))) !== 0) || _la === AionParser.IDENTIFIER) {
					{
					{
					this.state = 259;
					this.statement();
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 265;
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
		this.enterRule(_localctx, 34, AionParser.RULE_filter_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(AionParser.T__39);
			this.state = 269;
			this.match(AionParser.IDENTIFIER);
			this.state = 270;
			this.match(AionParser.T__40);
			this.state = 271;
			this.condition();
			this.state = 272;
			this.match(AionParser.T__41);
			this.state = 273;
			this.match(AionParser.IDENTIFIER);
			this.state = 274;
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
		this.enterRule(_localctx, 36, AionParser.RULE_merge_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(AionParser.T__42);
			this.state = 277;
			this.match(AionParser.IDENTIFIER);
			this.state = 278;
			this.match(AionParser.T__43);
			this.state = 279;
			this.match(AionParser.IDENTIFIER);
			this.state = 280;
			this.match(AionParser.T__41);
			this.state = 281;
			this.match(AionParser.IDENTIFIER);
			this.state = 282;
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
		this.enterRule(_localctx, 38, AionParser.RULE_include_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(AionParser.T__44);
			this.state = 285;
			this.match(AionParser.IDENTIFIER);
			this.state = 286;
			this.match(AionParser.T__45);
			this.state = 287;
			this.match(AionParser.IDENTIFIER);
			this.state = 288;
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
		this.enterRule(_localctx, 40, AionParser.RULE_export_stmt);
		let _la: number;
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.match(AionParser.T__46);
				this.state = 291;
				this.match(AionParser.IDENTIFIER);
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__1) {
					{
					this.state = 292;
					this.match(AionParser.T__1);
					this.state = 293;
					this.match(AionParser.STRING);
					}
				}

				this.state = 296;
				this.match(AionParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 297;
				this.match(AionParser.T__46);
				this.state = 298;
				this.match(AionParser.T__47);
				this.state = 299;
				this.match(AionParser.T__1);
				this.state = 300;
				this.match(AionParser.STRING);
				this.state = 301;
				this.match(AionParser.T__2);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 302;
				this.match(AionParser.T__46);
				this.state = 303;
				this.match(AionParser.T__48);
				this.state = 304;
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
		this.enterRule(_localctx, 42, AionParser.RULE_condition);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.match(AionParser.IDENTIFIER);
				this.state = 308;
				this.comparison_op();
				this.state = 309;
				this.value();
				}
				break;
			case AionParser.T__49:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this.match(AionParser.T__49);
				this.state = 312;
				this.match(AionParser.T__19);
				this.state = 313;
				this.weekday();
				this.state = 314;
				this.match(AionParser.T__20);
				this.state = 315;
				this.match(AionParser.T__45);
				this.state = 316;
				this.match(AionParser.T__36);
				this.state = 317;
				this.comparison_op();
				this.state = 318;
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
		this.enterRule(_localctx, 44, AionParser.RULE_comparison_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
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
		this.enterRule(_localctx, 46, AionParser.RULE_strategy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
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
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AionParser.RULE_date);
		try {
			this.state = 336;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 326;
				this.match(AionParser.DAY);
				this.state = 327;
				this.match(AionParser.T__59);
				this.state = 328;
				this.match(AionParser.MONTH);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
				this.match(AionParser.DAY);
				this.state = 330;
				this.month_name();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 331;
				this.match(AionParser.YEAR);
				this.state = 332;
				this.match(AionParser.T__59);
				this.state = 333;
				this.match(AionParser.MONTH);
				this.state = 334;
				this.match(AionParser.T__59);
				this.state = 335;
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
		this.enterRule(_localctx, 50, AionParser.RULE_weekday);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
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
		this.enterRule(_localctx, 52, AionParser.RULE_time);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.HOUR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				this.match(AionParser.HOUR);
				this.state = 341;
				this.match(AionParser.T__14);
				this.state = 342;
				this.match(AionParser.MINUTE);
				}
				break;
			case AionParser.HOUR_12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.match(AionParser.HOUR_12);
				this.state = 344;
				this.match(AionParser.T__14);
				this.state = 345;
				this.match(AionParser.MINUTE);
				this.state = 346;
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
		this.enterRule(_localctx, 54, AionParser.RULE_duration);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 349;
				this.match(AionParser.NUMBER);
				this.state = 350;
				this.match(AionParser.T__67);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.match(AionParser.NUMBER);
				this.state = 352;
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
		this.enterRule(_localctx, 56, AionParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
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
		this.enterRule(_localctx, 58, AionParser.RULE_am_pm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
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
		this.enterRule(_localctx, 60, AionParser.RULE_month_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u016C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x07\x02B\n\x02" +
		"\f\x02\x0E\x02E\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Q\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06b\n\x06\x03\x07\x03\x07\x03\x07\x05\x07" +
		"g\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bn\n\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\x83\n\t\x03\n\x03\n\x03\n\x03\n\x07\n\x89\n" +
		"\n\f\n\x0E\n\x8C\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\xA2\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\xB2\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xBF\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xD2\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xDC\n\x10" +
		"\f\x10\x0E\x10\xDF\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xEB\n\x12\f\x12\x0E\x12\xEE\v" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
		"\x12\xF8\n\x12\f\x12\x0E\x12\xFB\v\x12\x03\x12\x03\x12\x07\x12\xFF\n\x12" +
		"\f\x12\x0E\x12\u0102\v\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0107\n\x12" +
		"\f\x12\x0E\x12\u010A\v\x12\x03\x12\x05\x12\u010D\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0129\n\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0134\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0143\n\x17\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0153\n\x1A\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u015E" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0164\n\x1D\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x02\x02\x02!\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02\x02\t\x03\x02%\'\x03\x025:\x03\x02;=\x03" +
		"\x02?E\x03\x02WX\x03\x02HI\x03\x02JU\x02\u0172\x02C\x03\x02\x02\x02\x04" +
		"P\x03\x02\x02\x02\x06R\x03\x02\x02\x02\bX\x03\x02\x02\x02\n]\x03\x02\x02" +
		"\x02\ff\x03\x02\x02\x02\x0Eh\x03\x02\x02\x02\x10\x82\x03\x02\x02\x02\x12" +
		"\x84\x03\x02\x02\x02\x14\xA1\x03\x02\x02\x02\x16\xA3\x03\x02\x02\x02\x18" +
		"\xBE\x03\x02\x02\x02\x1A\xC0\x03\x02\x02\x02\x1C\xC6\x03\x02\x02\x02\x1E" +
		"\xD3\x03\x02\x02\x02 \xE2\x03\x02\x02\x02\"\xE4\x03\x02\x02\x02$\u010E" +
		"\x03\x02\x02\x02&\u0116\x03\x02\x02\x02(\u011E\x03\x02\x02\x02*\u0133" +
		"\x03\x02\x02\x02,\u0142\x03\x02\x02\x02.\u0144\x03\x02\x02\x020\u0146" +
		"\x03\x02\x02\x022\u0152\x03\x02\x02\x024\u0154\x03\x02\x02\x026\u015D" +
		"\x03\x02\x02\x028\u0163\x03\x02\x02\x02:\u0165\x03\x02\x02\x02<\u0167" +
		"\x03\x02\x02\x02>\u0169\x03\x02\x02\x02@B\x05\x04\x03\x02A@\x03\x02\x02" +
		"\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\x03\x03\x02" +
		"\x02\x02EC\x03\x02\x02\x02FQ\x05\x06\x04\x02GQ\x05\b\x05\x02HQ\x05\x1E" +
		"\x10\x02IQ\x05*\x16\x02JQ\x05&\x14\x02KQ\x05$\x13\x02LQ\x05(\x15\x02M" +
		"Q\x05\"\x12\x02NQ\x05\x12\n\x02OQ\x05\x16\f\x02PF\x03\x02\x02\x02PG\x03" +
		"\x02\x02\x02PH\x03\x02\x02\x02PI\x03\x02\x02\x02PJ\x03\x02\x02\x02PK\x03" +
		"\x02\x02\x02PL\x03\x02\x02\x02PM\x03\x02\x02\x02PN\x03\x02\x02\x02PO\x03" +
		"\x02\x02\x02Q\x05\x03\x02\x02\x02RS\x07\x03\x02\x02ST\x07W\x02\x02TU\x07" +
		"\x04\x02\x02UV\x07V\x02\x02VW\x07\x05\x02\x02W\x07\x03\x02\x02\x02XY\x07" +
		"V\x02\x02YZ\x07\x06\x02\x02Z[\x05\f\x07\x02[\\\x07\x05\x02\x02\\\t\x03" +
		"\x02\x02\x02]a\x07\x07\x02\x02^b\x05\x0E\b\x02_b\x05\x18\r\x02`b\x05\x1C" +
		"\x0F\x02a^\x03\x02\x02\x02a_\x03\x02\x02\x02a`\x03\x02\x02\x02b\v\x03" +
		"\x02\x02\x02cg\x05\x0E\b\x02dg\x05\x18\r\x02eg\x05\x1C\x0F\x02fc\x03\x02" +
		"\x02\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02g\r\x03\x02\x02\x02hi\x07" +
		"\b\x02\x02ij\x07W\x02\x02jm\x05\x10\t\x02kl\x07\t\x02\x02ln\x07W\x02\x02" +
		"mk\x03\x02\x02\x02mn\x03\x02\x02\x02n\x0F\x03\x02\x02\x02op\x07\n\x02" +
		"\x02pq\x052\x1A\x02qr\x07\v\x02\x02rs\x056\x1C\x02st\x07\f\x02\x02tu\x05" +
		"6\x1C\x02u\x83\x03\x02\x02\x02vw\x07\r\x02\x02wx\x054\x1B\x02xy\x07\v" +
		"\x02\x02yz\x056\x1C\x02z{\x07\f\x02\x02{|\x056\x1C\x02|\x83\x03\x02\x02" +
		"\x02}~\x07\v\x02\x02~\x7F\x056\x1C\x02\x7F\x80\x07\f\x02\x02\x80\x81\x05" +
		"6\x1C\x02\x81\x83\x03\x02\x02\x02\x82o\x03\x02\x02\x02\x82v\x03\x02\x02" +
		"\x02\x82}\x03\x02\x02\x02\x83\x11\x03\x02\x02\x02\x84\x85\x07\b\x02\x02" +
		"\x85\x86\x07V\x02\x02\x86\x8A\x07\x0E\x02\x02\x87\x89\x05\x14\v\x02\x88" +
		"\x87\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A" +
		"\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D" +
		"\x8E\x07\x0F\x02\x02\x8E\x13\x03\x02\x02\x02\x8F\x90\x07\x10\x02\x02\x90" +
		"\x91\x07\x11\x02\x02\x91\x92\x07W\x02\x02\x92\xA2\x07\x05\x02\x02\x93" +
		"\x94\x07\x12\x02\x02\x94\x95\x07\x11\x02\x02\x95\x96\x056\x1C\x02\x96" +
		"\x97\x07\x05\x02\x02\x97\xA2\x03\x02\x02\x02\x98\x99\x07\x13\x02\x02\x99" +
		"\x9A\x07\x11\x02\x02\x9A\x9B\x058\x1D\x02\x9B\x9C\x07\x05\x02\x02\x9C" +
		"\xA2\x03\x02\x02\x02\x9D\x9E\x07\x14\x02\x02\x9E\x9F\x07\x11\x02\x02\x9F" +
		"\xA0\x07W\x02\x02\xA0\xA2\x07\x05\x02\x02\xA1\x8F\x03\x02\x02\x02\xA1" +
		"\x93\x03\x02\x02\x02\xA1\x98\x03\x02\x02\x02\xA1\x9D\x03\x02\x02\x02\xA2" +
		"\x15\x03\x02\x02\x02\xA3\xA4\x07V\x02\x02\xA4\xA5\x07\x06\x02\x02\xA5" +
		"\xA6\x07\x15\x02\x02\xA6\xA7\x07\x16\x02\x02\xA7\xA8\x052\x1A\x02\xA8" +
		"\xA9\x07\x17\x02\x02\xA9\xAA\x07\x05\x02\x02\xAA\x17\x03\x02\x02\x02\xAB" +
		"\xAC\x07\x18\x02\x02\xAC\xAD\x07\x19\x02\x02\xAD\xAE\x07W\x02\x02\xAE" +
		"\xB1\x05\x1A\x0E\x02\xAF\xB0\x07\x1A\x02\x02\xB0\xB2\x07\x1B\x02\x02\xB1" +
		"\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xBF\x03\x02\x02\x02\xB3" +
		"\xB4\x07\x18\x02\x02\xB4\xB5\x07\x19\x02\x02\xB5\xB6\x07W\x02\x02\xB6" +
		"\xB7\x07\x1C\x02\x02\xB7\xB8\x07\x1D\x02\x02\xB8\xB9\x056\x1C\x02\xB9" +
		"\xBA\x07\x1E\x02\x02\xBA\xBB\x056\x1C\x02\xBB\xBC\x07\x1F\x02\x02\xBC" +
		"\xBD\x050\x19\x02\xBD\xBF\x03\x02\x02\x02\xBE\xAB\x03\x02\x02\x02\xBE" +
		"\xB3\x03\x02\x02\x02\xBF\x19\x03\x02\x02\x02\xC0\xC1\x07\t\x02\x02\xC1" +
		"\xC2\x056\x1C\x02\xC2\xC3\x07\n\x02\x02\xC3\xC4\x07 \x02\x02\xC4\xC5\x05" +
		"4\x1B\x02\xC5\x1B\x03\x02\x02\x02\xC6\xC7\x07!\x02\x02\xC7\xC8\x07W\x02" +
		"\x02\xC8\xC9\x07\t\x02\x02\xC9\xCA\x056\x1C\x02\xCA\xCB\x07\"\x02\x02" +
		"\xCB\xCC\x07X\x02\x02\xCC\xD1\x07#\x02\x02\xCD\xCE\x07\x1A\x02\x02\xCE" +
		"\xCF\x058\x1D\x02\xCF\xD0\x07$\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCD" +
		"\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\x1D\x03\x02\x02\x02\xD3\xD4" +
		"\x07 \x02\x02\xD4\xD5\x05 \x11\x02\xD5\xD6\x07\v\x02\x02\xD6\xD7\x052" +
		"\x1A\x02\xD7\xD8\x07\f\x02\x02\xD8\xD9\x052\x1A\x02\xD9\xDD\x07\x0E\x02" +
		"\x02\xDA\xDC\x05\x04\x03\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03\x02\x02" +
		"\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE0\x03\x02\x02" +
		"\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x07\x0F\x02\x02\xE1\x1F\x03\x02\x02" +
		"\x02\xE2\xE3\t\x02\x02\x02\xE3!\x03\x02\x02\x02\xE4\xE5\x07(\x02\x02\xE5" +
		"\xE6\x07\x16\x02\x02\xE6\xE7\x05,\x17\x02\xE7\xE8\x07\x17\x02\x02\xE8" +
		"\xEC\x07\x0E\x02\x02\xE9\xEB\x05\x04\x03\x02\xEA\xE9\x03\x02\x02\x02\xEB" +
		"\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED" +
		"\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\u0100\x07\x0F\x02\x02" +
		"\xF0\xF1\x07)\x02\x02\xF1\xF2\x07(\x02\x02\xF2\xF3\x07\x16\x02\x02\xF3" +
		"\xF4\x05,\x17\x02\xF4\xF5\x07\x17\x02\x02\xF5\xF9\x07\x0E\x02\x02\xF6" +
		"\xF8\x05\x04\x03\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9" +
		"\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB" +
		"\xF9\x03\x02\x02\x02\xFC\xFD\x07\x0F\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE" +
		"\xF0\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
		"\u0100\u0101\x03\x02\x02\x02\u0101\u010C\x03\x02\x02\x02\u0102\u0100\x03" +
		"\x02\x02\x02\u0103\u0104\x07)\x02\x02\u0104\u0108\x07\x0E\x02\x02\u0105" +
		"\u0107\x05\x04\x03\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03\x02" +
		"\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109" +
		"\u010B\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010D\x07\x0F" +
		"\x02\x02\u010C\u0103\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
		"#\x03\x02\x02\x02\u010E\u010F\x07*\x02\x02\u010F\u0110\x07V\x02\x02\u0110" +
		"\u0111\x07+\x02\x02\u0111\u0112\x05,\x17\x02\u0112\u0113\x07,\x02\x02" +
		"\u0113\u0114\x07V\x02\x02\u0114\u0115\x07\x05\x02\x02\u0115%\x03\x02\x02" +
		"\x02\u0116\u0117\x07-\x02\x02\u0117\u0118\x07V\x02\x02\u0118\u0119\x07" +
		".\x02\x02\u0119\u011A\x07V\x02\x02\u011A\u011B\x07,\x02\x02\u011B\u011C" +
		"\x07V\x02\x02\u011C\u011D\x07\x05\x02\x02\u011D\'\x03\x02\x02\x02\u011E" +
		"\u011F\x07/\x02\x02\u011F\u0120\x07V\x02\x02\u0120\u0121\x070\x02\x02" +
		"\u0121\u0122\x07V\x02\x02\u0122\u0123\x07\x05\x02\x02\u0123)\x03\x02\x02" +
		"\x02\u0124\u0125\x071\x02\x02\u0125\u0128\x07V\x02\x02\u0126\u0127\x07" +
		"\x04\x02\x02\u0127\u0129\x07W\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u0134\x07\x05" +
		"\x02\x02\u012B\u012C\x071\x02\x02\u012C\u012D\x072\x02\x02\u012D\u012E" +
		"\x07\x04\x02\x02\u012E\u012F\x07W\x02\x02\u012F\u0134\x07\x05\x02\x02" +
		"\u0130\u0131\x071\x02\x02\u0131\u0132\x073\x02\x02\u0132\u0134\x07\x05" +
		"\x02\x02\u0133\u0124\x03\x02\x02\x02\u0133\u012B\x03\x02\x02\x02\u0133" +
		"\u0130\x03\x02\x02\x02\u0134+\x03\x02\x02\x02\u0135\u0136\x07V\x02\x02" +
		"\u0136\u0137\x05.\x18\x02\u0137\u0138\x05:\x1E\x02\u0138\u0143\x03\x02" +
		"\x02\x02\u0139\u013A\x074\x02\x02\u013A\u013B\x07\x16\x02\x02\u013B\u013C" +
		"\x054\x1B\x02\u013C\u013D\x07\x17\x02\x02\u013D\u013E\x070\x02\x02\u013E" +
		"\u013F\x07\'\x02\x02\u013F\u0140\x05.\x18\x02\u0140\u0141\x07X\x02\x02" +
		"\u0141\u0143\x03\x02\x02\x02\u0142\u0135\x03\x02\x02\x02\u0142\u0139\x03" +
		"\x02\x02\x02\u0143-\x03\x02\x02\x02\u0144\u0145\t\x03\x02\x02\u0145/\x03" +
		"\x02\x02\x02\u0146\u0147\t\x04\x02\x02\u01471\x03\x02\x02\x02\u0148\u0149" +
		"\x07Y\x02\x02\u0149\u014A\x07>\x02\x02\u014A\u0153\x07Z\x02\x02\u014B" +
		"\u014C\x07Y\x02\x02\u014C\u0153\x05> \x02\u014D\u014E\x07[\x02\x02\u014E" +
		"\u014F\x07>\x02\x02\u014F\u0150\x07Z\x02\x02\u0150\u0151\x07>\x02\x02" +
		"\u0151\u0153\x07Y\x02\x02\u0152\u0148\x03\x02\x02\x02\u0152\u014B\x03" +
		"\x02\x02\x02\u0152\u014D\x03\x02\x02\x02\u01533\x03\x02\x02\x02\u0154" +
		"\u0155\t\x05\x02\x02\u01555\x03\x02\x02\x02\u0156\u0157\x07\\\x02\x02" +
		"\u0157\u0158\x07\x11\x02\x02\u0158\u015E\x07]\x02\x02\u0159\u015A\x07" +
		"^\x02\x02\u015A\u015B\x07\x11\x02\x02\u015B\u015C\x07]\x02\x02\u015C\u015E" +
		"\x05<\x1F\x02\u015D\u0156\x03\x02\x02\x02\u015D\u0159\x03\x02\x02\x02" +
		"\u015E7\x03\x02\x02\x02\u015F\u0160\x07X\x02\x02\u0160\u0164\x07F\x02" +
		"\x02\u0161\u0162\x07X\x02\x02\u0162\u0164\x07G\x02\x02\u0163\u015F\x03" +
		"\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u01649\x03\x02\x02\x02\u0165" +
		"\u0166\t\x06\x02\x02\u0166;\x03\x02\x02\x02\u0167\u0168\t\x07\x02\x02" +
		"\u0168=\x03\x02\x02\x02\u0169\u016A\t\b\x02\x02\u016A?\x03\x02\x02\x02" +
		"\x19CPafm\x82\x8A\xA1\xB1\xBE\xD1\xDD\xEC\xF9\u0100\u0108\u010C\u0128" +
		"\u0133\u0142\u0152\u015D\u0163";
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


