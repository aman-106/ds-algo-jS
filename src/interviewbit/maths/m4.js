// Rearrange a given array so that Arr[i] becomes Arr[Arr[i]] with O(1) extra space.

// Example:

// Input : [1, 0]
// Return : [0, 1]

// for i
// j = A[i]
// A[i]= A[j]

// for i in array
// newIndex = a[i]
// a[i] = a[newIndex]

function Rearrange(array) {
  let N = array.length;
  for (let i = 0; i < N; ++i) {
    array[i] = array[i] + (array[array[i]] % N) * N;
  }

  for (let i = 0; i < N; ++i) {
    array[i] = Math.floor(array[i] / N);
  }

  return array;
}

console.log(Rearrange([4, 0, 3, 2, 1]));
