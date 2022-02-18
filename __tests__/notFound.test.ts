import request from 'supertest';
import { expect } from 'chai';
import { describe, it, afterAll } from '@jest/globals';
import server from '../src/app';

const app = server;

describe('Not Found Tests Suite', () => {
  afterAll(() => {
    app.close();
  });

  it('In App', async () => {
    const calculateResponse = await request(app).get('/app');
    expect(calculateResponse.status).to.equal(404);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('<h1>Page not found</h1><p>For this uri: /app, with method of: GET</p>');
  });

  it('In API', async () => {
    const calculateResponse = await request(app).get('/api/V0.1/app');
    expect(calculateResponse.status).to.equal(404);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('<h1>Route not found</h1><p>For this uri: /app, with method of: GET</p>');
  });

  it('In Calculate', async () => {
    const calculateResponse = await request(app).get('/api/V0.1/calculate');
    expect(calculateResponse.status).to.equal(404);
    expect(calculateResponse.type).to.equal('text/html');
    expect(calculateResponse.text).to.include('<h1>Calculation not possible</h1><p>For this uri: /, with method of: GET</p>');
  });
});
