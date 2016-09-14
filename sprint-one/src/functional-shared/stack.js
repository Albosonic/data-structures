var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    counter: 0,
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.counter;
};

stackMethods.push = function(value) {
  this.storage[this.counter++] = value;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  return this.storage[this.counter];
};


