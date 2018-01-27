'use strict';
const debug = require('debug');

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
    describe.only('Valid input', () => {
      it('Should return true if the value exits in the array', () => {
        let value = 4;
        let arr = [1,2,3,4,5,6,7,8,9];
        expect(binarySearch(value, arr)).toBe(true);
      }); 
    });
  });

});


    