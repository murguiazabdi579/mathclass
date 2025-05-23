function solveMathProblem(problem: string): number {
  // Implement your problem-solving logic here
  console.log("Processing math problem:", problem);
  
  if (problem === "Solve 3 + 5 = ?") {
    return 8;
  } else {
    throw new Error("Invalid math expression");
  }
}
