// Given a matrix, A of size M x N of 0s and 1s.
// If an element is 0, set its entire row and column to 0.

// Input Format:

// The first and the only argument of input contains a 2-d integer matrix, A, of size M x N.
// Output Format:

// Return a 2-d matrix that satisfies the given conditions.
// Constraints:

// 1 <= N, M <= 1000
// 0 <= A[i][j] <= 1
// Examples:

// Input 1:
//     [   [1, 0, 1],
//         [1, 1, 1],
//         [1, 1, 1]   ]

// Output 1:
//     [   [0, 0, 0],
//         [1, 0, 1],
//         [1, 0, 1]   ]

// Input 2:
//     [   [1, 0, 1],
//         [1, 1, 1],
//         [1, 0, 1]   ]

// Output 2:
//     [   [0, 0, 0],
//         [1, 0, 1],
//         [0, 0, 0]   ]

// costly operation
// loop for 2 D array , get indexes for value === zeros
// set those indexes cols and rows equal to zeros eg a[2][3] => a[2][0],a[2][1],a[2][2],a[2][3]
//                                                a[0][3],a[2][3],a[1][3],a[3][3]

[[1, 0, 1], [1, 1, 1], [1, 1, 1]];
