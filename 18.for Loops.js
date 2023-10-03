var cleanestCities = [
  "Cheyenne",
  "Santa Fe",
  "Tucson",
  "Great Falls",
  "Honolulu",
];

// if (cityToCheck === cleanestCities[0]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[1]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[2]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[3]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[4]) {
//   alert("It's one of the cleanest cities");
// } else {
//   alert("It's not on the list");
// }

// Here's a for loop that accomplishes most of what the verbose code in the example above accomplishes.

// for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
// alert("It's one of the cleanest cities");
// }
// }

// Let me break down the first line for you.
// The first line begins with the keyword for.
// The three specifications that define the loop are inside the parentheses.

// 1. A variable that counts iterations and also serves as the changing array index is declared and set to a starting value, in this case 0.
//2. The limit on the loop is defined. In this case, the loop is to keep running as long as the counter doesn't exceed 4. Since the counter, in this case, is starting at 0, the loop will run 5 times.
//3. What happens to the counter at the end of every loop. In this case, the counter is incremented each time.
     // The three specifications inside the parentheses are always in the same order:
     // 1. What to call the counter (usually i) and what number to start it at (typically 0)
     //  2. How many loops to run (in this case, the number of elements in the array)
     // 3. How to change the counter after each iteration (typically to add 1 each time through)


// Things to keep in mind:

// In the example, the counter, i, serves two purposes. It keeps track of the number of iterations so looping can halt at the right point. And it serves as the index number of the array, allowing the code to progress through all the elements of the array as the counter increments with each iteration.
// There is nothing sacred about using i as the counter. You can use any legal variable name. But coders usually use i because it keeps the first line compact, and because coders understand that i stands for "iteration."
// In the example, the initial count is 0, the index number of the first element of the array. But it could be any number, depending on your needs.
// In the example, the counter increments with each iteration. But, depending on your needs, you can decrement it, increase it by 2, or change it in some other way each time through.
// In the example, I specify that the loop is to run as long as i <= 4. Alternatively, I could have specified i < 5. Either way, since the counter starts at 0, the loop runs 5 times


// for - loops through a block of code a number of times
for (var i = 0; i < 50; i++) {
    console.log("Crazy yet?");
  }


answers= ["yes", "why yes", "yes ho", "oh yes", "no yes"]
for (var i = 0; i < 5; i++) {
    if (answers[0] === "yes") {
        positive = 1;
        console.log(positive);
    }
}

























