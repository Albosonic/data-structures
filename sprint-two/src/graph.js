

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // O(1)
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // O(n)
  return (node in this.nodes);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // O(n^2)
  for (var i = 0; i < this.nodes[node]; i++) {
    this.removeEdge(this.nodes[node][i], node);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // O(n)
  var ind = this.nodes[fromNode].indexOf(toNode);
  if (ind !== -1) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // O(1)
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // O(n)
  var ind = this.nodes[fromNode].indexOf(toNode);
  if (ind !== -1) {
    delete this.nodes[fromNode][ind];
  }

  ind = this.nodes[toNode].indexOf(fromNode);
  if (ind !== -1) {
    delete this.nodes[toNode][ind];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // O(n), assuming cb is O(1)
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


