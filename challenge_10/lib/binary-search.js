'use strict';

const debug = require('debug')('http:binary-search');

module.exports = function(val, dataSet) {
  if (typeof val !== 'number' || ! Array.isArray(dataSet)) throw new Error('Invalid input: Expecting (number, array)');
  const half = (max, min) =>  Math.floor((max - min) / 2);
  let min = 0;
  let max = dataSet.length - 1;
  let mid = Math.floor(max/2);
  
  let exists = false;
  while (!exists) {
    debug('VALUE: ', val);
    debug('min', min, dataSet[min]);
    debug('mid', mid, dataSet[mid]);
    debug('max', max, dataSet[max]);

    if (val === dataSet[mid]) exists = true;
    if (min === max ) break;
    val > dataSet[mid] ? ( min = ++mid, mid+=half(max, min)) : (max = --mid,  mid-=half(max, min) );
  }
  return exists;
};


