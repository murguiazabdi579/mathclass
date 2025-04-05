function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getGCD(a: number, b: number): number {
  while (b !== 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return a;
}

function reverseString(s: string): string {
  return s.split('').reverse().join('');
}
