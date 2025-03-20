import numpy as np
from sympy import symbols, Eq, solve

def calculate_slope_intercept(x1, y1, x2, y2):
    """
    Calculate the slope and intercept of a line given two points.

    Args:
        x1, y1: Coordinates of point 1.
        x2, y2: Coordinates of point 2.

    Returns:
        slope: The slope of the line.
        intercept: The y-intercept of the line.
    """
    if not (isinstance(x1, (int, float)) and isinstance(y1, (int, float))) or \
       not (isinstance(x2, (int, float)) and isinstance(y2, (int, float))):
        return None

    x0, y0 = symbols('x0 y0')
    equation = Eq((y2 - y1), ((x2 - x1) * (x0 - x1)))
    slope, intercept = solve(equation, [x0, y0])

    if len(slope) != 2 or len(intercept) != 2:
        return None

    if not all(isinstance(value, int) or isinstance(value, float) for value in slope.values()):
        return None
    if not all(isinstance(value, int) or isinstance(value, float) for value in intercept.values()):
        return None

    return slope[0], slope[1]

# Example usage:
x1, y1 = 3, 5
x2, y2 = 7, 9
slope, intercept = calculate_slope_intercept(x1, y1, x2, y2)
if slope and intercept:
    print(f"Slope: {slope}, Intercept: {intercept}")
else:
    print("Failed to calculate the line.")
