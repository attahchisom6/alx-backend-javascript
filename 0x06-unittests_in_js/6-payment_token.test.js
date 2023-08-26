const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Test for getPaymentTokenFromApi', () => {
  it('test if the async function resolves properly', (done) => {
    getPaymentTokenFromAPI(true)
    .then(response => {
      expect(response.data, 'Successful response from the API');
      done();
    })
    .catch(error => {
      done(error);
    });
  });
});
