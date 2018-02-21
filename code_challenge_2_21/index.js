'use strict';

const solution = module.exports = {};

solution.highestWord = (str) => {
  return str.split(' ').map((word, i) => (
    {
      idx: i, 
      word: word, 
      count: word.split('').reduce((acc, cur) => acc + (cur.charCodeAt(0) - 96 ),0),
    }))
    .sort((a,b) => b.count - a.count)[0].word;
}; 


