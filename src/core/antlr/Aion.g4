grammar Aion;

// Parser Rules
program             : statement* ;

statement
    : import_stmt
    | assignment_stmt
    | loop_stmt
    | export_stmt
    | merge_stmt
    | filter_stmt
    | include_stmt
    | conditional_stmt
    | structured_event_stmt
    | week_start_stmt
    ;

import_stmt         : 'import' STRING 'as' IDENTIFIER ';' ;

assignment_stmt     : IDENTIFIER '=' declaration ';' ;

default_declaration : 'new' ( event_decl | task_decl | pomodoro_decl ) ;

declaration         : event_decl
                    | task_decl
                    | pomodoro_decl
                    ;

event_decl          : 'event' STRING event_timing ( 'at' STRING )? ;

event_timing        : 'on' date 'from' time 'to' time
                    | 'every' weekday 'from' time 'to' time
                    | 'from' time 'to' time
                    ;

structured_event_stmt
                    : 'event' IDENTIFIER '{' structured_event_field* '}' ;

structured_event_field
                    : 'name' ':' STRING ';'
                    | 'start' ':' time ';'
                    | 'duration' ':' duration ';'
                    | 'location' ':' STRING ';'
                    ;

week_start_stmt     : IDENTIFIER '=' 'weeknumber' '(' date ')' ';' ;

task_decl           : 'task' 'named' STRING task_timing ( 'with' 'alarm' )?
                    | 'task' 'named' STRING 'find' 'between' time 'and' time 'using' strategy
                    ;

task_timing         : 'at' time 'on' 'each' weekday ;

pomodoro_decl       : 'pomodoro' STRING 'at' time 'repeat' NUMBER 'times' ( 'with' duration 'break' )? ;

loop_stmt           : 'each' loop_unit 'from' date 'to' date '{' statement* '}' ;

loop_unit           : 'day' | 'week' | 'month' ;

conditional_stmt    : 'if' '(' condition ')' '{' statement* '}'
                      ( 'else' 'if' '(' condition ')' '{' statement* '}' )*
                      ( 'else' '{' statement* '}' )?
                      ;

filter_stmt         : 'filter' IDENTIFIER 'where' condition 'into' IDENTIFIER ';' ;

merge_stmt          : 'merge' IDENTIFIER ',' IDENTIFIER 'into' IDENTIFIER ';' ;

include_stmt        : 'include' IDENTIFIER 'in' IDENTIFIER ';' ;

export_stmt         : 'export' IDENTIFIER ( 'as' STRING )? ';'
                    | 'export' 'default' 'as' STRING ';'
                    | 'export' 'all' ';'
                    ;

condition           : IDENTIFIER comparison_op value
                    | 'count' '(' weekday ')' 'in' 'month' comparison_op NUMBER
                    ;

comparison_op       : '==' | '!=' | '<' | '<=' | '>' | '>=' ;

strategy            : 'random' | 'earliest' | 'latest' ;

date                : DAY '.' MONTH
                    | DAY month_name
                    | YEAR '.' MONTH '.' DAY
                    ;

weekday             : 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday'
                    | 'Friday' | 'Saturday' | 'Sunday'
                    ;

time                : HOUR ':' MINUTE
                    | HOUR_12 ':' MINUTE am_pm
                    ;

duration            : NUMBER 'm'
                    | NUMBER 'h'
                    ;

value               : STRING
                    | NUMBER
                    ;

// Lexer Rules
IDENTIFIER          : [a-zA-Z_] [a-zA-Z0-9_]* ;

STRING              : '"' ( ~["\\] | '\\' . )* '"' ;

NUMBER              : [0-9]+ ;

DAY                 : [0-9]+ ; // 1-31, but validated elsewhere
MONTH               : [0-9]+ ; // 1-12, validated elsewhere
YEAR                : [0-9]+ ;

HOUR                : [0-9]+ ;
MINUTE              : [0-9]+ ;
HOUR_12             : [0-9]+ ;

am_pm               : 'AM' | 'PM' ;

month_name          : 'January'
                    | 'February'
                    | 'March'
                    | 'April'
                    | 'May'
                    | 'June'
                    | 'July'
                    | 'August'
                    | 'September'
                    | 'October'
                    | 'November'
                    | 'December'
                    ;

// Skip whitespace and comments
WS                  : [ \t\r\n]+ -> skip ;

COMMENT             : '//' ~[\r\n]* -> skip ;
