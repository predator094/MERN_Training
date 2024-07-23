// JavaScript code demonstrating hoisting
x = 5; // Assigning a value to x before declaration
console.log(x); // Output: 5

var x; // Declaration of x

// Explanation: Even though the assignment comes before the declaration,
// JavaScript hoists the declaration to the top, resulting in the output of 5.

// Another example
console.log(y); // Output: undefined
var y = 10; // Declaration and assignment of y

// Explanation: The declaration of y is hoisted to the top, but the assignment
// is not. Therefore, the output is undefined.

// Function hoisting
greet(1, 3); // Output: "Hello, world!"

function greet(a, b) {
	console.log(a + b);
}

// Explanation: Function declarations are also hoisted to the top, allowing
// us to call the function before its actual declaration.

// Variable hoisting within functions
function example() {
	console.log(z); // Output: undefined
	var z = 15; // Declaration and assignment of z

	// Explanation: The declaration of z is hoisted to the top of the function,
	// but the assignment is not. Therefore, the output is undefined.
}

example();
