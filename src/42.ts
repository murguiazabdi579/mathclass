function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

let randomNumber = getRandomInt(10) + 5;
console.log(randomNumber);
