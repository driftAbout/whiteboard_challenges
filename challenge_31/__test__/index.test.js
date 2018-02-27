'use strict';

const solution = require(`${__dirname}/../index.js`);

describe('solution', () => {
  describe('valid input', () => {
    test('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });
    
    test('Test 2: solution.intersect is a function', () => {
      expect(solution.intersect).toBeInstanceOf(Function);
    });
    
    test('Test 3: intersect returns null when there is not an intersection', () => {
      expect(solution.intersect(['kevin'], [1,2])).toBeNull();
    });

    test('Test 4: intersect returns an array of intersecting items when the items exist in ech array', () => {
      expect(solution.intersect([1, 2], [1, 2, 3])).toEqual(expect.arrayContaining([1,2]));
    });

    test('Test 5: intersect returns an array of unique intersections when duplicates are present.', () => {
      expect(solution.intersect(['kevin', 'kevin'], ['kevin', 'kevin', 'kevin']).toString()).toEqual('kevin');
    });
  });
  describe('invalid input', () => {
    test('Test 6: intersect throws an error when there is less than 2 arguments', () => {
      expect(() => solution.intersect([1,2])).toThrow();
    });

    test('Test 7: intersect throws an error when either argument is not an array', () => {
      expect(() => solution.intersect('kevin', [1,2])).toThrow();
    });
  });
});