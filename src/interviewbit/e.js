// https://www.interviewbit.com/problems/max-distance/

// Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].

// If there is no solution possible, return -1.

// Example :

// A : [3 5 4 2]

// Output : 2
// for the pair (3, 4)

// n * n
// for each elem , store difff = (j-i),  if A[j]>=A[i] && diff >=maxDiff

0, 2;
1, 5;
2, 4;
3, 3;
