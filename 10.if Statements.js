var x = prompt("Where does the Pope live?");
        if (x === "Vatican") {
            alert("Correct!");
        }

// You might think that it should just be an equal sign, but the equal sign is reserved for assigning a value to a variable.
// If you're testing a variable for a value, you can't use the single equal sign.
// If you forget this rule and use a single equal sign when you should use the triple equal sign, the code won't run properly

var correctAnswer = "Vatican";
        if (x === correctAnswer) {
            alert("Correct!");
        }

// In most cases, a double equal sign == is just as good as a triple equal sign ===.
//  However, there is a slight technical difference, which you may never need to know. Again, to keep things simple, I always use the triple equal sign.