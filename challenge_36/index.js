'use strict';

const solution = module.exports = {};

solution.compareTreeStructures = (...args) => {
  if (!args.every(node => node))
    throw new Error('Type Error: expecting each argument to be an array');
  if (!args.every(node => node.hasOwnProperty('root')))
    throw new Error('Type Error: expecting each argument to be an array');
  let [treeOne, treeTwo] = args;
  return solution.preOrderTraverse(treeOne.root, treeTwo.root);
};

solution.preOrderTraverse = (nodeOne, nodeTwo) => {
  if (!nodeOne &&  !nodeTwo ) return true;
  if (!nodeOne || !nodeTwo ) return false;
  if (!!nodeOne.left !== !!nodeTwo.left || !!nodeOne.right !== !!nodeTwo.right) return false;
  if (!solution.preOrderTraverse(nodeOne.left, nodeTwo.left)) return false;
  if (!solution.preOrderTraverse(nodeOne.right, nodeTwo.right)) return false;
  return true;
};