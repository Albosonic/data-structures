var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    }
    if (list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var prevHead = this.head;
    this.head = this.head.next;
    return prevHead.value;
  };

  list.contains = function(target) {
    var found = false;
    var pointer = this.head;

    while (pointer !== null && !found) {
      if (pointer.value === target) {
        found = true;
      }
      pointer = pointer.next;
    }

    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
