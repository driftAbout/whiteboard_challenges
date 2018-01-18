'use strict';

const solution = module.exports = {};

const traverse = (train) => {
  let car = train;
  let total = 0;
  while(car){
    total += typeof car.value === 'number' ? car.value : 0;
    car = car.next;
  }
  return total ? total : null;
};

solution.traverse = traverse;