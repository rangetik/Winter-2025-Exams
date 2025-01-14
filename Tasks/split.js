// Refactor following solution
// Split an array into two parts

'use strict';

const split_Array = (index, array) => {
  const begin = array.slice(0, index);
  const rest = array.slice(index);
  return [begin, rest];
};

module.exports = split_Array;
