var cityToCheck = "boston";
console.log(cityToCheck);

var firstChar = cityToCheck.slice(0, 1);
console.log(firstChar);

var someChars = cityToCheck.slice(1, 6);
console.log(someChars);

firstChar = firstChar.toUpperCase();
console.log(firstChar);

someChars = someChars.toLowerCase();
console.log(someChars);

var cappedCity = firstChar + someChars;
console.log(cappedCity);

// Other way to do that 

var cityCheck = "melBOURNE";
console.log(cityCheck);

var firstWord = cityCheck.slice(0, 1);
console.log(firstWord);

var otherWords = cityCheck.slice(1);
console.log(otherWords);

firstWord = firstWord.toUpperCase();
console.log(firstWord);

otherWords = otherWords.toLowerCase();
console.log(otherWords);

var cappedCity = firstWord + otherWords;
console.log(cappedCity);

// The new thing in slice is that if you want to copy the particular index that goes to the last of its character/word/sentence ,then:

var word = "Stringy Wood";
console.log(word);
//You want to slice the word only Wood then copy the index where the Wood word starts
var newWord = word.slice(8); // 8 because space can also occupy the index
console.log(newWord);


//Suppose you have an array 
athletes = ["cricketer", "footballer", "wrestler", "boxer", "hockey-player"]
//Then you want to slice the the 4th element / 3rd index of an array the word boxer to copy only "x" character in a new variable.
var seg = athletes[3].slice(2, 3);
console.log(seg);

//Slice the middle character of the elephant 
var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg);

character = "How many days you gonna complete?"
var measure = character.length;
var seg = character.slice(1, measure -1);
console.log(seg);