var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // O(log n)
  var subroutine = function (node) {
    if (value < node.value) {
      if (node.left !== null) {
        subroutine(node.left);
      } else {
        node.left = new BinarySearchTree(value);
      }
    }
    if (value > node.value) {
      if (node.right !== null) {
        subroutine(node.right);
      } else {
        node.right = new BinarySearchTree(value);
      }
    }
  };

  subroutine(this);
};

BinarySearchTree.prototype.contains = function(target) {
  // O(log n)
  var found = false;

  var subroutine = function (node) {
    if (node.value === target) {
      found = true;
    } else {
      if (target < node.value) {
        if (node.left !== null) {
          subroutine(node.left);
        }
      }
      if (target > node.value) {
        if (node.right !== null) {
          subroutine(node.right);
        }
      }
    }
  };

  subroutine(this);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // O(n)
  var subroutine = function (node) {
    callback(node.value);

    if (node.left !== null) {
      subroutine(node.left);
    }

    if (node.right !== null) {
      subroutine(node.right);
    }
  };

  subroutine(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
