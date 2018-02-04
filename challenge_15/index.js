'use strict';

const KT = require('./lib/kary');
const breadthFirst = new KT().breadthFirst;

const solution = module.exports = {};

solution.jejune = (root) =>{
  if(!root) throw new Error('Invalid input:  expecting a tree structure');
  if (!root.hasOwnProperty('value') || !root.hasOwnProperty('children')) throw new Error('Invalid input:  expecting a tree structure');
  
  let nullNodes = [];
  breadthFirst.call({root: root}, node => {
    if( node.value.children === null) {
      nullNodes.push(node.value);
    }
  });
  return nullNodes ? nullNodes : null;
};
