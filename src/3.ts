const mathClass = () => {
  const randomNum = Math.floor(Math.random() * 10);
  const mathProblem = `What is ${randomNum} times 7?`;
  const answer = randomNum * 7;
  return answer;
};
