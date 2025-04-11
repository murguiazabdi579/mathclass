function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function fibonacci(n: number): number[] {
  if (n < 0 || n > 50) throw new Error("Number out of range");
  
  const fib = [0, 1];
  
  while (fib.length < n) {
    fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
  }

  return fib;
}

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = Math.floor(arr.length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot);

  return quickSort(left).concat([pivot]).concat(quickSort(right));
}
