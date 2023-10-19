// The price of the item is $9.95. The sales tax is 6.5% of the price. You combine the two
// numbers to get the total.

var price = 9.95;
// tax is 6.5%
var prices = 9.95 / 100;
var taxRate = 6.5;
var total = price + (prices * taxRate);
console.log(total);

// The variable total now has a value of 10.59675.
// But that isn't what you're going to charge the customer, is it? You're going to charge her an amount rounded off to two decimal places: $10.60.
// Here's how to do it.

var prettyTotal = total.toFixed(2);
console.log(prettyTotal);

// The statement above rounds the number represented by total to 2 places and assigns the result to the variable prettyTotal. The number inside the parentheses tells JavaScript how many places to round the decimal to. Now add a dollar sign, and you're all set.

var currencyTotal = "$" + prettyTotal;
console.log(currencyTotal);

// To shorten a number to no decimals, leave the parentheses empty.
var prettyTotal = total.toFixed();
console.log(prettyTotal);

// Unfortunately, the toFixed method comes with a surprise inside. If a decimal ends in 5, it usually rounds up, as you would expect. But, depending on the browser, sometimes it rounds down! If, for example, you apply the method to 1.555, specifying 2 decimal places, it may give you "1.56". Or it may produce "1.55".
// There are sophisticated ways to address the problem. Here's an inelegant fix that uses methods you already know and understand.

var str = num.toString();
 if (str.charAt(str.length - 1) === "5") {
 str = str.slice(0, str.length - 1) + "6";
 }
 num = Number(str);
 prettyNum = num.toFixed(2);

//  If the decimal ends in a 5, the code changes it to a 6 so the method is forced to round up when it should. Here's what's happening, line-by-line:

// 1. Converts the number to a string and assigns it to the variable str.
// 2. Checks to see if the last character is "5".
// 3. If so, slices off the "5" and appends "6".
// 4. --
// 5. Converts it back to a number.
// 6. Rounds it to 2 places.