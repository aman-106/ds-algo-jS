// https://www.interviewbit.com/problems/next-permutation/
// Implement the next permutation,
// which rearranges numbers into the numerically next greater permutation of numbers for a given array A of size N.

// If such arrangement is not possible, it must be rearranged as the lowest possible order i.e., sorted in an ascending order.

// Note:

// 1. The replacement must be in-place, do **not** allocate extra memory.
// 2. DO NOT USE LIBRARY FUNCTION FOR NEXT PERMUTATION. Use of Library functions will disqualify your submission retroactively and will give you penalty points.
// Input Format:

// The first and the only argument of input has an array of integers, A.
// Output Format:

// Return an array of integers, representing the next permutation of the given array.
// Constraints:

// 1 <= N <= 5e5
// 1 <= A[i] <= 1e9
// Examples:

// Input 1:
//     A = [1, 2, 3]

// Output 1:
//     [1, 3, 2]

// Input 2:
//     A = [3, 2, 1]

// Output 2:
//     [1, 2, 3]

// Input 3:
//     A = [1, 1, 5]

// Output 3:
//     [1, 5, 1]

// Input 4:
//     A = [20, 50, 113]

// Output 4:
//     [20, 113, 50]

// 2 3 5 4 1

// 2 4
// 2 5 3 4 1

// check for incrementing sequnce in array
// if break , swap with possible small value from previous seq

function swap(a, elemI, seqI) {
  const max = a.length;
  let i;
  for (i = max - 1; i >= seqI; i--) {
    // console.log("dkd", i, a[i], a[elemI]);

    if (a[elemI] < a[i]) {
      let x = a[i];
      a[i] = a[elemI];
      a[elemI] = x;
      break;
    }
  }
}

function nextPer(a) {
  const max = a.length;
  let i;
  for (i = max - 1; i > 0; i--) {
    //     console.log(i , a[i] < a[i - 1]);
    if (a[i] <= a[i - 1]) {
    } else {
      swap(a, i - 1, i);
      return a;
    }
  }

  return a.sort(function(a, b) {
    return a - b;
  });
}

A = [2, 3, 5, 4, 1];

A = [3, 2, 1];
//      A = [20, 113 ,50]
A = [4, 50, 20, 20];

// Let us try an example here.

// —> 2 1 5 4 3 is a number for which we need to get next permutaion.
// —> 2 1 5 4 3 This bold part is continuous decreasing sequence. from right side.
// —> 2 1 5 4 3 This number is the named swap-number which is next to continuous decreasing sequence.
// —> Find a smallest number in continuous decreasing sequence which is just greater than swap-number . Here it is 3(smallest possible number which is greater than 1 [4, 5 are not smallest])
// —> Swap both the numbers. swap(swap-number, smallest-large number), (2 3 5 4 1) is the number now.
// —> Reverse the continuous decreasing sequence to make it continuous increasing sequence (2 3 1 4 5) is the sequence now.
// —> This is the next permutation.

// For 5 4 3 2 1 The entire number is continuously decreasing sequence. There is no number left of it (there is no swap-number).
// Hence reverse the string 1 2 3 4 5.

console.log(nextPer(A));

function swap(a, elemI, seqI) {
  const max = a.length;
  let i;
  for (i = max - 1; i >= seqI; i--) {
    console.log("dkd", i, a[i], a[elemI]);

    if (a[elemI] < a[i]) {
      let x = a[i];
      a[i] = a[elemI];
      a[elemI] = x;
      return 1;
    }
  }

  return 0;
}

function nextPer(a) {
  const max = a.length;
  let i;
  for (i = max - 1; i > 0; i--) {
    //     console.log(i , a[i] < a[i - 1]);
    if (a[i] <= a[i - 1]) {
    } else {
      if (swap(a, i - 1, i)) {
        // // sort following sequnce in Increasing seq from elemI +1 to endsort

        //

        // for (let z = i; z < max - 1; z++) {
        //   if (a[z] > a[z + 1]) {
        //     let x = a[z];
        //     a[z] = a[z + 1];
        //     a[z + 1] = x;
        //     // return 1;
        //   }
        // }

        // correct - rearange continuous decesing seq to Incresing seq

        for (let z = i; z < i + Math.floor((max - i) / 2); z++) {
          let x = a[z];
          a[z] = a[i + max - 1 - z];
          a[i + max - 1 - z] = x;
        }
      }
      return a;
    }
  }

  return a.sort(function(a, b) {
    return a - b;
  });
}

A = [2, 3, 5, 4, 1];

A = [3, 2, 1];
//      A = [20, 113 ,50]
A = [4, 50, 20, 20];

A = [
  444,
  994,
  508,
  72,
  125,
  299,
  181,
  238,
  354,
  223,
  691,
  249,
  838,
  890,
  758,
  675,
  424,
  199,
  201,
  788,
  609,
  582,
  979,
  259,
  901,
  371,
  766,
  759,
  983,
  728,
  220,
  16,
  158,
  822,
  515,
  488,
  846,
  321,
  908,
  469,
  84,
  460,
  961,
  285,
  417,
  142,
  952,
  626,
  916,
  247,
  116,
  975,
  202,
  734,
  128,
  312,
  499,
  274,
  213,
  208,
  472,
  265,
  315,
  335,
  205,
  784,
  708,
  681,
  160,
  448,
  365,
  165,
  190,
  693,
  606,
  226,
  351,
  241,
  526,
  311,
  164,
  98,
  422,
  363,
  103,
  747,
  507,
  669,
  153,
  856,
  701,
  319,
  695,
  52
];

//      444 994 508 72 125 299 181 238 354 223 691 249 838 890 758 675 424 199 201 788 609 582 979 259 901 371 766 759 983 728 220 16 158 822 515 488 846 321 908 469 84 460 961 285 417 142 952 626 916 247 116 975 202 734 128 312 499 274 213 208 472 265 315 335 205 784 708 681 160 448 365 165 190 693 606 226 351 241
//      526 311 164 98 422 363 103 747 507 669 153 856 701 695 52 319
console.log(nextPer(A));
