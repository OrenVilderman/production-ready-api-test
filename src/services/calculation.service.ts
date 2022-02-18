export declare type Operator =
  | '+'
  | '-'
  | '*'
  | '/'

export class CalculationService {
  calculate(a: number, b: number, operator: Operator): string {
    let output = 0;
    switch (operator) {
      case '+':
        output = a + b;
        break;
      case '-':
        output = a - b;
        break;
      case '*':
        output = a * b;
        break;
      case '/':
        if (b === 0) {
          throw new Error("Can't divide by 0!");
        } else {
          output = a / b;
        }
        break;
      default:
        throw new Error(`Non valid operator: ${operator}`);
    }
    if (output % 1 != 0) {
      return output.toFixed(3);
    }
    return output.toString();
  }
}
