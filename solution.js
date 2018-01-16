'use strict';

/*** Solution with sort and reduce ***/
function arrStats(arr) {
  let sortArr = arr.sort((a,b) => a - b);
  let total = sortArr.reduce((acc, cur) => acc + cur);
  return {highest: sortArr[sortArr.length - 1], lowest: sortArr[0], average: total / sortArr.length }
}

/*** Solution with reduce ***/
function arrStats(arr) {
  return arr.reduce((acc, cur, i) => {
    if (!i) {
      acc.lowest = cur;
      acc.highest = cur;
    }
    acc.lowest = Math.min(acc.lowest, cur);
    acc.highest = Math.max(acc.highest, cur);
    acc.average += cur;
    if (i + 1 === arr.length) {
      acc.average = acc.average  / arr.length;
    }
    return acc;
  }, {highest: 0, lowest: 0, average: 0 })
}

/*** Solution using the spread operator with Math.max, Math.min, and reduce ***/
function arrStats(arr) {
  return {highest: Math.max(...arr), lowest: Math.min(...arr), average: arr.reduce((acc, cur) => acc + cur) / arr.length};
}
