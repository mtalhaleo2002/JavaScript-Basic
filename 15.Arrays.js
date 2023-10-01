// Whereas an ordinary variable has a single value assigned to it—for example, 9 or "Paris"—an array is a variable that can have multiple values assigned to it. You define an array this way:
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
console.log(cities);

// JavaScript numbers the different values, or elements, automatically. (You can control the numbering yourself by defining elements individually. See below.) And you refer to each element by writing the array name —cities in this case—followed by a number enclosed in square brackets. cities[0] is "Atlanta", cities[1] is "Baltimore", and so on.

// The first element in the list always has an index of 0, the second element an index of 1, and so on.

console.log("Welcome to " + cities[3]);

// An array can be assigned any type of value that you can assign to ordinary variables. You can even mix the different types in the same array (not that you would ordinarily want to).
var mixedArray = [1, "Bob", "Now is", true];
console.log(mixedArray);

console.log(mixedArray[0]);
console.log(mixedArray[1]);

// //The first item always has an index of 0, not 1. This means that if the last item in the list has an index of 9, there are 10 items in the list.
// The same naming rules you learned for ordinary variables apply. Only letters, numbers, $ and _ are legal. The first character can't be a number. No spaces.
// Coders often prefer to make array names plural—cities instead of city, for example— since an array is a list of things.
// Like an ordinary variable, you declare an array only once. If you assign new values to an array that has already been declared, you drop the var.