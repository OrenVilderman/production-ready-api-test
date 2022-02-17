import 'dotenv/config';
import { Request, Response } from 'express';
import { CalculationService } from '../services/calculation.service';

export const calculate = (request: Request, response: Response) => {
  const { firstNumber, secondNumber, operator } = request.body;
  const calculationService = new CalculationService();

  let number;
  try {
    number = calculationService.calculate(firstNumber, secondNumber, operator);
  } catch (error) {
    console.error(`Error in calculate of: ${firstNumber} ${operator} ${secondNumber}, ${error}`);
  }

  if (!Number.isNaN(Number(number))) {
    response.status(200).send(number);
  } else {
    response.status(500).send('Oops, something went wrong...');
  }
};
