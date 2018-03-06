'use strict';

const solution = require(`${__dirname}/../index`);

describe('solution', function () {
  describe('valid input', () => {
    it('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });

    it('Test 2: solution.compareTreeStructures', () => {
      expect(solution.compareTreeStructures).toBeDefined();
    });
  });

  describe('VALID INPUT', () => {

    beforeAll(() => {
      this.treeOne = {
        root: {
          value: 11,
          left: { 
            value: 6,
            left: null,
            right: null,
          },
          right:{
            value: 17,
            left: null,
            right:null,
          },
        },
      };

      this.treeTwo = {
        root: {
          value: 21,
          left: { 
            value: 16,
            left: null,
            right: null,
          },
          right:{
            value: 27,
            left: null,
            right:null,
          },
        },
      };
   
      this.treeThree = {
        root: {
          value: 31,
          left: { 
            value: 26,
            left: {
              value: 41,
              left: 36,
              right: 47,
            },
            right: null,
          },
          right:{
            value: 37,
            left: null,
            right:null,
          },
        },
      };
   
      this.treeFour = {
        root: {
          value: 11,
          left: { 
            value: 6,
            left: null,
            right: {
              value: 17,
              left: null,
              right:null,
            },
          },
        },
      };

      this.treeFive = {
        root: {
          value: 21,
          left: { 
            value: 16,
            left: null,
            right:{
              value: 27,
              left: null,
              right:null,
            },
          },
        },
      };
    });


    it('Should return true for matching tree structures', () => {
      expect(solution.compareTreeStructures(this.treeOne, this.treeTwo)).toBe(true);
    });

    it('Should return false for tree structures that do not match', () => {
      expect(solution.compareTreeStructures(this.treeOne, this.treeThree)).toBe(false);
    });

    it('Should return true for tree structures that are both null', () => {
      expect(solution.compareTreeStructures({root: null}, {root:null})).toBe(true);
    });

    it('Should return true for tree structures that are one sided', () => {
      expect(solution.compareTreeStructures(this.treeFour, this.treeFive)).toBe(true);
    });

    it('Should return false for tree structures that way lopsided', () => {
      expect(solution.compareTreeStructures({root: null}, this.treeFive)).toBe(false);
    });

  });

  describe('INVALID INPUT', () => {
    it('Should return an error when either argument is not a object with a root property', () => {
      expect(() => solution.compareTreeStructures({root: null}, 'wombat')).toThrow();
      expect(() => solution.compareTreeStructures('wombat', {root: null})).toThrow();
      expect(() => solution.compareTreeStructures('wombat', 'Hostess Fruit Pie')).toThrow();
      expect(() => solution.compareTreeStructures('Ding Dong')).toThrow();
      expect(() => solution.compareTreeStructures()).toThrow();
    });
  });

}); 