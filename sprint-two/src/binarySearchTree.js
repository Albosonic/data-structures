var BinarySearchTree = function(value) {
  this._root = new Node(value);
};

var Node = function (value) {
  this._value = value;
  this._left = null;
  this._right = null;
};

BinarySearchTree.prototype.insert = function(node, value) {
  // O(log n)
  if (value < node._value) {
    if (node._left) {
      this.insert(node._left, value);
    } else {
      node._left = new Node(value);
    }
  } else {
    if (node._right) {
      this.insert(node._right, value);
    } else {
      node._right = new Node(value);
    }
  }

  // var unbalanced = this._isUnbalanced();
  // if (unbalanced) {
    // this._root = this._rebalance(this._root, null);
  // }
};

BinarySearchTree.prototype.contains = function(node, target) {
  // O(log n)

  if (target === node._value) {
    return true;
  } else {
    if (target < node._value) {
      if (node._left) {
        return this.contains(node._left, target);
      }
    } else {
      if (node._right) {
        return this.contains(node._right, target);
      }
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(node, callback) {
  // O(n)
  
  callback(node._value);

  if (node._left !== null) {
    this.depthFirstLog(node._left, callback);
  }

  if (node._right !== null) {
    this.depthFirstLog(node._right, callback);
  }
  
};

BinarySearchTree.prototype._rebalance = function(node, parent) {
  // if node is unbalanced
    // rebalance the node's left side
    // rebalance the node's right side
    // rebalance the node
      // if the current node's left height > the current node's right height
        // save reference to node's left's right
        // if parent
          // set parent's left to node's left
        // set node's left's right to be node
        // set node's left to be the saved reference
      // if the current node's right height > the current node's left height
        // save reference to node's right's left
        // if parent
          // set parent's right to node's right
        // set node's right's left to be node
        // set node's right to be the saved reference



  // Previous implementation
  var temp = node;
  node = node._left;
  temp._left = null;
  temp._right = null;
  node._right = temp;
  return node;
};

BinarySearchTree.prototype._isUnbalanced = function() {
  var n = 0;
  var height = 0;
  var traverse = function(node, localHeight) {
    if (node !== null) {
      n++;
      localHeight++;
      if (localHeight > height) {
        height ++;
      }
      traverse(node._left, localHeight);
      traverse(node._right, localHeight);
    }
  };
  traverse(this._root, height);

  return ( height > Math.floor(Math.log2(n) + 1) );
};
  
/*
 * Complexity: What is the time complexity of the above functions?
 */
