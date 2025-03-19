import { MathClass } from './mathclass';

const mathClass = new MathClass();
const randomNumber1 = mathClass.getRandomInteger(0, 9);
const randomNumber2 = mathClass.getRandomInteger(0, 9);
const sum = randomNumber1 + randomNumber2;
console.log(`${randomNumber1} + ${randomNumber2} = ${sum}`);
