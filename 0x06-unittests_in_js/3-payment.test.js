const Utils = require('./utils');

const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testing the sendPaymentApi function', () => {
  it('we will now spy the util function to check of its returning appropraite result as sendPaymentRequestToApi', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    spy.restore();
  });
});
