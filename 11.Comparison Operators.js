// Let's talk a little more about ===. It's a type of comparison operator, specifically an equality operator. As you learned in the last chapter, you use it to compare two things to see if they're equal.
// You can use the equality operator to compare a variable with a string, a variable with a number, a variable with a math expression, or a variable with a variable. And you can use it to compare various combinations. All of the following are legal first lines in if statements:



if (fullName === "Mark" + " " + "Myers") {}
if (fullName === firstName + " " + "Myers") {}
if (fullName === "Mark" + " " + lastName) {}
if (fullName === firstName + " " + lastName) {}
if (totalCost === 81.50 + 135) {}
if (totalCost === materialsCost + 135) {}
if (totalCost === materialsCost + laborCost) {}
if (x + y === a - b) {}

// When you're comparing strings, the equality operator is case-sensitive. "Rose" does not equal "rose."

// Another comparison operator, !==, is the opposite of ===. It means is not equal to.


if (yourTicketNumber !== 123456) {
 alert("Better luck next time.");
}

// Like ===, the not-equal operator can be used to compare numbers, strings, variables, math expressions, and combinations.
// Like ===, string comparisons using the not-equal operator are case-sensitive. It's true that
// "Rose" !== "rose".
// Here are 4 more comparison operators, usually used to compare numbers.

// > is greater than
// <  is less than
// >=  </> is greater than or equal to
// <= is less than or equal to

//In the examples below, all the conditions are true. 


if (1 > 0) {}
if (0 < 1) {}
if (1 >= 0) {}
if (1 >= 1) {}
if (0 <= 1) {}
if (1 <= 1) {}

// Just as the double equal sign can usually be used instead of the triple equal sign, != can usually be used instead of !==. In the exercises, I'll ask you to stick to !==.

