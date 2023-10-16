// The user has entered his first name. The string has been assigned to the variable firstName. You want to extract the first character. You already know one way to do it.
var firstName = "Mark";
console.log(firstName);

var firstChar = firstName.slice(0, 1);
console.log(firstChar);

// Here's an alternate way to do it that's more 

var firstWord = firstName.charAt(0)
console.log(firstWord);

// The code above finds a single character at index-0 (the beginning) of the string represented by the variable firstName and assigns it to the variable firstWord.


// The following code finds the last character in the string.
var lastChar = firstName.charAt(firstName.length - 1);
console.log(lastChar);

var Name = "John!"
for (var i = 0; i < Name.length; i++) {
  if (Name.charAt(i) === "!") {
    console.log("Exclamation point found!");
    break;
  }
}

// Note: The indexOf method can only identify the character at a particular location. It can't change the character at a location.

