// Given an array of integers A of size N and an integer B.

// array A is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2 ).

// You are given a target value B to search. If found in the array, return its index, otherwise return -1.

// You may assume no duplicate exists in the array.
// https://www.interviewbit.com/problems/rotated-sorted-array-search/
// NOTE:- Array A was sorted in non-decreasing order before rotation.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  search: function(A, B) {
    var len = A.length;
    var m, h, l;

    if (len === 0) {
      return -1;
    }
    if (len === 1) {
      return A[0] === B ? 0 : -1;
    }
    // 7 8 9 12 1 2 3 4
    findPivot = function() {
      l = 0;
      h = len - 1;
      while (l <= h) {
        if (A[l] < A[h]) {
          return l;
        }
        m = l + parseInt((h - l) / 2, 10);
        if (A[m] < A[m - 1] && (m === len - 1 || A[m] < A[m + 1])) {
          return m;
        }
        if (A[m] < A[l]) {
          h = m - 1;
        } else {
          l = m + 1;
        }
      }
      return l;
    };

    var pivot = findPivot();
    if (pivot === 0) {
      l = 0;
      h = len - 1;
    } else if (B >= A[0]) {
      l = 0;
      h = pivot - 1;
    } else {
      l = pivot;
      h = len - 1;
    }

    while (l <= h) {
      m = l + parseInt((h - l) / 2, 10);
      if (A[m] === B) {
        return m;
      }
      if (A[m] < B) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    }
    return -1;
  }
};
