'use strict';

const solution = module.exports = {};

solution.anagram_sort = (arr) => {
  if(!Array.isArray(arr)) throw new Error('Invalid input: expecting array');
  if(arr.join('').replace(/[aA-Zz]/gi,'')) throw new Error('Invalid input: expecting array of strings');

  let anagrams = Object.values(arr.sort().reduce((acc, word) => {
    let letters = word.split('').sort().join('');
    if (!acc[letters]) acc[letters] = [] ;
    acc[letters].push(word);
    return acc;
  },{})).filter(arr => arr.length > 1).reduce((acc, words) => {
    acc = acc.concat(words);
    return acc;
  }, []);
  return anagrams.length ? anagrams : null;
};
