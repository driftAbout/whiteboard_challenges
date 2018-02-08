'use strict';

const debug = require('debug')('http:index-test');
const solution = require(`${__dirname}/../index`);
const KT = require('../lib/kary');

debug('index.test.js');

describe('solution', () => {

  describe('Solution, solution', () => {
    it('should exist', () => {
      expect(solution).toBeDefined();
    });
    it('Should exists, solution.jejune', () => {
      expect(KT).toBeDefined();
    });

    it('Should exists, solution.jejune', () => {
      expect(solution.branchTotal).toBeDefined();
    });
  });

  describe('valid input', () => {
    beforeAll(() => {
      this.kt = new KT();
      let root = 17;
      this.kt.insert(17);
      let parent;
      [[1],[9,2],[8,3,7],[4,5]].forEach(val => {
        val.forEach((num, i) => {
          parent = val[0];
          if (i === 0) parent = root;
          this.kt.insert(num, parent);
        });
      });
    });
  
    it('Should output should be a number', () => {
      expect(typeof solution.branchTotal(this.kt.root) === 'number').toBe(true);
    });

    it('Should return the sum of all the values in the tree', () => {
      expect(solution.branchTotal(this.kt.root)).toEqual(56);
    });

    it('Should return 0 for trees with a sum of 0', () => {
      let kt = new KT();
      kt.insert(1);
      kt.insert(0,1);
      kt.insert(-1,1);
      debug('kt', JSON.stringify(kt.root));
      expect(solution.branchTotal(kt.root)).toEqual(0);
    });

    it('Should return null for trees with no numeric values', () => {
      let kt = new KT();
      kt.insert('a');
      kt.insert('b', 'a');
      kt.insert('c', 'a');
      expect(solution.branchTotal(kt.root)).toBeNull();
    });

  });

  describe('Invalid input', () => {

    it('Should throw error if no value is passed', () => {
      expect(() => {
        solution.branchTotal();
      }).toThrow('Invalid input:  expecting a tree structure');
    });

    it('Should throw error if non tree is passed as input', () => {
      expect(() => {
        solution.branchTotal({});
      }).toThrow('Invalid input:  expecting a tree structure');
    });

    it('Should throw error if bad input is passed', () => {
      expect(() => {
        solution.branchTotal('hello');
      }).toThrow('Invalid input:  expecting a tree structure');
    });

  });
});