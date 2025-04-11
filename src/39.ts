import { add } from "lodash";

// Assuming you have some mathematical operations that need to be performed

function performOperations(...operands: number[]): number {
    return operands.reduce((acc, operand) => acc + operand, 0);
}

const result = performOperations(add(2, 3), add(4, 5));
console.log(result); // Output should match the code snippet
