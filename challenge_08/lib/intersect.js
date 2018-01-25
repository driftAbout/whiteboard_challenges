'use strict';

module.exports = function(...arr) {
  if (arr.length !== 2 || !arr.every(val => Array.isArray(val))) return null;
  let [short, long ] = arr.sort((a,b) => a.length < b.length ? - 1 : 1 );
  let cross = short.filter(val => long.includes(val));
  return cross.length ? cross : null;
};