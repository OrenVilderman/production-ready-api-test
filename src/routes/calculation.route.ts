import express, { Router, Request, Response } from 'express';
import { calculate } from '../controllers/calculation-api';

const caculationRouter: Router = express.Router();

caculationRouter.post('/', calculate);

caculationRouter.all('*', (request: Request, response: Response) => {
  console.log(`This calculation is not possible: ${request.url}`);
  response
    .status(404).send(`<h1>Calculation not possible</h1><p>For this uri: ${request.url}, with method of: ${request.method}</p>`);
});

export default caculationRouter;
