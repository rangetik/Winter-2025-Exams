// Refactor following solution
// Sum all numbers from an array

'use strict';

const sum = (array) =>
  array.reduce(
    (sumTotal, element) => (typeof element === "number" ? sumTotal + element : sumTotal),
    0,
  );

module.exports = sum;
