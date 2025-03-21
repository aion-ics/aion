## Grammar in BNF form
```bnf
program         ::= (import_stmt | constant_stmt | event_stmt | loop_stmt | filter_stmt | export_stmt | query_stmt | modify_stmt | conditional_stmt)*

import_stmt     ::= "import" STRING "as" IDENTIFIER ";"

constant_stmt   ::= IDENTIFIER "=" expression ";"

event_stmt      ::= "new" ("task" | "event") STRING (date_time | recurrence) duration? dependencies? ";"
                 | "pomodoro" STRING "at" time "repeat" INT "times" ( "every" duration "with" duration "pause")? ";"
                 | "event" IDENTIFIER "{" event_properties "}" ";"

event_properties ::= ("name" ":" STRING ";")? 
                     ("start" ":" time ";")? 
                     ("duration" ":" duration ";")? 
                     ("location" ":" STRING ";")?

dependencies    ::= "after" STRING | "before" STRING

loop_stmt       ::= "iterate" ("weeks" | "days" | "months") "from" expression "to" expression step? "{" event_stmt* "}"

step            ::= "step" INT

query_stmt      ::= IDENTIFIER "=" "pick" ("tasks" | "events") where_clause? time_range? order_clause? ";"

modify_stmt     ::= "delete" ("all" | IDENTIFIER) where_clause? ";"
                 | "update" IDENTIFIER "set" update_clause ";"

update_clause   ::= IDENTIFIER "=" (STRING | NUMBER)

filter_stmt     ::= "filter" IDENTIFIER "where" filter_condition "into" IDENTIFIER ";"

filter_condition ::= IDENTIFIER comparison_op (STRING | NUMBER | "(" STRING_LIST ")")

comparison_op   ::= "==" | "!=" | ">" | "<" | ">=" | "<=" | "in"

export_stmt     ::= "export" (IDENTIFIER | "all") ("as" STRING)? ";"

conditional_stmt ::= "if" "(" condition ")" "{" (event_stmt | modify_stmt | query_stmt)* "}"
                     ("else if" "(" condition ")" "{" (event_stmt | modify_stmt | query_stmt)* "}")*
                     ("else" "{" (event_stmt | modify_stmt | query_stmt)* "}")?

expression      ::= NUMBER | STRING | "date.now()" | function_call

function_call   ::= IDENTIFIER "(" expression* ")"

date_time       ::= "on" date "at" time
recurrence      ::= ("daily" | "every" STRING) "at" time
                 | "repeat" INT ("times" | "every" duration)
                 | "on" day_of_week "at" time
                 | "on" day_of_week ordinal "at" time

date            ::= INT ("st" | "nd" | "rd" | "th") STRING
time            ::= INT ":" INT
day_of_week     ::= "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
ordinal         ::= "1st" | "2nd" | "3rd" | "4th" | "5th" | "last"

STRING          ::= "\"" .* "\""
STRING_LIST     ::= STRING ("," STRING)*
IDENTIFIER      ::= [a-zA-Z_][a-zA-Z0-9_]*
NUMBER          ::= [0-9]+
```