import express, { Application, Request, Response } from 'express';
import 'dotenv/config';
import indexRouter from './routes';

const PORT: number = Number(process.env.PORT) || 5000;
const app: Application = express();

app.use(express.json());

app.use('/', (request: Request, response: Response, next) => {
  console.log(`Reviced - ${request.method}:${request.url}`);
  next();
});

app.use('/api/V0.1', indexRouter);

app.get('/', (request: Request, response: Response) => {
  response.redirect('production-ready-calculator-api.html');
});

app.all('*', (request: Request, response: Response) => {
  console.log(`Page not found for requset: ${request.url}, with method of: ${request.method}`);
  response
    .status(404).send(`<h1>Page not found</h1><p>For this uri: ${request.url}, with method of: ${request.method}</p>`);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default server;

// Used only for Nelify server
export { app };
