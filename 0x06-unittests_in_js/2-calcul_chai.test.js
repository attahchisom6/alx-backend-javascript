const calculateNumber = require('./2-calcul_chai')
const { expect } = require('expect');

describe('SUM tests', () => {
  it('Test for add negatives and positives', () => {
    expect.strictEqual(calculateNumber('SUM', 4, 8), 12);
    expect.strictEqual(calculateNumber('SUM', 1.9, 0), 2);
    expect.strictEqual(calculateNumber('SUM', 6.1, 6.1), 12);
    expect.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    expect.strictEqual(calculateNumber('SUM', 0.1, 0.6), 1);
    expect.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    expect.strictEqual(calculateNumber('SUM', -1, -3), -4);
    expect.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5);
  });

  it('TypeErrors', () => {
    expect.throws(() => calculateNumber('SUM', NaN, 5.6), { name: 'TypeError' });
    expect.throws(() => calculateNumber('SUM', 5.6, NaN), { name: 'TypeError' });
    expect.throws(() => calculateNumber('SUM', NaN, NaN), { name: 'TypeError' });
  });
});

describe('SUBTRACT tests', () => {
  it('Substracts positive and negatives', () => {
    expect.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
    expect.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.6), 3);
    expect.strictEqual(calculateNumber('SUBTRACT', 8, 4), 4);
    expect.strictEqual(calculateNumber('SUBTRACT', 1.9, 0), 2);
    expect.strictEqual(calculateNumber('SUBTRACT', 6.1, 6.1), 0);
    expect.strictEqual(calculateNumber('SUBTRACT', 1, 0.2), 1);
    expect.strictEqual(calculateNumber('SUBTRACT', 0.6, 0.1), 1);
    expect.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
  });

  it('TypeErrors', () => {
    expect.throws(() => calculateNumber('SUBTRACT', NaN, 5.6), { name: 'TypeError' });
    expect.throws(() => calculateNumber('SUBTRACT', 5.6, NaN), { name: 'TypeError' });
    expect.throws(() => calculateNumber('SUBTRACT', NaN, NaN), { name: 'TypeError' });
  });
  
});

describe('DIVIDE', () => {
  it('positive and negative divide', () => {
    expect.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
    expect.strictEqual(calculateNumber('DIVIDE', 6.1, 1.7), 3);
    expect.strictEqual(calculateNumber('DIVIDE', 6.1, 6.1), 1);
    expect.strictEqual(calculateNumber('DIVIDE', -2, 1.1), -2);
    expect.strictEqual(calculateNumber('DIVIDE', -4.4, -2.2), 2);
    expect.strictEqual(calculateNumber('DIVIDE', 2.0, 1.1), 2);
    expect.strictEqual(calculateNumber('DIVIDE', 0.6, 0.9), 1);
    expect.strictEqual(calculateNumber('DIVIDE', 4.5, 5), 1);
  });

  it('returns', () => {
    expect.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error');
    expect.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
    expect.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });

  it('TypeErrors', () => {
    expect.throws(() => calculateNumber('DIVIDE', NaN, 5.6), { name: 'TypeError' });
    expect.throws(() => calculateNumber('DIVIDE', 5.6, NaN), { name: 'TypeError' });
    expect.throws(() => calculateNumber('DIVIDE', NaN, NaN), { name: 'TypeError' });
  });
});
