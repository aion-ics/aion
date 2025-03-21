grammar Aion;

// ---------------------------------------------
// Parser Rules
// ---------------------------------------------

program
    : statement* EOF
    ;

statement
    : importStmt
    | assignmentStmt
    | loopStmt
    | exportStmt
    | mergeStmt
    | filterStmt
    | includeStmt
    | conditionalStmt
    | structuredEventStmt
    | weekStartStmt
    ;

importStmt
    : 'import' STRING 'as' ID ';'
    ;

assignmentStmt
    : ID '=' declaration ';'
    ;

declaration
    : eventDecl
    | taskDecl
    | pomodoroDecl
    ;

eventDecl
    : 'event' STRING eventTiming ( 'at' STRING )?
    ;

eventTiming
    : 'on' date 'from' time 'to' time
    | 'every' weekday 'from' time 'to' time
    | 'from' time 'to' time
    ;

structuredEventStmt
    : 'event' ID '{' structuredEventField* '}'
    ;

structuredEventField
    : 'name' ':' STRING ';'
    | 'start' ':' time ';'
    | 'duration' ':' duration ';'
    | 'location' ':' STRING ';'
    ;

weekStartStmt
    : ID '=' 'weeknumber' '(' date ')' ';'
    ;

taskDecl
    : 'task' 'named' STRING taskTiming ( 'with' 'alarm' )?
    | 'task' 'named' STRING 'find' 'between' time 'and' time 'using' strategy
    ;

taskTiming
    : 'at' time 'on' 'each' weekday
    ;

pomodoroDecl
    : 'pomodoro' STRING 'at' time 'repeat' INT 'times' ( 'with' duration 'break' )?
    ;

loopStmt
    : 'each' loopUnit 'from' date 'to' date '{' statement* '}'
    ;

loopUnit
    : 'day' | 'week' | 'month'
    ;

conditionalStmt
    : 'if' '(' condition ')' '{' statement* '}'
      ( 'else' 'if' '(' condition ')' '{' statement* '}' )*
      ( 'else' '{' statement* '}' )?
    ;

filterStmt
    : 'filter' ID 'where' condition 'into' ID ';'
    ;

mergeStmt
    : 'merge' ID ',' ID 'into' ID ';'
    ;

includeStmt
    : 'include' ID 'in' ID ';'
    ;

exportStmt
    : 'export' ID ( 'as' STRING )? ';'
    | 'export' 'default' 'as' STRING ';'
    | 'export' 'all' ';'
    ;

// ---------------------------------------------
// Lexer-Compatible Subrules
// ---------------------------------------------

condition
    : ID comparisonOp value
    | 'count' '(' weekday ')' 'in' 'month' comparisonOp INT
    ;

comparisonOp
    : '==' | '!=' | '<' | '<=' | '>' | '>='
    ;

strategy
    : 'random' | 'earliest' | 'latest'
    ;

date
    : DAY '.' MONTH
    | DAY monthName
    | YEAR '.' MONTH '.' DAY
    ;

weekday
    : 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
    ;

time
    : HOUR ':' MINUTE
    | HOUR12 ':' MINUTE AMPM
    ;

duration
    : INT 'm'
    | INT 'h'
    ;

value
    : STRING
    | INT
    ;

// ---------------------------------------------
// Tokens
// ---------------------------------------------

ID      : [a-zA-Z_][a-zA-Z0-9_]* ;
INT     : [0-9]+ ;
STRING  : '"' (~["\r\n])* '"' ;

HOUR : '00' .. '23' ;
MINUTE : '00' .. '59' ;
HOUR12 : '01' .. '12' ;
AMPM    : 'AM' | 'PM' ;

DAY : [0-2]?[0-9] | '30' | '31' ;
MONTH : '01' .. '12' ;
YEAR    : [0-9]{4} ;

fragment
monthName
    : 'January' | 'February' | 'March' | 'April' | 'May' | 'June'
    | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'
    ;

// ---------------------------------------------
// Whitespace and Comments
// ---------------------------------------------

WS      : [ \t\r\n]+ -> skip ;
COMMENT : '//' ~[\r\n]* -> skip ;