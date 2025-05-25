import { Math } from 'mathjs';

// Example function to calculate factorial using recursion
function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    const result = n * factorial(n - 1);
    return result;
}

// Example usage in mathclass
let num = Math.floor(Math.random() * 10); // Generate a random integer between 0 and 9
const result = factorial(num);

console.log(`The factorial of ${num} is: ${result}`);
