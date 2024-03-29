var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0,
    remover: 0
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.counter - this.remover;
  },
  enqueue: function(value) {
    this.storage[this.counter++] = value;
  },
  dequeue: function() {
    if (this.counter - this.remover > 0) {
      return this.storage[this.remover++];

    }
    return this.storage[this.remover];
  }

};


