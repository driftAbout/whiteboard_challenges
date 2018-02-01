'use strict';

const solution = require(`${__dirname}/../index`);
const SLL = require('../lib/sll');
const Stack = require('../lib/stack');
const debug = require('debug')('http;solution');

describe('solution', () => {
  describe('valid modules', () => {
    it('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });

    it('Test 2: sll exists', () => {
      expect(SLL).toBeDefined();
    });

    it('Test 2: sll exists', () => {
      expect(Stack).toBeDefined();
    });
  });
  describe('valid input', () => {
    this.list = [1,2,2,2,3,4,5,5,6,6,4,3,2,1];
    this.linked_list = this.list.reduce((sll, val) => sll.insertHead(val), new SLL());
    it ('should return an object', () => {
      expect(solution.dedupe(this.linked_list.head)).toBeInstanceOf(Object);
    });

    it ('should create new lined list with out consecutive dupes', () => {
      this.list = [1,1,1,2,2,2];
      this.linked_list = this.list.reduce((sll, val) => sll.insertHead(val), new SLL());
      expect(solution.dedupe(this.linked_list.head).head.next.value).toEqual(this.list[1]);
    });


    it ('should create new lined list with out consecutive dupes', () => {
      this.list = [1,1,1,1,1,1,1,1,11,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
      this.newList = solution.dedupe(this.linked_list.head);
      let node = this.newList.head;
      let arr = [];
      while(node) {
        arr.push(node.value);
        node = node.next;
      }
      debug('arr', arr);
      expect(arr.length).toEqual(2);
    });
  });

  describe('Invalid input', () => {
    it('should throw an eror for undefined arguments', () => {
      expect(() => {
        solution.dedupe();
      }).toThrow();
    });

    it('should throw an error for an empty object ', () => {
      expect(() => {
        solution.dedupe({});
      }).toThrow();
    });

    it('should throw an error for undefined value', () => {
      expect(() => {
        solution.dedupe({next:null});
      }).toThrow();
    });

  });

});