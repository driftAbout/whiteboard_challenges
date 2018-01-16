'use strict';

function stats(arr){
  if (!arr.length) return null;
  if (arr.length === 1) return {first: arr[0], second: null}
  
  let max = Math.max(...arr);
  let nextMax = Math.max.apply(null, arr.filter(val => val !== max));
  nextMax = nextMax === -Infinity ? null : nextMax;
  return {first: max, second: nextMax};
}


function stats(arr){
  let highest = {first: Math.max(...arr), second: Math.max.apply(null, arr.map(val => val !== Math.max(...arr)))};
}


function stats(arr){
  arr = new Set(arr); 
  if (!arr.size) return null;
  let max = Math.max(...arr);
  arr.delete(max);
  let nextMax = arr.size ? Math.max(...arr): null;
  return {first: max, second: nextMax};
}

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