// This is a fictional implementation of a TypeScript code generation service.
// Feel free to modify and extend it according to your needs!

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number | null {
  if (y === 0) {
    return null; // Division by zero
  }
  return x / y;
}

function square(x: number): number {
  return x ** 2;
}

function sqrt(x: number): number {
  return Math.sqrt(x);
}
