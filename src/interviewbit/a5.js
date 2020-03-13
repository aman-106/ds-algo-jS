// https://www.interviewbit.com/problems/first-missing-integer/

// Given an unsorted integer array, find the first missing positive integer.

// Example:

// Given [1,2,0] return 3,

// [3,4,-1,1] return 2,

// [5,-1]

// [-8, -7, -6] returns 1

// Your algorithm should run in O(n) time and use constant space.

// postive num

// start elem in array
//  check elem -ve  or zero  => assign mNum = 0 , else assign num greater than first elem +1
// move to next elem , check mNum === nexelem if true , replace elem+1

// [-2 5  7 -1 -9 3]

// loop for array , get Min , missingMinElem
// set min = first positive elem
// and then other update min

// if min changes &&
//  prevMin!== min+1 , then missingMinElem = min+1 ;

// missingMinElem = first positive elem +1
// now missingMinElem === elem , if true , set missingMinElem = elem +1, else

// wrong undertsanding : number are always in range [1,N] where n is length of array

// below has bug ,  [ 8, 6 ,4 ,3, -1,5 ,7]
function getFirstPositiveNUm(array) {
  let min = Number.NEGATIVE_INFINITY;
  let minMissing = Number.NEGATIVE_INFINITY;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //  first positive elem
    if (min < 0 && element > 0) {
      min = element;
    }

    //  first positive elem
    if (minMissing < 0 && element > 0) {
      minMissing = element + 1;
    }

    if (minMissing > 0 && minMissing === element) {
      minMissing = element + 1;
    }

    // min positive elem
    if (min >= 0 && element > 0 && min < element) {
      // prev min !==elem +1
      if (min !== element + 1) {
        minMissing = element + 1;
      }
      min = element;
    }
  }

  return minMissing;
}

var arr = [-2, 5, 7, -1, -9, 3];
// arr = [-2 5  7 -1 -9 3];
// arr = [1,2,0];

console.log(getFirstPositiveNUm(arr));

// [ 8, 6 ,4 ,3, -1,5 ,7]

//  3 4 5 6 7 8

// Access Hint
// Note: numbers A[i]<=0 and A[i]>N ( N being the size of the array ) is not important to us since the missing positive integer will be in the range [1, N+1].

// The answer will be N+1 only if all of the elements of the array are exact one occurrence of [1, N].

// Creating buckets would have been an easy solution if using extra space was allowed.

// An array of size N initialized to 0 would have been created.

// For every value A[i] which lies in the range [1, N], its count in the array would have been incremented.

// Finally, traversing the array would help to find the first array position with value 0 and that will be our answer.
// However, usage of buckets is not allowed, can we use the existing array as bucket somehow?

// Now, since additional space is not allowed either, the given array itself needs to be used to track it.

// It may be helpful to use the fact that the size of the set we are looking to track is [1, N]

// which happens to be the same size as the size of the array.

// This means we can use the array to track these elements.

// We traverse the array and if A[i] is in [1,N] range, we try to put in the index of same value in the array.

// function(a){
//   var i;
//   for(i=0; i<a.length;i++) {
//       if(a[i]<=0) a[i]=a.length+1;
//   }
//   for(i=0;i<a.length;i++) {
//       if(Math.abs(a[i])>0 && Math.abs(a[i])<=a.length) {
//           a[Math.abs(a[i]) - 1] = -1 * Math.abs(a[Math.abs(a[i]) - 1]);
//       }
//   }
//   for(i = 0; i< a.length;i++) {
//       if(a[i]>0) return i+1;
//   }
//   return i+1
// }
// };
