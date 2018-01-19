'use strict';

const solution = module.exports = {};

const intersect = (...arr) => {
  if (arr.length !== 2 || !arr.every(val => Array.isArray(val))) return null;
  let [short, long ] = arr.sort((a,b) => a.length < b.length ? - 1 : 1 );
  let cross = short.filter(val => long.includes(val));
  return cross.length ? [...new Set(cross)] : null; 
};

solution.intersect = intersect;