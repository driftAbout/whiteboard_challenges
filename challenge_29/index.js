'use strict';

const solution = module.exports = {};

solution.anagram_sort = () => {
  return Array.sort().reduce((acc, word) => {
    let letters = word.split('').sort().join('');
    if (!acc[letters]) acc[letters] = [] ;
    acc[letters].push(word);
    return acc;
  },{});
};
