'use strict';

const SLL = require('./lib/sll');
const KT = require('./lib/kary');
const breadthFirst = new KT().breadthFirst;

const solution = module.exports = {};

solution.giantSequoia = (root) =>{
  if(!root) throw new Error('Invalid input:  expecting a tree structure');
  if (!root.hasOwnProperty('value') || !root.hasOwnProperty('children')) throw new Error('Invalid input:  expecting a tree structure');
  
  let linked_list = null;
  let nodeValues = [];
  if (root.value) nodeValues.push(root.value);

  breadthFirst.call({root: root}, node => {
    if( typeof node.value.value === 'number') {
      nodeValues.push(node.value.value);
    }
  });

  if (nodeValues){
    nodeValues.sort((a,b) => a - b);
    linked_list =  new SLL();
    nodeValues.forEach(val => linked_list.insertHead(val));
  }

  return linked_list;
};
