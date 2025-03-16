import { MathClass } from "./mathclass";

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Create a new instance of the MathClass class
const mathClass = new MathClass();

// Use the solve() method to find the solution to the problem
const solution = mathClass.solve(randomNumber);

// Print the solution to the console
console.log(`The solution is ${solution}`);
