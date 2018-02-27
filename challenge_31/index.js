'use strict';

const solution = module.exports = {};

solution.intersect = (...arr) => {
  if (arr.length !== 2 || !arr.every(val => Array.isArray(val))) throw new Error('Type Error: expecting arguments to be arrays');
  let [short, long ] = arr.sort((a,b) => a.length < b.length ? - 1 : 1 );

  let cross =  [...[short.reduce((acc, cur) => { 
    acc[cur] = cur;
    return acc;
  },{})].reduce((acc, cur) => {
    long.forEach(val => {
      if (cur[val]) acc.add(val);
    });
    return acc;
  },new Set())];

  return cross.length ? cross : null;
};
