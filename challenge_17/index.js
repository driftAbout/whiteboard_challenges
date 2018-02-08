'use strict';
const debug = require('debug')('http:index-js');
const KT = require('./lib/kary');
const breadthFirst = new KT().breadthFirst;

debug('index.js');

const solution = module.exports = {};

solution.branchTotal = (root) =>{
  if(!root) throw new Error('Invalid input:  expecting a tree structure');
  if (!root.hasOwnProperty('value') || !root.hasOwnProperty('children')) throw new Error('Invalid input:  expecting a tree structure');
  
  let total = root.value;
  breadthFirst.call({root: root}, node => {
    if(typeof node.value.value === 'number') {
      total += node.value.value;
    }
  });
  return (typeof total === 'number')  ? total  : null;
};


