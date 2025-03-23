## Grammar in BNF form

```bnf
<program> ::= { <statement> }

<statement> ::= <import_stmt>
              | <assignment_stmt>
              | <value_assignment_stmt>
              | <loop_stmt>
              | <export_stmt>
              | <merge_stmt>
              | <filter_stmt>
              | <include_stmt>
              | <conditional_stmt>
              | <structured_event_stmt>
              | <default_declaration>

<import_stmt> ::= "import" <string> "as" <identifier> ";"

<assignment_stmt> ::= <identifier> "=" <declaration> ";"

<value_assignment_stmt> ::= <identifier> "=" <value_expr> ";" 

<default_declaration> ::= ["$$$"] ["new"] ( <event_decl> | <task_decl> | <pomodoro_decl> ) ";"

<declaration> ::= <event_decl>
                | <task_decl>
                | <pomodoro_decl>

<event_decl> ::= "event" <string> <event_timing>
               | "event" <string> <temporal_expr> ["for" <duration>]

<event_timing> ::= "on" <date_specifier> ["from" <time> "to" <time>]
                 | "on" <date_specifier> ["at" <time>] ["for" <duration>]
                 | "every" <weekday> ["from" <time> "to" <time>]
                 | "every" <weekday> ["at" <time>] ["for" <duration>]
                 | "from" <time> "to" <time>
                 | "at" <time> ["for" <duration>]
                 | "find" "between" <time> "and" <time>

<temporal_expr> ::= "daily" ["at" <time>]
                  | "weekly" ["at" <time>]
                  | "monthly" ["at" <time>]
                  | "yearly" ["at" <time>]

<structured_event_stmt> ::= "event" <identifier> "{" { <structured_event_field> } "}"

<structured_event_field> ::= "name" ":" <string> [","]
                           | "start" ":" <time> [","]
                           | "duration" ":" <duration> [","]
                           | "location" ":" <string> [","]
                           | "category" ":" <string> [","]

<task_decl> ::= "task" <string> <temporal_expr> ["for" <duration>]
              | "task" <string> "find" "between" <time> "and" <time> ["using" <strategy>]

<pomodoro_decl> ::= "pomodoro" <string> "at" <time> "repeat" <number> "times" 
                   ["every" <duration>] ["with" <duration> "pause"]

<loop_stmt> ::= "each" <loop_unit> "from" <loop_start> "to" <loop_end> ["step" <number>] "{" { <statement> } "}"

<loop_start> ::= <date>
               | <identifier>
               | "today"

<loop_end> ::= <date>
             | <identifier>
             | <loop_start> "+" <number>

<loop_unit> ::= "day" | "days" | "week" | "weeks" | "month" | "months"

<conditional_stmt> ::= "if" "(" <condition> ")" "{" { <statement> } "}"
                     { "else" "if" "(" <condition> ")" "{" { <statement> } "}" }
                     [ "else" "{" { <statement> } "}" ]

<filter_stmt> ::= "filter" <identifier> "where" <condition> "into" <identifier> ";"

<merge_stmt> ::= "merge" <identifier_list> "into" <identifier> ";"

<identifier_list> ::= <identifier> {"," <identifier>}

<include_stmt> ::= "include" <identifier> "in" <identifier> ";"

<export_stmt> ::= "export" <identifier> [ "as" <string> ] ";"
                | "export" "default" "as" <string> ";"
                | "export" "all" ";"

<condition> ::= <identifier> <comparison_op> <value>
              | "count" "(" <weekday> ")" "in" "month" <comparison_op> <number>
              | "category" <comparison_op> <string>

<comparison_op> ::= "==" | "!=" | "<" | "<=" | ">" | ">="

<strategy> ::= "random" | "earliest" | "latest"

<value_expr> ::= <date>
               | <time>
               | <duration>
               | <string>
               | <number>
               | <identifier>
               | <function_call>

<function_call> ::= "count" "(" <weekday> ")" "in" "month"
                  | "weeknumber" "(" <date> ")"

<date> ::= <number> "." <number> "." <number>     // YYYY.MM.DD

<date_specifier> ::= <date>
                   | <weekday>

<weekday> ::= "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
            | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"

<time> ::= <number> ":" <number>

<duration> ::= <number> <time_unit> {<number> <time_unit>}

<time_unit> ::= "h" | "m"

<value> ::= <string> | <number> | <identifier>

<identifier> ::= (a-z | A-Z | _) {a-z | A-Z | 0-9 | _}

<string> ::= "\"" { any character except "\"" } "\""

<number> ::= digit { digit }

<month_name> ::= "January" | "February" | "March" | "April" | "May" | "June"
               | "July" | "August" | "September" | "October" | "November" | "December"
               | "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun"
               | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"
```