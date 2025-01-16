// Refactor following solution
// Count types in an array

'use strict';

const countTypes = (array) => {
  const typeCounts = {};
  for (const element of array) {
    const type = typeof element;
    if (!(type in typeCounts)) typeCounts[type] = 0;
    typeCounts[type]++;
  }
  return typeCounts;
};

module.exports = countTypes;
