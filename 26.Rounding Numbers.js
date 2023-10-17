// You run an online music service where customers rate each song. 
// You aggregate all the customer ratings and average them, awarding a song from zero to five stars.
// Usually, averaging produces a fraction. You need to round it to the nearest integer so you can translate the numberinto stars.
// Suppose the average has been assigned to the variable scoreAvg. Here's the code that rounds it to the nearest integer.
scoreAvg = 66.7897;
var numberOfStars = Math.round(scoreAvg);
console.log(numberOfStars);

// Things to keep in mind:
// Math. is how all math functions begin. The "M" must be capped.
// The function rounds up when the decimal is .5. It rounds 1.5 to 2, 2.5 to 3, etc. It rounds -1.5 to -1, -2.5 to -2, etc.

var number = -1.5;
var newNumber = Math.round(number);
console.log(newNumber);

var num = 1.5;
var newNum = Math.round(num);
console.log(newNum);

// When the result is assigned to a new variable, as in the example above, the unrounded number enclosed in parentheses is preserved. But you can assign the rounded number to the original variable, and the unrounded number will be replaced by the rounded number.

scoreAvg = Math.round(scoreAvg);
// Instead of a variable, you can enclose a literal number in the parentheses.

var score = Math.round(.0678437);
console.log(score);



// To force JavaScript to round up to the nearest integer, no matter how small the fraction, use ceil instead of round. The following code rounds .000001, which would normally round down to 0, up to the nearest integer, 1.
var score = Math.ceil(.000001);
console.log(score);

// ceil stands for "ceiling." It rounds .000001 up to 1, -.000001 up to 0, 1.00001 up to 2,and so on.



// To force JavaScript to round down to the nearest integer, no matter how large the fraction, use floor instead of round. The following code rounds .999999, which would normally round up to 1, down to 0.
var avg = Math.floor(.999999);
console.log(avg);
// floor rounds .999999 down to 0, 1.9 down to 1, -.000001 down to -1, and so on.