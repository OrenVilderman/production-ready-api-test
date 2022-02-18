import request from 'supertest';
import { expect } from 'chai';
import { describe, it, afterAll } from '@jest/globals';
import server from '../src/app';

process.env.PORT = undefined;

const app = server;

describe('Environment Tests Suite', () => {
  afterAll(() => {
    app.close();
  });

  it('Port', async () => {
    const calculateResponse = await request(app).post('/api/V0.1/calculate').send({
      firstNumber: 2,
      secondNumber: 0,
      operator: '/',
    });
    expect(calculateResponse.status).to.equal(500);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('Oops, something went wrong...');
  });
});
