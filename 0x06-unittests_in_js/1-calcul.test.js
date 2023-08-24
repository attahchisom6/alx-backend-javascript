const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('it should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 3, 1), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 4.1), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.1, 1), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE',1.5, 3.7), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 3.5, 1.5), 2);
  });
});
