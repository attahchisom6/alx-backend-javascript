const { expect } = require('chai');

const app = require('./api');
const request = require('request');


describe('Testing api return load', () => {
  const urlParams = {
    url: 'http://localhost:7865',
    method: 'GET',
  };

  it('First test: correct status code', (done) => {
    request(urlParams, (err, body, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Second Test: correct payload/result', (done) => {
    request(urlParams, (err, body, response) => {
      expect(body.text).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other test: invalid status code', (done) => {
    request(urlParams, (err, body, response) => {
    expect(response.statusCode).to.not.equal(400);
      done();
    });
  });
});
