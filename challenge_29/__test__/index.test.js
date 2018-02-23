'use strict';

const solution = require(`${__dirname}/../index`);

describe('solution', () => {
  describe('valid input', () => {
    it('solution exists', () => {
      expect(solution).toBeDefined();
    });

    this.arr = ['acre', 'race', 'care', 'act', 'cat', 'tac', 'pat'];
    this.anagrams = solution.anagram_sort(this.arr);
    it('Should return object of anagrams with keys', () => {
      expect(Object.keys(this.anagrams)).toEqual(expect.arrayContaining(['acre', 'act']));
    });

    it('Should return object of anagrams with keys of words', () => {
      expect(this.anagrams.acre).toEqual(expect.arrayContaining(['acre', 'race', 'care']));
    });

    it('Should not contain a property for words that have no anagrams', () => {
      expect(this.anagrams.pat).toBeUndefined();
    });

    it('Should return null for arrays that have no anagrams', () => {
      expect(solution.anagram_sort(['hello', 'goodbye'])).toBeNull();
    });
  });


  
  describe('invalid input', () => {
    it('Should return an error for input values that are not arrays', () => {
      expect(() => solution.anagram_sort('Hello')).toThrow();
    });
    it('Should return an error for input arrays that contain data other than strings', () => {
      expect(() => solution.anagram_sort(['R2D2', 'C3PO', 'rumba', 'Rosie'])).toThrow();
    });
  });
});