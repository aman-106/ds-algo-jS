// https://www.interviewbit.com/problems/noble-integer/

// Given an integer array, find if an integer p exists in the array such that the number of
// integers greater than p in the array equals to p
// If such an integer is found return 1 else return -1.

//  in [ 6, 7, 5 ]

//  out -1

// n*n
// pick a elem  , loop for all other elems - check elems are greater  and finally count is equal to chose elem
// go for next elem in array
// end

// n * log(n)
// iterate array , make BT of unique elems and increment their count , counter of leaves
// log(n)
// find all nodes with leaves count === node.data

// sort
// 5 6 7
// loop through array , get i elem , compare index

function x(array) {
  const max = array.length;
  array = array.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < max; i++) {
    if (i == max - 1) {
      if (array[i] === max - i - 1) {
        return 1;
      }
    } else {
      if (array[i] === max - i - 1 && array[i + 1] > array[i]) {
        // eliminate same elms
        // console.log(array[i],i,array.length);
        return 1;
      }
    }
  }

  return -1;
}
