'use strict';

const solution = require(`${__dirname}/../index`);

describe('solution', () => {
  describe('Exists', () => {
    it('solution should exist', () => {
      expect(solution).toBeDefined();
    });

    it('solution.factorialSum exists', () => {
      expect(solution.factorialSum).toBeInstanceOf(Function);
    });
  });

  describe('Valid input', () => {
    it('Should return 1 for a factor of 0', () => {
      expect(solution.factorialSum(777, 0)).toEqual(1);
    });

    it('Should return 0 for a base of 0', () => {
      expect(solution.factorialSum(0, 1)).toEqual(0);
    });

    it('Should work with small positive numbers return  10 for  4, 3', () => {
      expect(solution.factorialSum(4, 3)).toEqual(10);
    });

    it('Should work with a negative base and return -10 for  -4, 3', () => {
      expect(solution.factorialSum(-4, 3)).toEqual(-10);
    });

    it('Should work with a negative factor and return 8 for  2, -3', () => {
      expect(solution.factorialSum(2, -3)).toEqual(8);
    });

    it('Should work with decimal points return 8 for  .125, .33', () => {
      expect(solution.factorialSum(.125, .33)).toEqual(76);
    });
  });

  describe('Invalid input', () => {

    it('should throw an error when the base is not a number', () => {
      expect(()=>solution.factorialSum('hello', 2)).toThrow();
    });

    it('should throw an error when the factor is not a number', () => {
      expect(()=>solution.factorialSum(2, 'goodbye')).toThrow();
    });

    it('should throw an error when the base and factor are not mathematically compatible', () => {
      expect(()=>solution.factorialSum(-2, .5)).toThrow();
    });

    it('should throw an error when the base and factor produce a number that returns scientific notation', () => {
      expect(()=>solution.factorialSum(123456678899, 5987654321)).toThrow();
    });

  });

});