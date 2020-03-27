//https://www.dream.com/problems/max-non-negative-subarray/
// https://www.geeksforgeeks.org/maximum-absolute-difference-value-index-sums/

var maxset = function(A) {
  var defaultIndex = function() {
    return { start: 0, end: 0, sum: 0 };
  };
  var store = [];
  var currentArr = 0;
  var breaked = false;
  store.push(defaultIndex());
  var maxSumIndex = -1; // highest sum index
  var maxSumValue = Number.MIN_SAFE_INTEGER; // highest sum

  for (var i = 0; i <= A.length - 1; i++) {
    //     console.log("A>>>>>>> .  ", A[i]);

    //     console.log("maxSumIndex", maxSumIndex);
    //     console.log("currentArr", currentArr);

    if (!breaked && A[i] < 0) {
      if (store[currentArr].sum > maxSumValue) {
        maxSumIndex = currentArr;
        maxSumValue = store[currentArr].sum;
      }
      store[currentArr].end = i - 1;
      currentArr++;
      store[currentArr] = defaultIndex();
      breaked = true;
    }

    if (breaked && A[i] >= 0) {
      store[currentArr].start = i;
      breaked = false;
    }

    if (!breaked) {
      store[currentArr].sum = store[currentArr].sum + A[i];
    }

    if (!breaked && i === A.length - 1) {
      if (store[currentArr].sum > maxSumValue) {
        maxSumIndex = currentArr;
        maxSumValue = store[currentArr].sum;
      }
      store[currentArr].end = i;
    }
  }

  if (breaked) {
    store[currentArr].end = A.length - 1;
    if (store[currentArr].sum > maxSumValue) {
      maxSumIndex = currentArr;
      maxSumValue = store[currentArr].sum;
    }
  }

  console.log("store", store);

  return A.slice(store[maxSumIndex].start, store[maxSumIndex].end + 1);
};

var A = [1, 2, 5, -7, 2, 3];
A = [10, -1, 2, 3, -4, 100];
// A = [10, -1, 1, -1, -1];
A = [-1, -1, -1, -1, -1];

console.log(maxset(A));
