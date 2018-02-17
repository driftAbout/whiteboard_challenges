'use strict';

//const debug = require('debug')('http:test');
const solution = require(`${__dirname}/../index`);
const KT = require('../lib/kary');

describe('solution', () => {

  describe('Solution, solution', () => {
    it('should exist', () => {
      expect(solution).toBeDefined();
    });
    it('Should exists, new k-ary tree', () => {
      expect(KT).toBeDefined();
    });

    it('Should exists, solution.max_childNode', () => {
      expect(solution.max_childNode).toBeDefined();
    });
  });

  describe('valid input', () => {
    beforeAll(() => {
      this.kt = new KT();
      let root = 17;
      this.kt.insert(17);
      let parent;
      [[1],[9,2],[8,3,7],[4,5],[13,22,34,51,12,23]].forEach(val => {
        val.forEach((num, i) => {
          parent = val[0];
          if (i === 0) parent = root;
          // debug('parent', parent, 'value', num, 'i', i);
          this.kt.insert(num, parent);
        });
      });
    });
  
    it('Should be an node', () => {
      expect(solution.max_childNode(this.kt.root).value).toBeDefined();
    });

    it('Should contain the keys of value and children', () => {
      expect(Object.keys(solution.max_childNode(this.kt.root).value)).toEqual(expect.arrayContaining(['value', 'children']));
    });

    it('Should contain nodes with value', () => {
      expect(solution.max_childNode(this.kt.root).value.value).toEqual(13);
    });
  });

  describe('Invalid input', () => {

    it('Should throw error if no value is passed', () => {
      expect(() => {
        solution.max_childNode();
      }).toThrow('Invalid input: expecting a tree structure');
    });

    it('Should throw error if non tree is passed as input', () => {
      expect(() => {
        solution.max_childNode({});
      }).toThrow('Invalid input: expecting a tree structure');
    });

    it('Should throw error if bad input is passed', () => {
      expect(() => {
        solution.max_childNode('hello');
      }).toThrow('Invalid input: expecting a tree structure');
    });

  });
});