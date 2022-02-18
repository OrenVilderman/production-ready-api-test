import request from 'supertest';
import { expect } from 'chai';
import { describe, it, afterAll } from '@jest/globals';
import server from '../src/app';

const app = server;

describe('Operator Tests Suite', () => {
  afterAll(() => {
    app.close();
  });

  it('Calculate Add', async () => {
    const calculateResponse = await request(app).post('/api/V0.1/calculate').send({
      firstNumber: 2,
      secondNumber: 6,
      operator: '+',
    });
    expect(calculateResponse.status).to.equal(200);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('8');
  });

  it('Calculate Reduce', async () => {
    const calculateResponse = await request(app).post('/api/V0.1/calculate').send({
      firstNumber: 0,
      secondNumber: 4,
      operator: '-',
    });
    expect(calculateResponse.status).to.equal(200);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('-4');
  });

  it('Calculate Multi', async () => {
    const calculateResponse = await request(app).post('/api/V0.1/calculate').send({
      firstNumber: 2,
      secondNumber: 6,
      operator: '*',
    });
    expect(calculateResponse.status).to.equal(200);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('12');
  });

  it('Calculate Divide', async () => {
    const calculateResponse = await request(app).post('/api/V0.1/calculate').send({
      firstNumber: 2,
      secondNumber: 6,
      operator: '/',
    });
    expect(calculateResponse.status).to.equal(200);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('0.333');
  });
});
