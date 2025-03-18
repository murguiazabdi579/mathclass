import random
numbers = range(1, 100)
operation = ["+", "-", "*", "/"]
result = (random.choice(numbers), random.choice(numbers))
while True:
    if random.choice(operation) == "+":
        result = (result[0] + result[1], " + ")
    elif random.choice(operation) == "-":
        result = (result[0] - result[1], " - ")
    elif random.choice(operation) == "*":
        result = (result[0] * result[1], " x ")
    elif random.choice(operation) == "/":
        result = (result[0] // result[1], " ÷ ")
