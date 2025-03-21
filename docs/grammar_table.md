| **Feature**                    | **Supported?** | **Notes**                                                                                         | **Example** |
|-------------------------------|----------------|----------------------------------------------------------------------------------------------------|-------------|
| **Import `.ics` files**        | ✅             | Assigns alias to external calendar files.                                                          | `import "work.ics" as work;` |
| **Named assignments**          | ✅             | Assigns events, tasks, pomodoros to variables.                                                     | `e1 = event "Meeting" ...;` |
| **Events**                     | ✅             | Supports fixed date, recurring days, and time ranges.                                              | `event "Sync" on 12 March from 11:00 to 12:00 at "Office";` |
| **Tasks**                      | ✅             | Supports both fixed times and smart time-picking.                                                  | `task named "Review" at 21:00 on each Monday;` |
| **Task alarms**                | ✅             | Alarms can be attached to fixed-time tasks only.                                                   | `task named "Plan" at 20:00 on each Sunday with alarm;` |
| **Pomodoro sessions**          | ✅             | Repeating pomodoros with optional break.                                                           | `pomodoro "Code" at 10:00 repeat 4 times with 5m break;` |
| **Loops**                      | ✅             | Natural loop syntax over days/weeks/months.                                                        | `each month from 2025.01 to 2025.06 { ... }` |
| **Conditional logic**          | ✅             | Full `if`, `else if`, `else` blocks with conditions.                                               | `if (count(Friday) in month == 4) { ... }` |
| **Filtering**                  | ✅             | Filters events/tasks by properties using `where` clause.                                           | `filter work where category == "meeting" into meetings_only;` |
| **Merging calendars**          | ✅             | Merge two calendars into one.                                                                      | `merge work, personal into all_events;` |
| **Including events**           | ✅             | Include a predefined event in a calendar.                                                          | `include e1 in work;` |
| **Exporting calendars**        | ✅             | Export individual calendars, all calendars, or default.                                            | `export work as "work.ics";`, `export all;`, `export default as "main.ics";` |
| **Flexible time/date formats** | ✅             | Supports `12.03`, `12 March`, `2025.03.12`, and 12h/24h times.                                     | `on 12.03 at 09:00`, `at 9:00PM` |
| **Time-picking strategies**    | ✅             | `using random`, `earliest`, `latest` for flexible task times.                                      | `find between 21:00 and 22:00 using earliest;` |
| **Locations for events**       | ✅             | Events can include an optional location using `at "..."`.                                          | `at "Conference Room A"` |
| **Nested statements**          | ✅             | Loops and conditionals can contain any number of valid statements.                                 | `each day ... { if (...) { ... } }` |
| **Structured events**          | ✅             | Alternative event format using `{ name: ..., start: ..., duration: ..., location: ... }`.          | `event e1 { name: "Team Sync"; start: 10:00; duration: 2h; location: "HQ"; }` |
| **Week number calculation**    | ✅             | Define a variable based on ISO week number for scheduling purposes.                                | `start_week = weeknumber(2025.02.03);` |
