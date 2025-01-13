// Refactor following solution
// Count types in an array

'use strict';

const countTypes = (array) => {
  const typeCounts = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    const type = typeof element;
    typeCounts[type] !== undefined && typeCounts[type]++;
  }
  return typeCounts;
};

module.exports = countTypes;
