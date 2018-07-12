# Unipark PageFocus
With this javascript, the unipark poll is able to track the behaviour of the participants. 
You can track the following values:

 - `defocusing_count` How many times did the user change to another tab.
 - `refocusing_count` How many times did the user change to back to the unipark tab.
 - `duration_sum` The total of the time the user spent without the unipark tab being active.
 - `last_duration` How much time the user spent without the unipark tab being active the last time he changed tabs.

This project is forked from https://github.com/deboerk/PageFocus. 

## Set-Up

 1. Create a new custom HTML question in unipark ( Type 911)
 2. Create four new variables in unipark
 3. Change the variable names according to your new unipark variables at lines 1-4 and 14-17
 4. Insert the content of `main.js` to the "Edit-HTML"-Field

## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program.
