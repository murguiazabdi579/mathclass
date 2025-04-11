import numpy as np
from numpy import sin, cos, tan, radians
def generate_random_triangle(points):
    # Generate 3D points with uniform distribution on a sphere
    x = np.random.uniform(-1, 1, size=points.shape)
    y = np.random.uniform(-1, 1, size=points.shape)
    z = np.random.uniform(-1, 1, size=points.shape)
    # Project the 3D points onto the xy plane
    proj_x = x * sin(radians(2*radians(points[0])) / points[1])
    proj_y = y * cos(radians(2*radians(points[0])) / points[1])
    return np.array([proj_x, proj_y, z])
