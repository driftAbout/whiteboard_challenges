'use strict';

const solution = module.exports = {};

solution.stats = stats;

function stats(arr){
  let arrSet = new Set(arr.filter(val => typeof val === 'number')); 
  if (!arrSet.size) return null;
  return {first: max(arrSet), second: max(arrSet)};
  function max(vals){
    let maxVal = vals.size ? Math.max(...vals): null;
    vals.delete(maxVal);
    return maxVal;
  }
}