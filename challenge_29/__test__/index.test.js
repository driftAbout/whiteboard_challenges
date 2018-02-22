'use strict';

const solution = require(`${__dirname}/../index`);

describe('solution', () => {
  describe('valid input', () => {
    it('solution exists', () => {
      expect(solution).toBeDefined();
    });

    this.arr = ['acre', 'race', 'care', 'act', 'cat', 'tac'];
    this.anagrams = solution.anagram_sort(this.arr);
    it('Should return object of anagrams', () => {
      expect(Object.keys(this.anagrams)).toEqual(expect.arrayContaining(['acre', 'act']));
    });
  });
});