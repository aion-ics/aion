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
	public static readonly IDENTIFIER = 87;
	public static readonly STRING = 88;
	public static readonly NUMBER = 89;
	public static readonly WS = 90;
	public static readonly COMMENT = 91;
	public static readonly MONTH_NAME = 92;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_import_stmt = 2;
	public static readonly RULE_assignment_stmt = 3;
	public static readonly RULE_value_assignment_stmt = 4;
	public static readonly RULE_default_declaration = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_event_decl = 7;
	public static readonly RULE_recurrence_expr = 8;
	public static readonly RULE_timing_expr = 9;
	public static readonly RULE_structured_event_stmt = 10;
	public static readonly RULE_structured_event_field = 11;
	public static readonly RULE_task_decl = 12;
	public static readonly RULE_task_time_spec = 13;
	public static readonly RULE_pomodoro_decl = 14;
	public static readonly RULE_loop_stmt = 15;
	public static readonly RULE_loop_start = 16;
	public static readonly RULE_loop_end = 17;
	public static readonly RULE_loop_unit = 18;
	public static readonly RULE_conditional_stmt = 19;
	public static readonly RULE_filter_stmt = 20;
	public static readonly RULE_merge_stmt = 21;
	public static readonly RULE_identifier_list = 22;
	public static readonly RULE_include_stmt = 23;
	public static readonly RULE_export_stmt = 24;
	public static readonly RULE_condition = 25;
	public static readonly RULE_comparison_op = 26;
	public static readonly RULE_strategy = 27;
	public static readonly RULE_value_expr = 28;
	public static readonly RULE_function_call = 29;
	public static readonly RULE_date = 30;
	public static readonly RULE_date_specifier = 31;
	public static readonly RULE_weekday_list = 32;
	public static readonly RULE_weekday = 33;
	public static readonly RULE_time = 34;
	public static readonly RULE_time_at = 35;
	public static readonly RULE_time_range = 36;
	public static readonly RULE_duration = 37;
	public static readonly RULE_time_unit = 38;
	public static readonly RULE_value = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "import_stmt", "assignment_stmt", "value_assignment_stmt", 
		"default_declaration", "declaration", "event_decl", "recurrence_expr", 
		"timing_expr", "structured_event_stmt", "structured_event_field", "task_decl", 
		"task_time_spec", "pomodoro_decl", "loop_stmt", "loop_start", "loop_end", 
		"loop_unit", "conditional_stmt", "filter_stmt", "merge_stmt", "identifier_list", 
		"include_stmt", "export_stmt", "condition", "comparison_op", "strategy", 
		"value_expr", "function_call", "date", "date_specifier", "weekday_list", 
		"weekday", "time", "time_at", "time_range", "duration", "time_unit", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'as'", "';'", "'='", "'new'", "'event'", "'for'", 
		"'daily'", "'at'", "'weekly'", "'on'", "'monthly'", "'yearly'", "'every'", 
		"'from'", "'to'", "'find'", "'between'", "'and'", "'{'", "'}'", "'name'", 
		"':'", "','", "'start'", "'duration'", "'location'", "'category'", "'task'", 
		"'using'", "'pomodoro'", "'repeat'", "'times'", "'with'", "'pause'", "'each'", 
		"'step'", "'today'", "'+'", "'day'", "'days'", "'week'", "'weeks'", "'month'", 
		"'months'", "'if'", "'('", "')'", "'else'", "'filter'", "'where'", "'into'", 
		"'merge'", "'include'", "'in'", "'export'", "'default'", "'all'", "'count'", 
		"'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'random'", "'earliest'", 
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
		undefined, undefined, undefined, "IDENTIFIER", "STRING", "NUMBER", "WS", 
		"COMMENT", "MONTH_NAME",
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
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AionParser.T__35 - 36)) | (1 << (AionParser.T__45 - 36)) | (1 << (AionParser.T__49 - 36)) | (1 << (AionParser.T__52 - 36)) | (1 << (AionParser.T__53 - 36)) | (1 << (AionParser.T__55 - 36)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 80;
				this.statement();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
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
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.import_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.assignment_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 90;
				this.value_assignment_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 91;
				this.loop_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 92;
				this.export_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 93;
				this.merge_stmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 94;
				this.filter_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 95;
				this.include_stmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 96;
				this.conditional_stmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 97;
				this.structured_event_stmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 98;
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
			this.state = 101;
			this.match(AionParser.T__0);
			this.state = 102;
			this.match(AionParser.STRING);
			this.state = 103;
			this.match(AionParser.T__1);
			this.state = 104;
			this.match(AionParser.IDENTIFIER);
			this.state = 105;
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
			this.state = 107;
			this.match(AionParser.IDENTIFIER);
			this.state = 108;
			this.match(AionParser.T__3);
			this.state = 109;
			this.declaration();
			this.state = 110;
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
			this.state = 112;
			this.match(AionParser.IDENTIFIER);
			this.state = 113;
			this.match(AionParser.T__3);
			this.state = 114;
			this.value_expr();
			this.state = 115;
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
			this.state = 117;
			this.match(AionParser.T__4);
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__5:
				{
				this.state = 118;
				this.event_decl();
				}
				break;
			case AionParser.T__28:
				{
				this.state = 119;
				this.task_decl();
				}
				break;
			case AionParser.T__30:
				{
				this.state = 120;
				this.pomodoro_decl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 123;
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
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.event_decl();
				}
				break;
			case AionParser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.task_decl();
				}
				break;
			case AionParser.T__30:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 127;
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
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this.match(AionParser.T__5);
				this.state = 131;
				this.match(AionParser.STRING);
				this.state = 132;
				this.recurrence_expr();
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__6) {
					{
					this.state = 133;
					this.match(AionParser.T__6);
					this.state = 134;
					this.duration();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.match(AionParser.T__5);
				this.state = 138;
				this.match(AionParser.STRING);
				this.state = 139;
				this.timing_expr();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__6) {
					{
					this.state = 140;
					this.match(AionParser.T__6);
					this.state = 141;
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
	public recurrence_expr(): Recurrence_exprContext {
		let _localctx: Recurrence_exprContext = new Recurrence_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AionParser.RULE_recurrence_expr);
		let _la: number;
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.match(AionParser.T__7);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__8) {
					{
					this.state = 147;
					this.match(AionParser.T__8);
					this.state = 148;
					this.time();
					}
				}

				}
				break;
			case AionParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 151;
				this.match(AionParser.T__9);
				this.state = 152;
				this.match(AionParser.T__10);
				this.state = 153;
				this.weekday_list();
				this.state = 156;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AionParser.T__14:
					{
					this.state = 154;
					this.time_range();
					}
					break;
				case AionParser.T__8:
					{
					this.state = 155;
					this.time_at();
					}
					break;
				case AionParser.T__2:
				case AionParser.T__6:
					break;
				default:
					break;
				}
				}
				break;
			case AionParser.T__11:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.match(AionParser.T__11);
				this.state = 159;
				this.match(AionParser.T__10);
				this.state = 160;
				this.match(AionParser.NUMBER);
				this.state = 163;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AionParser.T__14:
					{
					this.state = 161;
					this.time_range();
					}
					break;
				case AionParser.T__8:
					{
					this.state = 162;
					this.time_at();
					}
					break;
				case AionParser.T__2:
				case AionParser.T__6:
					break;
				default:
					break;
				}
				}
				break;
			case AionParser.T__12:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 165;
				this.match(AionParser.T__12);
				this.state = 166;
				this.match(AionParser.T__10);
				this.state = 167;
				this.date();
				this.state = 170;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AionParser.T__14:
					{
					this.state = 168;
					this.time_range();
					}
					break;
				case AionParser.T__8:
					{
					this.state = 169;
					this.time_at();
					}
					break;
				case AionParser.T__2:
				case AionParser.T__6:
					break;
				default:
					break;
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
	public timing_expr(): Timing_exprContext {
		let _localctx: Timing_exprContext = new Timing_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AionParser.RULE_timing_expr);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 174;
				this.match(AionParser.T__10);
				this.state = 175;
				this.date();
				this.state = 178;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AionParser.T__14:
					{
					this.state = 176;
					this.time_range();
					}
					break;
				case AionParser.T__8:
					{
					this.state = 177;
					this.time_at();
					}
					break;
				case AionParser.T__2:
				case AionParser.T__6:
					break;
				default:
					break;
				}
				}
				break;
			case AionParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.match(AionParser.T__13);
				this.state = 181;
				this.weekday_list();
				this.state = 184;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AionParser.T__14:
					{
					this.state = 182;
					this.time_range();
					}
					break;
				case AionParser.T__8:
					{
					this.state = 183;
					this.time_at();
					}
					break;
				case AionParser.T__2:
				case AionParser.T__6:
					break;
				default:
					break;
				}
				}
				break;
			case AionParser.T__14:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 186;
				this.match(AionParser.T__14);
				this.state = 187;
				this.time();
				this.state = 188;
				this.match(AionParser.T__15);
				this.state = 189;
				this.time();
				}
				break;
			case AionParser.T__8:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 191;
				this.match(AionParser.T__8);
				this.state = 192;
				this.time();
				}
				break;
			case AionParser.T__16:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 193;
				this.match(AionParser.T__16);
				this.state = 194;
				this.match(AionParser.T__17);
				this.state = 195;
				this.time();
				this.state = 196;
				this.match(AionParser.T__18);
				this.state = 197;
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
		this.enterRule(_localctx, 20, AionParser.RULE_structured_event_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(AionParser.T__5);
			this.state = 202;
			this.match(AionParser.IDENTIFIER);
			this.state = 203;
			this.match(AionParser.T__19);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__21) | (1 << AionParser.T__24) | (1 << AionParser.T__25) | (1 << AionParser.T__26) | (1 << AionParser.T__27))) !== 0)) {
				{
				{
				this.state = 204;
				this.structured_event_field();
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this.match(AionParser.T__20);
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
			this.state = 242;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this.match(AionParser.T__21);
				this.state = 213;
				this.match(AionParser.T__22);
				this.state = 214;
				this.match(AionParser.STRING);
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__23) {
					{
					this.state = 215;
					this.match(AionParser.T__23);
					}
				}

				}
				break;
			case AionParser.T__24:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 218;
				this.match(AionParser.T__24);
				this.state = 219;
				this.match(AionParser.T__22);
				this.state = 220;
				this.time();
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__23) {
					{
					this.state = 221;
					this.match(AionParser.T__23);
					}
				}

				}
				break;
			case AionParser.T__25:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.match(AionParser.T__25);
				this.state = 225;
				this.match(AionParser.T__22);
				this.state = 226;
				this.duration();
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__23) {
					{
					this.state = 227;
					this.match(AionParser.T__23);
					}
				}

				}
				break;
			case AionParser.T__26:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 230;
				this.match(AionParser.T__26);
				this.state = 231;
				this.match(AionParser.T__22);
				this.state = 232;
				this.match(AionParser.STRING);
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__23) {
					{
					this.state = 233;
					this.match(AionParser.T__23);
					}
				}

				}
				break;
			case AionParser.T__27:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 236;
				this.match(AionParser.T__27);
				this.state = 237;
				this.match(AionParser.T__22);
				this.state = 238;
				this.match(AionParser.STRING);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__23) {
					{
					this.state = 239;
					this.match(AionParser.T__23);
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(AionParser.T__28);
			this.state = 245;
			this.match(AionParser.STRING);
			this.state = 246;
			this.match(AionParser.T__10);
			this.state = 247;
			this.date();
			this.state = 248;
			this.task_time_spec();
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
	public task_time_spec(): Task_time_specContext {
		let _localctx: Task_time_specContext = new Task_time_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AionParser.RULE_task_time_spec);
		let _la: number;
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.match(AionParser.T__8);
				this.state = 251;
				this.time();
				}
				break;
			case AionParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this.match(AionParser.T__16);
				this.state = 253;
				this.match(AionParser.T__17);
				this.state = 254;
				this.time();
				this.state = 255;
				this.match(AionParser.T__18);
				this.state = 256;
				this.time();
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__29) {
					{
					this.state = 257;
					this.match(AionParser.T__29);
					this.state = 258;
					this.strategy();
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
	public pomodoro_decl(): Pomodoro_declContext {
		let _localctx: Pomodoro_declContext = new Pomodoro_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AionParser.RULE_pomodoro_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(AionParser.T__30);
			this.state = 264;
			this.match(AionParser.STRING);
			this.state = 265;
			this.match(AionParser.T__10);
			this.state = 266;
			this.date();
			this.state = 267;
			this.match(AionParser.T__8);
			this.state = 268;
			this.time();
			this.state = 269;
			this.match(AionParser.T__31);
			this.state = 270;
			this.match(AionParser.NUMBER);
			this.state = 271;
			this.match(AionParser.T__32);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__13) {
				{
				this.state = 272;
				this.match(AionParser.T__13);
				this.state = 273;
				this.duration();
				}
			}

			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__33) {
				{
				this.state = 276;
				this.match(AionParser.T__33);
				this.state = 277;
				this.duration();
				this.state = 278;
				this.match(AionParser.T__34);
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
			this.state = 282;
			this.match(AionParser.T__35);
			this.state = 283;
			this.loop_unit();
			this.state = 284;
			this.match(AionParser.T__14);
			this.state = 285;
			this.loop_start();
			this.state = 286;
			this.match(AionParser.T__15);
			this.state = 287;
			this.loop_end();
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__36) {
				{
				this.state = 288;
				this.match(AionParser.T__36);
				this.state = 289;
				this.match(AionParser.NUMBER);
				}
			}

			this.state = 292;
			this.match(AionParser.T__19);
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AionParser.T__35 - 36)) | (1 << (AionParser.T__45 - 36)) | (1 << (AionParser.T__49 - 36)) | (1 << (AionParser.T__52 - 36)) | (1 << (AionParser.T__53 - 36)) | (1 << (AionParser.T__55 - 36)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 293;
				this.statement();
				}
				}
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 299;
			this.match(AionParser.T__20);
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
		this.enterRule(_localctx, 32, AionParser.RULE_loop_start);
		try {
			this.state = 304;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 301;
				this.date();
				}
				break;
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 302;
				this.match(AionParser.IDENTIFIER);
				}
				break;
			case AionParser.T__37:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 303;
				this.match(AionParser.T__37);
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
		this.enterRule(_localctx, 34, AionParser.RULE_loop_end);
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 306;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 307;
				this.match(AionParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 308;
				this.loop_start();
				this.state = 309;
				this.match(AionParser.T__38);
				this.state = 310;
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
		this.enterRule(_localctx, 36, AionParser.RULE_loop_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (AionParser.T__39 - 40)) | (1 << (AionParser.T__40 - 40)) | (1 << (AionParser.T__41 - 40)) | (1 << (AionParser.T__42 - 40)) | (1 << (AionParser.T__43 - 40)) | (1 << (AionParser.T__44 - 40)))) !== 0))) {
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
		this.enterRule(_localctx, 38, AionParser.RULE_conditional_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(AionParser.T__45);
			this.state = 317;
			this.match(AionParser.T__46);
			this.state = 318;
			this.condition();
			this.state = 319;
			this.match(AionParser.T__47);
			this.state = 320;
			this.match(AionParser.T__19);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AionParser.T__35 - 36)) | (1 << (AionParser.T__45 - 36)) | (1 << (AionParser.T__49 - 36)) | (1 << (AionParser.T__52 - 36)) | (1 << (AionParser.T__53 - 36)) | (1 << (AionParser.T__55 - 36)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 321;
				this.statement();
				}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 327;
			this.match(AionParser.T__20);
			this.state = 344;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 328;
					this.match(AionParser.T__48);
					this.state = 329;
					this.match(AionParser.T__45);
					this.state = 330;
					this.match(AionParser.T__46);
					this.state = 331;
					this.condition();
					this.state = 332;
					this.match(AionParser.T__47);
					this.state = 333;
					this.match(AionParser.T__19);
					this.state = 337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AionParser.T__35 - 36)) | (1 << (AionParser.T__45 - 36)) | (1 << (AionParser.T__49 - 36)) | (1 << (AionParser.T__52 - 36)) | (1 << (AionParser.T__53 - 36)) | (1 << (AionParser.T__55 - 36)))) !== 0) || _la === AionParser.IDENTIFIER) {
						{
						{
						this.state = 334;
						this.statement();
						}
						}
						this.state = 339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 340;
					this.match(AionParser.T__20);
					}
					}
				}
				this.state = 346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__48) {
				{
				this.state = 347;
				this.match(AionParser.T__48);
				this.state = 348;
				this.match(AionParser.T__19);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (AionParser.T__35 - 36)) | (1 << (AionParser.T__45 - 36)) | (1 << (AionParser.T__49 - 36)) | (1 << (AionParser.T__52 - 36)) | (1 << (AionParser.T__53 - 36)) | (1 << (AionParser.T__55 - 36)))) !== 0) || _la === AionParser.IDENTIFIER) {
					{
					{
					this.state = 349;
					this.statement();
					}
					}
					this.state = 354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 355;
				this.match(AionParser.T__20);
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
		this.enterRule(_localctx, 40, AionParser.RULE_filter_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(AionParser.T__49);
			this.state = 359;
			this.match(AionParser.IDENTIFIER);
			this.state = 360;
			this.match(AionParser.T__50);
			this.state = 361;
			this.condition();
			this.state = 362;
			this.match(AionParser.T__51);
			this.state = 363;
			this.match(AionParser.IDENTIFIER);
			this.state = 364;
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
		this.enterRule(_localctx, 42, AionParser.RULE_merge_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(AionParser.T__52);
			this.state = 367;
			this.identifier_list();
			this.state = 368;
			this.match(AionParser.T__51);
			this.state = 369;
			this.match(AionParser.IDENTIFIER);
			this.state = 370;
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
		this.enterRule(_localctx, 44, AionParser.RULE_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.match(AionParser.IDENTIFIER);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.T__23) {
				{
				{
				this.state = 373;
				this.match(AionParser.T__23);
				this.state = 374;
				this.match(AionParser.IDENTIFIER);
				}
				}
				this.state = 379;
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
		this.enterRule(_localctx, 46, AionParser.RULE_include_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(AionParser.T__53);
			this.state = 381;
			this.match(AionParser.IDENTIFIER);
			this.state = 382;
			this.match(AionParser.T__54);
			this.state = 383;
			this.match(AionParser.IDENTIFIER);
			this.state = 384;
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
		this.enterRule(_localctx, 48, AionParser.RULE_export_stmt);
		let _la: number;
		try {
			this.state = 401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 386;
				this.match(AionParser.T__55);
				this.state = 387;
				this.match(AionParser.IDENTIFIER);
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__1) {
					{
					this.state = 388;
					this.match(AionParser.T__1);
					this.state = 389;
					this.match(AionParser.STRING);
					}
				}

				this.state = 392;
				this.match(AionParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 393;
				this.match(AionParser.T__55);
				this.state = 394;
				this.match(AionParser.T__56);
				this.state = 395;
				this.match(AionParser.T__1);
				this.state = 396;
				this.match(AionParser.STRING);
				this.state = 397;
				this.match(AionParser.T__2);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 398;
				this.match(AionParser.T__55);
				this.state = 399;
				this.match(AionParser.T__57);
				this.state = 400;
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
		this.enterRule(_localctx, 50, AionParser.RULE_condition);
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.match(AionParser.IDENTIFIER);
				this.state = 404;
				this.comparison_op();
				this.state = 405;
				this.value();
				}
				break;
			case AionParser.T__58:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 407;
				this.match(AionParser.T__58);
				this.state = 408;
				this.match(AionParser.T__46);
				this.state = 409;
				this.weekday();
				this.state = 410;
				this.match(AionParser.T__47);
				this.state = 411;
				this.match(AionParser.T__54);
				this.state = 412;
				this.match(AionParser.T__43);
				this.state = 413;
				this.comparison_op();
				this.state = 414;
				this.match(AionParser.NUMBER);
				}
				break;
			case AionParser.T__27:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 416;
				this.match(AionParser.T__27);
				this.state = 417;
				this.comparison_op();
				this.state = 418;
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
		this.enterRule(_localctx, 52, AionParser.RULE_comparison_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			_la = this._input.LA(1);
			if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (AionParser.T__59 - 60)) | (1 << (AionParser.T__60 - 60)) | (1 << (AionParser.T__61 - 60)) | (1 << (AionParser.T__62 - 60)) | (1 << (AionParser.T__63 - 60)) | (1 << (AionParser.T__64 - 60)))) !== 0))) {
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
		this.enterRule(_localctx, 54, AionParser.RULE_strategy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			_la = this._input.LA(1);
			if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (AionParser.T__65 - 66)) | (1 << (AionParser.T__66 - 66)) | (1 << (AionParser.T__67 - 66)))) !== 0))) {
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
		this.enterRule(_localctx, 56, AionParser.RULE_value_expr);
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.time();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 428;
				this.duration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 429;
				this.match(AionParser.STRING);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 430;
				this.match(AionParser.NUMBER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 431;
				this.match(AionParser.IDENTIFIER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 432;
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
		this.enterRule(_localctx, 58, AionParser.RULE_function_call);
		try {
			this.state = 447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__58:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 435;
				this.match(AionParser.T__58);
				this.state = 436;
				this.match(AionParser.T__46);
				this.state = 437;
				this.weekday();
				this.state = 438;
				this.match(AionParser.T__47);
				this.state = 439;
				this.match(AionParser.T__54);
				this.state = 440;
				this.match(AionParser.T__43);
				}
				break;
			case AionParser.T__68:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.match(AionParser.T__68);
				this.state = 443;
				this.match(AionParser.T__46);
				this.state = 444;
				this.date();
				this.state = 445;
				this.match(AionParser.T__47);
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
		this.enterRule(_localctx, 60, AionParser.RULE_date);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(AionParser.NUMBER);
			this.state = 450;
			this.match(AionParser.T__69);
			this.state = 451;
			this.match(AionParser.NUMBER);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__69) {
				{
				this.state = 452;
				this.match(AionParser.T__69);
				this.state = 453;
				this.match(AionParser.NUMBER);
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
	public date_specifier(): Date_specifierContext {
		let _localctx: Date_specifierContext = new Date_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AionParser.RULE_date_specifier);
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.date();
				}
				break;
			case AionParser.T__70:
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
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
	public weekday_list(): Weekday_listContext {
		let _localctx: Weekday_listContext = new Weekday_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AionParser.RULE_weekday_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.weekday();
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.T__23) {
				{
				{
				this.state = 461;
				this.match(AionParser.T__23);
				this.state = 462;
				this.weekday();
				}
				}
				this.state = 467;
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
	public weekday(): WeekdayContext {
		let _localctx: WeekdayContext = new WeekdayContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AionParser.RULE_weekday);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			_la = this._input.LA(1);
			if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (AionParser.T__70 - 71)) | (1 << (AionParser.T__71 - 71)) | (1 << (AionParser.T__72 - 71)) | (1 << (AionParser.T__73 - 71)) | (1 << (AionParser.T__74 - 71)) | (1 << (AionParser.T__75 - 71)) | (1 << (AionParser.T__76 - 71)) | (1 << (AionParser.T__77 - 71)) | (1 << (AionParser.T__78 - 71)) | (1 << (AionParser.T__79 - 71)) | (1 << (AionParser.T__80 - 71)) | (1 << (AionParser.T__81 - 71)) | (1 << (AionParser.T__82 - 71)) | (1 << (AionParser.T__83 - 71)))) !== 0))) {
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
		this.enterRule(_localctx, 68, AionParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.match(AionParser.NUMBER);
			this.state = 471;
			this.match(AionParser.T__22);
			this.state = 472;
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
	public time_at(): Time_atContext {
		let _localctx: Time_atContext = new Time_atContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AionParser.RULE_time_at);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(AionParser.T__8);
			this.state = 475;
			this.time();
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
	public time_range(): Time_rangeContext {
		let _localctx: Time_rangeContext = new Time_rangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, AionParser.RULE_time_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(AionParser.T__14);
			this.state = 478;
			this.time();
			this.state = 479;
			this.match(AionParser.T__15);
			this.state = 480;
			this.time();
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
		this.enterRule(_localctx, 74, AionParser.RULE_duration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(AionParser.NUMBER);
			this.state = 483;
			this.time_unit();
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.NUMBER) {
				{
				{
				this.state = 484;
				this.match(AionParser.NUMBER);
				this.state = 485;
				this.time_unit();
				}
				}
				this.state = 490;
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
		this.enterRule(_localctx, 76, AionParser.RULE_time_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			_la = this._input.LA(1);
			if (!(_la === AionParser.T__84 || _la === AionParser.T__85)) {
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
		this.enterRule(_localctx, 78, AionParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			_la = this._input.LA(1);
			if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (AionParser.IDENTIFIER - 87)) | (1 << (AionParser.STRING - 87)) | (1 << (AionParser.NUMBER - 87)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03^\u01F2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x07\x02" +
		"T\n\x02\f\x02\x0E\x02W\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03f" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07|\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x05\b\x83\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8A\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\x91\n\t\x05\t\x93\n\t\x03\n\x03\n\x03\n\x05" +
		"\n\x98\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9F\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\xA6\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xAD\n" +
		"\n\x05\n\xAF\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\xB5\n\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\xBB\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xCA\n\v\x03\f\x03\f\x03\f\x03\f\x07" +
		"\f\xD0\n\f\f\f\x0E\f\xD3\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\xDB\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xE1\n\r\x03\r\x03\r\x03\r\x03\r" +
		"\x05\r\xE7\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xED\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\xF3\n\r\x05\r\xF5\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0106\n\x0F\x05\x0F\u0108\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u0115\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u011B\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0125" +
		"\n\x11\x03\x11\x03\x11\x07\x11\u0129\n\x11\f\x11\x0E\x11\u012C\v\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0133\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u013B\n\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0145\n\x15\f\x15" +
		"\x0E\x15\u0148\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u0152\n\x15\f\x15\x0E\x15\u0155\v\x15\x03\x15\x03" +
		"\x15\x07\x15\u0159\n\x15\f\x15\x0E\x15\u015C\v\x15\x03\x15\x03\x15\x03" +
		"\x15\x07\x15\u0161\n\x15\f\x15\x0E\x15\u0164\v\x15\x03\x15\x05\x15\u0167" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u017A\n\x18\f\x18\x0E\x18\u017D\v\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0189" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u0194\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x05\x1B\u01A7\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01B4" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01C2\n\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x05 \u01C9\n \x03!\x03!\x05!\u01CD\n!\x03\"\x03\"\x03\"\x07\"\u01D2" +
		"\n\"\f\"\x0E\"\u01D5\v\"\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%" +
		"\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x07\'\u01E9\n\'\f\'" +
		"\x0E\'\u01EC\v\'\x03(\x03(\x03)\x03)\x03)\x02\x02\x02*\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02\x02\b\x03\x02*/\x03\x02>C\x03\x02DF\x03\x02IV\x03\x02" +
		"WX\x03\x02Y[\x02\u0217\x02U\x03\x02\x02\x02\x04e\x03\x02\x02\x02\x06g" +
		"\x03\x02\x02\x02\bm\x03\x02\x02\x02\nr\x03\x02\x02\x02\fw\x03\x02\x02" +
		"\x02\x0E\x82\x03\x02\x02\x02\x10\x92\x03\x02\x02\x02\x12\xAE\x03\x02\x02" +
		"\x02\x14\xC9\x03\x02\x02\x02\x16\xCB\x03\x02\x02\x02\x18\xF4\x03\x02\x02" +
		"\x02\x1A\xF6\x03\x02\x02\x02\x1C\u0107\x03\x02\x02\x02\x1E\u0109\x03\x02" +
		"\x02\x02 \u011C\x03\x02\x02\x02\"\u0132\x03\x02\x02\x02$\u013A\x03\x02" +
		"\x02\x02&\u013C\x03\x02\x02\x02(\u013E\x03\x02\x02\x02*\u0168\x03\x02" +
		"\x02\x02,\u0170\x03\x02\x02\x02.\u0176\x03\x02\x02\x020\u017E\x03\x02" +
		"\x02\x022\u0193\x03\x02\x02\x024\u01A6\x03\x02\x02\x026\u01A8\x03\x02" +
		"\x02\x028\u01AA\x03\x02\x02\x02:\u01B3\x03\x02\x02\x02<\u01C1\x03\x02" +
		"\x02\x02>\u01C3\x03\x02\x02\x02@\u01CC\x03\x02\x02\x02B\u01CE\x03\x02" +
		"\x02\x02D\u01D6\x03\x02\x02\x02F\u01D8\x03\x02\x02\x02H\u01DC\x03\x02" +
		"\x02\x02J\u01DF\x03\x02\x02\x02L\u01E4\x03\x02\x02\x02N\u01ED\x03\x02" +
		"\x02\x02P\u01EF\x03\x02\x02\x02RT\x05\x04\x03\x02SR\x03\x02\x02\x02TW" +
		"\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02XY\x07\x02\x02\x03Y\x03\x03\x02\x02\x02Zf\x05\x06\x04" +
		"\x02[f\x05\b\x05\x02\\f\x05\n\x06\x02]f\x05 \x11\x02^f\x052\x1A\x02_f" +
		"\x05,\x17\x02`f\x05*\x16\x02af\x050\x19\x02bf\x05(\x15\x02cf\x05\x16\f" +
		"\x02df\x05\f\x07\x02eZ\x03\x02\x02\x02e[\x03\x02\x02\x02e\\\x03\x02\x02" +
		"\x02e]\x03\x02\x02\x02e^\x03\x02\x02\x02e_\x03\x02\x02\x02e`\x03\x02\x02" +
		"\x02ea\x03\x02\x02\x02eb\x03\x02\x02\x02ec\x03\x02\x02\x02ed\x03\x02\x02" +
		"\x02f\x05\x03\x02\x02\x02gh\x07\x03\x02\x02hi\x07Z\x02\x02ij\x07\x04\x02" +
		"\x02jk\x07Y\x02\x02kl\x07\x05\x02\x02l\x07\x03\x02\x02\x02mn\x07Y\x02" +
		"\x02no\x07\x06\x02\x02op\x05\x0E\b\x02pq\x07\x05\x02\x02q\t\x03\x02\x02" +
		"\x02rs\x07Y\x02\x02st\x07\x06\x02\x02tu\x05:\x1E\x02uv\x07\x05\x02\x02" +
		"v\v\x03\x02\x02\x02w{\x07\x07\x02\x02x|\x05\x10\t\x02y|\x05\x1A\x0E\x02" +
		"z|\x05\x1E\x10\x02{x\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02" +
		"|}\x03\x02\x02\x02}~\x07\x05\x02\x02~\r\x03\x02\x02\x02\x7F\x83\x05\x10" +
		"\t\x02\x80\x83\x05\x1A\x0E\x02\x81\x83\x05\x1E\x10\x02\x82\x7F\x03\x02" +
		"\x02\x02\x82\x80\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02\x83\x0F\x03\x02" +
		"\x02\x02\x84\x85\x07\b\x02\x02\x85\x86\x07Z\x02\x02\x86\x89\x05\x12\n" +
		"\x02\x87\x88\x07\t\x02\x02\x88\x8A\x05L\'\x02\x89\x87\x03\x02\x02\x02" +
		"\x89\x8A\x03\x02\x02\x02\x8A\x93\x03\x02\x02\x02\x8B\x8C\x07\b\x02\x02" +
		"\x8C\x8D\x07Z\x02\x02\x8D\x90\x05\x14\v\x02\x8E\x8F\x07\t\x02\x02\x8F" +
		"\x91\x05L\'\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93" +
		"\x03\x02\x02\x02\x92\x84\x03\x02\x02\x02\x92\x8B\x03\x02\x02\x02\x93\x11" +
		"\x03\x02\x02\x02\x94\x97\x07\n\x02\x02\x95\x96\x07\v\x02\x02\x96\x98\x05" +
		"F$\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\xAF\x03\x02" +
		"\x02\x02\x99\x9A\x07\f\x02\x02\x9A\x9B\x07\r\x02\x02\x9B\x9E\x05B\"\x02" +
		"\x9C\x9F\x05J&\x02\x9D\x9F\x05H%\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03" +
		"\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xAF\x03\x02\x02\x02\xA0\xA1\x07" +
		"\x0E\x02\x02\xA1\xA2\x07\r\x02\x02\xA2\xA5\x07[\x02\x02\xA3\xA6\x05J&" +
		"\x02\xA4\xA6\x05H%\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02" +
		"\xA5\xA6\x03\x02\x02\x02\xA6\xAF\x03\x02\x02\x02\xA7\xA8\x07\x0F\x02\x02" +
		"\xA8\xA9\x07\r\x02\x02\xA9\xAC\x05> \x02\xAA\xAD\x05J&\x02\xAB\xAD\x05" +
		"H%\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02" +
		"\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\x94\x03\x02\x02\x02\xAE\x99\x03\x02" +
		"\x02\x02\xAE\xA0\x03\x02\x02\x02\xAE\xA7\x03\x02\x02\x02\xAF\x13\x03\x02" +
		"\x02\x02\xB0\xB1\x07\r\x02\x02\xB1\xB4\x05> \x02\xB2\xB5\x05J&\x02\xB3" +
		"\xB5\x05H%\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5" +
		"\x03\x02\x02\x02\xB5\xCA\x03\x02\x02\x02\xB6\xB7\x07\x10\x02\x02\xB7\xBA" +
		"\x05B\"\x02\xB8\xBB\x05J&\x02\xB9\xBB\x05H%\x02\xBA\xB8\x03\x02\x02\x02" +
		"\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xCA\x03\x02\x02\x02" +
		"\xBC\xBD\x07\x11\x02\x02\xBD\xBE\x05F$\x02\xBE\xBF\x07\x12\x02\x02\xBF" +
		"\xC0\x05F$\x02\xC0\xCA\x03\x02\x02\x02\xC1\xC2\x07\v\x02\x02\xC2\xCA\x05" +
		"F$\x02\xC3\xC4\x07\x13\x02\x02\xC4\xC5\x07\x14\x02\x02\xC5\xC6\x05F$\x02" +
		"\xC6\xC7\x07\x15\x02\x02\xC7\xC8\x05F$\x02\xC8\xCA\x03\x02\x02\x02\xC9" +
		"\xB0\x03\x02\x02\x02\xC9\xB6\x03\x02\x02\x02\xC9\xBC\x03\x02\x02\x02\xC9" +
		"\xC1\x03\x02\x02\x02\xC9\xC3\x03\x02\x02\x02\xCA\x15\x03\x02\x02\x02\xCB" +
		"\xCC\x07\b\x02\x02\xCC\xCD\x07Y\x02\x02\xCD\xD1\x07\x16\x02\x02\xCE\xD0" +
		"\x05\x18\r\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF" +
		"\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD4\xD5\x07\x17\x02\x02\xD5\x17\x03\x02\x02\x02\xD6\xD7" +
		"\x07\x18\x02\x02\xD7\xD8\x07\x19\x02\x02\xD8\xDA\x07Z\x02\x02\xD9\xDB" +
		"\x07\x1A\x02\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xF5" +
		"\x03\x02\x02\x02\xDC\xDD\x07\x1B\x02\x02\xDD\xDE\x07\x19\x02\x02\xDE\xE0" +
		"\x05F$\x02\xDF\xE1\x07\x1A\x02\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03" +
		"\x02\x02\x02\xE1\xF5\x03\x02\x02\x02\xE2\xE3\x07\x1C\x02\x02\xE3\xE4\x07" +
		"\x19\x02\x02\xE4\xE6\x05L\'\x02\xE5\xE7\x07\x1A\x02\x02\xE6\xE5\x03\x02" +
		"\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xF5\x03\x02\x02\x02\xE8\xE9\x07\x1D" +
		"\x02\x02\xE9\xEA\x07\x19\x02\x02\xEA\xEC\x07Z\x02\x02\xEB\xED\x07\x1A" +
		"\x02\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF5\x03\x02" +
		"\x02\x02\xEE\xEF\x07\x1E\x02\x02\xEF\xF0\x07\x19\x02\x02\xF0\xF2\x07Z" +
		"\x02\x02\xF1\xF3\x07\x1A\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xD6\x03\x02\x02\x02\xF4\xDC\x03\x02" +
		"\x02\x02\xF4\xE2\x03\x02\x02\x02\xF4\xE8\x03\x02\x02\x02\xF4\xEE\x03\x02" +
		"\x02\x02\xF5\x19\x03\x02\x02\x02\xF6\xF7\x07\x1F\x02\x02\xF7\xF8\x07Z" +
		"\x02\x02\xF8\xF9\x07\r\x02\x02\xF9\xFA\x05> \x02\xFA\xFB\x05\x1C\x0F\x02" +
		"\xFB\x1B\x03\x02\x02\x02\xFC\xFD\x07\v\x02\x02\xFD\u0108\x05F$\x02\xFE" +
		"\xFF\x07\x13\x02\x02\xFF\u0100\x07\x14\x02\x02\u0100\u0101\x05F$\x02\u0101" +
		"\u0102\x07\x15\x02\x02\u0102\u0105\x05F$\x02\u0103\u0104\x07 \x02\x02" +
		"\u0104\u0106\x058\x1D\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03" +
		"\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\xFC\x03\x02\x02\x02\u0107" +
		"\xFE\x03\x02\x02\x02\u0108\x1D\x03\x02\x02\x02\u0109\u010A\x07!\x02\x02" +
		"\u010A\u010B\x07Z\x02\x02\u010B\u010C\x07\r\x02\x02\u010C\u010D\x05> " +
		"\x02\u010D\u010E\x07\v\x02\x02\u010E\u010F\x05F$\x02\u010F\u0110\x07\"" +
		"\x02\x02\u0110\u0111\x07[\x02\x02\u0111\u0114\x07#\x02\x02\u0112\u0113" +
		"\x07\x10\x02\x02\u0113\u0115\x05L\'\x02\u0114\u0112\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u011A\x03\x02\x02\x02\u0116\u0117\x07$\x02" +
		"\x02\u0117\u0118\x05L\'\x02\u0118\u0119\x07%\x02\x02\u0119\u011B\x03\x02" +
		"\x02\x02\u011A\u0116\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
		"\x1F\x03\x02\x02\x02\u011C\u011D\x07&\x02\x02\u011D\u011E\x05&\x14\x02" +
		"\u011E\u011F\x07\x11\x02\x02\u011F\u0120\x05\"\x12\x02\u0120\u0121\x07" +
		"\x12\x02\x02\u0121\u0124\x05$\x13\x02\u0122\u0123\x07\'\x02\x02\u0123" +
		"\u0125\x07[\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02" +
		"\x02\u0125\u0126\x03\x02\x02\x02\u0126\u012A\x07\x16\x02\x02\u0127\u0129" +
		"\x05\x04\x03\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02" +
		"\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x03" +
		"\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u012E\x07\x17\x02\x02\u012E" +
		"!\x03\x02\x02\x02\u012F\u0133\x05> \x02\u0130\u0133\x07Y\x02\x02\u0131" +
		"\u0133\x07(\x02\x02\u0132\u012F\x03\x02\x02\x02\u0132\u0130\x03\x02\x02" +
		"\x02\u0132\u0131\x03\x02\x02\x02\u0133#\x03\x02\x02\x02\u0134\u013B\x05" +
		"> \x02\u0135\u013B\x07Y\x02\x02\u0136\u0137\x05\"\x12\x02\u0137\u0138" +
		"\x07)\x02\x02\u0138\u0139\x07[\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A" +
		"\u0134\x03\x02\x02\x02\u013A\u0135\x03\x02\x02\x02\u013A\u0136\x03\x02" +
		"\x02\x02\u013B%\x03\x02\x02\x02\u013C\u013D\t\x02\x02\x02\u013D\'\x03" +
		"\x02\x02\x02\u013E\u013F\x070\x02\x02\u013F\u0140\x071\x02\x02\u0140\u0141" +
		"\x054\x1B\x02\u0141\u0142\x072\x02\x02\u0142\u0146\x07\x16\x02\x02\u0143" +
		"\u0145\x05\x04\x03\x02\u0144\u0143\x03\x02\x02\x02\u0145\u0148\x03\x02" +
		"\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147" +
		"\u0149\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u015A\x07\x17" +
		"\x02\x02\u014A\u014B\x073\x02\x02\u014B\u014C\x070\x02\x02\u014C\u014D" +
		"\x071\x02\x02\u014D\u014E\x054\x1B\x02\u014E\u014F\x072\x02\x02\u014F" +
		"\u0153\x07\x16\x02\x02\u0150\u0152\x05\x04\x03\x02\u0151\u0150\x03\x02" +
		"\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0153\x03\x02" +
		"\x02\x02\u0156\u0157\x07\x17\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158" +
		"\u014A\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02" +
		"\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u0166\x03\x02\x02\x02\u015C" +
		"\u015A\x03\x02\x02\x02\u015D\u015E\x073\x02\x02\u015E\u0162\x07\x16\x02" +
		"\x02\u015F\u0161\x05\x04\x03\x02\u0160\u015F\x03\x02\x02\x02\u0161\u0164" +
		"\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
		"\u0163\u0165\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0167\x07" +
		"\x17\x02\x02\u0166\u015D\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167" +
		")\x03\x02\x02\x02\u0168\u0169\x074\x02\x02\u0169\u016A\x07Y\x02\x02\u016A" +
		"\u016B\x075\x02\x02\u016B\u016C\x054\x1B\x02\u016C\u016D\x076\x02\x02" +
		"\u016D\u016E\x07Y\x02\x02\u016E\u016F\x07\x05\x02\x02\u016F+\x03\x02\x02" +
		"\x02\u0170\u0171\x077\x02\x02\u0171\u0172\x05.\x18\x02\u0172\u0173\x07" +
		"6\x02\x02\u0173\u0174\x07Y\x02\x02\u0174\u0175\x07\x05\x02\x02\u0175-" +
		"\x03\x02\x02\x02\u0176\u017B\x07Y\x02\x02\u0177\u0178\x07\x1A\x02\x02" +
		"\u0178\u017A\x07Y\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017D\x03" +
		"\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C" +
		"/\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u017F\x078\x02\x02" +
		"\u017F\u0180\x07Y\x02\x02\u0180\u0181\x079\x02\x02\u0181\u0182\x07Y\x02" +
		"\x02\u0182\u0183\x07\x05\x02\x02\u01831\x03\x02\x02\x02\u0184\u0185\x07" +
		":\x02\x02\u0185\u0188\x07Y\x02\x02\u0186\u0187\x07\x04\x02\x02\u0187\u0189" +
		"\x07Z\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02" +
		"\u0189\u018A\x03\x02\x02\x02\u018A\u0194\x07\x05\x02\x02\u018B\u018C\x07" +
		":\x02\x02\u018C\u018D\x07;\x02\x02\u018D\u018E\x07\x04\x02\x02\u018E\u018F" +
		"\x07Z\x02\x02\u018F\u0194\x07\x05\x02\x02\u0190\u0191\x07:\x02\x02\u0191" +
		"\u0192\x07<\x02\x02\u0192\u0194\x07\x05\x02\x02\u0193\u0184\x03\x02\x02" +
		"\x02\u0193\u018B\x03\x02\x02\x02\u0193\u0190\x03\x02\x02\x02\u01943\x03" +
		"\x02\x02\x02\u0195\u0196\x07Y\x02\x02\u0196\u0197\x056\x1C\x02\u0197\u0198" +
		"\x05P)\x02\u0198\u01A7\x03\x02\x02\x02\u0199\u019A\x07=\x02\x02\u019A" +
		"\u019B\x071\x02\x02\u019B\u019C\x05D#\x02\u019C\u019D\x072\x02\x02\u019D" +
		"\u019E\x079\x02\x02\u019E\u019F\x07.\x02\x02\u019F\u01A0\x056\x1C\x02" +
		"\u01A0\u01A1\x07[\x02\x02\u01A1\u01A7\x03\x02\x02\x02\u01A2\u01A3\x07" +
		"\x1E\x02\x02\u01A3\u01A4\x056\x1C\x02\u01A4\u01A5\x07Z\x02\x02\u01A5\u01A7" +
		"\x03\x02\x02\x02\u01A6\u0195\x03\x02\x02\x02\u01A6\u0199\x03\x02\x02\x02" +
		"\u01A6\u01A2\x03\x02\x02\x02\u01A75\x03\x02\x02\x02\u01A8\u01A9\t\x03" +
		"\x02\x02\u01A97\x03\x02\x02\x02\u01AA\u01AB\t\x04\x02\x02\u01AB9\x03\x02" +
		"\x02\x02\u01AC\u01B4\x05> \x02\u01AD\u01B4\x05F$\x02\u01AE\u01B4\x05L" +
		"\'\x02\u01AF\u01B4\x07Z\x02\x02\u01B0\u01B4\x07[\x02\x02\u01B1\u01B4\x07" +
		"Y\x02\x02\u01B2\u01B4\x05<\x1F\x02\u01B3\u01AC\x03\x02\x02\x02\u01B3\u01AD" +
		"\x03\x02\x02\x02\u01B3\u01AE\x03\x02\x02\x02\u01B3\u01AF\x03\x02\x02\x02" +
		"\u01B3\u01B0\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B2\x03" +
		"\x02\x02\x02\u01B4;\x03\x02\x02\x02\u01B5\u01B6\x07=\x02\x02\u01B6\u01B7" +
		"\x071\x02\x02\u01B7\u01B8\x05D#\x02\u01B8\u01B9\x072\x02\x02\u01B9\u01BA" +
		"\x079\x02\x02\u01BA\u01BB\x07.\x02\x02\u01BB\u01C2\x03\x02\x02\x02\u01BC" +
		"\u01BD\x07G\x02\x02\u01BD\u01BE\x071\x02\x02\u01BE\u01BF\x05> \x02\u01BF" +
		"\u01C0\x072\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01B5\x03\x02\x02" +
		"\x02\u01C1\u01BC\x03\x02\x02\x02\u01C2=\x03\x02\x02\x02\u01C3\u01C4\x07" +
		"[\x02\x02\u01C4\u01C5\x07H\x02\x02\u01C5\u01C8\x07[\x02\x02\u01C6\u01C7" +
		"\x07H\x02\x02\u01C7\u01C9\x07[\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9?\x03\x02\x02\x02\u01CA\u01CD\x05> \x02\u01CB" +
		"\u01CD\x05D#\x02\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CB\x03\x02\x02\x02" +
		"\u01CDA\x03\x02\x02\x02\u01CE\u01D3\x05D#\x02\u01CF\u01D0\x07\x1A\x02" +
		"\x02\u01D0\u01D2\x05D#\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2\u01D5\x03" +
		"\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
		"C\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D7\t\x05\x02\x02" +
		"\u01D7E\x03\x02\x02\x02\u01D8\u01D9\x07[\x02\x02\u01D9\u01DA\x07\x19\x02" +
		"\x02\u01DA\u01DB\x07[\x02\x02\u01DBG\x03\x02\x02\x02\u01DC\u01DD\x07\v" +
		"\x02\x02\u01DD\u01DE\x05F$\x02\u01DEI\x03\x02\x02\x02\u01DF\u01E0\x07" +
		"\x11\x02\x02\u01E0\u01E1\x05F$\x02\u01E1\u01E2\x07\x12\x02\x02\u01E2\u01E3" +
		"\x05F$\x02\u01E3K\x03\x02\x02\x02\u01E4\u01E5\x07[\x02\x02\u01E5\u01EA" +
		"\x05N(\x02\u01E6\u01E7\x07[\x02\x02\u01E7\u01E9\x05N(\x02\u01E8\u01E6" +
		"\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02" +
		"\u01EA\u01EB\x03\x02\x02\x02\u01EBM\x03\x02\x02\x02\u01EC\u01EA\x03\x02" +
		"\x02\x02\u01ED\u01EE\t\x06\x02\x02\u01EEO\x03\x02\x02\x02\u01EF\u01F0" +
		"\t\x07\x02\x02\u01F0Q\x03\x02\x02\x02/Ue{\x82\x89\x90\x92\x97\x9E\xA5" +
		"\xAC\xAE\xB4\xBA\xC9\xD1\xDA\xE0\xE6\xEC\xF2\xF4\u0105\u0107\u0114\u011A" +
		"\u0124\u012A\u0132\u013A\u0146\u0153\u015A\u0162\u0166\u017B\u0188\u0193" +
		"\u01A6\u01B3\u01C1\u01C8\u01CC\u01D3\u01EA";
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
	public recurrence_expr(): Recurrence_exprContext | undefined {
		return this.tryGetRuleContext(0, Recurrence_exprContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public timing_expr(): Timing_exprContext | undefined {
		return this.tryGetRuleContext(0, Timing_exprContext);
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


export class Recurrence_exprContext extends ParserRuleContext {
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public weekday_list(): Weekday_listContext | undefined {
		return this.tryGetRuleContext(0, Weekday_listContext);
	}
	public time_range(): Time_rangeContext | undefined {
		return this.tryGetRuleContext(0, Time_rangeContext);
	}
	public time_at(): Time_atContext | undefined {
		return this.tryGetRuleContext(0, Time_atContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(AionParser.NUMBER, 0); }
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_recurrence_expr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterRecurrence_expr) {
			listener.enterRecurrence_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitRecurrence_expr) {
			listener.exitRecurrence_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitRecurrence_expr) {
			return visitor.visitRecurrence_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Timing_exprContext extends ParserRuleContext {
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public time_range(): Time_rangeContext | undefined {
		return this.tryGetRuleContext(0, Time_rangeContext);
	}
	public time_at(): Time_atContext | undefined {
		return this.tryGetRuleContext(0, Time_atContext);
	}
	public weekday_list(): Weekday_listContext | undefined {
		return this.tryGetRuleContext(0, Weekday_listContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_timing_expr; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTiming_expr) {
			listener.enterTiming_expr(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTiming_expr) {
			listener.exitTiming_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTiming_expr) {
			return visitor.visitTiming_expr(this);
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
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	public task_time_spec(): Task_time_specContext {
		return this.getRuleContext(0, Task_time_specContext);
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


export class Task_time_specContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return AionParser.RULE_task_time_spec; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTask_time_spec) {
			listener.enterTask_time_spec(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTask_time_spec) {
			listener.exitTask_time_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTask_time_spec) {
			return visitor.visitTask_time_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pomodoro_declContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AionParser.STRING, 0); }
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
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


export class Weekday_listContext extends ParserRuleContext {
	public weekday(): WeekdayContext[];
	public weekday(i: number): WeekdayContext;
	public weekday(i?: number): WeekdayContext | WeekdayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WeekdayContext);
		} else {
			return this.getRuleContext(i, WeekdayContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_weekday_list; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterWeekday_list) {
			listener.enterWeekday_list(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitWeekday_list) {
			listener.exitWeekday_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitWeekday_list) {
			return visitor.visitWeekday_list(this);
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


export class Time_atContext extends ParserRuleContext {
	public time(): TimeContext {
		return this.getRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_time_at; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTime_at) {
			listener.enterTime_at(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTime_at) {
			listener.exitTime_at(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTime_at) {
			return visitor.visitTime_at(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Time_rangeContext extends ParserRuleContext {
	public time(): TimeContext[];
	public time(i: number): TimeContext;
	public time(i?: number): TimeContext | TimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeContext);
		} else {
			return this.getRuleContext(i, TimeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_time_range; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterTime_range) {
			listener.enterTime_range(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitTime_range) {
			listener.exitTime_range(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitTime_range) {
			return visitor.visitTime_range(this);
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


