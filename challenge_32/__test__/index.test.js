'use strict';

const solution = require(`${__dirname}/../index`);

describe('solution', () => {
  describe('Exists', () => {
    it('solution should exist', () => {
      expect(solution).toBeDefined();
    });

    it('solution.iterateFibonacci', () => {
      expect(solution.iterateFibonacci).toBeInstanceOf(Function);
    });

    it('solution.recursiveFibonacci', () => {
      expect(solution.recursiveFibonacci).toBeInstanceOf(Function);
    });
  });

  describe('Valid input', () => {

    it('Should return 0 if n = 0', () => {
      expect(solution.iterateFibonacci(0)).toEqual(0);
      expect(solution.recursiveFibonacci(0)).toEqual(0);
    });

    it('Should return 1if n = 1', () => {
      expect(solution.iterateFibonacci(1)).toEqual(1);
      expect(solution.recursiveFibonacci(1)).toEqual(1);
    });

    it('Should return 1 if n = 2', () => {
      expect(solution.iterateFibonacci(2)).toEqual(1);
      expect(solution.recursiveFibonacci(2)).toEqual(1);
    });

    it('Should return 2 if n = 3', () => {
      expect(solution.iterateFibonacci(3)).toEqual(2);
      expect(solution.recursiveFibonacci(3)).toEqual(2);
    });

    it('Should return 3 if n = 4', () => {
      expect(solution.iterateFibonacci(4)).toEqual(3);
      expect(solution.recursiveFibonacci(4)).toEqual(3);
    });

    it('Should return 5 if n = 5', () => {
      expect(solution.iterateFibonacci(5)).toEqual(5);
      expect(solution.recursiveFibonacci(5)).toEqual(5);
    });

    it('Should return 8 if n = 6', () => {
      expect(solution.iterateFibonacci(6)).toEqual(8);
      expect(solution.recursiveFibonacci(6)).toEqual(8);
    });

    it('Should return  2.2223224462942035e+62 if n = 300', () => {
      expect(solution.iterateFibonacci(300)).toEqual(2.2223224462942035e+62);
      expect(solution.recursiveFibonacci(300)).toEqual(2.2223224462942035e+62);
    });
  });

  describe('Valid input', () => {

    it('Should throw an error if n is not a number', () => {
      expect(() => solution.iterateFibonacci('hello')).toThrow();
      expect(() => solution.recursiveFibonacci('hello')).toThrow();
    });

    it('Should throw an error if n is a negative  number', () => {
      expect(() => solution.iterateFibonacci(-2)).toThrow();
      expect(() => solution.recursiveFibonacci(-2)).toThrow();
    });

  });

});