'use strict'

module.exports = dimensional_array => {
  if (!Array.isArray(dimensional_array)) throw new Error('Validation error: Expecting array');
  if(dimensional_array.length < 2) throw new Error('Validation error: Expecting dimensional array');
  return dimensional_array.map((arr, i) => arr.map((val, j) => dimensional_array[dimensional_array.length - 1 - j][i]));
};