export function longestIncreasingSubsequence(seq) {
    return longestIncreasingSubsequenceHelper(seq)
}

function longestIncreasingSubsequenceHelper(seq, i, chosen) {

    if (seq[i] < chosen[chosen.length - 1] || -99999) {
        let ch = seq[i];
        chosen.push(ch);
        longestIncreasingSubsequenceHelper(seq, i - 1, chosen);
        chosen.pop();
        longestIncreasingSubsequenceHelper(seq, i, chosen);
    } else {
        longestIncreasingSubsequenceHelper(seq, i - 1, chosen);
    }
}