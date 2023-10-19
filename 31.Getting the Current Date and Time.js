// Your webpage includes a notice telling the user the current local date and time in his particular time zone. But what is the current date and time? Here's how JavaScript finds out.

var rightNow = new Date();
console.log(rightNow);

// The statement above creates something called a Date object. This is what it looks like.
//  Mon Nov 09 2015 22:57:45 GMT- 0600 (Mountain Standard Time)

// Note that JavaScript gets this information from the user's computer. It is only as accurate as the computer's date and time settings. For example, if the user just moved from the U.S. West Coast to the U.S. East Coast and hasn't reset the time zone on his computer, the computer will still be on Pacific Time.
// The Date object, too, will be on Pacific Time.The Date object may resemble a string, but it isn't one. For example, you can't use methods on it like charAt, indexOf, or slice.
// If you need the Date object to be a string, you can convert it to one the same way you convert a number to a string.


var dateString = rightNow.toString();
console.log(dateString);

// The code above converts the Date object represented by the variable rightNow to a string and assigns the string to the variable dateString.
// Most of the time, you'll just want to extract some of the information from the Date object without converting it to a string.
// I'm going to show you how to extract the individual pieces of the Date object. In this chapter I'll get you started with the first piece. In the next chapter I'll cover the rest.
// The following code creates a new Date object, assigns it to the variable rightNow, extracts the day of the week, and assigns the day of the week to the variable theDay.

var rightNow = new Date();
var theDay = rightNow.getDay();
console.log(theDay);

// In the diagram of the Date object that I showed you above, the day of the week was represented as "Mon." But when you extract the day of the week from the object, it's represented as a number. Days are designated by a number from 0 for Sunday through 6 for Saturday. This means that you'll need a bit of code to convert it back into a day name like "Mon."

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);

// Here's what's going on:
// 1. Creates an array of days starting with "Sun" and assigns it to dayNames.
// 2. Creates a new Date object and assigns it to now.
// 3. Extracts the day of the week as a number and assigns it to theDay.
// 4. Uses the day number as an index to specify the correct array element, i.e. the day name.

// Q:The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Fill in the blank.
// var date = new Date();
// var d = date.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log("Today is " + ___________);