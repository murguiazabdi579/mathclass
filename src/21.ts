import numpy as np
from sympy import symbols, Eq, solve

def find_root(function):
    # This function finds the root of a given mathematical expression.
    # It returns the approximate value of the root if it exists.
    x = symbols('x')
    equation = Eq(x**3 + 2*x**2 - 5)
    solution = solve(equation, x)
    return solution[0]

find_root(np.cos(np.pi * np.linspace(1, 10)))  # This example is for demonstration purposes.
