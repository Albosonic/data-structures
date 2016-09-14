var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  console.log('==================');
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.remover = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.counter - this.remover;
};

queueMethods.enqueue = function (value) {
  this.storage[this.counter++] = value;
};

queueMethods.dequeue = function () {
  this.remover++;
  if (this.counter - this.remover < 0) {
    this.counter = this.remover;
    return this.storage[this.remover];
  }
  return this.storage[this.remover - 1];
};