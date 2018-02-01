'use strict';

const SLL = require('./lib/sll');
const Stack = require('./lib/stack');
const debug = require('debug')('http;solution');

const solution = module.exports = {};

solution.dedupe = (head) => {
  debug('head', head);
  if(!head || !head.hasOwnProperty('value') || !head.hasOwnProperty('value')) throw new Error('Invalid input: expecting object');
  
  let pile = new Stack; 
  let linkList = new SLL;
  let node = head;

  while (node){
    debug('pile.peek', pile.peek());
    if (node.value !== pile.peek()) pile.push(node.value);
    node = node.next;
  } 

  node = pile.top;
  debug('pile.top', pile.top);

  while (node){
    linkList.insertHead(node.value);
    node = node.next;
  } 

  debug('linkList', linkList);
  return linkList;

};