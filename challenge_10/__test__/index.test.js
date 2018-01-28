'use strict';

const solution = require(`${__dirname}/../index`);
const binarySearch = require('../lib/binary-search');

const checkBraces = solution.checkBraces;

describe('solution', () => {
  describe('checkBraces', () => {
    describe('Valid input', () => {
      it('Should return true if there is a matching closing brace for every opening brace', () => {
        let braces = '{{{}}}';
        expect(checkBraces(braces)).toBe(true);
      }); 

      it('Should return false if there is not a matching closing brace for every opening brace', () => {
        let braces = '{{{}}}}';
        expect(checkBraces(braces)).toBe(false);
      }); 

      it('Should return true if there is a matching closing brace for every opening brace when there is mixed content', () => {
        let braces = '{1{2{3}a}b}c';
        expect(checkBraces(braces)).toBe(true);
      }); 

      it('Should return false if there is not a matching closing brace for every opening brace when there is mixed content', () => {
        let braces = '{1{2{3}a}b}c}';
        expect(checkBraces(braces)).toBe(false);
      }); 

      it('Should return true if there are no curly braces', () => {
        let braces = 'abcdefg';
        expect(checkBraces(braces)).toBe(true);
        braces = '';
        expect(checkBraces(braces)).toBe(true);
      }); 

      describe('Invalid input', () => {
        it('Should return an error message when the argument is not a string', () => {
          let braces = 4;
          expect(() => checkBraces(braces)).toThrow();
          braces = {hello: 'goodbye'};
          expect(() => checkBraces(braces)).toThrow();
          braces = ['hello', 'goodbye'];
          expect(() => checkBraces(braces)).toThrow();
        }); 
      }); 
    });
  });

  describe('binarySearch', () => {
    describe('Valid input', () => {
      it('Should return object if the value exits in the array', () => {
        let value = 4;
        let arr = [1,2,3,4,5,6,7,8,9];
        expect(binarySearch(value, arr)).toBeInstanceOf(Object);
      }); 

      it('Should return false if the value does not exits in the array', () => {
        let value = 29;
        let arr = [1,2,3,4,5,6,7,8,9];
        expect(binarySearch(value, arr)).toBeNull();
      }); 

      it('Should return an object with the value and index if if the value exits in the array. {value: n, index: i}', () => {
        let value = 7;
        let arr = [1,2,3,4,5,6,7,8,9,10,11];
        expect(binarySearch(value, arr)).toEqual({
          value: 7,
          index: 6,
        });
      }); 
    });

    describe('Valid input', () => {
      it('Should throw an error if the given value is not a number', () => {
        let value = 'giggle snort';
        let arr = [1,2,3,4,5,6,7,8,9];
        expect(() => {
          binarySearch(value, arr);
        }).toThrow('Invalid input: Expecting (number, array)');
      }); 

      it('Should throw an error if the given array is not an array', () => {
        let value = 6;
        let arr = 'moo';
        expect(() => {
          binarySearch(value, arr);
        }).toThrow('Invalid input: Expecting (number, array)');
      }); 

      it('Should throw an error if the search is called with out any arguments', () => {
        expect(() => {
          binarySearch();
        }).toThrow('Invalid input: Expecting (number, array)');
      }); 

    });
  });

});


    