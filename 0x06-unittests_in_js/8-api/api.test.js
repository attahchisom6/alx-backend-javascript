const { expect } = require('chai');

const request = require('request');

describe('testing api return load', () => {
  const urlParams = {
    url: 'http://localhost:7865',
    method: 'GET',
  };

  it('first test: correct status code', (done) => {
    request(urlParams, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('second Test: correct payload/result', (done) => {
    request(urlParams, (err, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other test: invalid status code', (done) => {
    request(urlParams, (err, response, body) => {
      expect(response.statusCode).to.not.equal(400);
      done();
    });
  });
});
