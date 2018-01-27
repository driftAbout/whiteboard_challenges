'use strict';

const debug = require('debug')('http:binary-search');

module.exports = function(val, dataSet) {
  if (typeof val !== 'number' || ! Array.isArray(dataSet)) throw new Error('Invalid input: Expecting (number, array)');
  const right = (max, mid) => [max + 1, Math.floor((max - mid) / 2) + mid];
  const left = (mid, min) => [mid - 1, min - Math.floor((mid - min) / 2)];
  let min = 0;
  let max = dataSet.length - 1;
  let mid = half(max);
  
  let exists = false;

  let x = 0;
  //while (!exists) {
  while (x < 5) {
    x++;
    debug('VALUE: ', val);
    debug('min', min, dataSet[min]);
    debug('mid', mid, dataSet[mid]);
    debug('max', max, dataSet[max]);
    if (min === max) break;
    if (val === dataSet[mid]) exists = true;
    if(val > dataSet[mid]) [min, mid] = right(max, mid);
    [max, mid] = left(mid, min);
  }
  return exists;
};


