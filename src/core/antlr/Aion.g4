grammar Aion;

// ==================
//   Parser Rules
// ==================

program
    : statement* EOF
    ;

// ----- Statements -----
statement
    : import_stmt
    | assignment_stmt
    | value_assignment_stmt
    | loop_stmt
    | export_stmt
    | merge_stmt
    | filter_stmt
    | include_stmt
    | conditional_stmt
    | structured_event_stmt
    | default_declaration
    ;

// ----- Imports -----
import_stmt
    : 'import' STRING 'as' IDENTIFIER ';'
    ;

// ----- Assignments -----
assignment_stmt
    : IDENTIFIER '=' declaration ';'
    ;

value_assignment_stmt
    : IDENTIFIER '=' value_expr ';'
    ;

default_declaration
    : 'new' ( event_decl | task_decl | pomodoro_decl ) ';'
    ;

declaration
    : event_decl
    | task_decl
    | pomodoro_decl
    ;

// ==================
//   Event Declarations
// ==================

event_decl
    : 'event' STRING recurrence_expr event_time_spec
    | 'event' STRING 'on' date event_time_spec
    ;

event_time_spec
    : 'at' time 'for' duration
    | 'from' time 'to' time
    | 'for' duration 'find' 'between' time 'to' time
    ;

recurrence_expr
    : 'daily' ('at' time)?
    | 'weekly' 'on' weekday_list (time_range | time_at)?
    | 'monthly' 'on' NUMBER (time_range | time_at)?
    | 'yearly' 'on' date (time_range | time_at)?
    | 'each' NUMBER loop_unit (time_range | time_at)?
    ;

// ----- Structured Event Block -----
structured_event_stmt
    : 'event' IDENTIFIER '{' structured_event_field* '}'
    ;

structured_event_field
    : 'name' ':' STRING ','?
    | 'start' ':' time ','?
    | 'duration' ':' duration ','?
    | 'location' ':' STRING ','?
    | 'category' ':' STRING ','?
    ;

// ==================
//   Task & Pomodoro
// ==================

// ----- Task Declaration -----
task_decl
    : 'task' STRING 'on' date task_time_spec
    | 'task' STRING recurrence_expr task_time_spec
    ;

task_time_spec
    : 'at' time
    | 'find' 'between' time 'and' time ('using' strategy)?
    ;

// ----- Pomodoro Declaration -----
pomodoro_decl
    : 'pomodoro' STRING 'on' date 'at' time
      'repeat' NUMBER 'times'
      ('every' duration)?
      ('with' duration 'pause')?
    | 'pomodoro' STRING recurrence_expr 'at' time
      'repeat' NUMBER 'times'
      ('every' duration)?
      ('with' duration 'pause')?
    ;

// ==================
//   Loops & Conditionals
// ==================

loop_stmt
    : 'each' loop_unit 'from' loop_start 'to' loop_end ('step' NUMBER)? '{' statement* '}'
    ;

loop_start
    : date
    | IDENTIFIER
    | 'today'
    ;

loop_end
    : date
    | IDENTIFIER
    | loop_start '+' NUMBER
    ;

loop_unit
    : 'day' | 'days' | 'week' | 'weeks' | 'month' | 'months'
    ;

conditional_stmt
    : 'if' '(' condition ')' '{' statement* '}'
      ( 'else' 'if' '(' condition ')' '{' statement* '}' )*
      ( 'else' '{' statement* '}' )?
    ;

// ==================
//   Merging & Filtering
// ==================

filter_stmt
    : 'filter' IDENTIFIER 'where' condition 'into' IDENTIFIER ';'
    ;

merge_stmt
    : 'merge' identifier_list 'into' IDENTIFIER ';'
    ;

identifier_list
    : IDENTIFIER (',' IDENTIFIER)*
    ;

include_stmt
    : 'include' IDENTIFIER 'in' IDENTIFIER ';'
    ;

export_stmt
    : 'export' IDENTIFIER ( 'as' STRING )? ';'
    | 'export' 'default' 'as' STRING ';'
    | 'export' 'all' ';'
    ;

// ==================
//   Helpers & Expressions
// ==================

condition
    : IDENTIFIER comparison_op value
    | 'count' '(' weekday ')' 'in' 'month' comparison_op NUMBER
    | 'category' comparison_op STRING
    ;

comparison_op
    : '==' | '!=' | '<' | '<=' | '>' | '>='
    ;

strategy
    : 'random' | 'earliest' | 'latest'
    ;

value_expr
    : date
    | time
    | duration
    | STRING
    | NUMBER
    | IDENTIFIER
    | function_call
    | declaration
    ;

function_call
    : 'count' '(' weekday ')' 'in' 'month'
    | 'weeknumber' '(' date ')'
    ;

// ==================
//   Date & Time
// ==================

date
    : NUMBER '.' NUMBER ('.' NUMBER)?                     // DD.MM or DD.MM.YYYY
    ;

date_specifier
    : date
    | weekday
    ;

weekday_list
    : weekday (',' weekday)*
    ;

weekday
    : 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday'
    | 'Friday' | 'Saturday' | 'Sunday'
    | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
    ;

time
    : NUMBER ':' NUMBER
    ;

time_at
    : 'at' time
    ;

time_range
    : 'from' time 'to' time
    ;

duration
    : NUMBER time_unit (NUMBER time_unit)*
    ;

time_unit
    : 'h' | 'm'
    ;

value
    : STRING
    | NUMBER
    | IDENTIFIER
    ;

// ==================
//   Lexer Rules
// ==================

IDENTIFIER
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

STRING
    : '"' ( ~["\\] | '\\' . )* '"'
    ;

NUMBER
    : [0-9]+
    ;

// Skip whitespace and comments
WS
    : [ \t\r\n]+ -> skip
    ;

COMMENT
    : '//' ~[\r\n]* -> skip
    ;

// ==================
//   Month Name Fragments
// ==================

fragment JAN : [jJ][aA][nN] | [jJ][aA][nN][uU][aA][rR][yY] ;
fragment FEB : [fF][eE][bB] | [fF][eE][bB][rR][uU][aA][rR][yY] ;
fragment MAR : [mM][aA][rR] | [mM][aA][rR][cC][hH] ;
fragment APR : [aA][pP][rR] | [aA][pP][rR][iI][lL] ;
fragment MAY : [mM][aA][yY] ;
fragment JUN : [jJ][uU][nN] | [jJ][uU][nN][eE] ;
fragment JUL : [jJ][uU][lL] | [jJ][uU][lL][yY] ;
fragment AUG : [aA][uU][gG] | [aA][uU][gG][uU][sS][tT] ;
fragment SEP : [sS][eE][pP] | [sS][eE][pP][tT][eE][mM][bB][eE][rR] ;
fragment OCT : [oO][cC][tT] | [oO][cC][tT][oO][bB][eE][rR] ;
fragment NOV : [nN][oO][vV] | [nN][oO][vV][eE][mM][bB][eE][rR] ;
fragment DEC : [dD][eE][cC] | [dD][eE][cC][eE][mM][bB][eE][rR] ;

MONTH_NAME
    : JAN | FEB | MAR | APR | MAY | JUN
    | JUL | AUG | SEP | OCT | NOV | DEC
    ;