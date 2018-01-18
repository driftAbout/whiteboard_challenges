'use strict';

const solution = require('../solution');

describe('solution', () => {
  test('Test 1: solution exists', () => {
    expect(solution).toBeDefined();
  });
  test('Test 2: solution is a function', () => {
    expect(solution.traverse).toBeInstanceOf(Function);
  });
  test('Test 3: traverse returns null when the argument is not an object', () => {
    expect(solution.traverse(['kevin'])).toBe(null);
  });
  test('Test 4: traverse returns sum of values correctly', () => {
    let data = {value: 2, next:{value: 3, next: {value: 1, next: null}}};
    expect(solution.traverse(data)).toEqual(6);
  });
  test('Test 5: traverse returns sum of values correctly, skipping values that are not numbers', () => {
    let data = {value: 2, next:{value: 'wombat', next: {value: 1, next: null}}};
    expect(solution.traverse(data)).toEqual(3);
  });
  test('Test 6: traverse returns null if all values are not numbers', () => {
    let data = {value: 'hippo', next:{value: 'wombat', next: {value: {}, next: null}}};
    expect(solution.traverse(data)).toBe(null);
  });
  test('Test 7: traverse returns sum even if one of the values is undefined', () => {
    let data = {value: 2, next:{next: {value: 6, next: null}}};
    expect(solution.traverse(data)).toEqual(8);
  });
});