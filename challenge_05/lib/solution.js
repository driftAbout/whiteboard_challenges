'use strict';

const solution = module.exports = {};

const mezzo = (linkList) => {
  if (!linkList.hasOwnProperty('value')) return null;
  return [linkList].reduce((arr, obj) => {
    while(obj){
      arr.push(obj);
      obj = obj.next;
    }
    return arr[Math.ceil(arr.length/2) - 1];
  },[]);
};

solution.mezzo = mezzo;