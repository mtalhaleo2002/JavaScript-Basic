// Use the shift method to remove an element from the beginning of an array.

var pets = ["dog", "cat", "bird"];
console.log(pets);

pets.shift();
console.log(pets);

// To add one or more elements to the beginning of an array, use the unshift method. The following code adds two elements to the beginning of the array.

pets.unshift("fish","elephant");
console.log(pets);

// Use the splice method to insert one or more elements anywhere in an array, while optionally removing one or more elements that come after it

var animals = ["dog", "cat", "fly", "bug", "ox"];
console.log(animals);

animals.splice(2, 2, "pig", "duck", "emu");
console.log(animals);

// The first digit inside the parentheses is the index of the position where you want to start adding if you're adding and deleting if you're deleting.
// The second digit is the number of existing elements to remove, starting with the first element that comes after the element(s) that you're splicing in.

animals.splice(2, 0, "fish", "seale", "giraffe");
console.log(animals);

// You can also remove elements without adding any.

var things = ["guitar", "vocal", "trumpet", "nail cutter"];
console.log(things);

things.splice(2, 2);
console.log(things);

// Use the slice method to copy one or more consecutive elements in any position and put them into a new array.

var office = ["table", "chair", "lamp", "laptop", "staff"];
console.log(office);

var officeThings = office.slice(2,4);
console.log(officeThings);

// The first digit inside the parentheses is the index of the first element to be copied.
// The second digit is the index of the element after the last element to be copied.

// Two things could trip you up here:

// Since the first index number inside the parentheses specifies the first element to be copied, you might think the second index number specifies the last element to be copied.
// In fact, the second number specifies the index number of the element after the last element to be copied.

// You must assign the sliced elements to an array. It could, of course, be the same array from which you're doing the slicing. In that case, you'd be reducing the original array to only the copied elements.


// Examples:

// Splice Examples
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
console.log(sizes);
// Insert "L" into the array between "M" and "XL".
sizes.splice(2, 0, "L");
console.log(sizes);

var pet = ["dog", "cat", "ox", "duck", "frog"];
console.log(pet);
pet.splice(1, 3, "spoon", "knife");
console.log(pet);

var animal = ["dog", "cat", "ox", "duck", "frog"];
console.log(animal);
animal.splice(1,2)
console.log(animal);


// Slice Examples
var wild = ["dog", "cat", "ox", "duck", "frog", "flea"];
console.log(wild);
var newWild = wild.slice(3, 5)
console.log(newWild);

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
console.log(sizes);
var regSizes = sizes.slice(0, 3);
console.log(regSizes);