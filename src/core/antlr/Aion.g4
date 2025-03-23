grammar Aion;

// Parser Rules
program             : statement* ;

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
    | week_start_stmt
    | default_declaration
    ;

import_stmt         : 'import' STRING 'as' IDENTIFIER ';' ;

assignment_stmt     : IDENTIFIER '=' declaration ';' ;

value_assignment_stmt
                    : IDENTIFIER '=' value_expr ';' ;

default_declaration : ('$$$')? 'new'? ( event_decl | task_decl | pomodoro_decl ) ';' ;

declaration         : event_decl
                    | task_decl
                    | pomodoro_decl
                    ;

event_decl          : 'event' STRING event_timing
                    | 'event' STRING temporal_expr ('for' duration)? 
                    ;

event_timing        : 'on' date_specifier ('from' time 'to' time)?
                    | 'on' date_specifier ('at' time)? ('for' duration)?
                    | 'every' weekday ('from' time 'to' time)?
                    | 'every' weekday ('at' time)? ('for' duration)?
                    | 'from' time 'to' time
                    | 'at' time ('for' duration)?
                    | 'find' 'between' time 'and' time
                    ;

temporal_expr       : 'daily' ('at' time)?
                    | 'weekly' ('at' time)?
                    | 'monthly' ('at' time)?
                    | 'yearly' ('at' time)?
                    ;

structured_event_stmt
                    : 'event' IDENTIFIER '{' structured_event_field* '}' ;

structured_event_field
                    : 'name' ':' STRING ','?
                    | 'start' ':' time ','?
                    | 'duration' ':' duration ','?
                    | 'location' ':' STRING ','?
                    | 'category' ':' STRING ','?
                    ;

week_start_stmt     : IDENTIFIER '=' 'weeknumber' '(' date ')' ';' ;

task_decl           : 'task' STRING temporal_expr ('for' duration)?
                    | 'task' STRING 'find' 'between' time 'and' time ('using' strategy)?
                    ;

pomodoro_decl       : 'pomodoro' STRING 'at' time 'repeat' NUMBER 'times' 
                      ('every' duration)? ('with' duration 'pause')? ;

loop_stmt           : 'iterate' loop_unit 'from' loop_start 'to' loop_end ('step' NUMBER)? '{' statement* '}' ;

loop_start          : date
                    | IDENTIFIER
                    | 'today'
                    ;

loop_end            : date
                    | IDENTIFIER
                    | loop_start '+' NUMBER
                    ;

loop_unit           : 'day' | 'days' | 'week' | 'weeks' | 'month' | 'months' ;

conditional_stmt    : 'if' '(' condition ')' '{' statement* '}'
                      ( 'else' 'if' '(' condition ')' '{' statement* '}' )*
                      ( 'else' '{' statement* '}' )?
                      ;

filter_stmt         : 'filter' IDENTIFIER 'where' condition 'into' IDENTIFIER ';' ;

merge_stmt          : 'merge' identifier_list 'into' IDENTIFIER ';' ;

identifier_list     : IDENTIFIER (',' IDENTIFIER)* ;

include_stmt        : 'include' IDENTIFIER 'in' IDENTIFIER ';' ;

export_stmt         : 'export' IDENTIFIER ( 'as' STRING )? ';'
                    | 'export' 'default' 'as' STRING ';'
                    | 'export' 'all' ';'
                    ;

condition           : IDENTIFIER comparison_op value
                    | 'count' '(' weekday ')' 'in' 'month' comparison_op NUMBER
                    | 'category' comparison_op STRING
                    ;

comparison_op       : '==' | '!=' | '<' | '<=' | '>' | '>=' ;

strategy            : 'random' | 'earliest' | 'latest' ;

value_expr          : date
                    | time
                    | duration
                    | STRING
                    | NUMBER
                    | IDENTIFIER
                    | function_call
                    ;

function_call       : 'count' '(' weekday ')' 'in' 'month'
                    | 'weeknumber' '(' date ')'
                    ;

date                : NUMBER '.' NUMBER '.' NUMBER     // YYYY.MM.DD
                    ;

date_specifier      : date
                    | weekday
                    | ordinal_specifier weekday
                    | ordinal_specifier month_name
                    ;

ordinal_specifier   : NUMBER ('st'|'nd'|'rd'|'th') ;

weekday             : 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday'
                    | 'Friday' | 'Saturday' | 'Sunday'
                    | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
                    ;

time                : NUMBER ':' NUMBER
                    ;

duration            : NUMBER time_unit (NUMBER time_unit)*
                    ;

time_unit           : 'h' | 'm' | 'min' | 'hour' | 'hours' | 'minute' | 'minutes'
                    ;

value               : STRING
                    | NUMBER
                    | IDENTIFIER
                    ;

// Lexer Rules
IDENTIFIER          : [a-zA-Z_] [a-zA-Z0-9_]* ;

STRING              : '"' ( ~["\\] | '\\' . )* '"' ;

NUMBER              : [0-9]+ ;

// Skip whitespace and comments
WS                  : [ \t\r\n]+ -> skip ;

COMMENT             : '//' ~[\r\n]* -> skip ;

month_name          : 'January' | 'February' | 'March' | 'April' | 'May' | 'June'
                    | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'
                    | 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun'
                    | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
                    | 'March'
                    ;