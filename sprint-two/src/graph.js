

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

Graph.prototype.shortestPath = function(start, end) {
  var paths = [];
  var that = this;
  var findPath = function findPath(node, path) {
    // console.log(this);
    path.push(node);
    if (node === end) {
      paths.push(path);
    } else {
      // console.log('node', node, ': has edges', that.nodes[node]);
      for (var i = 0; i < this.nodes[node].length; i++) {
        var edge = this.nodes[node][i];
        // console.log('node', node, ': path', path);
        // console.log('node', node, ': testing for existence of edge', edge, 'in path');
        if (path.indexOf(edge) === -1) {
          // console.log('node', node, ':', 'edge', edge, 'not found in path');
          // console.log('findPath(', edge, ', ', path, ')');
          boundFindPath(edge, path.slice());
        }
      }
    }
  };
  // console.log('findPath(', start, ', ', [], ')');
  // Find all possible paths and store them in the `paths`
  // console.log(this);
  var boundFindPath = findPath.bind(this);
  boundFindPath(start, []);
  // findPath(start, []);
  // console.log(paths);

  if (paths.length === 0) {
    return [];
  }

  // Find the shortest path in paths
  var shortPath = paths[0];
  for (var i = 0; i < paths.length; i++) {
    if (paths[i].length < shortPath.length) {
      shortPath = paths[i];
    }
  }

  return shortPath;
};
  


  /*
  var seen = {};
  var that = this;
  var iCheck = 1000;
  var curNode;
  var sub = function(node) {
    if (node in seen) {
      // we've seen it do nothing

    } else {
      seen[node] = true;
      var currentNodeEdges = that.nodes[node];
      // console.log(currentNodeEdges); 
      for (var i = 0; i < currentNodeEdges.length; i++) {
        var oldI = i - 1;
        var prevEdge = currentNodeEdges[oldI];
        var edge = currentNodeEdges[i];
        console.log('edge', edge, 'currentNodeEdges', currentNodeEdges);

        if (edge === end) {
          console.log('prevEdge: ', prevEdge, 'currentNodeEdges: ', currentNodeEdges);
          curNode = edge;
          if (prevEdge < iCheck) {
            iCheck = prevEdge;
          }
          
        }
        sub(edge);
      }
      console.log('that.nodes', that.nodes);
      // console.log(that.nodes[iCheck]);
    }

  };
  sub(start);
  // console.log(seen);
  */




  // var nodeSeen = {};
  // var that = this;
  // var sub = function(node) {
  //   console.log('node*********', that.nodes);
  //   for (var i = 0; i < that.nodes[node]; i++) {
  //     if (that.nodes[node][i] in nodeSeen) {

  //     } else { 
  //       nodeSeen[that.nodes[node][i]] = true;
  //       sub(that.nodes[node][i]);
  //       console.log(that.nodes[node][i]);
  //     }
  //   }
  // };
  // console.log(this);
  // sub(start);

/*
 * Complexity: What is the time complexity of the above functions?
 */






















