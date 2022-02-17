import request from 'supertest';
import { expect } from 'chai';
import { describe, it, afterAll } from '@jest/globals';
import server from '../app';

const app = server;

describe('Negative Tests Suite', () => {
  afterAll(() => {
    app.close();
  });

  it('Devide By Zero', async () => {
    const calculateResponse = await request(app).post('/api/V0.1/calculate').send({
      firstNumber: 2,
      secondNumber: 0,
      operator: '/',
    });
    expect(calculateResponse.status).to.equal(500);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('Oops, something went wrong...');
  });

  it('Wrong Operator', async () => {
    const calculateResponse = await request(app).post('/api/V0.1/calculate').send({
      firstNumber: 2,
      secondNumber: 0,
      operator: 'O',
    });
    expect(calculateResponse.status).to.equal(500);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('Oops, something went wrong...');
  });
});
