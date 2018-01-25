'use strict';

const Sll = require('./sll');
const intersect = require('./intersect');
const solution = module.exports = {};

solution.commonLinks = (lnklist_a, lnklist_b) => {
//if (!lnklst || !lnklst.hasOwnProperty('head')) return null;

  let set_a = new Set();
  let set_b = new Set();

  let node_a = lnklist_a.head;
  let node_b = lnklist_b.head;

  while(node_a || node_b){
    if(node_a){
      set_a.add(node_a.value);
      node_a = node_a.next;
    }
    if(node_a){ 
      set_b.add(node_b.value);
      node_b = node_b.next;
    }
  } 
  let abSll = new Sll();
  let intrSect = intersect([...set_a], [...set_b]);
  if (!intrSect) return null;
  return intrSect.reduce((intrSect, val) => abSll.insertHead(val)); 
};

  










