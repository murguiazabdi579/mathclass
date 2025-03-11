`import random 

class MathClass: 
    def __init__(self): 
        self.problems = [] 
        
    def add_problem(self, problem): 
        self.problems.append(problem) 
        
    def get_random_problem(self): 
        return random.choice(self.problems)`