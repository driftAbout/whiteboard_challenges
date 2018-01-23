'use strict';

const solution = require(`${__dirname}/../lib/solution`);

describe('solution', () => {
  describe('valid input', () => {
    test('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });
    
    test('Test 2: solution.loop is a function', () => {
      expect(solution.loop).toBeInstanceOf(Function);
    });

    test('Test 3: solution.loop loops n times', () => {
      let c = 3;
      var fc = 0;
      function count(n){fc++};
      solution.loop(c, count);
      expect(fc).toEqual(c);
    });
  });

  describe('invalid input', () => {
    test('Test 4: solution.loop loops 0 times when supplied O as an arg', () => {
      let c = 0;
      var fc = 0;
      function count(n){fc++}
      solution.loop(c, count);
      expect(fc).toEqual(c);
    });

    test('Test 6: solution.loop loops 0 times when a non number is as an arg', () => {
      let c = 'hello';
      var fc = 0;
      function count(n){fc++};
      solution.loop(c, count);
      expect(fc).toEqual(0);
    });

    test('Test 7: solution.loop loops 0 times when a callback is missing', () => {
      let c = 3;
      var fc = 0;
      solution.loop(c);
      expect(fc).toEqual(0);
    });

    test('Test 8: solution.loop loops 0 times when a callback is not a function', () => {
      let c = 3;
      var fc = 0;
      solution.loop(c, 5);
      expect(fc).toEqual(0);
    });

  });
});
