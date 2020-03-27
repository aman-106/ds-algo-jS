// https://www.dream.com/problems/largest-number/

// Given a list of non negative integers, arrange them such that they form the largest number.

// For example:

// Given [3, 30, 34, 5, 9], the largest formed number is 9534330.

// Note: The result may be very large, so you need to return a string instead of an integer.

//  n logn + n
// sort array on elems  as strings comapre at char elems
// join elems as str

function compare(a, b) {
  a = String(a);
  b = String(b);
  console.log("djddjk");
  var i = 0;
  while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
    i++;
  }
  //                 console.log("comparing " + a.substring(i, a.length) + " and " + b);

  if (i < a.length && i < b.length) {
    if (a.charAt(i) < b.charAt(i)) {
      // console.log(a + " < " + b);
      return 1;
    } else {
      // console.log(a + " >= " + b);
      return -1;
    }
  } else if (i < a.length) {
    console.log("comparing " + a.substring(i, a.length) + " and " + b);
    return compare(a.substring(i, a.length), b);
  } else if (i < b.length) {
    console.log("comparing " + a + " and " + b.substring(i, b.length));
    return compare(a, b.substring(i, b.length));
  }

  return 0;
}

function reverseN(num, N = 10) {
  const array = new Array(20);
  let i = 0;
  while (num > 0) {
    array[i] = num % 10;
    i++;
    num = Math.floor(num / 10);
  }

  // console.log('format 0' + N)
  // return array.join('');
  let str = "";
  let max = i - 1;
  i = 0;
  // console.log(array);
  for (; i <= max; i++) {
    str += array[i];
  }
  // console.log(str);
  return parseInt(str, 10);
}

function x(array) {
  array = array.sort(compare);

  let x = array.reduce(function(acc, cv) {
    return (acc = acc + cv);
  }, "");

  return x;
}

// _______________________

// WRONG

// n * log(n) + n
// use sort method with compartor
//      elemsI vs reverse elemI is bigger , use bigger elem for compare
// join the new sorted array

// WRONG APPROACH , need to inculde elems
// use binary tree for adding elem or reverse of elem
// get righet most array of elems

// // wrong ineterptaion of questions

// function reverseN(num, N = 10) {
//   const array = new Array(20);
//   let i = 0;
//   while (num > 0) {
//     array[i] = num % 10;
//     i++;
//     num = Math.floor(num / 10);
//   }

//   // console.log('format 0' + N)
//   // return array.join('');
//   let str = "";
//   let max = i - 1;
//   i = 0;
//   // console.log(array);
//   for (; i <= max; i++) {
//     str += array[i];
//   }
//   // console.log(str);
//   return parseInt(str, 10);
// }

// function flipElem(a) {
//   let x = reverseN(a);
//   //   let y = reverseN(b);
//   a = a > x ? a : x;
//   //   b = b > x ? b : x;
//   return a;
// }

// function compare(a, b) {
//   return String(a) > String(b);
// }

// function x(array) {
//   array = array.map(flipElem);
//   console.log(array);

//   array = array.sort(compare);
//   console.log(array);

//   let x = array.reduce(function(acc, cv) {
//     return (acc = acc + cv);
//   }, "");

//   return x;
// }
