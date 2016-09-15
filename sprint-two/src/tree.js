var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;

  var subroutine = function (node) {
    if (node.value === target) {
      found = true;
    }
    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].value === target) {
        found = true;
      }
      if (node.children[i]) {
        subroutine(node.children[i]);
      }
    }
  };

  subroutine(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
