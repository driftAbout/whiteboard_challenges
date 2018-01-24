'use strict';

const solution = require(`${__dirname}/../lib/solution`);

describe('solution', () => {
  describe('valid input', () => {
    test('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });
    
    test('Test 2: solution.ouroboros is a function', () => {
      expect(solution.ouroboros).toBeInstanceOf(Function);
    });

    test('Test 3: solution.ouroboros return false for non-circular linked list', () => {
      const list = {head:{value: 1, next:{ value: 2, next: {value: 3, next: null}}}};
      expect(solution.ouroboros(list)).toEqual(false);
    });

    test('Test 4: solution.ouroboros return true for a circular linked list', () => {
      const next_a = {value: 5, next: {value: 6, next:null}};
      const next_b = {value: 7, next: {value: 8, next: next_a}};
      next_a.next.next = next_b;
      const list = {head:{value: 1, next:{ value: 2, next: {value: 3, next: next_a}}}};
      expect(solution.ouroboros(list)).toEqual(true);
    });

    test('Test 5: solution.ouroboros return false for non-circular linked list with empty head', () => {
      const list = {head:{}};
      expect(solution.ouroboros(list)).toEqual(false);
    });

  });

  describe('invalid input', () => {
    test('Test 6: solution.ouroboros return null for empty object', () => {
      const list = {};
      expect(solution.ouroboros(list)).toBeNull();
    });

    test('Test 7: solution.ouroboros return null for non objects {}', () => {
      let list = [1,2,3];
      expect(solution.ouroboros(list)).toBeNull();
      list = 4;
      expect(solution.ouroboros(list)).toBeNull();
      list = 'rubbish';
      expect(solution.ouroboros(list)).toBeNull();
      list = null;
      expect(solution.ouroboros(list)).toBeNull();
      expect(solution.ouroboros()).toBeNull();
    });

  });


});


/*** 
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
***/