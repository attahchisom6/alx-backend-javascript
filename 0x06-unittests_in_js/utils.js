const Utils = {
  calculateNumber(TYPE, a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new TypeError();
    }

    if (TYPE === 'SUM') {
      return Math.round(a) + Math.round(b);
    } if (TYPE === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } if (TYPE === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
  }
};

module.exports = Utils;
