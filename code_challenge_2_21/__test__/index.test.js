'use strict';

const solution = require(`${__dirname}/../index`);

describe('solution', () => {
  describe('valid input', () => {
    it('Test 1: solution exists', () => {
      expect(solution).toBeDefined();
    });

    it('return highest word', () => {
      let str = 'aa bb cc dd';
      expect(solution.highestWord(str)).toEqual('dd');
    });

    it('return highest word', () => {
      let str = 'chicken gazelle zebra';
      expect(solution.highestWord(str)).toEqual('gazelle');
    });
  });
});