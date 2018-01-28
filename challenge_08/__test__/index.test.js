'use strict';

const solution = require('../index');
const intersect = require(`${__dirname}/../lib/intersect`);
const Sll = require(`${__dirname}/../lib/sll`);

describe('solution', () => {
  describe('Modules ', () => {
    test('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });

    test('Test 2: sll exists', () => {
      expect(Sll).toBeDefined();
    });

    test('Test 2: sll exists', () => {
      expect(intersect).toBeDefined();
    });

    test('Test 2: solution.is a function', () => {
      expect(solution.commonLinks).toBeInstanceOf(Function);
    });

    test('Test 2: solution.is a function', () => {
      expect(solution.commonLinks).toBeInstanceOf(Function);
    });
  });

  describe('Valid input', ()=> {
    beforeEach(() => {
      this.lla = new Sll(); 
      this.llb = new Sll(); 
    });

    it('Should return a new linked list that is the intersection of values between two given linked lists', () => {
    
      [1,2,3,4].forEach(val => this.lla.insertHead(val));
      [3,4].forEach(val => this.llb.insertHead(val));

      expect(solution.commonLinks(this.lla, this.llb)).toBeInstanceOf(Object);
      expect(solution.commonLinks(this.lla, this.llb)).toEqual(expect.objectContaining({
        head:{ value: 3, next:{ value: 4, next: null}},
      }));
    });

    it('Should return null when the two given linked lists do not intersect.', () => {
      [1,2,3,4].forEach(val => this.lla.insertHead(val));
      [5,6,7].forEach(val => this.llb.insertHead(val));

      expect(solution.commonLinks(this.lla, this.llb)).toBeNull();
    });

    it('Should return null when the two given linked lists do not intersect and one list is empty.', () => {
      [1,2,3,4].forEach(val => this.lla.insertHead(val));
      expect(solution.commonLinks(this.lla, this.llb)).toBeNull();
    });

    it('Should return null when the two given linked lists do not intersect and both lists are empty.', () => {
      expect(solution.commonLinks(this.lla, this.llb)).toBeNull();
    });

  });

  describe('Invalid input', ()=> {
    beforeEach(() => {
      this.lla = new Sll(); 
      this.llb = new Sll(); 
    });

    it('Should return an error when one or both arguments are undefined.', () => {
      expect(() => {
        solution.commonLinks();
      }).toThrow('Invalid input: Expecting two arguments');
      expect(() => {
        solution.commonLinks(this.lla);
      }).toThrow('Invalid input: Expecting two arguments');
    });

    it('Should return an error when one or both arguments are not linked lists.', () => {
      expect(() => {
        solution.commonLinks('pork flavor', 'ramen noodles');
      }).toThrow('Invalid input: Expecting two arguments');
      expect(() => {
        solution.commonLinks(this.lla, {top: 'Ramen'});
      }).toThrow('Invalid input: Expecting two arguments');
    });

  }); 
});
    