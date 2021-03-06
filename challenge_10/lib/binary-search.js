'use strict';

module.exports = function(val, dataSet) {
  if (typeof val !== 'number' || ! Array.isArray(dataSet)) throw new Error('Invalid input: Expecting (number, array)');
  if(val < dataSet[0] || val > dataSet[dataSet.length - 1]) return null;
  const half = (max, min) =>  Math.floor((max - min) / 2);
  let min = 0;
  let max = dataSet.length - 1;
  let mid = half(max, min);
  
  let exists = dataSet.some(() => {
    if (val === dataSet[mid]) return true;
    if (min === max ) return false;
    val > dataSet[mid] ? ( min = ++mid, mid+=half(max, min)) : (max = --mid,  mid-=half(max, min) );
  });
  return exists ?  {value: val, index: mid} : null;
};





 


