

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  // O(n) 
  this._count++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var twople = [k, v];
  var currentVal = this._storage.get(index);
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
  if (this._count > (this._limit * 0.75)) {
    // Grow (double in size)
    var newLimit = this._limit * 2;
    var newStorage = LimitedArray(newLimit);
    this._storage.each(function (bucket, index, collection) {
      if (Array.isArray(bucket)) {
        for (var i = 0; i < bucket.length; i++) {
          var k = bucket[i][0];
          var v = bucket[i][1];
          var index = getIndexBelowMaxForKey(k, newLimit);
          var twople = [k, v];
          var currentVal = newStorage.get(index);
          if (typeof currentVal === 'undefined') {
            newStorage.set(index, [twople]);
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
              newStorage.set(index, currentVal);
            }
          }
        }
      }
    });
    this._limit = newLimit;
    this._storage = newStorage;
  }
};

HashTable.prototype.retrieve = function(k) {
  // 0(n)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);  
  if (Array.isArray(currentBucket)) {
    for (var i = 0; i < currentBucket.length; i++) {
      if ( currentBucket[i][0] === k ) {
        return currentBucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  // 0(n);
  this._count--;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var i = 0;
  while (bucket[i][0] !== k) {
    i++;
  }
  bucket.splice(i, 1);
  this._storage.set(index, bucket);
  if (this._count < (this._limit * 0.25)) {
    // Grow (double in size)
    var newLimit = this._limit / 2;
    var newStorage = LimitedArray(newLimit);
    this._storage.each(function (bucket, index, collection) {
      if (Array.isArray(bucket)) {
        for (var i = 0; i < bucket.length; i++) {
          var k = bucket[i][0];
          var v = bucket[i][1];
          var index = getIndexBelowMaxForKey(k, newLimit);
          var twople = [k, v];
          var currentVal = newStorage.get(index);
          if (typeof currentVal === 'undefined') {
            newStorage.set(index, [twople]);
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
              newStorage.set(index, currentVal);
            }
          }
        }
      }
    });
    this._limit = newLimit;
    this._storage = newStorage;
  } 

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


