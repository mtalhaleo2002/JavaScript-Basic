// Check out this code.

if ((x === y || a === b) && c === d) {
  g = h;
} else {
  e = f;
}
// In the code above, if either of the first conditions is true, and, in addition, the third condition is true, then g is assigned h. Otherwise, e is assigned f.

// There's another way to code this, using nesting.

if (c === d) {
  if (x === y) {
    g = h;
  } else if (a === b) {
    g = h;
  } else {
    e = f;
  }
} else {
  e = f;
}

// Nest levels are communicated to JavaScript by the positions of the curly brackets. There are three blocks nested inside the top-level if. If the condition tested by the top-level if—that c has the same value as d—is false, none of the blocks nested inside executes. The opening curly bracket on line 1 and the closing curly bracket on line 11 enclose all the nested code, telling JavaScript that everything inside is second-level.