'use strict';

function stats(arr){
  if (!arr.length) return null;
  let arrSet = new Set(arr); 
  return {first: max(arrSet), second: max(arrSet)};
  function max(vals){
    let maxVal = vals.size ? Math.max(...vals): null;
    vals.delete(maxVal);
    return maxVal;
  }
}