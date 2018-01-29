'use strict';

const solution = require(`${__dirname}/../index`);

describe('solution', () => {
  describe('Exists', () => {
    it('solution exists', () => {
      expect(solution).toBeDefined();
    });

    it('solution.calculateMissing should exists', () => {
      expect( solution.calculateMissing).toBeDefined();
    });

    it('solution.calculateMissing should exists', () => {
      expect(solution.calculateMissing).toBeInstanceOf(Function);
    });
  });
  describe('Valid input', () => {

    beforeAll(() => {
      this.missing = 21;
      this.arr = [...Array(100)].map((val, i) => i + 1);
      delete this.arr[this.missing];

    });

    it('should return the missing value from an array', () => {
      expect(solution.calculateMissing(this.arr)).toEqual(this.missing + 1);
    });

    it('should return false for arr.includes(missing )', () => {
      let val = solution.calculateMissing(this.arr);
      expect(this.arr.includes(val)).toBe('false');
    });

  });
  describe('Invalid input', () => {
    it('should throw invalid input error', () => {
      expect(() => {
        let arr = 'array';
        expect(solution.calculateMissing(arr));
      }).toThrow('Invalid input:  Expecting array');
      expect(() => {
        expect(solution.calculateMissing());
      }).toThrow('Invalid input:  Expecting array');
    });
  });
});
