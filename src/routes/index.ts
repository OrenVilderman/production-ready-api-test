import express, { Router, Request, Response } from 'express';

import caculationRouter from './calculation.route';

const indexRouter: Router = express.Router();

indexRouter.use('/calculate', caculationRouter);

indexRouter.all('*', (request: Request, response: Response) => {
  console.log(`Route not found for requset: ${request.url}`);
  response
    .status(404).send(`<h1>Route not found</h1><p>For this uri: ${request.url}, with method of: ${request.method}</p>`);
});

export default indexRouter;
