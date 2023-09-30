var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
alert("Correct!");
}
if (x !== "Vatican") {
alert("Wrong answer");
}
// In this example, we have two if statements, one testing for "Vatican," and another testing for not-"Vatican". So all cases are covered, with one alert or another displaying, depending on what the user has entered.


// The code works, but it's more verbose than necessary. The following code is more concise and, as a bonus, more readable.
if(x === "Vatican") {
  alert("Correct!");
} else {
  alert("Wrong answer");
}

// In the style convention I follow, the else part has exactly the same formatting as the if part.As in the if part, any number of statements can execute within the else part.
var correctAnswer = "Vatican";
if (x === correctAnswer) {
  alert("Correct!");
} else {
  score--;
  userIQ = "problematic";
  alert("Incorrect");
}

// else if is used if all tests above have failed and you want to test another condition.
var correctAnswer = "Vatican";
if (x === correctAnswer) {
alert("Correct!");
}
else if (x === "Rome") {
alert("Incorrect but close");
}
else {
alert("Incorrect");
}

