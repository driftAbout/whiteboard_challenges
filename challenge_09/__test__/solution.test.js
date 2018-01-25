'use strict';

const solution = require(`${__dirname}/../lib/solution`);
const intersect = require('../lib/intersect');
const Sll = require('../lib/sll');

describe('solution', () => {
  describe('valid input', () => {
    test('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });

    test('Test 2: sll exists', () => {
      expect(Sll).toBeDefined();
    });

    test('Test 2: sll exists', () => {
      expect(intersect).toBeDefined();
    });

    test('Test 2: solution.is a function', () => {
      expect(solution.commonLinks).toBeInstanceOf(Function);
    });

    test('Test 2: solution.is a function', () => {
      expect(solution.commonLinks).toBeInstanceOf(Function);
    });

  }); 
});
    