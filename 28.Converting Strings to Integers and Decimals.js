// Sometimes JavaScript seems to read your mind. For example, suppose you write...

// var currentAge = prompt("Enter your age.");

// JavaScript assigns the user's answer to currentAge as a string. Her entry, let's say 32, may look like a number to you, but to JavaScript it's a string: "32".Nevertheless, suppose you write...

// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;

// In the above code, the value assigned to the variable currentAge is a string, because it comes from a user's prompt response. But in line 2, when the variable appears in an arithmetic expression, the value is automatically (and temporarily) converted to a number to make the math work.

// Similarly, if you ask JavaScript to divide "100" by 2 or multiply "2.5" by 2.5, JavaScript seems to understand that you want the string treated as a number, and does the math. You can even ask JavaScript to multiply, divide, or subtract using nothing but strings as terms, and JavaScript, interpreting your intentions correctly, does the math.

var profit = "200" - "150";
console.log(profit);

// In the statement above, the two strings are treated as numbers because they appear in a math expression. The variable profit, in spite of the quotation marks, is assigned the number 50.
// It probably goes without saying that the string you ask JavaScript to do math on has to be a number contained in quotes, like "50", not letter characters. If you write...

var loss = "200" - "duck";
console.log(loss)
// an alert will display saying "NaN" meaning "not a number." No mystery here. How can 200 minus "duck" be a number?

// You may recall from a previous chapter that when you mix strings and numbers in an expression involving a plus, JavaScript does the opposite of what you see in the examples above. Rather than converting strings to numbers, JavaScript converts numbers to strings.Rather than adding, it concatenates.

var result = "200" + 150;
console.log(result);

// In the statement above, JavaScript, seeing the string "200" and the number 150, resolves the conflict by converting 150 to a string: "150". Then it concatenates the two strings. The variable result is assigned "200150". If the + in the expression were one of the other arithmetic operators(-, *, or /), JavaScript would convert the string "200" to the number 200 and do the math.


// You can see there's going to be a problem with the following code.
// var currentAge = prompt("Enter your age.");
// var qualifyingAge = currentAge + 1;
// The code above has an unintended consequence. The string represented by currentAge is concatenated with 1 that has been converted to "1". Example: if the user enters "52," qualifyingAge is assigned not 53 but "521"

// If you want to do addition, you must convert any strings to numbers.
// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;

// Line 39 converts the string represented by currentAge to a number before adding 1 to it and assigning the sum to qualifyingAge.

// parseInt converts all strings, including strings comprising floating-point numbers, to integers. And shocking but true: It it doesn't round. It simply lops off the decimals. In the following statement, myInteger is assigned not 2 as you might expect, but 1.

var myInteger = parseInt("1.9999");
console.log(myInteger);

// To preserve any decimal values, use parseFloat. In the following statement myFractional is assigned 1.9999.

var myFractional = parseFloat("1.9999");
console.log(myFractional);


// To minimize confusion, coders sometimes prefer to do explicit, manual conversions even when JavaScript doesn't require them, as in mixing a string and a number in a multiplication operation.