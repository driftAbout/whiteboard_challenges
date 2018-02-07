'use strict';

const KT = require('./lib/kary');
const breadthFirst = new KT().breadthFirst;

const solution = module.exports = {};

solution.branchTotal = (root) =>{
  if(!root) throw new Error('Invalid input:  expecting a tree structure');
  if (!root.hasOwnProperty('value') || !root.hasOwnProperty('children')) throw new Error('Invalid input:  expecting a tree structure');
  
  let total = 0;
  breadthFirst.call({root: root}, node => {
    if( !node.value === null) {
      total += node.value;
    }
  });
  return total  ? total  : null;
};


