const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('it should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(3, 1), 4);
    assert.strictEqual(calculateNumber(1, 4.1), 5);
    assert.strictEqual(calculateNumber(4.1, 1), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(3.7, 1.5), 6);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
