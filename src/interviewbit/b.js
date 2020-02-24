// https://www.interviewbit.com/problems/anti-diagonals/

// Input:

// 1 2 3
// 4 5 6
// 7 8 9

// Return the following :

// [
//   [1],
//   [2, 4],
//   [3, 5, 7],
//   [6, 8],
//   [9]
// ]

function pr(array) {
  let antiDigonalIndexes = [];

  let maxRows = array.length; //i
  let maxCols = array[0].length; // j

  let j = 0,
    i = 0;
  // first col
  for (j = 0; j < maxCols; j++) {
    antiDigonalIndexes.push(getArray(i, j, array));
  }
  j = maxCols - 1;

  // last col
  i++;
  for (; i < maxRows; i++) {
    antiDigonalIndexes.push(getArray(i, j, array));
  }

  console.log(antiDigonalIndexes);

  return antiDigonalIndexes;
}

function getArray(i, j, array) {
  let maxRows = array.length; //i
  //   console.log("start", i, j);
  let arr = [];
  while (j >= 0 && i <= maxRows - 1) {
    //     console.log('test',i,j)
    arr.push(array[i][j]);
    j--;
    i++;
  }
  //   console.log("dkdk", arr);
  return arr;
}

a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
pr(a);

// getArray(1, 2, a)
