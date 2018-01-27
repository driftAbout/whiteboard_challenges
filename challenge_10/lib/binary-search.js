'use strict';

const debug = require('debug')('http:binary-search');

module.exports = function(val, dataSet) {
  if (typeof val !== 'number' || ! Array.isArray(dataSet)) throw new Error('Invalid input: Expecting (number, array)');
  const half = (val) => Math.floor(val / 2);
  let min = 0;
  let max = dataSet.length - 1;
  let mid = half(max);
  
  let exists = false;
  while (!exists) {
    debug('min', min);
    debug('mid', mid);
    debug('max', max);
    if (min === max) break;
    if (val === dataSet[mid]) return exists = true;
    if(val > dataSet[mid]) [min, mid] = [mid++, half(max - mid)];
    max = mid--;
    mid = half(mid - min );
  }
  return exists;
};


