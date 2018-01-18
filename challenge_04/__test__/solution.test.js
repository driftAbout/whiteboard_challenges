'use strict';

const solution = require('../solution');

describe('solution', () => {
  test('Test 1: solution exists', () => {
    expect(solution).toBeDefined();
  });
  test('Test 2: solution.intersect is a function', () => {
    expect(solution.intersect).toBeInstanceOf(Function);
  });
  test('Test 3: intersect returns null when the argument is not an object', () => {
    expect(solution.intersect(['kevin'])).toBe(null);
  });
  test('Test 4: intersect returns sum of values correctly', () => {
    let data = {value: 2, next:{value: 3, next: {value: 1, next: null}}};
    expect(solution.intersect(data)).toEqual(6);
  });
  test('Test 5: intersect returns sum of values correctly, skipping values that are not numbers', () => {
    let data = {value: 2, next:{value: 'wombat', next: {value: 1, next: null}}};
    expect(solution.intersect(data)).toEqual(3);
  });
  test('Test 6: intersect returns null if all values are not numbers', () => {
    let data = {value: 'hippo', next:{value: 'wombat', next: {value: {}, next: null}}};
    expect(solution.intersect(data)).toBe(null);
  });
  test('Test 7: intersect returns sum even if one of the values is undefined', () => {
    let data = {value: 2, next:{next: {value: 6, next: null}}};
    expect(solution.intersect(data)).toEqual(8);
  });
});