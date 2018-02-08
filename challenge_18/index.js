'use strict';
const debug = require('debug')('http:solution');
const KT = require('./lib/kary');
const breadthFirst = new KT().breadthFirst;

debug('solution');

const solution = module.exports = {};

solution.max_childNode = (root) =>{
  debug('input tree', root);
  if(!root) throw new Error('Invalid input: expecting a tree structure');
  if (!root.hasOwnProperty('value') || !root.hasOwnProperty('children')) throw new Error('Invalid input: expecting a tree structure');
  
  let nodeData = {max: 0};
  breadthFirst.call({root: root}, node => {
    if(node.value.children) {   
      for(nodeData.i = 0, nodeData.childNode = node.value.children.head;  nodeData.childNode; nodeData.childNode = nodeData.childNode.next, nodeData.i++);
      if (nodeData.i > nodeData.max){
        nodeData.nodeRef = node;
        nodeData.max = nodeData.i;
      }  
    }
  });

  return nodeData.nodeRef;
};
