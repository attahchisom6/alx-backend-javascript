const sinon = require('sinon');

const { expect } = require('chai');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./4-payment');

describe('testing the sendPaymentApi function', () => {
  it('we will now spy the util function to check of its returning appropraite result as sendPaymentRequestToApi', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
