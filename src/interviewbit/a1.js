// https://www.dream.com/problems/rotate-matrix/

// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// You need to do this in place.

// Note that if you end up using an additional array, you will only receive partial score.

// Example:

// If the array is

// [
//     [1, 2],
//     [3, 4]
// ]
// Then the rotated array becomes:

// [
//     [3, 1],
//     [4, 2]
// ]

let a = [[1, 2, 3, 6], [4, 5, 6, 10], [7, 8, 9, 16], [3, 4, 5, 63]];

rotMat(a);

// i=0,
// j=3,
// i =3
// j=0;

function swap(A, i1, j1, i2, j2) {
  const x = A[i1][j1];
  A[i1][j1] = A[i2][j2];
  A[i2][j2] = x;
}

function rotMat(A) {
  //Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // swap(A[i][j], A[j][i]);
      swap(A, i, j, j, i);
    }
  }

  //Flip
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      // swap(A[i][j], A[i][n-1-j]);
      swap(A, i, j, i, n - 1 - j);
    }
  }

  return A;
}
