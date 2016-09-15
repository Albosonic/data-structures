

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // O(n) 
  var index = getIndexBelowMaxForKey(k, this._limit);
  var twople = [k, v];
  var currentVal = this._storage.get(index);
  console.log('currentVal', currentVal);
  if (typeof currentVal === 'undefined') {
    this._storage.set(index, [twople]);
  } else {
    var keyExists = false;
    for (var i = 0; i < currentVal.length; i++) {

      if ( currentVal[i][0] === k ) {
        currentVal[i][1] = v;
        keyExists = true;
      }  

    }
    if (!keyExists) {
      currentVal.push(twople);
      this._storage.set(index, currentVal);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  // 0(n)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);  
  for (var i = 0; i < currentBucket.length; i++) {
    if ( currentBucket[i][0] === k ) {
      return currentBucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  // 0(n);
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.insert(k, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


