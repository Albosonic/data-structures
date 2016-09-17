describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(binarySearchTree._root, 2);
    binarySearchTree.insert(binarySearchTree._root, 3);
    binarySearchTree.insert(binarySearchTree._root, 7);
    binarySearchTree.insert(binarySearchTree._root, 6);
    expect(binarySearchTree._root._left._right._value).to.equal(3);
    expect(binarySearchTree._root._right._left._value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(binarySearchTree._root, 2);
    binarySearchTree.insert(binarySearchTree._root, 3);
    binarySearchTree.insert(binarySearchTree._root, 7);
    expect(binarySearchTree.contains(binarySearchTree._root, 7)).to.equal(true);
    expect(binarySearchTree.contains(binarySearchTree._root, 8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(binarySearchTree._root, 2);
    binarySearchTree.insert(binarySearchTree._root, 3);
    binarySearchTree.depthFirstLog(binarySearchTree._root, func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should detect an unbalanced tree', function() {
    binarySearchTree.insert(binarySearchTree._root, 3);
    binarySearchTree.insert(binarySearchTree._root, 2);
    expect(binarySearchTree._isUnbalanced()).to.equal(true);
  });

  it('should properly identify balanced trees', function() {
    binarySearchTree.insert(binarySearchTree._root, 3);
    binarySearchTree.insert(binarySearchTree._root, 8);
    expect(binarySearchTree._isUnbalanced()).to.equal(false);
  });

  it('should rebalance a tree automatically', function () {
    binarySearchTree.insert(binarySearchTree._root, 4);
    binarySearchTree.insert(binarySearchTree._root, 3);
    // automatic rebalancing occurs
    expect(binarySearchTree._root._value).to.equal(4);
    expect(binarySearchTree._root._left._value).to.equal(3);
    expect(binarySearchTree._root._right._value).to.equal(5);
  });
});
