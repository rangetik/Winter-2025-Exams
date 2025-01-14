// Refactor following solution
// Filter array by type name

'use strict';

const filter = (array, type) => {
  const removeArray = [];
  for (const value of array) {
    const index = array.indexOf(value);
    if (typeof array[index] !== type) {
      removeArray.unshift(index);
    }
  }
  for (const index of removeArray) array.splice(index, 1);
  return array;
};

module.exports = filter;
