// Refactor following solution
// Filter array by type name

'use strict';

const filter = (array, type) => {
  return array.filter((element) => typeof element === type);
};

module.exports = filter;
