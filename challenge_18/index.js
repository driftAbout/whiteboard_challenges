'use strict';

const KT = require('./lib/kary');
const breadthFirst = new KT().breadthFirst;

const solution = module.exports = {};

solution.max_childNode = (root) =>{
  if(!root) throw new Error('Invalid input: expecting a tree structure');
  if (!root.hasOwnProperty('value') || !root.hasOwnProperty('children')) throw new Error('Invalid input: expecting a tree structure');
  
  let nodeData = {};
  breadthFirst.call({root: root}, node => {
    if( !node.value.children) {   
      for(nodeData.i = 0, nodeData.childNode = node.value.children;  nodeData.childNode; nodeData.childNode.next, nodeData.i++);
      if (nodeData.i > nodeData.max) nodeData.nodeRef = node;  
    }
  });
  return nodeData.nodeRef;
};
