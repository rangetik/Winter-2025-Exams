// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => {
  let sum = 0;
  for (const key of Object.keys(obj)){
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  }
  return sum;
};

module.exports = count;
