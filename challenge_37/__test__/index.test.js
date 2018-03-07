'use strict';

const BST = require('../lib/binary-search-tree');

const solution = require(`${__dirname}/../index`);

describe('solution', function(){
  describe('Exists', () => {
    it('solution exists', () => {
      expect(solution).toBeDefined();
    });

    it('solution.sortBinaryTree exists', () => {
      expect(solution.sortBinaryTree).toBeDefined();
    });
  });

  describe('Valid input ', () => {
    beforeAll(() => {
      this.tree = new BST();
      [5,1,9,4,7,3,6,10,8,2,8].forEach(val => this.tree.insert(val));
      this.linkedList = solution.sortBinaryTree(this.tree);
      this.sortedArray = [];
      let node = this.linkedList.head;
      while(node){
        this.sortedArray.push(node.value);
        node = node.next;
      }
    });

    it('Should return a linked list', () => {
      expect(this.linkedList).toBeInstanceOf(Object);
      expect(this.linkedList.hasOwnProperty('head')).toBe(true);
    });

    it('Should return a linked list with sorted values', () => {
      expect(this.sortedArray).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
    
    it('Should return null for a tree that has no values', () => {
      expect(solution.sortBinaryTree(new BST())).toBeNull();
    });
  });

  describe('Invalid Input', () => {
    it('Should throw an error for empty arguments', () =>{
      expect(() => solution.sortBinaryTree()).toThrow();
    });

    it('Should throw an error for an argument that is not a tree', () =>{
      expect(() => solution.sortBinaryTree('tree')).toThrow();
    });

    it('Should throw an error for an object passed as an argument that is not a tree', () =>{
      expect(() => solution.sortBinaryTree({head: null})).toThrow();
    });

  });

});
