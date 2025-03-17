import random

def get_math_problem(level):
    if level == "easy":
        operator = ["+", "-"]
    elif level == "medium":
        operator = ["+", "-", "*", "/"]
    else:
        operator = ["+", "-", "*", "/", "^"]

    num1 = random.randint(0, 10)
    num2 = random.randint(0, 10)
    answer = num1 + num2
    problem = f"{num1} {operator[random.randint(0, len(operator)-1)]} {num2} = "
    return problem + str(answer)
