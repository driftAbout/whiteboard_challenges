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

    it('Should have a head and tail of null when creating a new Queue', () => {
      expect(this.queue.head).toBeNull();
      expect(this.queue.tail).toBeNull();
    });

    it('Should add a value to the beginning of a new the queue and set the tail to the new node', () => {
      this.queue.enqueue(7);
      expect(this.queue.head.value).toEqual(7);
      expect(this.queue.tail.value).toEqual(7);
      expect(this.queue.size).toEqual(1);
    });

    it('Should add a value to the beginning of the que and set the tail should point to the first item entered', () => {
      [1,2,3].forEach(val => this.queue.enqueue(val));
      expect(this.queue.head.value).toEqual(3);
      expect(this.queue.tail.value).toEqual(1);
      expect(this.queue.size).toEqual(3);
    });

    it('Should remove first added item and reset the tail', () => {
      [1,2,3].forEach(val => this.queue.enqueue(val));
      let initSize = this.queue.size;
      this.queue.dequeue();
      expect(this.queue.head.value).toEqual(3);
      expect(this.queue.tail.value).toEqual(2);
      expect(this.queue.size).toEqual(initSize - 1);
    });
  });

  describe('Invalid input', () => {
    it('Should not add nodes with undefined values, should throw error', () => {
      expect( () => { 
        this.queue.enqueue();
      }).toThrow('Invalid input: Value is undefined');
    });

    it('Should not add nodes when max-size is reached, should throw error', () => {
      this.queue.max_size = 3;
      [1,2,3].forEach(val => this.queue.enqueue(val));
      expect( () => { 
        this.queue.enqueue(4);
      }).toThrow('Queue Overflow: Queue is at Max-size');
    });

    it('Should retrun null when attempting to  dequeue an empty queue', () => {
      expect(this.queue.dequeue()).toBeNull();
    });

  });

});