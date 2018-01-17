'use strict';

const solution = require('../lib/solution');

describe('solution', () => {
  test('solution exists', () => {
    expect(solution).toBeDefined();
  });
  test('solution is a function', () => {
    expect(solution.stats).toBeInstanceOf(Function);
  });
  test('solution returns null for empty array', () => {
    expect(solution.stats([])).toBe(null);
  });
  test('solution returns object with second highest value as null for arrays with length of 1', () => {
    expect(solution.stats([1])).toEqual({first: 1, second: null});
  });
  test('solution returns object with second highest value as null for arrays with length of 1 when duplicates are removed', () => {
    expect(solution.stats([1, 1])).toEqual({first: 1, second: null});
  });
  test('solution returns object with first and second highest values for arrays with length greater than 1 when duplicates are removed', () => {
    expect(solution.stats([1, 1, 2, 2, 3])).toEqual({first: 3, second: 2});
  });
  test('solution returns object with first and second highest values, even with negative numbers', () => {
    expect(solution.stats([-1, -1, -2, -2, -3])).toEqual({first: -1, second: -2});
  });
  test('solution returns null when all values are non numerical values', () => {
    expect(solution.stats(['blue', 'red', null, undefined])).toBe(null);
  });
  test('solution returns object with first and second highest values and filters out non numerical values', () => {
    expect(solution.stats([-1, -1, 2, -2, 2, 3, 'red', null, undefined])).toEqual({first: 3, second: 2});
  });
});