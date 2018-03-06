'use strict'; 

const Queue = require('../lib/queue.js');
require('jest');

describe('Queue Module', function() {
  beforeEach(() => this.queue = new Queue());
  
  describe('#Queue constructor', () => {
    it('Should create a queue object', () => {
      expect(this.queue).toBeInstanceOf(Object);
    });
    it('Should have a value of null', () => {
      expect(this.queue.front).toBeNull();
    });
  });
  describe('#Enqueue', () => {
    it('Should add a new node to front of queue', () => {
      this.queue.enqueue(10);
      expect(this.queue.front.val).toEqual(10);
    });
    it('Should throw an error when max size is met', () => {
      expect(() => {
        [...Array(1050)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('#Dequeue', () => {
    it('Should remove the last node from queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.dequeue();
      expect(this.queue.front.next).toBeNull();
    });
    it('Should throw an error if there is nothing to remove', () => {
      expect(() => {
        this.queue.dequeue();
      }).toThrow();
    });
  });
});