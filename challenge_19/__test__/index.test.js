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
      expect(solution.giantSequoia).toBeDefined();
    });
  });

  describe('valid input', () => {
    beforeAll(() => {
      this.kt = new KT();
      let root = 17;
      this.kt.insert(17);
      let parent;
      [[1],[9,2],[8,3,72],[4,5]].forEach(val => {
        val.forEach((num, i) => {
          parent = val[0];
          if (i === 0) parent = root;
          // debug('parent', parent, 'value', num, 'i', i);
          this.kt.insert(num, parent);
        });
      });
    });
  
    it('Should be an Object', () => {
      debug('linked list', solution.giantSequoia(this.kt.root));
      expect(solution.giantSequoia(this.kt.root)).toBeInstanceOf(Object);
    });

    it('Should be a lined list with head and value, and next', () => {
      expect(solution.giantSequoia(this.kt.root).head).toBeDefined();
      expect(solution.giantSequoia(this.kt.root).head.value).toBeDefined();
      expect(solution.giantSequoia(this.kt.root).head.next).toBeDefined();
    });

    it('Should contain first node with the highest value of the tree', () => {
      expect(solution.giantSequoia(this.kt.root).head.value).toEqual(72);
    });
    it('Should contain last node with the lowest value of the tree', () => {
      this.node = solution.giantSequoia(this.kt.root).head;
      for(this.node; this.node.next; this.node = this.node.next);
      debug('last node', this.node);
      expect(this.node.value).toEqual(1);
    });
  });

  describe('Invalid input', () => {

    it('Should throw error if no value is passed', () => {
      expect(() => {
        solution.giantSequoia();
      }).toThrow('Invalid input:  expecting a tree structure');
    });

    it('Should throw error if non tree is passed as input', () => {
      expect(() => {
        solution.giantSequoia({});
      }).toThrow('Invalid input:  expecting a tree structure');
    });

    it('Should throw error if bad input is passed', () => {
      expect(() => {
        solution.giantSequoia('hello');
      }).toThrow('Invalid input:  expecting a tree structure');
    });

  });
});