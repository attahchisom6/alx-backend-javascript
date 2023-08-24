function calculateNumber(TYPE, a, b) {
  let c;
  if (TYPE === 'SUM') {
    c = Math.round(a) + Math.round(b);
    return c;
  } else if (TYPE === 'SUBTRACT') {
    c = Math.round(a) - Math.round(b);
    return c;
  } else if (TYPE === 'DIVIDE') {
    if (Math.round(b) === 0) {
      console.log('Error');
    }
    c = Math.round(a) / Math.round(b);
    return c;
  }
};

module.exports = calculateNumber;
