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
      c === 'Error';
      return c;
    }
    else {
      c = Math.round(a) / Math.round(b);
      return c;
    }
  } else {
    return;
  }
};

module.exports = calculateNumber;
