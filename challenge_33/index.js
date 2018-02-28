'use strict';

const solution = module.exports = {};

solution.factorialSum = (base, factor) => {
  let product = Math.pow(base, factor);
  if (isNaN(product)) throw new Error('Invalid parameters: return value is not a number');
  if (Math.abs((product)) > Number.MAX_SAFE_INTEGER) throw new Error('Invalid parameters: the product too large and is not a safe integer');
  let sign = (product < 0) ? -1 : 1;
  return sign * [...product.toString()].reduce((acc, cur) => acc + parseInt(cur) || 0 ,0);
};


