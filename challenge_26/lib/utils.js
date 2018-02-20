'use strict';

const utils = module.exports = {};

utils.map = (arr, callback) => {
  if (!Array.isArray(arr)) throw new Error(`TypeError: "${arr}".map is not a function`);
  if (!callback) throw new Error(`TypeError: undefined is not a function`);
  if (typeof callback !== 'function') throw new Error(`TypeError:  "${callback}" is not a function`);
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    newArray.push(callback(arr[i], i, arr));
  }
  return newArray;
};

utils.filter = (arr, callback) => {
  if (!Array.isArray(arr)) throw new Error(`TypeError: "${arr}".filter is not a function`);
  if (!callback) throw new Error(`TypeError: undefined is not a function`);
  if (typeof callback !== 'function') throw new Error(`TypeError:  "${callback}" is not a function`);
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if (callback(arr[i], i, arr)) newArray.push(arr[i]);
  }
  return newArray;
};

utils.reduce = (arr, callback, initVal) => {
  if (!Array.isArray(arr)) throw new Error(`TypeError: "${arr}".reduce is not a function`);
  if (!callback) throw new Error(`TypeError: undefined is not a function`);
  if (typeof callback !== 'function') throw new Error(`TypeError:  "${callback}" is not a function`);
  let start = 0;
  if(!initVal){
    start = 1;
    initVal = arr[0];
  }
  for (let i = start; i < arr.length; i++){
    initVal = callback(initVal, arr[i], i, arr);
  }
  return initVal;
};