// There are several problems with the for loop example I gave you in the last chapter.

// The first problem is a potential communication problem. If a match between the user's city and the list of cleanest cities is found, a confirming alert displays.
// But if there is no match, nothing happens. The user is left in the dark. If no match is found, we need to display an alert saying so. But how do we do that?

// We do it with a flag. A flag is just a variable that starts out with a default value that you give it, and then is switched to a different value under certain conditions. In our example, let's say this is the flag.

var matchFound = "no";

// If a match is found, the value of the flag is changed. At the end, if the flag hasn't been changed—if it still has the original value of "no"—it means no match was found, and so we display an alert saying the city isn't on the list.

var cityToCheck = "Tucson";
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var matchFound = "no";
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = "yes";
    console.log("It's one of the cleanest cities");
  }
}
if (matchFound === "no") {
  console.log("It's not on the list");
}



// This works, but rather than assigning the strings "no" and "yes" to the switch, it's conventional to use the Boolean values false and true.

var cityToCheck = "Santa Fe";
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var matchFound = false;
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities");
  }
}
if (matchFound === false) {
  console.log("It's not on the list");
}
// There are only two Booleans, true and false. Note that they aren't enclosed in quotes.


// The next problem with our example is that it potentially wastes computing cycles.
// Suppose on the second loop a match is found and the alert displays. The way the loop is coded, the loop goes on looping all the way to the end.
// This is unnecessary, since we got our answer in the second loop. The problem is solved with the keyword break.

var cityToCheck = "Santa Fe";
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var matchFound = false;
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  console.log("It's not on the list");
}

// The last problem: In the example, I assume that the number of elements in the array is known. But what if it isn't? 
// JavaScript has a way of finding out. The following code assigns the number of elements in the array cleanestCities to the variable numElements.

var numElements = cleanestCities.length;
var cityToCheck = "Santa Fe";
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var matchFound = false;
for (var i = 0; i < numElements; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  console.log("It's not on the list");
}

// Example:

var array = [3, 4];
for (var i = 0; i < array.length; i++) {
  if (array[i] === array[i]) {
    console.log(array[i]);
    break;
  }
}
