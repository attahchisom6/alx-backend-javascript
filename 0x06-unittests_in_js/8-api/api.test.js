const { expect } = require('chai');

const app = require('./api');
const request = require('request');


describe('Testing api return load', () => {
  it('First test: correct status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).to.equal(200);
  });

  it('Second Test: correct payload/result', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Welcome to the payment system');
  });

  it('Other test: invalid status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).to.not.equal(400);
  });
});
