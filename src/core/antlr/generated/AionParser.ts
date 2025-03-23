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
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly T__117 = 118;
	public static readonly T__118 = 119;
	public static readonly IDENTIFIER = 120;
	public static readonly STRING = 121;
	public static readonly NUMBER = 122;
	public static readonly WS = 123;
	public static readonly COMMENT = 124;
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
	public static readonly RULE_week_start_stmt = 12;
	public static readonly RULE_task_decl = 13;
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
	public static readonly RULE_ordinal_specifier = 32;
	public static readonly RULE_weekday = 33;
	public static readonly RULE_time = 34;
	public static readonly RULE_duration = 35;
	public static readonly RULE_time_unit = 36;
	public static readonly RULE_value = 37;
	public static readonly RULE_month_name = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "import_stmt", "assignment_stmt", "value_assignment_stmt", 
		"default_declaration", "declaration", "event_decl", "event_timing", "temporal_expr", 
		"structured_event_stmt", "structured_event_field", "week_start_stmt", 
		"task_decl", "pomodoro_decl", "loop_stmt", "loop_start", "loop_end", "loop_unit", 
		"conditional_stmt", "filter_stmt", "merge_stmt", "identifier_list", "include_stmt", 
		"export_stmt", "condition", "comparison_op", "strategy", "value_expr", 
		"function_call", "date", "date_specifier", "ordinal_specifier", "weekday", 
		"time", "duration", "time_unit", "value", "month_name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'as'", "';'", "'='", "'$$$'", "'new'", "'event'", 
		"'for'", "'on'", "'from'", "'to'", "'at'", "'every'", "'find'", "'between'", 
		"'and'", "'daily'", "'weekly'", "'monthly'", "'yearly'", "'{'", "'}'", 
		"'name'", "':'", "','", "'start'", "'duration'", "'location'", "'category'", 
		"'weeknumber'", "'('", "')'", "'task'", "'using'", "'pomodoro'", "'repeat'", 
		"'times'", "'with'", "'pause'", "'iterate'", "'step'", "'today'", "'+'", 
		"'day'", "'days'", "'week'", "'weeks'", "'month'", "'months'", "'if'", 
		"'else'", "'filter'", "'where'", "'into'", "'merge'", "'include'", "'in'", 
		"'export'", "'default'", "'all'", "'count'", "'=='", "'!='", "'<'", "'<='", 
		"'>'", "'>='", "'random'", "'earliest'", "'latest'", "'.'", "'st'", "'nd'", 
		"'rd'", "'th'", "'Monday'", "'Tuesday'", "'Wednesday'", "'Thursday'", 
		"'Friday'", "'Saturday'", "'Sunday'", "'Mon'", "'Tue'", "'Wed'", "'Thu'", 
		"'Fri'", "'Sat'", "'Sun'", "'h'", "'m'", "'min'", "'hour'", "'hours'", 
		"'minute'", "'minutes'", "'January'", "'February'", "'March'", "'April'", 
		"'May'", "'June'", "'July'", "'August'", "'September'", "'October'", "'November'", 
		"'December'", "'Jan'", "'Feb'", "'Mar'", "'Apr'", "'Jun'", "'Jul'", "'Aug'", 
		"'Sep'", "'Oct'", "'Nov'", "'Dec'",
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
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "IDENTIFIER", "STRING", "NUMBER", "WS", "COMMENT",
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
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (AionParser.T__32 - 33)) | (1 << (AionParser.T__34 - 33)) | (1 << (AionParser.T__39 - 33)) | (1 << (AionParser.T__49 - 33)) | (1 << (AionParser.T__51 - 33)) | (1 << (AionParser.T__54 - 33)) | (1 << (AionParser.T__55 - 33)) | (1 << (AionParser.T__57 - 33)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 78;
				this.statement();
				}
				}
				this.state = 83;
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
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.import_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 85;
				this.assignment_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 86;
				this.value_assignment_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 87;
				this.loop_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 88;
				this.export_stmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 89;
				this.merge_stmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 90;
				this.filter_stmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 91;
				this.include_stmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 92;
				this.conditional_stmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 93;
				this.structured_event_stmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 94;
				this.week_start_stmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 95;
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
			this.state = 98;
			this.match(AionParser.T__0);
			this.state = 99;
			this.match(AionParser.STRING);
			this.state = 100;
			this.match(AionParser.T__1);
			this.state = 101;
			this.match(AionParser.IDENTIFIER);
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
	public assignment_stmt(): Assignment_stmtContext {
		let _localctx: Assignment_stmtContext = new Assignment_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AionParser.RULE_assignment_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(AionParser.IDENTIFIER);
			this.state = 105;
			this.match(AionParser.T__3);
			this.state = 106;
			this.declaration();
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
	public value_assignment_stmt(): Value_assignment_stmtContext {
		let _localctx: Value_assignment_stmtContext = new Value_assignment_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AionParser.RULE_value_assignment_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(AionParser.IDENTIFIER);
			this.state = 110;
			this.match(AionParser.T__3);
			this.state = 111;
			this.value_expr();
			this.state = 112;
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
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__4) {
				{
				this.state = 114;
				this.match(AionParser.T__4);
				}
			}

			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__5) {
				{
				this.state = 117;
				this.match(AionParser.T__5);
				}
			}

			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__6:
				{
				this.state = 120;
				this.event_decl();
				}
				break;
			case AionParser.T__32:
				{
				this.state = 121;
				this.task_decl();
				}
				break;
			case AionParser.T__34:
				{
				this.state = 122;
				this.pomodoro_decl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 125;
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
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__6:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.event_decl();
				}
				break;
			case AionParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.task_decl();
				}
				break;
			case AionParser.T__34:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 129;
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
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 132;
				this.match(AionParser.T__6);
				this.state = 133;
				this.match(AionParser.STRING);
				this.state = 134;
				this.event_timing();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.match(AionParser.T__6);
				this.state = 136;
				this.match(AionParser.STRING);
				this.state = 137;
				this.temporal_expr();
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 138;
					this.match(AionParser.T__7);
					this.state = 139;
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
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 144;
				this.match(AionParser.T__8);
				this.state = 145;
				this.date_specifier();
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__9) {
					{
					this.state = 146;
					this.match(AionParser.T__9);
					this.state = 147;
					this.time();
					this.state = 148;
					this.match(AionParser.T__10);
					this.state = 149;
					this.time();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				this.match(AionParser.T__8);
				this.state = 154;
				this.date_specifier();
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 155;
					this.match(AionParser.T__11);
					this.state = 156;
					this.time();
					}
				}

				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 159;
					this.match(AionParser.T__7);
					this.state = 160;
					this.duration();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 163;
				this.match(AionParser.T__12);
				this.state = 164;
				this.weekday();
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__9) {
					{
					this.state = 165;
					this.match(AionParser.T__9);
					this.state = 166;
					this.time();
					this.state = 167;
					this.match(AionParser.T__10);
					this.state = 168;
					this.time();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 172;
				this.match(AionParser.T__12);
				this.state = 173;
				this.weekday();
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 174;
					this.match(AionParser.T__11);
					this.state = 175;
					this.time();
					}
				}

				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 178;
					this.match(AionParser.T__7);
					this.state = 179;
					this.duration();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 182;
				this.match(AionParser.T__9);
				this.state = 183;
				this.time();
				this.state = 184;
				this.match(AionParser.T__10);
				this.state = 185;
				this.time();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 187;
				this.match(AionParser.T__11);
				this.state = 188;
				this.time();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 189;
					this.match(AionParser.T__7);
					this.state = 190;
					this.duration();
					}
				}

				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 193;
				this.match(AionParser.T__13);
				this.state = 194;
				this.match(AionParser.T__14);
				this.state = 195;
				this.time();
				this.state = 196;
				this.match(AionParser.T__15);
				this.state = 197;
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
			this.state = 221;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.match(AionParser.T__16);
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
			case AionParser.T__17:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.match(AionParser.T__17);
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
			case AionParser.T__18:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 211;
				this.match(AionParser.T__18);
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
			case AionParser.T__19:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 216;
				this.match(AionParser.T__19);
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__11) {
					{
					this.state = 217;
					this.match(AionParser.T__11);
					this.state = 218;
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
			this.state = 223;
			this.match(AionParser.T__6);
			this.state = 224;
			this.match(AionParser.IDENTIFIER);
			this.state = 225;
			this.match(AionParser.T__20);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__22) | (1 << AionParser.T__25) | (1 << AionParser.T__26) | (1 << AionParser.T__27) | (1 << AionParser.T__28))) !== 0)) {
				{
				{
				this.state = 226;
				this.structured_event_field();
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
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
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 234;
				this.match(AionParser.T__22);
				this.state = 235;
				this.match(AionParser.T__23);
				this.state = 236;
				this.match(AionParser.STRING);
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 237;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 240;
				this.match(AionParser.T__25);
				this.state = 241;
				this.match(AionParser.T__23);
				this.state = 242;
				this.time();
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 243;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__26:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
				this.match(AionParser.T__26);
				this.state = 247;
				this.match(AionParser.T__23);
				this.state = 248;
				this.duration();
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 249;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__27:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 252;
				this.match(AionParser.T__27);
				this.state = 253;
				this.match(AionParser.T__23);
				this.state = 254;
				this.match(AionParser.STRING);
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 255;
					this.match(AionParser.T__24);
					}
				}

				}
				break;
			case AionParser.T__28:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 258;
				this.match(AionParser.T__28);
				this.state = 259;
				this.match(AionParser.T__23);
				this.state = 260;
				this.match(AionParser.STRING);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__24) {
					{
					this.state = 261;
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
	public week_start_stmt(): Week_start_stmtContext {
		let _localctx: Week_start_stmtContext = new Week_start_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AionParser.RULE_week_start_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(AionParser.IDENTIFIER);
			this.state = 267;
			this.match(AionParser.T__3);
			this.state = 268;
			this.match(AionParser.T__29);
			this.state = 269;
			this.match(AionParser.T__30);
			this.state = 270;
			this.date();
			this.state = 271;
			this.match(AionParser.T__31);
			this.state = 272;
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
		this.enterRule(_localctx, 26, AionParser.RULE_task_decl);
		let _la: number;
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 274;
				this.match(AionParser.T__32);
				this.state = 275;
				this.match(AionParser.STRING);
				this.state = 276;
				this.temporal_expr();
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__7) {
					{
					this.state = 277;
					this.match(AionParser.T__7);
					this.state = 278;
					this.duration();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 281;
				this.match(AionParser.T__32);
				this.state = 282;
				this.match(AionParser.STRING);
				this.state = 283;
				this.match(AionParser.T__13);
				this.state = 284;
				this.match(AionParser.T__14);
				this.state = 285;
				this.time();
				this.state = 286;
				this.match(AionParser.T__15);
				this.state = 287;
				this.time();
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__33) {
					{
					this.state = 288;
					this.match(AionParser.T__33);
					this.state = 289;
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
		this.enterRule(_localctx, 28, AionParser.RULE_pomodoro_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(AionParser.T__34);
			this.state = 295;
			this.match(AionParser.STRING);
			this.state = 296;
			this.match(AionParser.T__11);
			this.state = 297;
			this.time();
			this.state = 298;
			this.match(AionParser.T__35);
			this.state = 299;
			this.match(AionParser.NUMBER);
			this.state = 300;
			this.match(AionParser.T__36);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__12) {
				{
				this.state = 301;
				this.match(AionParser.T__12);
				this.state = 302;
				this.duration();
				}
			}

			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__37) {
				{
				this.state = 305;
				this.match(AionParser.T__37);
				this.state = 306;
				this.duration();
				this.state = 307;
				this.match(AionParser.T__38);
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
			this.state = 311;
			this.match(AionParser.T__39);
			this.state = 312;
			this.loop_unit();
			this.state = 313;
			this.match(AionParser.T__9);
			this.state = 314;
			this.loop_start();
			this.state = 315;
			this.match(AionParser.T__10);
			this.state = 316;
			this.loop_end();
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__40) {
				{
				this.state = 317;
				this.match(AionParser.T__40);
				this.state = 318;
				this.match(AionParser.NUMBER);
				}
			}

			this.state = 321;
			this.match(AionParser.T__20);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (AionParser.T__32 - 33)) | (1 << (AionParser.T__34 - 33)) | (1 << (AionParser.T__39 - 33)) | (1 << (AionParser.T__49 - 33)) | (1 << (AionParser.T__51 - 33)) | (1 << (AionParser.T__54 - 33)) | (1 << (AionParser.T__55 - 33)) | (1 << (AionParser.T__57 - 33)))) !== 0) || _la === AionParser.IDENTIFIER) {
				{
				{
				this.state = 322;
				this.statement();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
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
		this.enterRule(_localctx, 32, AionParser.RULE_loop_start);
		try {
			this.state = 333;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.date();
				}
				break;
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.match(AionParser.IDENTIFIER);
				}
				break;
			case AionParser.T__41:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 332;
				this.match(AionParser.T__41);
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
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 336;
				this.match(AionParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 337;
				this.loop_start();
				this.state = 338;
				this.match(AionParser.T__42);
				this.state = 339;
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
			this.state = 343;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (AionParser.T__43 - 44)) | (1 << (AionParser.T__44 - 44)) | (1 << (AionParser.T__45 - 44)) | (1 << (AionParser.T__46 - 44)) | (1 << (AionParser.T__47 - 44)) | (1 << (AionParser.T__48 - 44)))) !== 0))) {
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
			this.state = 345;
			this.match(AionParser.T__49);
			this.state = 346;
			this.match(AionParser.T__30);
			this.state = 347;
			this.condition();
			this.state = 348;
			this.match(AionParser.T__31);
			this.state = 349;
			this.match(AionParser.T__20);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (AionParser.T__32 - 33)) | (1 << (AionParser.T__34 - 33)) | (1 << (AionParser.T__39 - 33)) | (1 << (AionParser.T__49 - 33)) | (1 << (AionParser.T__51 - 33)) | (1 << (AionParser.T__54 - 33)) | (1 << (AionParser.T__55 - 33)) | (1 << (AionParser.T__57 - 33)))) !== 0) || _la === AionParser.IDENTIFIER) {
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
			this.state = 373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 357;
					this.match(AionParser.T__50);
					this.state = 358;
					this.match(AionParser.T__49);
					this.state = 359;
					this.match(AionParser.T__30);
					this.state = 360;
					this.condition();
					this.state = 361;
					this.match(AionParser.T__31);
					this.state = 362;
					this.match(AionParser.T__20);
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (AionParser.T__32 - 33)) | (1 << (AionParser.T__34 - 33)) | (1 << (AionParser.T__39 - 33)) | (1 << (AionParser.T__49 - 33)) | (1 << (AionParser.T__51 - 33)) | (1 << (AionParser.T__54 - 33)) | (1 << (AionParser.T__55 - 33)) | (1 << (AionParser.T__57 - 33)))) !== 0) || _la === AionParser.IDENTIFIER) {
						{
						{
						this.state = 363;
						this.statement();
						}
						}
						this.state = 368;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 369;
					this.match(AionParser.T__21);
					}
					}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AionParser.T__50) {
				{
				this.state = 376;
				this.match(AionParser.T__50);
				this.state = 377;
				this.match(AionParser.T__20);
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AionParser.T__0) | (1 << AionParser.T__4) | (1 << AionParser.T__5) | (1 << AionParser.T__6))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (AionParser.T__32 - 33)) | (1 << (AionParser.T__34 - 33)) | (1 << (AionParser.T__39 - 33)) | (1 << (AionParser.T__49 - 33)) | (1 << (AionParser.T__51 - 33)) | (1 << (AionParser.T__54 - 33)) | (1 << (AionParser.T__55 - 33)) | (1 << (AionParser.T__57 - 33)))) !== 0) || _la === AionParser.IDENTIFIER) {
					{
					{
					this.state = 378;
					this.statement();
					}
					}
					this.state = 383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 384;
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
		this.enterRule(_localctx, 40, AionParser.RULE_filter_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(AionParser.T__51);
			this.state = 388;
			this.match(AionParser.IDENTIFIER);
			this.state = 389;
			this.match(AionParser.T__52);
			this.state = 390;
			this.condition();
			this.state = 391;
			this.match(AionParser.T__53);
			this.state = 392;
			this.match(AionParser.IDENTIFIER);
			this.state = 393;
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
			this.state = 395;
			this.match(AionParser.T__54);
			this.state = 396;
			this.identifier_list();
			this.state = 397;
			this.match(AionParser.T__53);
			this.state = 398;
			this.match(AionParser.IDENTIFIER);
			this.state = 399;
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
			this.state = 401;
			this.match(AionParser.IDENTIFIER);
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.T__24) {
				{
				{
				this.state = 402;
				this.match(AionParser.T__24);
				this.state = 403;
				this.match(AionParser.IDENTIFIER);
				}
				}
				this.state = 408;
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
			this.state = 409;
			this.match(AionParser.T__55);
			this.state = 410;
			this.match(AionParser.IDENTIFIER);
			this.state = 411;
			this.match(AionParser.T__56);
			this.state = 412;
			this.match(AionParser.IDENTIFIER);
			this.state = 413;
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
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 415;
				this.match(AionParser.T__57);
				this.state = 416;
				this.match(AionParser.IDENTIFIER);
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AionParser.T__1) {
					{
					this.state = 417;
					this.match(AionParser.T__1);
					this.state = 418;
					this.match(AionParser.STRING);
					}
				}

				this.state = 421;
				this.match(AionParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.match(AionParser.T__57);
				this.state = 423;
				this.match(AionParser.T__58);
				this.state = 424;
				this.match(AionParser.T__1);
				this.state = 425;
				this.match(AionParser.STRING);
				this.state = 426;
				this.match(AionParser.T__2);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 427;
				this.match(AionParser.T__57);
				this.state = 428;
				this.match(AionParser.T__59);
				this.state = 429;
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
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 432;
				this.match(AionParser.IDENTIFIER);
				this.state = 433;
				this.comparison_op();
				this.state = 434;
				this.value();
				}
				break;
			case AionParser.T__60:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 436;
				this.match(AionParser.T__60);
				this.state = 437;
				this.match(AionParser.T__30);
				this.state = 438;
				this.weekday();
				this.state = 439;
				this.match(AionParser.T__31);
				this.state = 440;
				this.match(AionParser.T__56);
				this.state = 441;
				this.match(AionParser.T__47);
				this.state = 442;
				this.comparison_op();
				this.state = 443;
				this.match(AionParser.NUMBER);
				}
				break;
			case AionParser.T__28:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 445;
				this.match(AionParser.T__28);
				this.state = 446;
				this.comparison_op();
				this.state = 447;
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
			this.state = 451;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (AionParser.T__61 - 62)) | (1 << (AionParser.T__62 - 62)) | (1 << (AionParser.T__63 - 62)) | (1 << (AionParser.T__64 - 62)) | (1 << (AionParser.T__65 - 62)) | (1 << (AionParser.T__66 - 62)))) !== 0))) {
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
			this.state = 453;
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (AionParser.T__67 - 68)) | (1 << (AionParser.T__68 - 68)) | (1 << (AionParser.T__69 - 68)))) !== 0))) {
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
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 455;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 456;
				this.time();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 457;
				this.duration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 458;
				this.match(AionParser.STRING);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 459;
				this.match(AionParser.NUMBER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 460;
				this.match(AionParser.IDENTIFIER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 461;
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
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AionParser.T__60:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 464;
				this.match(AionParser.T__60);
				this.state = 465;
				this.match(AionParser.T__30);
				this.state = 466;
				this.weekday();
				this.state = 467;
				this.match(AionParser.T__31);
				this.state = 468;
				this.match(AionParser.T__56);
				this.state = 469;
				this.match(AionParser.T__47);
				}
				break;
			case AionParser.T__29:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
				this.match(AionParser.T__29);
				this.state = 472;
				this.match(AionParser.T__30);
				this.state = 473;
				this.date();
				this.state = 474;
				this.match(AionParser.T__31);
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(AionParser.NUMBER);
			this.state = 479;
			this.match(AionParser.T__70);
			this.state = 480;
			this.match(AionParser.NUMBER);
			this.state = 481;
			this.match(AionParser.T__70);
			this.state = 482;
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
		this.enterRule(_localctx, 62, AionParser.RULE_date_specifier);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 484;
				this.date();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 485;
				this.weekday();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 486;
				this.ordinal_specifier();
				this.state = 487;
				this.weekday();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 489;
				this.ordinal_specifier();
				this.state = 490;
				this.month_name();
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
	public ordinal_specifier(): Ordinal_specifierContext {
		let _localctx: Ordinal_specifierContext = new Ordinal_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AionParser.RULE_ordinal_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(AionParser.NUMBER);
			this.state = 495;
			_la = this._input.LA(1);
			if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (AionParser.T__71 - 72)) | (1 << (AionParser.T__72 - 72)) | (1 << (AionParser.T__73 - 72)) | (1 << (AionParser.T__74 - 72)))) !== 0))) {
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
	public weekday(): WeekdayContext {
		let _localctx: WeekdayContext = new WeekdayContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AionParser.RULE_weekday);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			_la = this._input.LA(1);
			if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (AionParser.T__75 - 76)) | (1 << (AionParser.T__76 - 76)) | (1 << (AionParser.T__77 - 76)) | (1 << (AionParser.T__78 - 76)) | (1 << (AionParser.T__79 - 76)) | (1 << (AionParser.T__80 - 76)) | (1 << (AionParser.T__81 - 76)) | (1 << (AionParser.T__82 - 76)) | (1 << (AionParser.T__83 - 76)) | (1 << (AionParser.T__84 - 76)) | (1 << (AionParser.T__85 - 76)) | (1 << (AionParser.T__86 - 76)) | (1 << (AionParser.T__87 - 76)) | (1 << (AionParser.T__88 - 76)))) !== 0))) {
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
			this.state = 499;
			this.match(AionParser.NUMBER);
			this.state = 500;
			this.match(AionParser.T__23);
			this.state = 501;
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
		this.enterRule(_localctx, 70, AionParser.RULE_duration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(AionParser.NUMBER);
			this.state = 504;
			this.time_unit();
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AionParser.NUMBER) {
				{
				{
				this.state = 505;
				this.match(AionParser.NUMBER);
				this.state = 506;
				this.time_unit();
				}
				}
				this.state = 511;
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
		this.enterRule(_localctx, 72, AionParser.RULE_time_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (AionParser.T__89 - 90)) | (1 << (AionParser.T__90 - 90)) | (1 << (AionParser.T__91 - 90)) | (1 << (AionParser.T__92 - 90)) | (1 << (AionParser.T__93 - 90)) | (1 << (AionParser.T__94 - 90)) | (1 << (AionParser.T__95 - 90)))) !== 0))) {
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
		this.enterRule(_localctx, 74, AionParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			_la = this._input.LA(1);
			if (!(((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (AionParser.IDENTIFIER - 120)) | (1 << (AionParser.STRING - 120)) | (1 << (AionParser.NUMBER - 120)))) !== 0))) {
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
		this.enterRule(_localctx, 76, AionParser.RULE_month_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			_la = this._input.LA(1);
			if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (AionParser.T__96 - 97)) | (1 << (AionParser.T__97 - 97)) | (1 << (AionParser.T__98 - 97)) | (1 << (AionParser.T__99 - 97)) | (1 << (AionParser.T__100 - 97)) | (1 << (AionParser.T__101 - 97)) | (1 << (AionParser.T__102 - 97)) | (1 << (AionParser.T__103 - 97)) | (1 << (AionParser.T__104 - 97)) | (1 << (AionParser.T__105 - 97)) | (1 << (AionParser.T__106 - 97)) | (1 << (AionParser.T__107 - 97)) | (1 << (AionParser.T__108 - 97)) | (1 << (AionParser.T__109 - 97)) | (1 << (AionParser.T__110 - 97)) | (1 << (AionParser.T__111 - 97)) | (1 << (AionParser.T__112 - 97)) | (1 << (AionParser.T__113 - 97)) | (1 << (AionParser.T__114 - 97)) | (1 << (AionParser.T__115 - 97)) | (1 << (AionParser.T__116 - 97)) | (1 << (AionParser.T__117 - 97)) | (1 << (AionParser.T__118 - 97)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03~\u0209\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
		"\x02\x0E\x02U\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03c\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x05\x07v\n\x07\x03" +
		"\x07\x05\x07y\n\x07\x03\x07\x03\x07\x03\x07\x05\x07~\n\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x05\b\x85\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\x8F\n\t\x05\t\x91\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\x9A\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA0\n\n\x03" +
		"\n\x03\n\x05\n\xA4\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\xAD\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\xB3\n\n\x03\n\x03\n\x05\n\xB7\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xC2\n\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xCA\n\n\x03\v\x03\v\x03\v\x05" +
		"\v\xCF\n\v\x03\v\x03\v\x03\v\x05\v\xD4\n\v\x03\v\x03\v\x03\v\x05\v\xD9" +
		"\n\v\x03\v\x03\v\x03\v\x05\v\xDE\n\v\x05\v\xE0\n\v\x03\f\x03\f\x03\f\x03" +
		"\f\x07\f\xE6\n\f\f\f\x0E\f\xE9\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r" +
		"\x05\r\xF1\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xF7\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\xFD\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0103\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u0109\n\r\x05\r\u010B\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u011A\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0125\n\x0F\x05\x0F\u0127\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u0132\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0138\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0142" +
		"\n\x11\x03\x11\x03\x11\x07\x11\u0146\n\x11\f\x11\x0E\x11\u0149\v\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0150\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0158\n\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0162\n\x15\f\x15" +
		"\x0E\x15\u0165\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u016F\n\x15\f\x15\x0E\x15\u0172\v\x15\x03\x15\x03" +
		"\x15\x07\x15\u0176\n\x15\f\x15\x0E\x15\u0179\v\x15\x03\x15\x03\x15\x03" +
		"\x15\x07\x15\u017E\n\x15\f\x15\x0E\x15\u0181\v\x15\x03\x15\x05\x15\u0184" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u0197\n\x18\f\x18\x0E\x18\u019A\v\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01A6" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u01B1\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x05\x1B\u01C4\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D1" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01DF\n\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01EF\n!\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x07%" +
		"\u01FE\n%\f%\x0E%\u0201\v%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x02\x02" +
		"\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02\x02\n\x03\x02.3\x03\x02@E\x03\x02FH\x03" +
		"\x02JM\x03\x02N[\x03\x02\\b\x03\x02z|\x03\x02cy\x02\u0234\x02S\x03\x02" +
		"\x02\x02\x04b\x03\x02\x02\x02\x06d\x03\x02\x02\x02\bj\x03\x02\x02\x02" +
		"\no\x03\x02\x02\x02\fu\x03\x02\x02\x02\x0E\x84\x03\x02\x02\x02\x10\x90" +
		"\x03\x02\x02\x02\x12\xC9\x03\x02\x02\x02\x14\xDF\x03\x02\x02\x02\x16\xE1" +
		"\x03\x02\x02\x02\x18\u010A\x03\x02\x02\x02\x1A\u010C\x03\x02\x02\x02\x1C" +
		"\u0126\x03\x02\x02\x02\x1E\u0128\x03\x02\x02\x02 \u0139\x03\x02\x02\x02" +
		"\"\u014F\x03\x02\x02\x02$\u0157\x03\x02\x02\x02&\u0159\x03\x02\x02\x02" +
		"(\u015B\x03\x02\x02\x02*\u0185\x03\x02\x02\x02,\u018D\x03\x02\x02\x02" +
		".\u0193\x03\x02\x02\x020\u019B\x03\x02\x02\x022\u01B0\x03\x02\x02\x02" +
		"4\u01C3\x03\x02\x02\x026\u01C5\x03\x02\x02\x028\u01C7\x03\x02\x02\x02" +
		":\u01D0\x03\x02\x02\x02<\u01DE\x03\x02\x02\x02>\u01E0\x03\x02\x02\x02" +
		"@\u01EE\x03\x02\x02\x02B\u01F0\x03\x02\x02\x02D\u01F3\x03\x02\x02\x02" +
		"F\u01F5\x03\x02\x02\x02H\u01F9\x03\x02\x02\x02J\u0202\x03\x02\x02\x02" +
		"L\u0204\x03\x02\x02\x02N\u0206\x03\x02\x02\x02PR\x05\x04\x03\x02QP\x03" +
		"\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x03" +
		"\x03\x02\x02\x02US\x03\x02\x02\x02Vc\x05\x06\x04\x02Wc\x05\b\x05\x02X" +
		"c\x05\n\x06\x02Yc\x05 \x11\x02Zc\x052\x1A\x02[c\x05,\x17\x02\\c\x05*\x16" +
		"\x02]c\x050\x19\x02^c\x05(\x15\x02_c\x05\x16\f\x02`c\x05\x1A\x0E\x02a" +
		"c\x05\f\x07\x02bV\x03\x02\x02\x02bW\x03\x02\x02\x02bX\x03\x02\x02\x02" +
		"bY\x03\x02\x02\x02bZ\x03\x02\x02\x02b[\x03\x02\x02\x02b\\\x03\x02\x02" +
		"\x02b]\x03\x02\x02\x02b^\x03\x02\x02\x02b_\x03\x02\x02\x02b`\x03\x02\x02" +
		"\x02ba\x03\x02\x02\x02c\x05\x03\x02\x02\x02de\x07\x03\x02\x02ef\x07{\x02" +
		"\x02fg\x07\x04\x02\x02gh\x07z\x02\x02hi\x07\x05\x02\x02i\x07\x03\x02\x02" +
		"\x02jk\x07z\x02\x02kl\x07\x06\x02\x02lm\x05\x0E\b\x02mn\x07\x05\x02\x02" +
		"n\t\x03\x02\x02\x02op\x07z\x02\x02pq\x07\x06\x02\x02qr\x05:\x1E\x02rs" +
		"\x07\x05\x02\x02s\v\x03\x02\x02\x02tv\x07\x07\x02\x02ut\x03\x02\x02\x02" +
		"uv\x03\x02\x02\x02vx\x03\x02\x02\x02wy\x07\b\x02\x02xw\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02y}\x03\x02\x02\x02z~\x05\x10\t\x02{~\x05\x1C\x0F\x02" +
		"|~\x05\x1E\x10\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03\x02\x02\x02" +
		"~\x7F\x03\x02\x02\x02\x7F\x80\x07\x05\x02\x02\x80\r\x03\x02\x02\x02\x81" +
		"\x85\x05\x10\t\x02\x82\x85\x05\x1C\x0F\x02\x83\x85\x05\x1E\x10\x02\x84" +
		"\x81\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85" +
		"\x0F\x03\x02\x02\x02\x86\x87\x07\t\x02\x02\x87\x88\x07{\x02\x02\x88\x91" +
		"\x05\x12\n\x02\x89\x8A\x07\t\x02\x02\x8A\x8B\x07{\x02\x02\x8B\x8E\x05" +
		"\x14\v\x02\x8C\x8D\x07\n\x02\x02\x8D\x8F\x05H%\x02\x8E\x8C\x03\x02\x02" +
		"\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x86\x03\x02\x02" +
		"\x02\x90\x89\x03\x02\x02\x02\x91\x11\x03\x02\x02\x02\x92\x93\x07\v\x02" +
		"\x02\x93\x99\x05@!\x02\x94\x95\x07\f\x02\x02\x95\x96\x05F$\x02\x96\x97" +
		"\x07\r\x02\x02\x97\x98\x05F$\x02\x98\x9A\x03\x02\x02\x02\x99\x94\x03\x02" +
		"\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\xCA\x03\x02\x02\x02\x9B\x9C\x07\v" +
		"\x02\x02\x9C\x9F\x05@!\x02\x9D\x9E\x07\x0E\x02\x02\x9E\xA0\x05F$\x02\x9F" +
		"\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1" +
		"\xA2\x07\n\x02\x02\xA2\xA4\x05H%\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03" +
		"\x02\x02\x02\xA4\xCA\x03\x02\x02\x02\xA5\xA6\x07\x0F\x02\x02\xA6\xAC\x05" +
		"D#\x02\xA7\xA8\x07\f\x02\x02\xA8\xA9\x05F$\x02\xA9\xAA\x07\r\x02\x02\xAA" +
		"\xAB\x05F$\x02\xAB\xAD\x03\x02\x02\x02\xAC\xA7\x03\x02\x02\x02\xAC\xAD" +
		"\x03\x02\x02\x02\xAD\xCA\x03\x02\x02\x02\xAE\xAF\x07\x0F\x02\x02\xAF\xB2" +
		"\x05D#\x02\xB0\xB1\x07\x0E\x02\x02\xB1\xB3\x05F$\x02\xB2\xB0\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB5\x07\n\x02" +
		"\x02\xB5\xB7\x05H%\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02" +
		"\xB7\xCA\x03\x02\x02\x02\xB8\xB9\x07\f\x02\x02\xB9\xBA\x05F$\x02\xBA\xBB" +
		"\x07\r\x02\x02\xBB\xBC\x05F$\x02\xBC\xCA\x03\x02\x02\x02\xBD\xBE\x07\x0E" +
		"\x02\x02\xBE\xC1\x05F$\x02\xBF\xC0\x07\n\x02\x02\xC0\xC2\x05H%\x02\xC1" +
		"\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xCA\x03\x02\x02\x02\xC3" +
		"\xC4\x07\x10\x02\x02\xC4\xC5\x07\x11\x02\x02\xC5\xC6\x05F$\x02\xC6\xC7" +
		"\x07\x12\x02\x02\xC7\xC8\x05F$\x02\xC8\xCA\x03\x02\x02\x02\xC9\x92\x03" +
		"\x02\x02\x02\xC9\x9B\x03\x02\x02\x02\xC9\xA5\x03\x02\x02\x02\xC9\xAE\x03" +
		"\x02\x02\x02\xC9\xB8\x03\x02\x02\x02\xC9\xBD\x03\x02\x02\x02\xC9\xC3\x03" +
		"\x02\x02\x02\xCA\x13\x03\x02\x02\x02\xCB\xCE\x07\x13\x02\x02\xCC\xCD\x07" +
		"\x0E\x02\x02\xCD\xCF\x05F$\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02" +
		"\x02\x02\xCF\xE0\x03\x02\x02\x02\xD0\xD3\x07\x14\x02\x02\xD1\xD2\x07\x0E" +
		"\x02\x02\xD2\xD4\x05F$\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4\xE0\x03\x02\x02\x02\xD5\xD8\x07\x15\x02\x02\xD6\xD7\x07\x0E\x02" +
		"\x02\xD7\xD9\x05F$\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02" +
		"\xD9\xE0\x03\x02\x02\x02\xDA\xDD\x07\x16\x02\x02\xDB\xDC\x07\x0E\x02\x02" +
		"\xDC\xDE\x05F$\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE" +
		"\xE0\x03\x02\x02\x02\xDF\xCB\x03\x02\x02\x02\xDF\xD0\x03\x02\x02\x02\xDF" +
		"\xD5\x03\x02\x02\x02\xDF\xDA\x03\x02\x02\x02\xE0\x15\x03\x02\x02\x02\xE1" +
		"\xE2\x07\t\x02\x02\xE2\xE3\x07z\x02\x02\xE3\xE7\x07\x17\x02\x02\xE4\xE6" +
		"\x05\x18\r\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5" +
		"\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7" +
		"\x03\x02\x02\x02\xEA\xEB\x07\x18\x02\x02\xEB\x17\x03\x02\x02\x02\xEC\xED" +
		"\x07\x19\x02\x02\xED\xEE\x07\x1A\x02\x02\xEE\xF0\x07{\x02\x02\xEF\xF1" +
		"\x07\x1B\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\u010B" +
		"\x03\x02\x02\x02\xF2\xF3\x07\x1C\x02\x02\xF3\xF4\x07\x1A\x02\x02\xF4\xF6" +
		"\x05F$\x02\xF5\xF7\x07\x1B\x02\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03" +
		"\x02\x02\x02\xF7\u010B\x03\x02\x02\x02\xF8\xF9\x07\x1D\x02\x02\xF9\xFA" +
		"\x07\x1A\x02\x02\xFA\xFC\x05H%\x02\xFB\xFD\x07\x1B\x02\x02\xFC\xFB\x03" +
		"\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u010B\x03\x02\x02\x02\xFE\xFF" +
		"\x07\x1E\x02\x02\xFF\u0100\x07\x1A\x02\x02\u0100\u0102\x07{\x02\x02\u0101" +
		"\u0103\x07\x1B\x02\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02" +
		"\x02\x02\u0103\u010B\x03\x02\x02\x02\u0104\u0105\x07\x1F\x02\x02\u0105" +
		"\u0106\x07\x1A\x02\x02\u0106\u0108\x07{\x02\x02\u0107\u0109\x07\x1B\x02" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B" +
		"\x03\x02\x02\x02\u010A\xEC\x03\x02\x02\x02\u010A\xF2\x03\x02\x02\x02\u010A" +
		"\xF8\x03\x02\x02\x02\u010A\xFE\x03\x02\x02\x02\u010A\u0104\x03\x02\x02" +
		"\x02\u010B\x19\x03\x02\x02\x02\u010C\u010D\x07z\x02\x02\u010D\u010E\x07" +
		"\x06\x02\x02\u010E\u010F\x07 \x02\x02\u010F\u0110\x07!\x02\x02\u0110\u0111" +
		"\x05> \x02\u0111\u0112\x07\"\x02\x02\u0112\u0113\x07\x05\x02\x02\u0113" +
		"\x1B\x03\x02\x02\x02\u0114\u0115\x07#\x02\x02\u0115\u0116\x07{\x02\x02" +
		"\u0116\u0119\x05\x14\v\x02\u0117\u0118\x07\n\x02\x02\u0118\u011A\x05H" +
		"%\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u0127" +
		"\x03\x02\x02\x02\u011B\u011C\x07#\x02\x02\u011C\u011D\x07{\x02\x02\u011D" +
		"\u011E\x07\x10\x02\x02\u011E\u011F\x07\x11\x02\x02\u011F\u0120\x05F$\x02" +
		"\u0120\u0121\x07\x12\x02\x02\u0121\u0124\x05F$\x02\u0122\u0123\x07$\x02" +
		"\x02\u0123\u0125\x058\x1D\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125" +
		"\x03\x02\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0114\x03\x02\x02\x02" +
		"\u0126\u011B\x03\x02\x02\x02\u0127\x1D\x03\x02\x02\x02\u0128\u0129\x07" +
		"%\x02\x02\u0129\u012A\x07{\x02\x02\u012A\u012B\x07\x0E\x02\x02\u012B\u012C" +
		"\x05F$\x02\u012C\u012D\x07&\x02\x02\u012D\u012E\x07|\x02\x02\u012E\u0131" +
		"\x07\'\x02\x02\u012F\u0130\x07\x0F\x02\x02\u0130\u0132\x05H%\x02\u0131" +
		"\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0137\x03\x02" +
		"\x02\x02\u0133\u0134\x07(\x02\x02\u0134\u0135\x05H%\x02\u0135\u0136\x07" +
		")\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u0133\x03\x02\x02\x02\u0137" +
		"\u0138\x03\x02\x02\x02\u0138\x1F\x03\x02\x02\x02\u0139\u013A\x07*\x02" +
		"\x02\u013A\u013B\x05&\x14\x02\u013B\u013C\x07\f\x02\x02\u013C\u013D\x05" +
		"\"\x12\x02\u013D\u013E\x07\r\x02\x02\u013E\u0141\x05$\x13\x02\u013F\u0140" +
		"\x07+\x02\x02\u0140\u0142\x07|\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141" +
		"\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0147\x07\x17" +
		"\x02\x02\u0144\u0146\x05\x04\x03\x02\u0145\u0144\x03\x02\x02\x02\u0146" +
		"\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A" +
		"\u014B\x07\x18\x02\x02\u014B!\x03\x02\x02\x02\u014C\u0150\x05> \x02\u014D" +
		"\u0150\x07z\x02\x02\u014E\u0150\x07,\x02\x02\u014F\u014C\x03\x02\x02\x02" +
		"\u014F\u014D\x03\x02\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150#\x03\x02" +
		"\x02\x02\u0151\u0158\x05> \x02\u0152\u0158\x07z\x02\x02\u0153\u0154\x05" +
		"\"\x12\x02\u0154\u0155\x07-\x02\x02\u0155\u0156\x07|\x02\x02\u0156\u0158" +
		"\x03\x02\x02\x02\u0157\u0151\x03\x02\x02\x02\u0157\u0152\x03\x02\x02\x02" +
		"\u0157\u0153\x03\x02\x02\x02\u0158%\x03\x02\x02\x02\u0159\u015A\t\x02" +
		"\x02\x02\u015A\'\x03\x02\x02\x02\u015B\u015C\x074\x02\x02\u015C\u015D" +
		"\x07!\x02\x02\u015D\u015E\x054\x1B\x02\u015E\u015F\x07\"\x02\x02\u015F" +
		"\u0163\x07\x17\x02\x02\u0160\u0162\x05\x04\x03\x02\u0161\u0160\x03\x02" +
		"\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163" +
		"\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165\u0163\x03\x02" +
		"\x02\x02\u0166\u0177\x07\x18\x02\x02\u0167\u0168\x075\x02\x02\u0168\u0169" +
		"\x074\x02\x02\u0169\u016A\x07!\x02\x02\u016A\u016B\x054\x1B\x02\u016B" +
		"\u016C\x07\"\x02\x02\u016C\u0170\x07\x17\x02\x02\u016D\u016F\x05\x04\x03" +
		"\x02\u016E\u016D\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u016E" +
		"\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x03\x02\x02\x02" +
		"\u0172\u0170\x03\x02\x02\x02\u0173\u0174\x07\x18\x02\x02\u0174\u0176\x03" +
		"\x02\x02\x02\u0175\u0167\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177" +
		"\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0183\x03\x02" +
		"\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017B\x075\x02\x02\u017B\u017F" +
		"\x07\x17\x02\x02\u017C\u017E\x05\x04\x03\x02\u017D\u017C\x03\x02\x02\x02" +
		"\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03" +
		"\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182" +
		"\u0184\x07\x18\x02\x02\u0183\u017A\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u0184)\x03\x02\x02\x02\u0185\u0186\x076\x02\x02\u0186\u0187\x07" +
		"z\x02\x02\u0187\u0188\x077\x02\x02\u0188\u0189\x054\x1B\x02\u0189\u018A" +
		"\x078\x02\x02\u018A\u018B\x07z\x02\x02\u018B\u018C\x07\x05\x02\x02\u018C" +
		"+\x03\x02\x02\x02\u018D\u018E\x079\x02\x02\u018E\u018F\x05.\x18\x02\u018F" +
		"\u0190\x078\x02\x02\u0190\u0191\x07z\x02\x02\u0191\u0192\x07\x05\x02\x02" +
		"\u0192-\x03\x02\x02\x02\u0193\u0198\x07z\x02\x02\u0194\u0195\x07\x1B\x02" +
		"\x02\u0195\u0197\x07z\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u019A" +
		"\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02" +
		"\u0199/\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019C\x07:\x02" +
		"\x02\u019C\u019D\x07z\x02\x02\u019D\u019E\x07;\x02\x02\u019E\u019F\x07" +
		"z\x02\x02\u019F\u01A0\x07\x05\x02\x02\u01A01\x03\x02\x02\x02\u01A1\u01A2" +
		"\x07<\x02\x02\u01A2\u01A5\x07z\x02\x02\u01A3\u01A4\x07\x04\x02\x02\u01A4" +
		"\u01A6\x07{\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02" +
		"\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01B1\x07\x05\x02\x02\u01A8\u01A9" +
		"\x07<\x02\x02\u01A9\u01AA\x07=\x02\x02\u01AA\u01AB\x07\x04\x02\x02\u01AB" +
		"\u01AC\x07{\x02\x02\u01AC\u01B1\x07\x05\x02\x02\u01AD\u01AE\x07<\x02\x02" +
		"\u01AE\u01AF\x07>\x02\x02\u01AF\u01B1\x07\x05\x02\x02\u01B0\u01A1\x03" +
		"\x02\x02\x02\u01B0\u01A8\x03\x02\x02\x02\u01B0\u01AD\x03\x02\x02\x02\u01B1" +
		"3\x03\x02\x02\x02\u01B2\u01B3\x07z\x02\x02\u01B3\u01B4\x056\x1C\x02\u01B4" +
		"\u01B5\x05L\'\x02\u01B5\u01C4\x03\x02\x02\x02\u01B6\u01B7\x07?\x02\x02" +
		"\u01B7\u01B8\x07!\x02\x02\u01B8\u01B9\x05D#\x02\u01B9\u01BA\x07\"\x02" +
		"\x02\u01BA\u01BB\x07;\x02\x02\u01BB\u01BC\x072\x02\x02\u01BC\u01BD\x05" +
		"6\x1C\x02\u01BD\u01BE\x07|\x02\x02\u01BE\u01C4\x03\x02\x02\x02\u01BF\u01C0" +
		"\x07\x1F\x02\x02\u01C0\u01C1\x056\x1C\x02\u01C1\u01C2\x07{\x02\x02\u01C2" +
		"\u01C4\x03\x02\x02\x02\u01C3\u01B2\x03\x02\x02\x02\u01C3\u01B6\x03\x02" +
		"\x02\x02\u01C3\u01BF\x03\x02\x02\x02\u01C45\x03\x02\x02\x02\u01C5\u01C6" +
		"\t\x03\x02\x02\u01C67\x03\x02\x02\x02\u01C7\u01C8\t\x04\x02\x02\u01C8" +
		"9\x03\x02\x02\x02\u01C9\u01D1\x05> \x02\u01CA\u01D1\x05F$\x02\u01CB\u01D1" +
		"\x05H%\x02\u01CC\u01D1\x07{\x02\x02\u01CD\u01D1\x07|\x02\x02\u01CE\u01D1" +
		"\x07z\x02\x02\u01CF\u01D1\x05<\x1F\x02\u01D0\u01C9\x03\x02\x02\x02\u01D0" +
		"\u01CA\x03\x02\x02\x02\u01D0\u01CB\x03\x02\x02\x02\u01D0\u01CC\x03\x02" +
		"\x02\x02\u01D0\u01CD\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0" +
		"\u01CF\x03\x02\x02\x02\u01D1;\x03\x02\x02\x02\u01D2\u01D3\x07?\x02\x02" +
		"\u01D3\u01D4\x07!\x02\x02\u01D4\u01D5\x05D#\x02\u01D5\u01D6\x07\"\x02" +
		"\x02\u01D6\u01D7\x07;\x02\x02\u01D7\u01D8\x072\x02\x02\u01D8\u01DF\x03" +
		"\x02\x02\x02\u01D9\u01DA\x07 \x02\x02\u01DA\u01DB\x07!\x02\x02\u01DB\u01DC" +
		"\x05> \x02\u01DC\u01DD\x07\"\x02\x02\u01DD\u01DF\x03\x02\x02\x02\u01DE" +
		"\u01D2\x03\x02\x02\x02\u01DE\u01D9\x03\x02\x02\x02\u01DF=\x03\x02\x02" +
		"\x02\u01E0\u01E1\x07|\x02\x02\u01E1\u01E2\x07I\x02\x02\u01E2\u01E3\x07" +
		"|\x02\x02\u01E3\u01E4\x07I\x02\x02\u01E4\u01E5\x07|\x02\x02\u01E5?\x03" +
		"\x02\x02\x02\u01E6\u01EF\x05> \x02\u01E7\u01EF\x05D#\x02\u01E8\u01E9\x05" +
		"B\"\x02\u01E9\u01EA\x05D#\x02\u01EA\u01EF\x03\x02\x02\x02\u01EB\u01EC" +
		"\x05B\"\x02\u01EC\u01ED\x05N(\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01E6" +
		"\x03\x02\x02\x02\u01EE\u01E7\x03\x02\x02\x02\u01EE\u01E8\x03\x02\x02\x02" +
		"\u01EE\u01EB\x03\x02\x02\x02\u01EFA\x03\x02\x02\x02\u01F0\u01F1\x07|\x02" +
		"\x02\u01F1\u01F2\t\x05\x02\x02\u01F2C\x03\x02\x02\x02\u01F3\u01F4\t\x06" +
		"\x02\x02\u01F4E\x03\x02\x02\x02\u01F5\u01F6\x07|\x02\x02\u01F6\u01F7\x07" +
		"\x1A\x02\x02\u01F7\u01F8\x07|\x02\x02\u01F8G\x03\x02\x02\x02\u01F9\u01FA" +
		"\x07|\x02\x02\u01FA\u01FF\x05J&\x02\u01FB\u01FC\x07|\x02\x02\u01FC\u01FE" +
		"\x05J&\x02\u01FD\u01FB\x03\x02\x02\x02\u01FE\u0201\x03\x02\x02\x02\u01FF" +
		"\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200I\x03\x02\x02" +
		"\x02\u0201\u01FF\x03\x02\x02\x02\u0202\u0203\t\x07\x02\x02\u0203K\x03" +
		"\x02\x02\x02\u0204\u0205\t\b\x02\x02\u0205M\x03\x02\x02\x02\u0206\u0207" +
		"\t\t\x02\x02\u0207O\x03\x02\x02\x024Sbux}\x84\x8E\x90\x99\x9F\xA3\xAC" +
		"\xB2\xB6\xC1\xC9\xCE\xD3\xD8\xDD\xDF\xE7\xF0\xF6\xFC\u0102\u0108\u010A" +
		"\u0119\u0124\u0126\u0131\u0137\u0141\u0147\u014F\u0157\u0163\u0170\u0177" +
		"\u017F\u0183\u0198\u01A5\u01B0\u01C3\u01D0\u01DE\u01EE\u01FF";
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
	public ordinal_specifier(): Ordinal_specifierContext | undefined {
		return this.tryGetRuleContext(0, Ordinal_specifierContext);
	}
	public month_name(): Month_nameContext | undefined {
		return this.tryGetRuleContext(0, Month_nameContext);
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


export class Ordinal_specifierContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(AionParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AionParser.RULE_ordinal_specifier; }
	// @Override
	public enterRule(listener: AionListener): void {
		if (listener.enterOrdinal_specifier) {
			listener.enterOrdinal_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: AionListener): void {
		if (listener.exitOrdinal_specifier) {
			listener.exitOrdinal_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AionVisitor<Result>): Result {
		if (visitor.visitOrdinal_specifier) {
			return visitor.visitOrdinal_specifier(this);
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


