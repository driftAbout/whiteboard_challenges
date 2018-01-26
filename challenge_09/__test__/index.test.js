'use strict';

const solution = require(`${__dirname}/../index`);
const Sll = require('../lib/sll');

const findNthNodeFromEnd = solution.findNthNodeFromEnd;

describe('solution', () => {
  const linkedList = [1,2,3,4,5,6,7,8,9].reverse().reduce((acc, val) => acc.insertHead(val) , new Sll());
  describe('valid input', () => {
    test('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });

    test('Test 2: sll exists', () => {
      expect(Sll).toBeDefined();
    });

    test('Test 3: findNthNodeFromEnd is a function', () => {
      expect(solution.findNthNodeFromEnd).toBeInstanceOf(Function);
    });

    test('Test 4: should return the third node as a new linked list', () => {
      let newlist = findNthNodeFromEnd(3, linkedList);
      expect(newlist.head.value).toEqual(6);
    });

    test('Test 5: should return the last node, which has a value of 9 if n = 0', () => {
      let newlist = findNthNodeFromEnd(0, linkedList);
      expect(newlist.head.value).toEqual(9);
    });

  });

  describe('invalid input', () => {
    test('Test 4: should return null for no input', () => {
      expect(findNthNodeFromEnd()).toBeNull();
    });

    test('Test 5: should return null when n is not a number', () => {
      expect(findNthNodeFromEnd('string', linkedList)).toBeNull();
    });

    test('Test 6: should return null when the linked list is not a linked list', () => {
      expect(findNthNodeFromEnd(3, {})).toBeNull();
    });

    test('Test 7: should return null when n is less than 0', () => {
      expect(findNthNodeFromEnd(3, {})).toBeNull();
    });

    test('Test 8: should return null when n is out of range of the linked list', () => {
      expect(findNthNodeFromEnd(22, linkedList)).toBeNull();
    });
    
  }); 
});
    