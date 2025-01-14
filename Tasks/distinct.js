// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const valueSet = new Set(data);
  return Array.from(valueSet).filter((x) => typeof x === 'number');
};

module.exports = distinct;
