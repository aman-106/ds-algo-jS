function longestIncreasingSubsequence(seq) {
  return longestIncreasingSubsequenceHelper(seq, 0, null);
}

function longestIncreasingSubsequenceHelper(seq, i, lstElem) {
  if (i == seq.length) {
    return 0;
  }
  var newLastElem = -1;
  if (i == 0 || seq[i] > lstElem) {
    newLastElem = seq[i];
  }

  if (newLastElem >= 0) {
    return Math.max(
      longestIncreasingSubsequenceHelper(seq, i + 1, lstElem),
      1 + longestIncreasingSubsequenceHelper(seq, i + 1, newLastElem)
    );
  }

  return longestIncreasingSubsequenceHelper(seq, i + 1, lstElem);
}

console.log(longestIncreasingSubsequence([1, 10, 34, 32, 4]));
