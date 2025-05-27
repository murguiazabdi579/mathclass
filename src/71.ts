import random
from sympy import symbols

def rand_mat():
    # Generate a 2x2 matrix with random numbers
    A = [random.randint(1, 9) for _ in range(2)]
    B = [random.randint(1, 9) for _ in range(2)]

    return A, B

def rand_func(mat):
    # Define the function to be evaluated
    def func(x):
        return x ** 2 + mat[0][0] * x + mat[0][1] * (x - mat[1][0]) / x if len(mat) == 2 else None
    
    # Randomly choose a value for x
    x = random.uniform(0, max(x for _, x in mat))
    
    return func(x)

# Example usage:
A, B = rand_mat()
mat = [A, B]
solution = rand_func(mat)
print(solution)
