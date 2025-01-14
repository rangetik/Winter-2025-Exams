// Refactor following solution
// Filter array by type name

'use strict';

const filter = (array, type) => {
  const remove = [];
  for (const C of array) {
    const x = array.indexOf(C);
    if (typeof array[x] !== type) {
      remove.unshift(x);
    }
  }
  for (const x of remove) array.splice(x, 1);
  return array;
};

module.exports = filter;
