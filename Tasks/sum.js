// Refactor following solution
// Sum all numbers from an array

'use strict';

const sum = (array) => {
  let sumTotal = 0;
  for (const element of array) {
    if (typeof element === 'number') {
        sumTotal += element;
    }
  }
  return sumTotal;
};

module.exports = sum;
