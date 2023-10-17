// Suppose you want to simulate the throw of a die. In the simulation, you want it to randomly come up 1, 2, 3, 4, 5, or 6. The first step is to ask JavaScript to generate a random number.
// (Well, it's almost random, technically known as pseudo-random, but it's close enough to random for most purposes.)
// The following code generates a pseudo-random number, with 16 decimal places, ranging from 0.0000000000000000 through 0.9999999999999999 and assigns it to the variable randomNumber.


var randomNumber = Math.random();
console.log(randomNumber);


// The function always delivers a 16-place decimal that ranges from 0.0000000000000000 to 0.9999999999999999. We can convert the decimal to an integer by multiplying by one hundred quadrillion (1 followed by 17 zeroes):

// 0.0000000000000000 * 100000000000000000 = 0
// 0.7474887706339359 * 100000000000000000 = 7474887706339359
// 0.9999999999999999 * 100000000000000000 = 9999999999999999


// Trillions of possible numbers are more than we need in our virtual die throw. We just want six possible numbers, 1 through 6. So instead of multiplying by a hundred quadrillion, our first step is to multiply the giant decimal by 6.

// 0.0000000000000000 * 6 = 0
// 0.7474887706339359 * 6 = 4.7474887706339359
// 0.9999999999999999 * 6 = 5.9999999999999994


// Intuition may tell you that you can finish the job by rounding, but that doesn't work out mathematically. Because nothing rounds up to 0 and nothing rounds down to 6, the numbers in the middle, which are reached both by rounding up and rounding down, will come up almost twice as often. But we can give all the numbers an equal chance if we add 1 to the result, then round down. Here's the code for our virtual die throw.

var bigDecimal = Math.random();
console.log(bigDecimal);

var improvedNum = (bigDecimal * 6) + 1;
console.log(improvedNum);

var numberOfStars = Math.floor(improvedNum);
console.log(numberOfStars);


// This is what happens in the code above, line by line:
// 1. Generates a 16-place decimal and assigns it to the variable bigDecimal.
// 2. Converts the 16-place decimal to a number ranging from 0.0000000000000000 through 5.9999999999999999, then adds 1, so the range winds up 1 0000000000000000 through 6.9999999999999999. This number is assigned to the variable improvedNum.
// 3. Rounds the value represented by improvedNum down to the nearest integer that ranges from 1 through 6.
