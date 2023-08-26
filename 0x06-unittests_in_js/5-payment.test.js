const sinon = require('sinon');

const { expect } = require('chai');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./5-payment');

describe('testing the sendPaymentApi function', () => {
  let consoleSpy;

  beforeEach('setup', () => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach('teardown', () => {
    consoleSpy.restore();
  });

  it('we will now spy the utils function to check if its returning appropraite result as sendPaymentRequestToApi', () => {

    it('First Test', () => {
      sendPaymentRequestToApi(100, 20);
      expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
    });

    it('Second Test', () => {
      sendPaymentRequestToApi(10, 10);
      expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
    });
  });
});
