'use strict';

const solution = require(`${__dirname}/../lib/solution`);

describe('solution', () => {
  describe('EXISTS...', () => {
    it('solution exists', () => {
      expect(solution).toBeDefined();
    });

    it('should have a map method', () => {
      expect(solution.map).toBeInstanceOf(Function);
    });

    it('should have a filter method', () => {
      expect(solution.filter).toBeInstanceOf(Function);
    });

    it('should have a reduce method', () => {
      expect(solution.map).toBeInstanceOf(Function);
    });
  });

  describe('Valid input', () => {
    
    describe('MAP', () => {
      
      it('should return a copy of the array with new values when applying map', () => {
        let arr = [1,2,3,4];
        expect(solution.map(arr, val => val * 2)).toEqual(expect.arrayContaining([2,4,6,8]));
      });

      it('should return a copy of the array with new values when applying map and multiplying by the index', () => {
        let arr = [1,2,3,4];
        expect(solution.map(arr, (val, i) => val * i)).toEqual(expect.arrayContaining([0,2,6,12]));
      });
    });

    describe('FILTER', () => {
      it('should return a copy of the array with new values when applying filter', () => {
        let arr = [1,4,2,3];
        expect(solution.filter(arr, val => val > 2)).toEqual(expect.arrayContaining([3,4]));
      });

      it('should return a copy of the array with values that are equal to the index when applying filter', () => {
        let arr = [1,4,2,3];
        expect(solution.filter(arr, (val, i) => val === i)).toEqual(expect.arrayContaining([2,3]));
      });
    });

    describe('REDUCE', () => {
      it('should return the sum of the array when applying reduce with callback adding numbers', () => {
        let arr = [1,2,3,4];
        expect(solution.reduce(arr, (acc, cur) => acc + cur)).toEqual(10);
      });

      it('should return a copy of the array with values that are equal to the index when applying filter', () => {
        let arr = ['a', 'b', 'c'];
        expect(solution.reduce(arr, (acc, cur, i) => {acc[cur] = i; return acc;}, {})).toEqual(expect.objectContaining({a: 0, b: 1, c: 2}));
      });
    });
  });

  describe('invalid input', () => {
    it('should throw an error for a non array', () => {
      expect(() => solution.map('hello')).toThrow();
      expect(() => solution.filter('hello')).toThrow();
      expect(() => solution.reduce('hello')).toThrow();
    });

    it('should throw an error for missing callback', () => {
      expect(() => solution.map([1,2])).toThrow();
      expect(() => solution.filter([1,2])).toThrow();
      expect(() => solution.reduce([1,2])).toThrow();
    });

  });

});