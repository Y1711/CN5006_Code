const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero!";
    }
    return num1 / num2;
}

// Read the first number
rl.question("Enter the first number: ", function(num1) {
    // Read the second number
    rl.question("Enter the second number: ", function(num2) {
        num1 = parseFloat(num1); // Convert string input to number
        num2 = parseFloat(num2); // Convert string input to number

        // Perform calculations
        const sum = add(num1, num2);
        const difference = subtract(num1, num2);
        const product = multiply(num1, num2);
        const quotient = divide(num1, num2);

        // Output the results
        console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
        console.log(`The difference between ${num1} and ${num2} is: ${difference}`);
        console.log(`The multiply of ${num1} and ${num2} is: ${product}`);
        console.log(`The divition of ${num1} and ${num2} is: ${quotient}`);

        // Close the readline interface
        rl.close();
    });
});
