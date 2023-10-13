var text = "The New Yorker magazine doesn't allow the phrase  'World War II'.They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his.";


for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12) ;
    
  }
}
console.log(text);

// The code loops through the string looking for "World War II." Line 5 progresses through the string character-by-character, examining each 12-character sequence. If it finds "World  War II," line 6 concatenates three segments: all the characters preceding "World War II," the substitute phrase "the Second World War," and then all the characters following "World War II."

var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}
console.log(text);

// If the segment exists, the method finds the index of the first character of the segment and assigns it to the variable firstChar. If the segment doesn't exist, the method assigns -1 to the variable, so you know it's not there.

// Line 14 checks for the phrase, assigning the index of the first character of the phrase to the variable firstChar—if the phrase is found. If it isn't found, -1 is assigned to the variable. If the variable doesn't have the value -1 (line 15)—if the phrase has been found—the concatenation in line 16 replaces the offending phrase with the correct pharse.

// The indexOf method finds only the first instance of the segment you're looking for. In the example above, you could overcome this limitation by looping. You'd change the first instance of "World War II" to "the Second World War," then in the next loop iteration, find the next surviving instance and change that, and so on.
  
let sentence = "Hello world, welcome to the universe.";
let result = sentence.indexOf("welcome");
console.log(result);

// Find the first occurrence of "e":
let some = "Hello world, welcome to the universe.";
index = some.indexOf("e");
console.log(index);

// Find the first occurrence of "e", starting at position 5:
let word = "Hello world, welcome to the universe.";
type = word.indexOf("e", 5);
console.log(type);

// The indexOf() method returns -1 if the value is not found.



// To find the last instance of a segment in a string, use lastIndexOf. The following code finds the index of the first character of the last instance of the segment, the second "be". The variable segIndex winds up with a value of 16, the index of "b" in the second "be".

var text = "To be or not to be.";
var segIndex = text.lastIndexOf("be");
console.log(segIndex);

// Search for the last occurrence of "planet":
var something = "Hello planet earth, you are a great planet.";
var conclude = something.lastIndexOf("planet");
console.log(conclude);

var onIs = something.lastIndexOf("Planet");
console.log(onIs);