// In the last chapter you learned to use parseInt to convert a string representing a number into an integer. And you learned to use parseFloat to convert a string representing a number into a floating-point number.
// You can finesse the distinction between integers and floatingpoint numbers by using Number. This handy conversion tool converts a string representing either an integer or a floating-point number to a number that's identical to the one inside the parentheses.
// The following code converts the string "24" to the number 

var integerString = "24"
console.log(typeof(integerString));
console.log(integerString);
//You can use the typeof operator to find the data type of a JavaScript variable.


var num = Number(integerString);
console.log(typeof(num));
console.log(num);

// The following code converts the string "24.9876" to the number 24.9876.

var floatingNumString = "24.9876";
console.log(typeof(floatingNumString));

var number = Number(floatingNumString);
console.log(typeof(number));
console.log(number);


// Suppose your code has done an arithmetic calculation that yielded a big number. Now you want to present the result of the calculation to your user. But before you display the number, you want to format it with commas so it's readable. In order to do that, you'll have to convert the number to a string. This is how you do it.

// Converting a number to a string, perhaps so you can format it, is straightforward.

var numberAsNumber = 1234;
console.log(typeof(numberAsNumber));
console.log(numberAsNumber);

var numberAsString = numberAsNumber.toString();
console.log(typeof(numberAsString));

// The code above converts the number 1234 to the string "1234" and assigns it to the variable numberAsString.