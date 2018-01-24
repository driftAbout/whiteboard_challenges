'use strict';

const solution = module.exports = {};

function ouroboros(lnklst){
  if (!lnklst || !lnklst.hasOwnProperty('head')) return null;
  let circular;
  let segment = Object.assign({}, lnklst.head);

  while(segment){
    [segment, circular] = step(segment);
  } 
  return circular;

  function step(obj){
    if (obj.hasOwnProperty('deja_vu')) return [false, true];
    obj.deja_vu = true;
    return [obj.next, false];
  }
}

solution.ouroboros = ouroboros;







