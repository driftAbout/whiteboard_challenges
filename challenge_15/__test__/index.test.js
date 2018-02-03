'use strict';

const solution = require(`${__dirname}/../index`);
const KT = require('../lib/kary');

describe('solution', () => {

  describe('Solution, solution', () => {
    it('should exist', () => {
      expect(solution).toBeDefined();
    });
    it('Should exists, solution.jejune', () => {
      expect(KT).toBeDefined();
    });

    it('Should exists, solution.jejune', () => {
      expect(solution.jejune).toBeDefined();
    });
  });

  describe('valid input', () => {
    beforeAll(() => {
      this.kt = new KT();
      this.kt.insert(8);
      this.kt.insert(1,8);

     // [1,9,2,8,3,7,4,5].map(val => this.kt.insert(val,8));
      console.log('this.kt', this.kt);
    });
  
    it('Test 2: sll exists', () => {
      expect(solution.jejune(this.kt.root)).toBe(true);
    });
  });
});