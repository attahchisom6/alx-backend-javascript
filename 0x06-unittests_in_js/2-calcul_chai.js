function calculateNumber(TYPE, a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new TypeError();
  }

  if (TYPE === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (TYPE === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (TYPE === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    } else {
      return Math.round(a) / Math.round(b);
    }
  }
};

module.exports = calculateNumber;
