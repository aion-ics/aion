## Grammar in BNF form

```bnf
<program> ::= { <statement> }

<statement> ::= <import_stmt>
              | <assignment_stmt>
              | <loop_stmt>
              | <export_stmt>
              | <merge_stmt>
              | <filter_stmt>
              | <include_stmt>
              | <conditional_stmt>
              | <structured_event_stmt>     (* newly added *)
              | <week_start_stmt>           (* newly added *)

<import_stmt> ::= "import" <string> "as" <identifier> ";"

<assignment_stmt> ::= <identifier> "=" <declaration> ";"

<declaration> ::= <event_decl>
                | <task_decl>
                | <pomodoro_decl>

<event_decl> ::= "event" <string> <event_timing> [ "at" <string> ]

<event_timing> ::= "on" <date> "from" <time> "to" <time>
                 | "every" <weekday> "from" <time> "to" <time>
                 | "from" <time> "to" <time>

<structured_event_stmt> ::= "event" <identifier> "{" { <structured_event_field> ";" } "}"

<structured_event_field> ::= "name" ":" <string>
                           | "start" ":" <time>
                           | "duration" ":" <duration>
                           | "location" ":" <string>

<week_start_stmt> ::= <identifier> "=" "weeknumber" "(" <date> ")" ";"

<task_decl> ::= "task named" <string> <task_timing> [ "with alarm" ]
              | "task named" <string> "find between" <time> "and" <time> "using" <strategy>

<task_timing> ::= "at" <time> "on each" <weekday>

<pomodoro_decl> ::= "pomodoro" <string> "at" <time> "repeat" <number> "times" [ "with" <duration> "break" ]

<loop_stmt> ::= "each" <loop_unit> "from" <date> "to" <date> "{" { <statement> } "}"

<loop_unit> ::= "day" | "week" | "month"

<conditional_stmt> ::= "if" "(" <condition> ")" "{" { <statement> } "}"
                     { "else if" "(" <condition> ")" "{" { <statement> } "}" }
                     [ "else" "{" { <statement> } "}" ]

<filter_stmt> ::= "filter" <identifier> "where" <condition> "into" <identifier> ";"

<merge_stmt> ::= "merge" <identifier> "," <identifier> "into" <identifier> ";"

<include_stmt> ::= "include" <identifier> "in" <identifier> ";"

<export_stmt> ::= "export" <identifier> [ "as" <string> ] ";"
                | "export default" "as" <string> ";"
                | "export all" ";"

<condition> ::= <identifier> <comparison_op> <value>
              | "count" "(" <weekday> ")" "in" "month" <comparison_op> <number>

<comparison_op> ::= "==" | "!=" | "<" | "<=" | ">" | ">="

<strategy> ::= "random" | "earliest" | "latest"

<date> ::= <day> "." <month>
        | <day> <month_name>
        | <year> "." <month> "." <day>

<weekday> ::= "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

<time> ::= <hour> ":" <minute>
         | <hour_12> ":" <minute> <am_pm>

<duration> ::= <number> "m" | <number> "h"

<value> ::= <string> | <number>

<identifier> ::= (a-z | A-Z) (a-z | A-Z | 0-9 | "_")*

<string> ::= "\"" { any character except "\"" } "\""

<number> ::= digit { digit }

<day> ::= <number>         (* 1-31 *)
<month> ::= <number>       (* 1-12 *)
<year> ::= <number>        (* e.g., 2025 *)
<hour> ::= <number>
<minute> ::= <number>
<hour_12> ::= <number>
<am_pm> ::= "AM" | "PM"

<month_name> ::= "January" | "February" | "March" | "April" | "May" | "June"
               | "July" | "August" | "September" | "October" | "November" | "December"

```
