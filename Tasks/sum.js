// Refactor following solution
// Sum all numbers from an array

'use strict';

const sum = (array) => {
  const sumTotal = [0];
  for (const element of array) {
    const type = typeof element;
    if (type === 'number') {
      if (sumTotal.length > 0) {
        const newSum = sumTotal[sumTotal.length - 1] + element;
        sumTotal.push(newSum);
      }
    }
  }
  return sumTotal[sumTotal.length - 1];
};

module.exports = sum;
