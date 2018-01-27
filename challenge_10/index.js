'use strict';

const Stack = require('./lib/stack');
const binarySearch = require('./lib/binary-search');

const solution = module.exports = {};

solution.checkBraces = (braces_str) => {
  if (typeof braces_str !== 'string') throw new Error('Invalid input: Expecting string');
  let stack = new Stack();
  return braces_str.split('').every(val => {
    if(val === '{') return stack.push(val);
    if(val === '}') return stack.pop();
    return true;
  });
};

solution.binarySearch = (value, dataset) => binarySearch(value, dataset); 

