from typing import List

def is_prime(n: int) -> bool:
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def generate_primes(limit: int = 100) -> List[int]:
    primes = [x for x in range(2, limit + 1) if is_prime(x)]
    return primes

# Example usage:
primes_limit = 50
primes_list = generate_primes(primes_limit)
print(primes_list)
