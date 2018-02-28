'use strict';

const solution = module.exports = {};

solution.iterateFibonacci = (n) => {
  if (typeof n !== 'number' || n < -1) throw new Error('Type Error: expecting positive number');
  let previous = 0;
  let current = 1;
  let next;
  for(let i = 0; i < n; i++){
    next = previous + current;
    previous = current;
    current = next;
  }
  return previous;
};


solution.recursiveFibonacci = (n, previous=0, current=1) => {
  if (typeof n !== 'number' || n < -1) throw new Error('Type Error: expecting positive number');
  if (!n) return previous;
  return solution.recursiveFibonacci(--n, current, previous + current);
};