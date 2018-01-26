'use strict';

const solution = module.exports = {};

solution.findNthNodeFromEnd = (n, lnklst) => {
  if( typeof n !== 'number' || !lnklst.hasOwnProperty('head')) return null;
  if(n < 0) return null;
  let i = 0;
  let curr_node = lnklst.head;
  for(let next_node = lnklst.head; next_node.next; next_node = next_node.next){
    if((i > n)) curr_node = curr_node.next;
    i++;
  }
  curr_node = curr_node.next;
  if(i < n) return null;
  return {head: curr_node};
};
