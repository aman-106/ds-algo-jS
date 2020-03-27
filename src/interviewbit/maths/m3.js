// https://www.dream.com/problems/excel-column-number/
// Given a column title as appears in an Excel sheet, return its corresponding column number.

// Example:

//     A -> 1

//     B -> 2

//     C -> 3

//     ...

//     Z -> 26

//     AA -> 27

//     AB -> 28

// 102 => 1 * 2 + 10 * 0 + 100 * 1
function convertColsIntoInt(col) {
  let base = 1;
  const multipler = 26;
  let sum = 0;
  for (let index = col.length - 1; index <= 0; index--) {
    const char = col[index];
    const charValue = char.charCodeAt(0) - 64;
    sum = sum + base * charValue;
    base = base * multipler;
  }

  return sum;
}

// 28 => AB
// 28 / 26 1 2
// 1 / 26 0 1
function intIntoCols(num) {
  let str = "";
  while (num > 0) {
    // let char = num % 26 ? (num % 26) - 1 : 26;
    char = (num - 1) % 26;
    str = String.fromCharCode(65 + char) + str;
    num = Math.floor((num - 1) / 26);
  }
  return str;
}

console.log(intIntoCols(28));

console.log(convertColsIntoInt("AZ"));
