const { expect } = require('chai');
const request = require('request');

describe('testing api return load', () => {
  const baseURL = 'http://localhost:7865';

  it('first test: correct status code', (done) => {
    request.get(baseURL, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('second Test: correct payload/result', (done) => {
    request.get(baseURL, (err, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other test: invalid status code', (done) => {
    request.get(baseURL, (err, response, body) => {
      expect(response.statusCode).to.not.equal(400);
      done();
    });
  });

  it('valid test for the cart endpoint', (done) => {
    request.get(`${baseURL}/cart/124`, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 124');
      done();
    });
  });

  it('invalid test for the cart endpoint', (done) => {
    request.get(`${baseURL}/cart/hello`, (err, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Invalid id');
      done();
    });
  });

  it('Test to check if the endpoint returns available payment data', (done) => {
    const paymentData = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };
    request.get(`${baseURL}/available_payments`, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(paymentData);
      done();
    });
  });

  it('Test to check the post endpoint to see if a user is properly created', (done) => {
    const postData = { 'userName': 'Bob'};
    const postUrlParams = {
      url: `${baseURL}/login`,
      json: postData,
    };

    request.post(postUrlParams, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Bob');
      done();
    });
  });

});
