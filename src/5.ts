// Random math problem generation
function getRandomMathProblem(): string {
  const numbers = [1, 2, 3, 4, 5];
  const operators = ['+', '-', '*', '/'];
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const problem = `${numbers[0]} ${operators[operatorIndex]} ${numbers[1]}`;
  return problem;
}
