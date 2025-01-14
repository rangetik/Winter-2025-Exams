// Refactor following solution
// Filter array by type name

'use strict';

const filter = (array, type) => {
  const filteredArray = [...array];
  const removeArray = [];
  for (const value of filteredArray) {
    const index = filteredArray.indexOf(value);
    if (typeof filteredArray[index] !== type) {
      removeArray.unshift(index);
    }
  }
  for (const index of removeArray) filteredArray.splice(index, 1);
  return filteredArray;
};

module.exports = filter;
