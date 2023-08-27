const { expect } = require('chai');

const request = require('request');

describe('testing api return load', () => {
  const urlParams = {
    url: 'http://localhost:7865',
    method: 'GET',
  };

  const ValidCartApi = {
    url: 'http://localhost:7865/cart/124',
    method: 'GET',
  };
  const InvalidCartApi = {
    url: 'http://localhost:7865/cart/hello',
    method: 'GET',
  };

  it('first test: correct status code', () => new Promise((done) => {
    request(urlParams, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('second Test: correct payload/result', () => new Promise((done) => {
    request(urlParams, (err, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('other test: invalid status code', () => new Promise((done) => {
    request(urlParams, (err, response, body) => {
      expect(response.statusCode).to.not.equal(400);
      done();
    });
  }));

  it('valid test for the cart endpoint', () => new Promise((done) => {
    request(ValidCartApi, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 124');
        done();
      });
  }));

  it('invalid test for the cart endpoint', () => new Promise((done) => {
    request(InvalidCartApi, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        expect(body).to.equal('Invalid id');
        done();
      });
  }));
});
