'use strict';

const Queue = require(`${__dirname}'/../lib/stacked_queue`);

describe('Queue class', () => {
  beforeEach( () => {
    this.queue = new Queue();
  });

  it('queue module should exist', () => {
    expect(Queue).toBeDefined();
  });

  describe('Valid input', () => {
    it('should define queue', () => {
      expect(this.queue).toBeDefined();
    });

    it('Should have a front top and back of null when creating a new Queue', () => {
      expect(this.queue.front).toBeNull();
      expect(this.queue.back).toBeNull();
    });

    it('Should add a value to a new Queue to the back of the line and set the front to the new node', () => {
      this.queue.enqueue(7);
      expect(this.queue.front.value).toEqual(7);
      expect(this.queue.back.value).toEqual(7);
    });

    it('Should add a value to the back of the line', () => {
      this.queue.enqueue(7);
      expect(this.queue.front.value).toEqual(7);
    });

    it('Should add a value to the line of the que and set the front to the first item entered', () => {
      [1,2,3].forEach(val => this.queue.enqueue(val));
      expect(this.queue.back.value).toEqual(3);
      expect(this.queue.front.value).toEqual(1);
    });

    it('Should remove first added item and reset the front', () => {
      [1,2,3].forEach(val => this.queue.enqueue(val));
      this.queue.dequeue();
      expect(this.queue.back.value).toEqual(3);
      expect(this.queue.front.value).toEqual(2);
    });
  });

  describe('Invalid input', () => {
    it('Should not add nodes with undefined values, should throw error', () => {
      expect( () => { 
        this.queue.enqueue();
      }).toThrow('Invalid input: Value is undefined');
    });

    it('Should return null when attempting to  dequeue an empty queue', () => {
      expect(this.queue.dequeue()).toBeNull();
    });

  });

});