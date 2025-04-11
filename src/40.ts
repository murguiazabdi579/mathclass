import { isInteger } from "lodash";

function checkPrime(n: number): boolean {
  if (!isInteger(n) || n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isCyclicPrime(num: number): boolean {
  const primeFactors = [];
  while (num > 1) {
    if (isInteger(num) && checkPrime(num)) {
      if (!primeFactors.includes(num)) {
        primeFactors.push(num);
      }
    }
    num /= 2;
  }
  return Number(primeFactors.length) === 2 ? true : false;
}

// Example usage
console.log(isCyclicPrime(13195)); // Output: true
