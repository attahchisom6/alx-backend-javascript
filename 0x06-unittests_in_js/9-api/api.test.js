const { expect } = require('chai');

const request = require('request');
const app = require('./api');

describe('testing api return load', () => {
  const urlParams = {
    url: 'http://localhost:7865',
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
    request(app).get('/cart/124')
      .end((error, response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.text).to.equal('Payment methods for cart 124');
        done();
      });
  }));

  it('invalid test for the cart endpoint', () => new Promise((done) => {
    request(app).get('/cart/invalid_id')
      .end((eror, response) => {
        expect(response.statusCode).to.equal(404);
        expect(response.text).to.equal('Invalid id');
        done();
      });
  }));
});
