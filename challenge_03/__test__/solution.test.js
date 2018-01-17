'use strict';

const solution = require('../lib/solution');

describe('solution', () => {
  test('Test 1: solution exists', () => {
    expect(solution).toBeDefined();
  });
  test('Test 2: solution is a function', () => {
    expect(solution.stats).toBeInstanceOf(Function);
  });
});