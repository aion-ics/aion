grammar Aion;

// Parser Rules

program
    : statement* EOF
    ;

statement
    : importStmt
    | taskStmt
    | eventStmt
    | pomodoroStmt
    | structuredEventStmt
    | exportDefaultStmt
    | startWeekStmt
    | iterateStmt
    | conditionalStmt
    | includeStmt
    | mergeStmt
    | filterStmt
    | exportStmt
    ;

importStmt
    : 'import' STRING 'as' ID ';'
    ;

taskStmt
    : 'new' 'task' STRING recurrence? 'at' timeExpr ';'
    ;

eventStmt
    : 'new' 'event' STRING recurrence? dateExpr? 'at' timeExpr durationExpr? ';'
    ;

pomodoroStmt
    : ID? '='? 'pomodoro' STRING 'at' timeExpr 'repeat' INT 'times' pomodoroExtras? ';'
    ;

structuredEventStmt
    : 'event' ID '{' structuredEventBody '}'
    ;

structuredEventBody
    : (structuredEventField ';')*
    ;

structuredEventField
    : 'name' ':' STRING
    | 'start' ':' timeExpr
    | 'duration' ':' durationExpr
    | 'location' ':' STRING
    ;

exportDefaultStmt
    : 'export' 'default' 'as' STRING ';'
    ;

startWeekStmt
    : ID '=' 'weeknumber' '(' DATE ')' ';'
    ;

iterateStmt
    : 'iterate' ('weeks' | 'days' | 'months') 'from' iterateFrom 'to' iterateTo stepExpr? '{' statement* '}'
    ;

conditionalStmt
    : 'if' '(' conditionExpr ')' '{' statement* '}' ('else' ('if' '(' conditionExpr ')' '{' statement* '}' | '{' statement* '}'))?
    ;

includeStmt
    : 'include' ID 'in' ID ';'
    ;

mergeStmt
    : 'merge' ID (',' ID)* 'into' ID ';'
    ;

filterStmt
    : 'filter' ID 'where' filterCondition 'into' ID ';'
    ;

exportStmt
    : 'export' exportTarget ('as' STRING)? ';'
    ;

exportTarget
    : ID
    | 'all'
    ;

// Fragments and Subrules

recurrence
    : 'daily'
    ;

dateExpr
    : 'on' (DATE | dayOfWeekExpr)
    ;

dayOfWeekExpr
    : DAY_OF_WEEK (ordinalExpr)?
    ;

ordinalExpr
    : '1st' | '2nd' | '3rd' | '4th' | '5th'
    ;

timeExpr
    : TIME
    ;

durationExpr
    : 'for' durationValue
    ;

durationValue
    : durationPart (durationPart)*
    ;

durationPart
    : INT 'h'
    | INT 'm'
    ;

pomodoroExtras
    : 'every' durationValue 'with' durationValue 'pause'
    ;

iterateFrom
    : DATE
    | ID
    | 'today'
    ;

iterateTo
    : DATE
    | '+' INT
    | 'today' '+' INT
    ;

stepExpr
    : 'step' INT
    ;

conditionExpr
    : ID '==' INT
    ;

filterCondition
    : 'category' ('==' | '!=') STRING
    ;

// Lexer Rules

ID          : [a-zA-Z_][a-zA-Z0-9_]* ;
INT         : [0-9]+ ;
TIME        : [0-2][0-9] ':' [0-5][0-9] ;
DATE        : [0-9]{4} '.' [0-9]{2} '.' [0-9]{2} ;
STRING      : '"' (~["\r\n])* '"' ;

DAY_OF_WEEK : 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' ;

// Keywords (match after ID to avoid conflicts)
fragment
IMPORT      : 'import' ;
fragment
NEW         : 'new' ;
fragment
TASK        : 'task' ;
fragment
EVENT       : 'event' ;
fragment
POMODORO    : 'pomodoro' ;
fragment
DAILY       : 'daily' ;
fragment
REPEAT      : 'repeat' ;
fragment
EVERY       : 'every' ;
fragment
WITH        : 'with' ;
fragment
PAUSE       : 'pause' ;
fragment
INCLUDE     : 'include' ;
fragment
MERGE       : 'merge' ;
fragment
FILTER      : 'filter' ;
fragment
EXPORT      : 'export' ;
fragment
DEFAULT     : 'default' ;
fragment
AS          : 'as' ;
fragment
FROM        : 'from' ;
fragment
TO          : 'to' ;
fragment
STEP        : 'step' ;
fragment
IF          : 'if' ;
fragment
ELSE        : 'else' ;
fragment
WHERE       : 'where' ;

// Whitespace and Comments
WS          : [ \t\r\n]+ -> skip ;
COMMENT     : '//' ~[\r\n]* -> skip ;
