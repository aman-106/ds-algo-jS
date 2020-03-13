// Given a matrix of integers A of size N x M in which each row is sorted.

// Find an return the overall median of the matrix A.

// Note: No extra memory is allowed.

// Note: Rows are numbered from top to bottom and columns are numbered from left to right.

// Input Format

// The first and only argument given is the integer matrix A.
// Output Format

// Return the overall median of the matrix A.
// Constraints

// 1 <= N, M <= 10^5
// 1 <= N*M  <= 10^6
// 1 <= A[i] <= 10^9
// N*M is odd
// For Example

// Input 1:
//     A = [   [1, 3, 5],
//             [2, 6, 9],
//             [3, 6, 9]   ]
// Output 1:
//     5
// Explanation 1:
//     A = [1, 2, 3, 3, 5, 6, 6, 9, 9]
//     Median is 5. So, we return 5.

// Input 2:
//     A = [   [5, 17, 100]    ]
// Output 2:
//     17 ```
//      Matrix=
// ```

// in Min Heap , parent is minium than its child Nodes

function MinHeap() {
  Heap.call(this); // invoke Heap contrcutor
}
// no use of constructor unless if need to override contsructor
// inherit the prototype object
MinHeap.prototype = Object.create(Heap.prototype);
// MinHeap.prototype =Heap.prototype override heap object
// prototype ={ contructor , .... otherUserPops , __proto__ function object}
// overrding the
MinHeap.prototype.isHeapSorted = function(index, parentIndex) {
  return this.heap[index] > this.heap[parentIndex];
};
MinHeap.prototype.getMinElem = function() {
  return this.heap[0];
};

// base function ;
function Heap() {
  this.heap = []; //empty array
  this.currentIndex = 0;
}

Heap.prototype.insert = function(data) {
  if (this.currentIndex === 0) {
    this.heap[this.currentIndex] = data;
    this.currentIndex++;
  } else {
    // const parentIndex = this.getParentIndex(this.currentIndex);
    this.heap[this.currentIndex] = data;
    this.sortHeap(this.currentIndex);
    this.currentIndex++;
  }
};

Heap.prototype.getParentIndex = function(index) {
  if (index === 0 || index === 1 || index === 2) {
    return 0;
  }
  return Math.floor((index - 1) / 2);
};

Heap.prototype.sortHeap = function(index) {
  const parentIndex = this.getParentIndex(index);
  if (index === parentIndex) return true;

  if (!this.isHeapSorted(index, parentIndex)) {
    this.swap(index, parentIndex);
    this.sortHeap(parentIndex);
  }
  return true;
};

Heap.prototype.isHeapSorted = function(index, parentIndex) {
  return this.heap[index] > this.heap[parentIndex];
};

Heap.prototype.swap = function(index, parentIndex) {
  const currentElem = this.heap[index];
  this.heap[index] = this.heap[parentIndex];
  this.heap[parentIndex] = currentElem;
  console.log(this.heap);
};

// https://www.geeksforgeeks.org/median-of-two-sorted-arrays/

// https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/
