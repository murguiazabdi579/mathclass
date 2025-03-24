import math

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

def sqrt(a):
    if a > 0:
        return math.sqrt(a)
    else:
        raise ValueError("a must be non-negative")

# Random code for demonstration purposes
random_code = "import math\nfactorial = lambda n: (n == 0 or n == 1) * 1 if n else factorial(n - 1)\nsqrt = lambda a: math.sqrt(a) if a > 0 else raise ValueError("a must be non-negative")"

print(random_code)
