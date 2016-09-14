var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.remover = 0;
  this.counter = 0;
};

Queue.prototype.size = function() {
  return this.counter - this.remover;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter++] = value;
};

Queue.prototype.dequeue = function() {
  this.remover++;
  if (this.remover > this.counter) {
    this.remover = this.counter;
  }
  return this.storage[this.remover - 1];
};


