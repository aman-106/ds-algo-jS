// https://www.interviewbit.com/problems/longest-palindromic-substring/

// /  implementation of O(n^2) time and O(n^2) space method

function longestPalindrome(str) {
  return longestPalindromeHelper(str, 0, str.length - 1);
}

function longestPalindromeHelper(str, i, j) {
  if (i > j) {
    return "";
  } else if (i === j) {
    return str[i];
  } else if (str[i] === str[j]) {
    const length = longestPalindromeHelper(str, i - 1, j - 1);
    // console.log("ssubstr", i, j, substr);
    // return str[i] + substr + str[j];
    return 2 + length;
  } else {
    return maxStrLen(
      longestPalindromeHelper(str, i, j - 1),
      longestPalindromeHelper(str, i + 1, j)
    );
  }
}

function maxStrLen(st1, st2) {
  console.log("comapre", st1, st2);
  // if (st1.length === st2.length) {
  //   return st1;
  // }

  return st1.length > st2.length ? st1.length : st2.length;
}

console.log(longestPalindrome("caba"));

// /  implementation of O(n^2) time and O(1) space method
// to find the longest palindromic substring

class LongestPalinSubstring {
  // A utility function to print a substring str[low..high]
  static printSubStr(str, low, high) {
    console.log(str.substring(low, high + 1));
  }

  // This function prints the longest palindrome substring
  // (LPS) of str[]. It also returns the length of the
  // longest palindrome

  longestPalSubstr(str) {
    var maxLength = 1; // The result (length of LPS)

    var start = 0;
    var len = str.length;

    var low, high;

    // One by one consider every character as center
    // point of even and length palindromes
    for (var i = 1; i < len; ++i) {
      // Find the longest even length palindrome with
      // center points as i-1 and i.
      low = i - 1;
      high = i;
      while (low >= 0 && high < len && str.charAt(low) == str.charAt(high)) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        --low;
        ++high;
      }

      // Find the longest odd length palindrome with
      // center point as i
      low = i - 1;
      high = i + 1;
      while (low >= 0 && high < len && str.charAt(low) == str.charAt(high)) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        --low;
        ++high;
      }
    }

    console.log("Longest palindrome substring is: ");
    LongestPalinSubstring.printSubStr(str, start, start + maxLength - 1);

    return maxLength;
  }
}

var x = new LongestPalinSubstring();
console.log(x.longestPalSubstr("aaaabaaa"));
