'use strict';
const debug = require('debug')('http:solution');
const solution = require(`../lib/solution`);

describe('solution', () => {
  describe('valid input', () => {
    it('solution shoukld exists', () => {
      expect(solution).toBeDefined();
    });

    it('should return an array rotated 90 degrees', () => {
      let arr = [[1,2,3], [4,5,6], [7,8,9]];
      let expected = [[7,4,1],[8,5,2],[9,6,3]];
      debug('array', solution(arr));
      expect(solution(arr)).toEqual(expect.arrayContaining(expected));
    });

    it('should return an array rotated 90 degrees', () => {
      let arr = [['The','quick','brown'], ['fox','jumped','over'], ['the', 'lazy','cow']];
      let expected = [['the','fox','The'],['lazy','jumped','quick'],['cow','over','brown']];
      debug('array', solution(arr));
      expect(solution(arr)).toEqual(expect.arrayContaining(expected));
    });

  });

  describe('invalid input', () => {
    it('should throw an error when passed a string', () => {
      let arr = 'hello';
      expect(() => solution(arr)).toThrow();
    });

    it('should throw an error when passed', () => {
      let arr = [[1,2,3]];
      expect(() => solution(arr)).toThrow();
    });
  });
});