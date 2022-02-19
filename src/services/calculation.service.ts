export declare type Operator =
  | '+'
  | '-'
  | '*'
  | '/'

export class CalculationService {
  calculate(firstNumber: number, secondNumber: number, operator: Operator): string {
    let output = 0;
    if ((firstNumber.toString().length + secondNumber.toString().length) > 250
      || (firstNumber.toString().split('e+')[1] + secondNumber.toString().split('e+')[1]).length > 4) {
      throw new Error('Input size not supported');
    }
    const a = Number(firstNumber);
    const b = Number(secondNumber);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error('Input type not supported');
    }
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
