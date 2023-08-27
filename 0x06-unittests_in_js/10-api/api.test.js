const { expect } = require('chai');

const request = require('request');
// pls note that in these code, response.text and body does the same thing
// i.e expect(response.text) === expect(body)

describe('testing api return load', () => {
  const baseURL = 'http://localhost:7865';

  it('first test: correct status code', (done) => {
    request.get(baseURL, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('second Test: correct payload/result', (done) => {
    request.get(baseUrl, (err, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other test: invalid status code', (done) => {
    request.get(baseUrl, (err, response, body) => {
      expect(response.statusCode).to.not.equal(400);
      done();
    });
  });

  it('valid test for the cart endpoint', (done) => {
    request.get(`${baseURL}/124`, (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.text).to.equal('Payment methods for cart 124');
      done();
    });
  });

  it('invalid test for the cart endpoint', (done) => {
    request.get(`${baseURL}/hello`, (err, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(response.text).to.equal('Invalid id');
      done();
    });
  });

  it('Test to if the endpoint returns avalaible payment from the system', (done) => {
    const paymentData =  {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };
    request.get(`${baseURL}/payments_available`, (err, resppnse, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal(paymentData);
      done();
    });
  });

  it('Test to check the post endpoint tp see if a user is properly created', {} => {
    postData = { 'userName', 'Bob'};
    request.post({
      url: `${baseURL}/login`,
      json: postData
    }

});
