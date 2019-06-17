export function getPermutateWithReps(set) {
    permutateWithreps(set, [], 0, 0);
    return 1;
}

function permutateWithreps(set, subsets, i) {
    if (i === set.length) {
        console.log(subsets);
        return 1;
    }
    for (const elem of set) {
        permutateWithreps(set, [elem, ...subsets], i + 1);
    }

}

function permuatateWithOutReps(set, chosen) {
    if (set.length==0) {
        console.log(chosen);
        return chosen;
    }

    for (let j = 0; j < set.length; j++) {
        let ch = set[j];
        // chose
        chosen.push(ch);
        set.splice(j, 1);
        // explore
        permuatateWithOutReps(set, chosen);
        // unchose
        set.splice(j, 0, ch);
        chosen.pop();
    }

}

export function getPermuatateWithOutReps(set) {
    return permuatateWithOutReps(set, []);
}