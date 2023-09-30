// Here's the code.
if (weight > 300 && time < 6) {
alert("Come to our tryout!");
}
else {
alert("Come to our cookout!");
}


// You can chain any number of conditions together.
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
alert("Come to our tryout!");
}
else {
alert("Come to our cookout!");
}

// You can also test for any of a set of conditions. This is the operator.
// ||

// Here's an example.
if (SAT > avg || GPA > 2.5 || sport === "football") {
alert("Welcome to Bubba State!");
}
else {
alert("Have you looked into appliance repair?");
}

//If in line 22 any or all of the conditions are true, the first alert displays. If none of them are true (line 25), the second alert displays.
// You can commbine any number of and and or conditions. When you do, you create ambiguities. Take this line...
if (age > 65 || age < 21 && res === "U.S.") {}
// This can be read in either of two ways.

// The first way it can be read: If the person is over 65 or under 21 and, in addition to either of these conditions, is also a resident of the U.S. Under this interpretation, both columns need to be true in the following table to qualify as a pass.

// The second way it can be read: If the person is over 65 and living anywhere or is under 21 and a resident of the U.S. Under this interpretation, if either column in the following table is true, it's a pass.

// It's the same problem you face when you combine mathematical expressions. And you solve it the same way: with parentheses.
// In the following code, if the subject is over 65 and a U.S. resident, it's a pass. Or, if the subject is under 21 and a U.S. resident, it's a pass.

if ((age > 65 || age < 21) && res === "U.S.") {}


// In the following code, if the subject is over 65 and living anywhere, it's a pass. Or, if the subject is under 21 and living in the U.S., it's a pass.
if (age > 65 || (age < 21 && res === "U.S.")) {};

