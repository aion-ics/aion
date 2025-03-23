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
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly IDENTIFIER = 88;
	public static readonly STRING = 89;
	public static readonly NUMBER = 90;
	public static readonly WS = 91;
	public static readonly COMMENT = 92;
	public static readonly MONTH_NAME = 93;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_import_stmt = 2;
	public static readonly RULE_assignment_stmt = 3;
	public static readonly RULE_value_assignment_stmt = 4;
	public static readonly RULE_default_declaration = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_event_decl = 7;
	public static readonly RULE_event_timing = 8;
	public static readonly RULE_temporal_expr = 9;
	public static readonly RULE_structured_event_stmt = 10;
	public static readonly RULE_structured_event_field = 11;
	public static readonly RULE_task_decl = 12;
	public static readonly RULE_pomodoro_decl = 13;
	public static readonly RULE_loop_stmt = 14;
	public static readonly RULE_loop_start = 15;
	public static readonly RULE_loop_end = 16;
	public static readonly RULE_loop_unit = 17;
	public static readonly RULE_conditional_stmt = 18;
	public static readonly RULE_filter_stmt = 19;
	public static readonly RULE_merge_stmt = 20;
	public static readonly RULE_identifier_list = 21;
	public static readonly RULE_include_stmt = 22;
	public static readonly RULE_export_stmt = 23;
	public static readonly RULE_condition = 24;
	public static readonly RULE_comparison_op = 25;
	public static readonly RULE_strategy = 26;
	public static readonly RULE_value_expr = 27;
	public static readonly RULE_function_call = 28;
	public static readonly RULE_date = 29;
	public static readonly RULE_date_specifier = 30;
	public static readonly RULE_weekday = 31;
	public static readonly RULE_time = 32;
	public static readonly RULE_duration = 33;
	public static readonly RULE_time_unit = 34;
	public static readonly RULE_value = 35;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "import_stmt", "assignment_stmt", "value_assignment_stmt", 
		"default_declaration", "declaration", "event_decl", "event_timing", "temporal_expr", 
		"structured_event_stmt", "structured_event_field", "task_decl", "pomodoro_decl", 
		"loop_stmt", "loop_start", "loop_end", "loop_unit", "conditional_stmt", 
		"filter_stmt", "merge_stmt", "identifier_list", "include_stmt", "export_stmt", 
		"condition", "comparison_op", "strategy", "value_expr", "function_call", 
		"date", "date_specifier", "weekday", "time", "duration", "time_unit", 
		"value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'as'", "';'", "'='", "'$$$'", "'new'", "'event'", 
		"'for'", "'on'", "'from'", "'to'", "'at'", "'every'", "'find'", "'between'", 
		"'and'", "'daily'", "'weekly'", "'monthly'", "'yearly'", "'{'", "'}'", 
		"'name'", "':'", "','", "'start'", "'duration'", "'location'", "'category'", 
		"'task'", "'using'", "'pomodoro'", "'repeat'", "'times'", "'with'", "'pause'", 
		"'each'", "'step'", "'today'", "'+'", "'day'", "'days'", "'week'", "'weeks'", 
		"'month'", "'months'", "'if'", "'('", "')'", "'else'", "'filter'", "'where'", 
		"'into'", "'merge'", "'include'", "'in'", "'export'", "'default'", "'all'", 
		"'count'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'random'", "'earliest'", 
		"'latest'", "'weeknumber'", "'.'", "'Monday'", "'Tuesday'", "'Wednesday'", 
		"'Thursday'", "'Friday'", "'Saturday'", "'Sunday'", "'Mon'", "'Tue'", 
		"'Wed'", "'Thu'", "'Fri'", "'Sat'", "'Sun'", "'h'", "'m'",
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
		undefined, undefined, undefined, undefined, "IDENTIFIER", "STRING", "NUMBER", 
		"WS", "COMMENT", "MONTH_NAME",
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
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.T__46 - 32)) | (1 << (AionParser.T__50 - 32)) | (1 << (AionParser.T__53 - 32)) | (1 << (AionParser.T__54 - 32)) | (1 << (AionParser.T__56 - 32)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 72;
				this.statement();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
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
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.import_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
				this.assignment_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 82;
				this.value_assignment_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 83;
				this.loop_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 84;
				this.export_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 85;
				this.merge_stmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 86;
				this.filter_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 87;
				this.include_stmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 88;
				this.conditional_stmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 89;
				this.structured_event_stmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 90;
				this.default_declaration();
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
			this.state = 93;
			this.match(AionParser.T__0);
			this.state = 94;
			this.match(AionParser.STRING);
			this.state = 95;
			this.match(AionParser.T__1);
			this.state = 96;
			this.match(AionParser.IDENTIFIER);
			this.state = 97;
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
			this.state = 99;
			this.match(AionParser.IDENTIFIER);
			this.state = 100;
			this.match(AionParser.T__3);
			this.state = 101;
			this.declaration();
			this.state = 102;
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
			this.state = 104;
			this.match(AionParser.IDENTIFIER);
			this.state = 105;
			this.match(AionParser.T__3);
			this.state = 106;
			this.value_expr();
			this.state = 107;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__4) {
				{
				this.state = 109;
				this.match(AionParser.T__4);
				}
			}

			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__5) {
				{
				this.state = 112;
				this.match(AionParser.T__5);
				}
			}

			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__6:
				{
				this.state = 115;
				this.event_decl();
				}
				break;
			case AionParser.T__29:
				{
				this.state = 116;
				this.task_decl();
				}
				break;
			case AionParser.T__31:
				{
				this.state = 117;
				this.pomodoro_decl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 120;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AionParser.RULE_declaration);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__6:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this.event_decl();
				}
				break;
			case AionParser.T__29:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.task_decl();
				}
				break;
			case AionParser.T__31:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
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
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.match(AionParser.T__6);
				this.state = 128;
				this.match(AionParser.STRING);
				this.state = 129;
				this.event_timing();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.match(AionParser.T__6);
				this.state = 131;
				this.match(AionParser.STRING);
				this.state = 132;
				this.temporal_expr();
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 133;
					this.match(AionParser.T__7);
					this.state = 134;
					this.duration();
					}
				}

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
	public event_timing(): Event_timingContext {
		let _localctx: Event_timingContext = new Event_timingContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AionParser.RULE_event_timing);
		let _la: number;
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
				this.match(AionParser.T__8);
				this.state = 140;
				this.date_specifier();
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__9) {
					{
					this.state = 141;
					this.match(AionParser.T__9);
					this.state = 142;
					this.time();
					this.state = 143;
					this.match(AionParser.T__10);
					this.state = 144;
					this.time();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 148;
				this.match(AionParser.T__8);
				this.state = 149;
				this.date_specifier();
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 150;
					this.match(AionParser.T__11);
					this.state = 151;
					this.time();
					}
				}

				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 154;
					this.match(AionParser.T__7);
					this.state = 155;
					this.duration();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.match(AionParser.T__12);
				this.state = 159;
				this.weekday();
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__9) {
					{
					this.state = 160;
					this.match(AionParser.T__9);
					this.state = 161;
					this.time();
					this.state = 162;
					this.match(AionParser.T__10);
					this.state = 163;
					this.time();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 167;
				this.match(AionParser.T__12);
				this.state = 168;
				this.weekday();
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 169;
					this.match(AionParser.T__11);
					this.state = 170;
					this.time();
					}
				}

				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 173;
					this.match(AionParser.T__7);
					this.state = 174;
					this.duration();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 177;
				this.match(AionParser.T__9);
				this.state = 178;
				this.time();
				this.state = 179;
				this.match(AionParser.T__10);
				this.state = 180;
				this.time();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 182;
				this.match(AionParser.T__11);
				this.state = 183;
				this.time();
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 184;
					this.match(AionParser.T__7);
					this.state = 185;
					this.duration();
					}
				}

				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 188;
				this.match(AionParser.T__13);
				this.state = 189;
				this.match(AionParser.T__14);
				this.state = 190;
				this.time();
				this.state = 191;
				this.match(AionParser.T__15);
				this.state = 192;
				this.time();
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
	public temporal_expr(): Temporal_exprContext {
		let _localctx: Temporal_exprContext = new Temporal_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AionParser.RULE_temporal_expr);
		let _la: number;
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.match(AionParser.T__16);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 197;
					this.match(AionParser.T__11);
					this.state = 198;
					this.time();
					}
				}

				}
				break;
			case AionParser.T__17:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				this.match(AionParser.T__17);
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 202;
					this.match(AionParser.T__11);
					this.state = 203;
					this.time();
					}
				}

				}
				break;
			case AionParser.T__18:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 206;
				this.match(AionParser.T__18);
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 207;
					this.match(AionParser.T__11);
					this.state = 208;
					this.time();
					}
				}

				}
				break;
			case AionParser.T__19:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 211;
				this.match(AionParser.T__19);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 212;
					this.match(AionParser.T__11);
					this.state = 213;
					this.time();
					}
				}

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
		this.enterRule(_localctx, 20, AionParser.RULE_structured_event_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(AionParser.T__6);
			this.state = 219;
			this.match(AionParser.IDENTIFIER);
			this.state = 220;
			this.match(AionParser.T__20);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__22) | (1 << AionParser.T__25) | (1 << AionParser.T__26) | (1 << AionParser.T__27) | (1 << AionParser.T__28))) !== 0)) {
				{
				{
				this.state = 221;
				this.structured_event_field();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 227;
			this.match(AionParser.T__21);
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
		this.enterRule(_localctx, 22, AionParser.RULE_structured_event_field);
		let _la: number;
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 229;
				this.match(AionParser.T__22);
				this.state = 230;
				this.match(AionParser.T__23);
				this.state = 231;
				this.match(AionParser.STRING);
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 232;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 235;
				this.match(AionParser.T__25);
				this.state = 236;
				this.match(AionParser.T__23);
				this.state = 237;
				this.time();
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 238;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__26:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 241;
				this.match(AionParser.T__26);
				this.state = 242;
				this.match(AionParser.T__23);
				this.state = 243;
				this.duration();
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 244;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__27:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 247;
				this.match(AionParser.T__27);
				this.state = 248;
				this.match(AionParser.T__23);
				this.state = 249;
				this.match(AionParser.STRING);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 250;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__28:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 253;
				this.match(AionParser.T__28);
				this.state = 254;
				this.match(AionParser.T__23);
				this.state = 255;
				this.match(AionParser.STRING);
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 256;
					this.match(AionParser.T__24);
					}
				}

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
	public task_decl(): Task_declContext {
		let _localctx: Task_declContext = new Task_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AionParser.RULE_task_decl);
		let _la: number;
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 261;
				this.match(AionParser.T__29);
				this.state = 262;
				this.match(AionParser.STRING);
				this.state = 263;
				this.temporal_expr();
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 264;
					this.match(AionParser.T__7);
					this.state = 265;
					this.duration();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 268;
				this.match(AionParser.T__29);
				this.state = 269;
				this.match(AionParser.STRING);
				this.state = 270;
				this.match(AionParser.T__13);
				this.state = 271;
				this.match(AionParser.T__14);
				this.state = 272;
				this.time();
				this.state = 273;
				this.match(AionParser.T__15);
				this.state = 274;
				this.time();
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__30) {
					{
					this.state = 275;
					this.match(AionParser.T__30);
					this.state = 276;
					this.strategy();
					}
				}

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
	public pomodoro_decl(): Pomodoro_declContext {
		let _localctx: Pomodoro_declContext = new Pomodoro_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AionParser.RULE_pomodoro_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(AionParser.T__31);
			this.state = 282;
			this.match(AionParser.STRING);
			this.state = 283;
			this.match(AionParser.T__11);
			this.state = 284;
			this.time();
			this.state = 285;
			this.match(AionParser.T__32);
			this.state = 286;
			this.match(AionParser.NUMBER);
			this.state = 287;
			this.match(AionParser.T__33);
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__12) {
				{
				this.state = 288;
				this.match(AionParser.T__12);
				this.state = 289;
				this.duration();
				}
			}

			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__34) {
				{
				this.state = 292;
				this.match(AionParser.T__34);
				this.state = 293;
				this.duration();
				this.state = 294;
				this.match(AionParser.T__35);
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
			this.state = 298;
			this.match(AionParser.T__36);
			this.state = 299;
			this.loop_unit();
			this.state = 300;
			this.match(AionParser.T__9);
			this.state = 301;
			this.loop_start();
			this.state = 302;
			this.match(AionParser.T__10);
			this.state = 303;
			this.loop_end();
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__37) {
				{
				this.state = 304;
				this.match(AionParser.T__37);
				this.state = 305;
				this.match(AionParser.NUMBER);
				}
			}

			this.state = 308;
			this.match(AionParser.T__20);
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.T__46 - 32)) | (1 << (AionParser.T__50 - 32)) | (1 << (AionParser.T__53 - 32)) | (1 << (AionParser.T__54 - 32)) | (1 << (AionParser.T__56 - 32)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 309;
				this.statement();
				}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 315;
			this.match(AionParser.T__21);
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
	public loop_start(): Loop_startContext {
		let _localctx: Loop_startContext = new Loop_startContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AionParser.RULE_loop_start);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this.date();
				}
				break;
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
				this.match(AionParser.IDENTIFIER);
				}
				break;
			case AionParser.T__38:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 319;
				this.match(AionParser.T__38);
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
	public loop_end(): Loop_endContext {
		let _localctx: Loop_endContext = new Loop_endContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AionParser.RULE_loop_end);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 322;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				this.match(AionParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 324;
				this.loop_start();
				this.state = 325;
				this.match(AionParser.T__39);
				this.state = 326;
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
	public loop_unit(): Loop_unitContext {
		let _localctx: Loop_unitContext = new Loop_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AionParser.RULE_loop_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (AionParser.T__40 - 41)) | (1 << (AionParser.T__41 - 41)) | (1 << (AionParser.T__42 - 41)) | (1 << (AionParser.T__43 - 41)) | (1 << (AionParser.T__44 - 41)) | (1 << (AionParser.T__45 - 41)))) !== 0))) {
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
		this.enterRule(_localctx, 36, AionParser.RULE_conditional_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(AionParser.T__46);
			this.state = 333;
			this.match(AionParser.T__47);
			this.state = 334;
			this.condition();
			this.state = 335;
			this.match(AionParser.T__48);
			this.state = 336;
			this.match(AionParser.T__20);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.T__46 - 32)) | (1 << (AionParser.T__50 - 32)) | (1 << (AionParser.T__53 - 32)) | (1 << (AionParser.T__54 - 32)) | (1 << (AionParser.T__56 - 32)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 337;
				this.statement();
				}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 343;
			this.match(AionParser.T__21);
			this.state = 360;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 344;
					this.match(AionParser.T__49);
					this.state = 345;
					this.match(AionParser.T__46);
					this.state = 346;
					this.match(AionParser.T__47);
					this.state = 347;
					this.condition();
					this.state = 348;
					this.match(AionParser.T__48);
					this.state = 349;
					this.match(AionParser.T__20);
					this.state = 353;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.T__46 - 32)) | (1 << (AionParser.T__50 - 32)) | (1 << (AionParser.T__53 - 32)) | (1 << (AionParser.T__54 - 32)) | (1 << (AionParser.T__56 - 32)))) !== 0) || _la === AionParser.IDENTIFIER) {
						{
						{
						this.state = 350;
						this.statement();
						}
						}
						this.state = 355;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 356;
					this.match(AionParser.T__21);
					}
					}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__49) {
				{
				this.state = 363;
				this.match(AionParser.T__49);
				this.state = 364;
				this.match(AionParser.T__20);
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6) | (1 << AionParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AionParser.T__31 - 32)) | (1 << (AionParser.T__36 - 32)) | (1 << (AionParser.T__46 - 32)) | (1 << (AionParser.T__50 - 32)) | (1 << (AionParser.T__53 - 32)) | (1 << (AionParser.T__54 - 32)) | (1 << (AionParser.T__56 - 32)))) !== 0) || _la === AionParser.IDENTIFIER) {
					{
					{
					this.state = 365;
					this.statement();
					}
					}
					this.state = 370;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 371;
				this.match(AionParser.T__21);
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
		this.enterRule(_localctx, 38, AionParser.RULE_filter_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(AionParser.T__50);
			this.state = 375;
			this.match(AionParser.IDENTIFIER);
			this.state = 376;
			this.match(AionParser.T__51);
			this.state = 377;
			this.condition();
			this.state = 378;
			this.match(AionParser.T__52);
			this.state = 379;
			this.match(AionParser.IDENTIFIER);
			this.state = 380;
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
		this.enterRule(_localctx, 40, AionParser.RULE_merge_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(AionParser.T__53);
			this.state = 383;
			this.identifier_list();
			this.state = 384;
			this.match(AionParser.T__52);
			this.state = 385;
			this.match(AionParser.IDENTIFIER);
			this.state = 386;
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
	public identifier_list(): Identifier_listContext {
		let _localctx: Identifier_listContext = new Identifier_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AionParser.RULE_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.match(AionParser.IDENTIFIER);
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.T__24) {
				{
				{
				this.state = 389;
				this.match(AionParser.T__24);
				this.state = 390;
				this.match(AionParser.IDENTIFIER);
				}
				}
				this.state = 395;
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
	public include_stmt(): Include_stmtContext {
		let _localctx: Include_stmtContext = new Include_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AionParser.RULE_include_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(AionParser.T__54);
			this.state = 397;
			this.match(AionParser.IDENTIFIER);
			this.state = 398;
			this.match(AionParser.T__55);
			this.state = 399;
			this.match(AionParser.IDENTIFIER);
			this.state = 400;
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
		this.enterRule(_localctx, 46, AionParser.RULE_export_stmt);
		let _la: number;
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.match(AionParser.T__56);
				this.state = 403;
				this.match(AionParser.IDENTIFIER);
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__1) {
					{
					this.state = 404;
					this.match(AionParser.T__1);
					this.state = 405;
					this.match(AionParser.STRING);
					}
				}

				this.state = 408;
				this.match(AionParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 409;
				this.match(AionParser.T__56);
				this.state = 410;
				this.match(AionParser.T__57);
				this.state = 411;
				this.match(AionParser.T__1);
				this.state = 412;
				this.match(AionParser.STRING);
				this.state = 413;
				this.match(AionParser.T__2);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.match(AionParser.T__56);
				this.state = 415;
				this.match(AionParser.T__58);
				this.state = 416;
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
		this.enterRule(_localctx, 48, AionParser.RULE_condition);
		try {
			this.state = 436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 419;
				this.match(AionParser.IDENTIFIER);
				this.state = 420;
				this.comparison_op();
				this.state = 421;
				this.value();
				}
				break;
			case AionParser.T__59:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 423;
				this.match(AionParser.T__59);
				this.state = 424;
				this.match(AionParser.T__47);
				this.state = 425;
				this.weekday();
				this.state = 426;
				this.match(AionParser.T__48);
				this.state = 427;
				this.match(AionParser.T__55);
				this.state = 428;
				this.match(AionParser.T__44);
				this.state = 429;
				this.comparison_op();
				this.state = 430;
				this.match(AionParser.NUMBER);
				}
				break;
			case AionParser.T__28:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 432;
				this.match(AionParser.T__28);
				this.state = 433;
				this.comparison_op();
				this.state = 434;
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
	public comparison_op(): Comparison_opContext {
		let _localctx: Comparison_opContext = new Comparison_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AionParser.RULE_comparison_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			_la = this._input.LA(1);
			if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (AionParser.T__60 - 61)) | (1 << (AionParser.T__61 - 61)) | (1 << (AionParser.T__62 - 61)) | (1 << (AionParser.T__63 - 61)) | (1 << (AionParser.T__64 - 61)) | (1 << (AionParser.T__65 - 61)))) !== 0))) {
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
		this.enterRule(_localctx, 52, AionParser.RULE_strategy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			_la = this._input.LA(1);
			if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (AionParser.T__66 - 67)) | (1 << (AionParser.T__67 - 67)) | (1 << (AionParser.T__68 - 67)))) !== 0))) {
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
		this.enterRule(_localctx, 54, AionParser.RULE_value_expr);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.time();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 444;
				this.duration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 445;
				this.match(AionParser.STRING);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 446;
				this.match(AionParser.NUMBER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 447;
				this.match(AionParser.IDENTIFIER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 448;
				this.function_call();
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
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AionParser.RULE_function_call);
		try {
			this.state = 463;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__59:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.match(AionParser.T__59);
				this.state = 452;
				this.match(AionParser.T__47);
				this.state = 453;
				this.weekday();
				this.state = 454;
				this.match(AionParser.T__48);
				this.state = 455;
				this.match(AionParser.T__55);
				this.state = 456;
				this.match(AionParser.T__44);
				}
				break;
			case AionParser.T__69:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 458;
				this.match(AionParser.T__69);
				this.state = 459;
				this.match(AionParser.T__47);
				this.state = 460;
				this.date();
				this.state = 461;
				this.match(AionParser.T__48);
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
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AionParser.RULE_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(AionParser.NUMBER);
			this.state = 466;
			this.match(AionParser.T__70);
			this.state = 467;
			this.match(AionParser.NUMBER);
			this.state = 468;
			this.match(AionParser.T__70);
			this.state = 469;
			this.match(AionParser.NUMBER);
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
	public date_specifier(): Date_specifierContext {
		let _localctx: Date_specifierContext = new Date_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AionParser.RULE_date_specifier);
		try {
			this.state = 473;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.date();
				}
				break;
			case AionParser.T__71:
			case AionParser.T__72:
			case AionParser.T__73:
			case AionParser.T__74:
			case AionParser.T__75:
			case AionParser.T__76:
			case AionParser.T__77:
			case AionParser.T__78:
			case AionParser.T__79:
			case AionParser.T__80:
			case AionParser.T__81:
			case AionParser.T__82:
			case AionParser.T__83:
			case AionParser.T__84:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
				this.weekday();
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
	public weekday(): WeekdayContext {
		let _localctx: WeekdayContext = new WeekdayContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AionParser.RULE_weekday);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			_la = this._input.LA(1);
			if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (AionParser.T__71 - 72)) | (1 << (AionParser.T__72 - 72)) | (1 << (AionParser.T__73 - 72)) | (1 << (AionParser.T__74 - 72)) | (1 << (AionParser.T__75 - 72)) | (1 << (AionParser.T__76 - 72)) | (1 << (AionParser.T__77 - 72)) | (1 << (AionParser.T__78 - 72)) | (1 << (AionParser.T__79 - 72)) | (1 << (AionParser.T__80 - 72)) | (1 << (AionParser.T__81 - 72)) | (1 << (AionParser.T__82 - 72)) | (1 << (AionParser.T__83 - 72)) | (1 << (AionParser.T__84 - 72)))) !== 0))) {
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
		this.enterRule(_localctx, 64, AionParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(AionParser.NUMBER);
			this.state = 478;
			this.match(AionParser.T__23);
			this.state = 479;
			this.match(AionParser.NUMBER);
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
		this.enterRule(_localctx, 66, AionParser.RULE_duration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(AionParser.NUMBER);
			this.state = 482;
			this.time_unit();
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.NUMBER) {
				{
				{
				this.state = 483;
				this.match(AionParser.NUMBER);
				this.state = 484;
				this.time_unit();
				}
				}
				this.state = 489;
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
	public time_unit(): Time_unitContext {
		let _localctx: Time_unitContext = new Time_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, AionParser.RULE_time_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			_la = this._input.LA(1);
			if (!(_la === AionParser.T__85 || _la === AionParser.T__86)) {
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AionParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			_la = this._input.LA(1);
			if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (AionParser.IDENTIFIER - 88)) | (1 << (AionParser.STRING - 88)) | (1 << (AionParser.NUMBER - 88)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03_\u01F1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x03\x02\x07\x02L\n\x02\f\x02\x0E\x02O\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03^\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x05\x07q\n\x07\x03\x07\x05\x07t\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07y\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x05\b\x80\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\x8A\n\t\x05\t\x8C\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\x95\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9B\n\n\x03\n\x03\n\x05\n\x9F\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA8\n\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\xAE\n\n\x03\n\x03\n\x05\n\xB2\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xBD\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\xC5\n\n\x03\v\x03\v\x03\v\x05\v\xCA\n\v\x03\v\x03" +
		"\v\x03\v\x05\v\xCF\n\v\x03\v\x03\v\x03\v\x05\v\xD4\n\v\x03\v\x03\v\x03" +
		"\v\x05\v\xD9\n\v\x05\v\xDB\n\v\x03\f\x03\f\x03\f\x03\f\x07\f\xE1\n\f\f" +
		"\f\x0E\f\xE4\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\xEC\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\xF2\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xF8\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\xFE\n\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\u0104\n\r\x05\r\u0106\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u010D\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0118\n\x0E\x05\x0E\u011A\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0125" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u012B\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0135\n\x10" +
		"\x03\x10\x03\x10\x07\x10\u0139\n\x10\f\x10\x0E\x10\u013C\v\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0143\n\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x05\x12\u014B\n\x12\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0155\n\x14\f\x14\x0E" +
		"\x14\u0158\v\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u0162\n\x14\f\x14\x0E\x14\u0165\v\x14\x03\x14\x03\x14" +
		"\x07\x14\u0169\n\x14\f\x14\x0E\x14\u016C\v\x14\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u0171\n\x14\f\x14\x0E\x14\u0174\v\x14\x03\x14\x05\x14\u0177\n" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\u018A\n\x17\f\x17\x0E\x17\u018D\v\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0199\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u01A4\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u01B7\n\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01C4\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u01D2\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03 \x03 \x05 \u01DC\n \x03!\x03!\x03\"\x03\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x07#\u01E8\n#\f#\x0E#\u01EB\v#\x03$\x03$\x03%\x03" +
		"%\x03%\x02\x02\x02&\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02\x02\b\x03\x02+0\x03\x02?D\x03\x02EG\x03" +
		"\x02JW\x03\x02XY\x03\x02Z\\\x02\u021C\x02M\x03\x02\x02\x02\x04]\x03\x02" +
		"\x02\x02\x06_\x03\x02\x02\x02\be\x03\x02\x02\x02\nj\x03\x02\x02\x02\f" +
		"p\x03\x02\x02\x02\x0E\x7F\x03\x02\x02\x02\x10\x8B\x03\x02\x02\x02\x12" +
		"\xC4\x03\x02\x02\x02\x14\xDA\x03\x02\x02\x02\x16\xDC\x03\x02\x02\x02\x18" +
		"\u0105\x03\x02\x02\x02\x1A\u0119\x03\x02\x02\x02\x1C\u011B\x03\x02\x02" +
		"\x02\x1E\u012C\x03\x02\x02\x02 \u0142\x03\x02\x02\x02\"\u014A\x03\x02" +
		"\x02\x02$\u014C\x03\x02\x02\x02&\u014E\x03\x02\x02\x02(\u0178\x03\x02" +
		"\x02\x02*\u0180\x03\x02\x02\x02,\u0186\x03\x02\x02\x02.\u018E\x03\x02" +
		"\x02\x020\u01A3\x03\x02\x02\x022\u01B6\x03\x02\x02\x024\u01B8\x03\x02" +
		"\x02\x026\u01BA\x03\x02\x02\x028\u01C3\x03\x02\x02\x02:\u01D1\x03\x02" +
		"\x02\x02<\u01D3\x03\x02\x02\x02>\u01DB\x03\x02\x02\x02@\u01DD\x03\x02" +
		"\x02\x02B\u01DF\x03\x02\x02\x02D\u01E3\x03\x02\x02\x02F\u01EC\x03\x02" +
		"\x02\x02H\u01EE\x03\x02\x02\x02JL\x05\x04\x03\x02KJ\x03\x02\x02\x02LO" +
		"\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NP\x03\x02\x02\x02" +
		"OM\x03\x02\x02\x02PQ\x07\x02\x02\x03Q\x03\x03\x02\x02\x02R^\x05\x06\x04" +
		"\x02S^\x05\b\x05\x02T^\x05\n\x06\x02U^\x05\x1E\x10\x02V^\x050\x19\x02" +
		"W^\x05*\x16\x02X^\x05(\x15\x02Y^\x05.\x18\x02Z^\x05&\x14\x02[^\x05\x16" +
		"\f\x02\\^\x05\f\x07\x02]R\x03\x02\x02\x02]S\x03\x02\x02\x02]T\x03\x02" +
		"\x02\x02]U\x03\x02\x02\x02]V\x03\x02\x02\x02]W\x03\x02\x02\x02]X\x03\x02" +
		"\x02\x02]Y\x03\x02\x02\x02]Z\x03\x02\x02\x02][\x03\x02\x02\x02]\\\x03" +
		"\x02\x02\x02^\x05\x03\x02\x02\x02_`\x07\x03\x02\x02`a\x07[\x02\x02ab\x07" +
		"\x04\x02\x02bc\x07Z\x02\x02cd\x07\x05\x02\x02d\x07\x03\x02\x02\x02ef\x07" +
		"Z\x02\x02fg\x07\x06\x02\x02gh\x05\x0E\b\x02hi\x07\x05\x02\x02i\t\x03\x02" +
		"\x02\x02jk\x07Z\x02\x02kl\x07\x06\x02\x02lm\x058\x1D\x02mn\x07\x05\x02" +
		"\x02n\v\x03\x02\x02\x02oq\x07\x07\x02\x02po\x03\x02\x02\x02pq\x03\x02" +
		"\x02\x02qs\x03\x02\x02\x02rt\x07\b\x02\x02sr\x03\x02\x02\x02st\x03\x02" +
		"\x02\x02tx\x03\x02\x02\x02uy\x05\x10\t\x02vy\x05\x1A\x0E\x02wy\x05\x1C" +
		"\x0F\x02xu\x03\x02\x02\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02yz\x03\x02" +
		"\x02\x02z{\x07\x05\x02\x02{\r\x03\x02\x02\x02|\x80\x05\x10\t\x02}\x80" +
		"\x05\x1A\x0E\x02~\x80\x05\x1C\x0F\x02\x7F|\x03\x02\x02\x02\x7F}\x03\x02" +
		"\x02\x02\x7F~\x03\x02\x02\x02\x80\x0F\x03\x02\x02\x02\x81\x82\x07\t\x02" +
		"\x02\x82\x83\x07[\x02\x02\x83\x8C\x05\x12\n\x02\x84\x85\x07\t\x02\x02" +
		"\x85\x86\x07[\x02\x02\x86\x89\x05\x14\v\x02\x87\x88\x07\n\x02\x02\x88" +
		"\x8A\x05D#\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8C" +
		"\x03\x02\x02\x02\x8B\x81\x03\x02\x02\x02\x8B\x84\x03\x02\x02\x02\x8C\x11" +
		"\x03\x02\x02\x02\x8D\x8E\x07\v\x02\x02\x8E\x94\x05> \x02\x8F\x90\x07\f" +
		"\x02\x02\x90\x91\x05B\"\x02\x91\x92\x07\r\x02\x02\x92\x93\x05B\"\x02\x93" +
		"\x95\x03\x02\x02\x02\x94\x8F\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95" +
		"\xC5\x03\x02\x02\x02\x96\x97\x07\v\x02\x02\x97\x9A\x05> \x02\x98\x99\x07" +
		"\x0E\x02\x02\x99\x9B\x05B\"\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02" +
		"\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9D\x07\n\x02\x02\x9D\x9F\x05D#\x02" +
		"\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xC5\x03\x02\x02\x02" +
		"\xA0\xA1\x07\x0F\x02\x02\xA1\xA7\x05@!\x02\xA2\xA3\x07\f\x02\x02\xA3\xA4" +
		"\x05B\"\x02\xA4\xA5\x07\r\x02\x02\xA5\xA6\x05B\"\x02\xA6\xA8\x03\x02\x02" +
		"\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xC5\x03\x02\x02" +
		"\x02\xA9\xAA\x07\x0F\x02\x02\xAA\xAD\x05@!\x02\xAB\xAC\x07\x0E\x02\x02" +
		"\xAC\xAE\x05B\"\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
		"\xB1\x03\x02\x02\x02\xAF\xB0\x07\n\x02\x02\xB0\xB2\x05D#\x02\xB1\xAF\x03" +
		"\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xC5\x03\x02\x02\x02\xB3\xB4\x07" +
		"\f\x02\x02\xB4\xB5\x05B\"\x02\xB5\xB6\x07\r\x02\x02\xB6\xB7\x05B\"\x02" +
		"\xB7\xC5\x03\x02\x02\x02\xB8\xB9\x07\x0E\x02\x02\xB9\xBC\x05B\"\x02\xBA" +
		"\xBB\x07\n\x02\x02\xBB\xBD\x05D#\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03" +
		"\x02\x02\x02\xBD\xC5\x03\x02\x02\x02\xBE\xBF\x07\x10\x02\x02\xBF\xC0\x07" +
		"\x11\x02\x02\xC0\xC1\x05B\"\x02\xC1\xC2\x07\x12\x02\x02\xC2\xC3\x05B\"" +
		"\x02\xC3\xC5\x03\x02\x02\x02\xC4\x8D\x03\x02\x02\x02\xC4\x96\x03\x02\x02" +
		"\x02\xC4\xA0\x03\x02\x02\x02\xC4\xA9\x03\x02\x02\x02\xC4\xB3\x03\x02\x02" +
		"\x02\xC4\xB8\x03\x02\x02\x02\xC4\xBE\x03\x02\x02\x02\xC5\x13\x03\x02\x02" +
		"\x02\xC6\xC9\x07\x13\x02\x02\xC7\xC8\x07\x0E\x02\x02\xC8\xCA\x05B\"\x02" +
		"\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xDB\x03\x02\x02\x02" +
		"\xCB\xCE\x07\x14\x02\x02\xCC\xCD\x07\x0E\x02\x02\xCD\xCF\x05B\"\x02\xCE" +
		"\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xDB\x03\x02\x02\x02\xD0" +
		"\xD3\x07\x15\x02\x02\xD1\xD2\x07\x0E\x02\x02\xD2\xD4\x05B\"\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xDB\x03\x02\x02\x02\xD5\xD8" +
		"\x07\x16\x02\x02\xD6\xD7\x07\x0E\x02\x02\xD7\xD9\x05B\"\x02\xD8\xD6\x03" +
		"\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xC6\x03" +
		"\x02\x02\x02\xDA\xCB\x03\x02\x02\x02\xDA\xD0\x03\x02\x02\x02\xDA\xD5\x03" +
		"\x02\x02\x02\xDB\x15\x03\x02\x02\x02\xDC\xDD\x07\t\x02\x02\xDD\xDE\x07" +
		"Z\x02\x02\xDE\xE2\x07\x17\x02\x02\xDF\xE1\x05\x18\r\x02\xE0\xDF\x03\x02" +
		"\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02" +
		"\x02\x02\xE3\xE5\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\x07\x18" +
		"\x02\x02\xE6\x17\x03\x02\x02\x02\xE7\xE8\x07\x19\x02\x02\xE8\xE9\x07\x1A" +
		"\x02\x02\xE9\xEB\x07[\x02\x02\xEA\xEC\x07\x1B\x02\x02\xEB\xEA\x03\x02" +
		"\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\u0106\x03\x02\x02\x02\xED\xEE\x07" +
		"\x1C\x02\x02\xEE\xEF\x07\x1A\x02\x02\xEF\xF1\x05B\"\x02\xF0\xF2\x07\x1B" +
		"\x02\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\u0106\x03" +
		"\x02\x02\x02\xF3\xF4\x07\x1D\x02\x02\xF4\xF5\x07\x1A\x02\x02\xF5\xF7\x05" +
		"D#\x02\xF6\xF8\x07\x1B\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8\u0106\x03\x02\x02\x02\xF9\xFA\x07\x1E\x02\x02\xFA\xFB\x07" +
		"\x1A\x02\x02\xFB\xFD\x07[\x02\x02\xFC\xFE\x07\x1B\x02\x02\xFD\xFC\x03" +
		"\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0106\x03\x02\x02\x02\xFF\u0100" +
		"\x07\x1F\x02\x02\u0100\u0101\x07\x1A\x02\x02\u0101\u0103\x07[\x02\x02" +
		"\u0102\u0104\x07\x1B\x02\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03" +
		"\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\xE7\x03\x02\x02\x02\u0105" +
		"\xED\x03\x02\x02\x02\u0105\xF3\x03\x02\x02\x02\u0105\xF9\x03\x02\x02\x02" +
		"\u0105\xFF\x03\x02\x02\x02\u0106\x19\x03\x02\x02\x02\u0107\u0108\x07 " +
		"\x02\x02\u0108\u0109\x07[\x02\x02\u0109\u010C\x05\x14\v\x02\u010A\u010B" +
		"\x07\n\x02\x02\u010B\u010D\x05D#\x02\u010C\u010A\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u011A\x03\x02\x02\x02\u010E\u010F\x07 \x02" +
		"\x02\u010F\u0110\x07[\x02\x02\u0110\u0111\x07\x10\x02\x02\u0111\u0112" +
		"\x07\x11\x02\x02\u0112\u0113\x05B\"\x02\u0113\u0114\x07\x12\x02\x02\u0114" +
		"\u0117\x05B\"\x02\u0115\u0116\x07!\x02\x02\u0116\u0118\x056\x1C\x02\u0117" +
		"\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02" +
		"\x02\x02\u0119\u0107\x03\x02\x02\x02\u0119\u010E\x03\x02\x02\x02\u011A" +
		"\x1B\x03\x02\x02\x02\u011B\u011C\x07\"\x02\x02\u011C\u011D\x07[\x02\x02" +
		"\u011D\u011E\x07\x0E\x02\x02\u011E\u011F\x05B\"\x02\u011F\u0120\x07#\x02" +
		"\x02\u0120\u0121\x07\\\x02\x02\u0121\u0124\x07$\x02\x02\u0122\u0123\x07" +
		"\x0F\x02\x02\u0123\u0125\x05D#\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125" +
		"\x03\x02\x02\x02\u0125\u012A\x03\x02\x02\x02\u0126\u0127\x07%\x02\x02" +
		"\u0127\u0128\x05D#\x02\u0128\u0129\x07&\x02\x02\u0129\u012B\x03\x02\x02" +
		"\x02\u012A\u0126\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\x1D" +
		"\x03\x02\x02\x02\u012C\u012D\x07\'\x02\x02\u012D\u012E\x05$\x13\x02\u012E" +
		"\u012F\x07\f\x02\x02\u012F\u0130\x05 \x11\x02\u0130\u0131\x07\r\x02\x02" +
		"\u0131\u0134\x05\"\x12\x02\u0132\u0133\x07(\x02\x02\u0133\u0135\x07\\" +
		"\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u013A\x07\x17\x02\x02\u0137\u0139\x05\x04" +
		"\x03\x02\u0138\u0137\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A" +
		"\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02" +
		"\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u013E\x07\x18\x02\x02\u013E" +
		"\x1F\x03\x02\x02\x02\u013F\u0143\x05<\x1F\x02\u0140\u0143\x07Z\x02\x02" +
		"\u0141\u0143\x07)\x02\x02\u0142\u013F\x03\x02\x02\x02\u0142\u0140\x03" +
		"\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143!\x03\x02\x02\x02\u0144" +
		"\u014B\x05<\x1F\x02\u0145\u014B\x07Z\x02\x02\u0146\u0147\x05 \x11\x02" +
		"\u0147\u0148\x07*\x02\x02\u0148\u0149\x07\\\x02\x02\u0149\u014B\x03\x02" +
		"\x02\x02\u014A\u0144\x03\x02\x02\x02\u014A\u0145\x03\x02\x02\x02\u014A" +
		"\u0146\x03\x02\x02\x02\u014B#\x03\x02\x02\x02\u014C\u014D\t\x02\x02\x02" +
		"\u014D%\x03\x02\x02\x02\u014E\u014F\x071\x02\x02\u014F\u0150\x072\x02" +
		"\x02\u0150\u0151\x052\x1A\x02\u0151\u0152\x073\x02\x02\u0152\u0156\x07" +
		"\x17\x02\x02\u0153\u0155\x05\x04\x03\x02\u0154\u0153\x03\x02\x02\x02\u0155" +
		"\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02" +
		"\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159" +
		"\u016A\x07\x18\x02\x02\u015A\u015B\x074\x02\x02\u015B\u015C\x071\x02\x02" +
		"\u015C\u015D\x072\x02\x02\u015D\u015E\x052\x1A\x02\u015E\u015F\x073\x02" +
		"\x02\u015F\u0163\x07\x17\x02\x02\u0160\u0162\x05\x04\x03\x02\u0161\u0160" +
		"\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02" +
		"\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165\u0163\x03" +
		"\x02\x02\x02\u0166\u0167\x07\x18\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168" +
		"\u015A\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02" +
		"\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u0176\x03\x02\x02\x02\u016C" +
		"\u016A\x03\x02\x02\x02\u016D\u016E\x074\x02\x02\u016E\u0172\x07\x17\x02" +
		"\x02\u016F\u0171\x05\x04\x03\x02\u0170\u016F\x03\x02\x02\x02\u0171\u0174" +
		"\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02" +
		"\u0173\u0175\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0177\x07" +
		"\x18\x02\x02\u0176\u016D\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
		"\'\x03\x02\x02\x02\u0178\u0179\x075\x02\x02\u0179\u017A\x07Z\x02\x02\u017A" +
		"\u017B\x076\x02\x02\u017B\u017C\x052\x1A\x02\u017C\u017D\x077\x02\x02" +
		"\u017D\u017E\x07Z\x02\x02\u017E\u017F\x07\x05\x02\x02\u017F)\x03\x02\x02" +
		"\x02\u0180\u0181\x078\x02\x02\u0181\u0182\x05,\x17\x02\u0182\u0183\x07" +
		"7\x02\x02\u0183\u0184\x07Z\x02\x02\u0184\u0185\x07\x05\x02\x02\u0185+" +
		"\x03\x02\x02\x02\u0186\u018B\x07Z\x02\x02\u0187\u0188\x07\x1B\x02\x02" +
		"\u0188\u018A\x07Z\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018D\x03" +
		"\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
		"-\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u018F\x079\x02\x02" +
		"\u018F\u0190\x07Z\x02\x02\u0190\u0191\x07:\x02\x02\u0191\u0192\x07Z\x02" +
		"\x02\u0192\u0193\x07\x05\x02\x02\u0193/\x03\x02\x02\x02\u0194\u0195\x07" +
		";\x02\x02\u0195\u0198\x07Z\x02\x02\u0196\u0197\x07\x04\x02\x02\u0197\u0199" +
		"\x07[\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02" +
		"\u0199\u019A\x03\x02\x02\x02\u019A\u01A4\x07\x05\x02\x02\u019B\u019C\x07" +
		";\x02\x02\u019C\u019D\x07<\x02\x02\u019D\u019E\x07\x04\x02\x02\u019E\u019F" +
		"\x07[\x02\x02\u019F\u01A4\x07\x05\x02\x02\u01A0\u01A1\x07;\x02\x02\u01A1" +
		"\u01A2\x07=\x02\x02\u01A2\u01A4\x07\x05\x02\x02\u01A3\u0194\x03\x02\x02" +
		"\x02\u01A3\u019B\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A41\x03" +
		"\x02\x02\x02\u01A5\u01A6\x07Z\x02\x02\u01A6\u01A7\x054\x1B\x02\u01A7\u01A8" +
		"\x05H%\x02\u01A8\u01B7\x03\x02\x02\x02\u01A9\u01AA\x07>\x02\x02\u01AA" +
		"\u01AB\x072\x02\x02\u01AB\u01AC\x05@!\x02\u01AC\u01AD\x073\x02\x02\u01AD" +
		"\u01AE\x07:\x02\x02\u01AE\u01AF\x07/\x02\x02\u01AF\u01B0\x054\x1B\x02" +
		"\u01B0\u01B1\x07\\\x02\x02\u01B1\u01B7\x03\x02\x02\x02\u01B2\u01B3\x07" +
		"\x1F\x02\x02\u01B3\u01B4\x054\x1B\x02\u01B4\u01B5\x07[\x02\x02\u01B5\u01B7" +
		"\x03\x02\x02\x02\u01B6\u01A5\x03\x02\x02\x02\u01B6\u01A9\x03\x02\x02\x02" +
		"\u01B6\u01B2\x03\x02\x02\x02\u01B73\x03\x02\x02\x02\u01B8\u01B9\t\x03" +
		"\x02\x02\u01B95\x03\x02\x02\x02\u01BA\u01BB\t\x04\x02\x02\u01BB7\x03\x02" +
		"\x02\x02\u01BC\u01C4\x05<\x1F\x02\u01BD\u01C4\x05B\"\x02\u01BE\u01C4\x05" +
		"D#\x02\u01BF\u01C4\x07[\x02\x02\u01C0\u01C4\x07\\\x02\x02\u01C1\u01C4" +
		"\x07Z\x02\x02\u01C2\u01C4\x05:\x1E\x02\u01C3\u01BC\x03\x02\x02\x02\u01C3" +
		"\u01BD\x03\x02\x02\x02\u01C3\u01BE\x03\x02\x02\x02\u01C3\u01BF\x03\x02" +
		"\x02\x02\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3" +
		"\u01C2\x03\x02\x02\x02\u01C49\x03\x02\x02\x02\u01C5\u01C6\x07>\x02\x02" +
		"\u01C6\u01C7\x072\x02\x02\u01C7\u01C8\x05@!\x02\u01C8\u01C9\x073\x02\x02" +
		"\u01C9\u01CA\x07:\x02\x02\u01CA\u01CB\x07/\x02\x02\u01CB\u01D2\x03\x02" +
		"\x02\x02\u01CC\u01CD\x07H\x02\x02\u01CD\u01CE\x072\x02\x02\u01CE\u01CF" +
		"\x05<\x1F\x02\u01CF\u01D0\x073\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1" +
		"\u01C5\x03\x02\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D2;\x03\x02\x02" +
		"\x02\u01D3\u01D4\x07\\\x02\x02\u01D4\u01D5\x07I\x02\x02\u01D5\u01D6\x07" +
		"\\\x02\x02\u01D6\u01D7\x07I\x02\x02\u01D7\u01D8\x07\\\x02\x02\u01D8=\x03" +
		"\x02\x02\x02\u01D9\u01DC\x05<\x1F\x02\u01DA\u01DC\x05@!\x02\u01DB\u01D9" +
		"\x03\x02\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC?\x03\x02\x02\x02\u01DD" +
		"\u01DE\t\x05\x02\x02\u01DEA\x03\x02\x02\x02\u01DF\u01E0\x07\\\x02\x02" +
		"\u01E0\u01E1\x07\x1A\x02\x02\u01E1\u01E2\x07\\\x02\x02\u01E2C\x03\x02" +
		"\x02\x02\u01E3\u01E4\x07\\\x02\x02\u01E4\u01E9\x05F$\x02\u01E5\u01E6\x07" +
		"\\\x02\x02\u01E6\u01E8\x05F$\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01EB" +
		"\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02" +
		"\u01EAE\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC\u01ED\t\x06" +
		"\x02\x02\u01EDG\x03\x02\x02\x02\u01EE\u01EF\t\x07\x02\x02\u01EFI\x03\x02" +
		"\x02\x024M]psx\x7F\x89\x8B\x94\x9A\x9E\xA7\xAD\xB1\xBC\xC4\xC9\xCE\xD3" +
		"\xD8\xDA\xE2\xEB\xF1\xF7\xFD\u0103\u0105\u010C\u0117\u0119\u0124\u012A" +
		"\u0134\u013A\u0142\u014A\u0156\u0163\u016A\u0172\u0176\u018B\u0198\u01A3" +
		"\u01B6\u01C3\u01D1\u01DB\u01E9";
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
	public default_declaration(): Default_declarationContext | undefined {
		return this.tryGetRuleContext(0, Default_declarationContext);
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
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public event_timing(): Event_timingContext | undefined {
		return this.tryGetRuleContext(0, Event_timingContext);
	}
	public temporal_expr(): Temporal_exprContext | undefined {
		return this.tryGetRuleContext(0, Temporal_exprContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
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
	public date_specifier(): Date_specifierContext | undefined {
		return this.tryGetRuleContext(0, Date_specifierContext);
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
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
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


export class Temporal_exprContext extends ParserRuleContext {
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_temporal_expr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTemporal_expr) {
			listener.enterTemporal_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTemporal_expr) {
			listener.exitTemporal_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTemporal_expr) {
			return visitor.visitTemporal_expr(this);
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


export class Task_declContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public temporal_expr(): Temporal_exprContext | undefined {
		return this.tryGetRuleContext(0, Temporal_exprContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
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


export class Pomodoro_declContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public time(): TimeContext {
		return this.getRuleContext(0, TimeContext);
	}
	public NUMBER(): TerminalNode { return this.getToken(AionParser.NUMBER, 0); }
	public duration(): DurationContext[];
	public duration(i: number): DurationContext;
	public duration(i?: number): DurationContext | DurationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DurationContext);
		} else {
			return this.getRuleContext(i, DurationContext);
		}
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
	public loop_start(): Loop_startContext {
		return this.getRuleContext(0, Loop_startContext);
	}
	public loop_end(): Loop_endContext {
		return this.getRuleContext(0, Loop_endContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AionParser.NUMBER, 0); }
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


export class Loop_startContext extends ParserRuleContext {
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_loop_start; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterLoop_start) {
			listener.enterLoop_start(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitLoop_start) {
			listener.exitLoop_start(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitLoop_start) {
			return visitor.visitLoop_start(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Loop_endContext extends ParserRuleContext {
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
	public loop_start(): Loop_startContext | undefined {
		return this.tryGetRuleContext(0, Loop_startContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AionParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_loop_end; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterLoop_end) {
			listener.enterLoop_end(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitLoop_end) {
			listener.exitLoop_end(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitLoop_end) {
			return visitor.visitLoop_end(this);
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
	public identifier_list(): Identifier_listContext {
		return this.getRuleContext(0, Identifier_listContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(AionParser.IDENTIFIER, 0); }
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


export class Identifier_listContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return AionParser.RULE_identifier_list; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterIdentifier_list) {
			listener.enterIdentifier_list(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitIdentifier_list) {
			listener.exitIdentifier_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitIdentifier_list) {
			return visitor.visitIdentifier_list(this);
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
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
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
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


export class Function_callContext extends ParserRuleContext {
	public weekday(): WeekdayContext | undefined {
		return this.tryGetRuleContext(0, WeekdayContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_function_call; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.NUMBER);
		} else {
			return this.getToken(AionParser.NUMBER, i);
		}
	}
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


export class Date_specifierContext extends ParserRuleContext {
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public weekday(): WeekdayContext | undefined {
		return this.tryGetRuleContext(0, WeekdayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_date_specifier; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterDate_specifier) {
			listener.enterDate_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitDate_specifier) {
			listener.exitDate_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitDate_specifier) {
			return visitor.visitDate_specifier(this);
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.NUMBER);
		} else {
			return this.getToken(AionParser.NUMBER, i);
		}
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
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AionParser.NUMBER);
		} else {
			return this.getToken(AionParser.NUMBER, i);
		}
	}
	public time_unit(): Time_unitContext[];
	public time_unit(i: number): Time_unitContext;
	public time_unit(i?: number): Time_unitContext | Time_unitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Time_unitContext);
		} else {
			return this.getRuleContext(i, Time_unitContext);
		}
	}
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


export class Time_unitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_time_unit; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTime_unit) {
			listener.enterTime_unit(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTime_unit) {
			listener.exitTime_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTime_unit) {
			return visitor.visitTime_unit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AionParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AionParser.NUMBER, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AionParser.IDENTIFIER, 0); }
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


