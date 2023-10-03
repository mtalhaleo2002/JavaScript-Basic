// This is how you declare an empty array.
var pets = [];

// Assume that the array pets has already been declared. This is how you assign values to it.
pets[0] = "dog";
console.log(pets);
pets[1] = "cat";
console.log(pets);
pets[2] = "bird";
console.log(pets);

// In the example above, I defined the first three elements of the array, in order. But you can legally leave gaps in an array if you choose to (not that you normally would). For example,suppose you start with the same empty array and code these lines.
var animals = [];
console.log(animals);

animals[3] = "lizard";
console.log(animals);

animals[6] = "snake";
console.log(animals);

console.log(animals[0]);

// Using the keyword, pop, you can remove the last element of an array.
var array = [];
array[0] = "lizard";
array[1] = "snake";
array[2] = "dog";
array[3] = "cat";
array[4] = "bird";
array[5] = "elephant";

console.log(array);
// When I want to delete the last element of an array ,using the pop method.

array.pop();
console.log(array);

array.pop();
console.log(array);

// Using the keyword, push, you can add one or more elements to the end of an array

array.push("bird");
console.log(array);

array.push("elephant", "giraffe");
console.log(array);