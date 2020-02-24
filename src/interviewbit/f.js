// https://www.interviewbit.com/problems/find-duplicate-in-array/

// Given a read only array of n + 1 integers between 1 and n,
// find one number that repeats in linear time using less than O(n) space and
// traversing the stream sequentially O(1) times.

// Sample Input:

// [3 4 1 4 1]
// Sample Output:

// 1
// If there are multiple possible answers ( like in the sample case above ), output any one.

// If there is no duplicate, output -1

// using On space , use hash map to identitify dulicate elems

// use hash map for finding duplicate keys till n /2 and n/2 to end
