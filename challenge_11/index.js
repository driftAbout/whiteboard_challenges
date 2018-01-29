'use strict';

const solution = module.exports = {};


solution.calculateMissing = (arr) => {
  if (! Array.isArray(arr)) throw new Error('Invalid input:  Expecting array');
  return arr.reduce((acc, cur) =>  { 
    delete acc[cur - 1];
    return acc;
  }, [...Array(arr.length)]).indexOf(undefined) + 1;
};