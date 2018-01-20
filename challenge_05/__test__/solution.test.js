'use strict';

const solution = require(`${__dirname}/../lib/solution`);

describe('solution', () => {
  describe('valid input', () => {
    test('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });
    
    test('Test 2: solution.mezzo is a function', () => {
      expect(solution.mezzo).toBeInstanceOf(Function);
    });

    test('Test 3: mezzo returns an object with a \'value\' property', () => {
      let data = {value: 7, next: {value: 4, next:{}}};
      let valExists = solution.mezzo(data).hasOwnProperty('value');
      expect(valExists).toBe(true);
    });

    test('Test 4: mezzo returns an object from the middle of the link list', () => {
      let data = {value: 7, next: {value: 4, next:{value: 9, next: {}}}};
      let val = solution.mezzo(data).value;
      expect(val).toEqual(4);
    });

  });
  
  describe('invalid input', () => {
    test('Test 5: mezzo returns null when the argument is not an object', () => {
      expect(solution.mezzo([1,2])).toBeNull();
    });

    test('Test 6: mezzo returns null when the argument is an empty object', () => {
      expect(solution.mezzo({})).toBeNull();
    });

    test('Test 7: mezzo returns null when the argument does not have an \'value\' property,', () => {
      expect(solution.mezzo({val: 1, next: {}} )).toBeNull();
    });

    test('Test 8: mezzo returns null if an object property \'next\' is not an object, but has a value.', () => {
      expect(solution.mezzo({val: 1, next: 3} )).toBeNull();
    });
  });

});