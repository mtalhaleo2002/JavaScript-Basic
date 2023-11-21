// Here's a summary of important methods for extracting pieces of the Date object.

//getDay()               days of week                                      Range(0-6)    0 is Sunday
//getMonth()             month                                             Range(0-11)   0 is January
//getDate()              day of month                                      Range(1-31)   1 is 1st of month
//getFullYear()          year                                              Range()       2023
//getHours()             hour                                              Range(0-23)   0 is midnight    12 is noon     23 is 11p.m.
//getMinutes()           minute                                            Range(0-59)   
//getSeconds()           second                                            Range(0-59)
//getMilliseconds(())    milliseconds                                      Range(0-999)
//getTime()              Milliseconds since midnight, January 1, 2010

// I covered getDay in the last chapter. Let's look at the rest of the extraction methods. Like getDay, getMonth gives you not the spelled-out name of the month shown in the Date object, but a number. The following code produces a month number ranging from 0 for January through 11 for December.
var d = new Date();
var currentMonth = d.getMonth();
console.log(currentMonth);

// getDate gives you a number for the day of the month.
var dayOfMonth = d.getDate();
console.log(dayOfMonth);

// getFullYear gives you a 4-digit number for the year.
var currYr = d.getFullYear();
console.log(currYr);

// getHours gives you a number from 0 through 23 corresponding to midnight through 11 p.m.
var currentHrs = d.getHours();
console.log(currentHrs);

// getMinutes gives you a number from 0 through 59.
var currMins = d.getMinutes();
console.log(currMins);

// getSeconds gives you a number from 0 through 59.
var currSecs = d.getSeconds();
console.log(currSecs);

// getMilliseconds gives you a number from 0 through 999
var currMills = d.getMilliseconds();
console.log(currMills);

// getTime gives you the number of milliseconds that have elapsed since midnight, Jan. 1,1970.
var millsSince = d.getTime();
console.log(millsSince);
