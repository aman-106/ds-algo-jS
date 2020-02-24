


function getLongestSubstr(str) {

  let init, end, longestStr = '';

  for (init = 0; init < str.length; init++) {
    for (end = 1; end < str.length + 1; end++) {

      let substr = str.slice(init, end);
      if (palindrome(substr)) {
        console.log('substr', substr)
        if (substr.length > longestStr.length) {
          longestStr = substr;
          console.log('longestStr', substr)

        }
      }

    }
  }

  return longestStr;
}

function palindrome(str) {
  return str === str.split('').reverse().join('');
}


const checkPrime = num => {
  for (let start = 2, sqrt = Math.sqrt(num); start <= sqrt; start++)
    if (num % start === 0) return false;
  return num > 1;
}

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (checkPrime(getLongestSubstr(S).length)) {
    return "YES";
  }

  return "NO"
}

console.log(solution('ece'))

///






var solution = function (M) {
  M = JSON.parse(M);
  if (M.length === 0) {
    return 0;
  }

  let length = M.length;
  let cricles = [];
  let nestedCircles = [];

  for (let start = 0; start < length; start++) {
    for (let end = 0; end < length; end++) {
      if (M[start][end] === 1) {
        nestedCircles.push(end);
        M[start][end] = M[end][start] = '#';
      }
    }
    if (!isSameSubset(cricles, nestedCircles)) {
      cricles.push(nestedCircles);
    }
    nestedCircles = [];
  }
  return cricles.join('|');
}

function isSameSubset(nestedArr, arr) {
  if (nestedArr.length) {
    for (var start = 0; start < arr.length; start++) {
      if (nestedArr.flat().indexOf(arr[start]) > -1) {
        return true;
      }
    }
  } else {
    return false;
  }

}