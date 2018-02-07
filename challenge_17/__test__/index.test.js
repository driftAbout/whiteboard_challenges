'use strict';

//const debug = require('debug')('http:test');
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
          // debug('parent', parent, 'value', num, 'i', i);
          this.kt.insert(num, parent);
        });
      });
    });
  
    it('Should be an array', () => {
      expect(solution.branchTotal(this.kt.root)).toBeInstanceOf(Array);
    });

    it('Should contain nodes with the keys of value and children', () => {
      expect(Object.keys(solution.branchTotal(this.kt.root)[0])).toEqual(expect.arrayContaining(['value', 'children']));
    });

    it('Should contain nodes with the keys of value and children', () => {
      expect(Object.keys(solution.branchTotal(this.kt.root)[0])).toEqual(expect.arrayContaining(['value', 'children']));
    });
    it('Should contain nodes with the keys of value and children', () => {
      expect(solution.branchTotal(this.kt.root).map(val => val.value)).toEqual(expect.arrayContaining([1,2,3,7,5]));
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