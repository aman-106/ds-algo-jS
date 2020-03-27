// Given an string A. The only operation allowed is to insert characters in the beginning of the string.

// Find how many minimum characters are needed to be inserted to make the string a palindrome string.

// Input Format

// The only argument given is string A.
// Output Format

// Return the minimum characters that are needed to be inserted to make the string a palindrome string.
// For Example

// Input 1:
//     A = "ABC"
// Output 1:
//     2
//     Explanation 1:
//         Insert 'B' at beginning, string becomes: "BABC".
//         Insert 'C' at beginning, string becomes: "CBABC".

function makePalindrom(str) {
  return makePalindromHelper(str, 0, str.length - 1);
}

// let counter = 0;

function makePalindromHelper(str, start, end) {
  console.log("start", str, start, end);

  // counter++;
  // console.log("counter", counter);
  // if (counter > 20) {
  //   return 0;
  // }
  const pl = isPlaindrome(str);
  if (pl) {
    return 0;
  }

  if (start >= end) {
    return 0;
  }

  if (str[start] === str[end]) {
    console.log("dkdk", str, start++, end--);

    return makePalindromHelper(str, start++, end--);
  } else {
    let newstr1 = addChar(str, end + 1, start, 1); // add start elme
    let newstr2 = addChar(str, start - 1, end, -1); // add end elem
    console.log(newstr1, newstr2, start, end);
    // return 0;
    return Math.min(
      1 + makePalindromHelper(newstr1, start + 1, end),
      1 + makePalindromHelper(newstr2, start + 1, end)
    );
  }
}

function isPlaindrome(str) {
  const strArr = str.split("");
  const maxlen = strArr.length;
  const middleElem = Math.ceil(maxlen / 2);
  for (let index = 0; index < middleElem; index++) {
    const startELem = strArr[index];
    const endELem = strArr[maxlen - 1 - index];
    if (startELem !== endELem) {
      return false;
    }
  }

  return true;
}

function addChar(str, holdIndex, pickupIndex, direction) {
  let newStr = "";
  if (holdIndex >= str.length) {
    newStr = str + str[pickupIndex];
    return newStr;
  }

  if (holdIndex < 0) {
    newStr = str[pickupIndex] + str;
    return newStr;
  }

  let strArr = str.split("");

  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    if (index === holdIndex) {
      newStr +=
        direction === 1
          ? strArr[pickupIndex] + element
          : element + strArr[pickupIndex];
    } else {
      newStr += element;
    }
  }

  return newStr;
}

console.log(makePalindrom("AMAN"));
