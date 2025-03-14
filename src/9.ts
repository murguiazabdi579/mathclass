import { Math } from 'mathjs';

export class MathClass {
  public static solve(problem: string) {
    let result = Math.evaluate(problem);
    return result;
  }
}
