'use strict';
const SLL = require('./lib/sll');

const solution = module.exports = {};

solution.sortBinaryTree = binaryTree => {
  if (!binaryTree) throw new Error('Type error: expecting binary tree');
  if (!binaryTree.hasOwnProperty('root')) throw new Error('Type error: expecting binary tree');
  if(!binaryTree.root) return null;
  solution._inOrderTraversal(binaryTree.root);
  let orderedValues = Object.keys(solution.orderedValues);
  return orderedValues.length ? 
    orderedValues.reduce((acc, cur, i, arr) => {
      acc.insertHead(parseInt(arr[(arr.length - 1) - i]));
      return acc;
    }, new SLL())
    : null;
};
 
solution._inOrderTraversal = treeNode => {
  if (!treeNode) return null;
  solution._inOrderTraversal(treeNode.left);
  solution.orderedValues[treeNode.value] = treeNode.value;
  solution._inOrderTraversal(treeNode.right);
};

solution.orderedValues = []; 




