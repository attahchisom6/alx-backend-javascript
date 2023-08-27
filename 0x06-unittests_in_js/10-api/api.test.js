const { expect } = require('chai');

const request = require('request');

describe('testing api return load', () => {
  const urlParams = {
    url: 'http://localhost:7865',
    method: 'GET',
  };

  const ValidCartApi = {
    url: 'http://localhost:7865/cart/124',
    method = 'GET',
  };
  const InvalidCartApi = {
    url: 'http://localhost:7865/cart/hello',
    method: 'GET',
  };

  const availablePayments = {
    url: 'http://localhost:7865/available_payments',
    method: 'GET',
  };

  const loginUser = {
    url: 'http://localhost:7865/login',
    method: 'POST',
  };

  const endPoints = [urlParams, ValidCartApi, InvalidCartApi, availablePayments, loginUser]

  beforeEach(request(endPoints, (err, response, body) => {
    con

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
    request(ValidCartApi, (error, response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.text).to.equal('Payment methods for cart 124');
        done();
      });
  }));

  it('invalid test for the cart endpoint', () => new Promise((done) => {
    request(InvalidCartApi, (eror, response) => {
        expect(response.statusCode).to.equal(404);
        expect(response.text).to.equal('Invalid id');
        done();
      });
  }));
});
