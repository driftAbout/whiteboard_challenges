'use strict';

const solution = module.exports = {};

solution.anagram_sort = (arr) => {
  return Object.values(arr.sort().reduce((acc, word) => {
    let letters = word.split('').sort().join('');
    if (!acc[letters]) acc[letters] = [] ;
    acc[letters].push(word);
    return acc;
  },{})).reduce((acc, words) => {
    acc[words[0]] = words;
    return acc;
  }, {});
};
