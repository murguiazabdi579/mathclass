function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max) {
    const temp = max;
    max = min;
    min = temp;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
