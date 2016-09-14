var Queue = function() {
  var someInstance = {};
  var counter = 0;
  var remover = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter++] = value;
  };

  someInstance.dequeue = function() {
    remover++;
    if (counter - remover < 0) {
      remover = counter;
    }
    return storage[remover - 1];
  };

  someInstance.size = function() {
    return counter - remover;
  };

  return someInstance;
};
