// In previous chapters you learned two different ways to replace "World War II" with "the Second World War" in a string. First, there was the loop-and-slice approach.

var text = "The New Yorker magazine doesn't allow the phrase  'World War II'.They say it should be 'the Second World War'. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers. It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his.";


for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12) ;
    console.log(text);
  }
}
console.log(text);


// You improved on that rather crude approach when you learned the indexOf method.

var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
newSentence = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
console.log(newSentence);
}


// But JavaScript provides a more straightforward way still, the replace method.

var newText = text.replace("World War II", "the Second World War");
console.log(newText);

// The first string inside the parentheses is the segment to be replaced. The second string is the segment to be inserted. In the above code, the segment "World War II" is replaced by the segment "the Second World War" in the string represented by the variable text, and the revised string is assigned to the new variable newText.


// If you assign the revised string to a new variable, as in the example above, the original string is preserved. If you want the original string to be replaced by the revised string, assign the revised string to the original variable.

text = text.replace("World War II", "the Second World War");
console.log(text);

// In the examples above, only the first instance of a string is replaced. If you want to replace all instances, you must let JavaScript know that you want a global replace.

var newText = text.replace(/World War II/g, "the Second World War");

// In a global replace, you enclose the segment to be replaced by slashes instead of quotation marks, and follow the closing slash with "g" for "global." The segment to be inserted is enclosed by quotation marks, as in a one-time replace.


var str = "Try to be or not to be";
console.log(str);
var newStr = str.replace(/be/g, "party");
console.log(newStr);