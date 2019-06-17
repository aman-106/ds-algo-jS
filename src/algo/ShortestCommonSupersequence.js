export function shortestCommonSupersequence(stra, strb) {
    let i = 0;
    let j = 0;
    return shortestCommonSupersequenceHelper(stra, strb, i, j, stra, strb);
}


function getMinSuperSeq(str1, str2, stra, strb) {
    // let str1Check = str1.includes(stra) && str1.includes(strb);
    // let str2Check = str2.includes(stra) && str2.includes(strb);
    // if (str1Check && str2Check) {
    //     return str1.length > str2.length ? str2 : str1; // min
    // }
    // if (str1Check) {
    //     return str1;
    // }
    // if (str2Check) {
    //     return str2;
    // }
    return stra + strb;
}

function shortestCommonSupersequenceHelper(str1, str2, i, j, stra, strb) {
    if (i >= str1.length || j >= str2.length) {
        return getMinSuperSeq(str1, str2, stra, strb);
    }
    // string ,number are immutable
    if (str1[i] === str2[j]) {
        return shortestCommonSupersequenceHelper(str1, str2, i + 1, j + 1, stra, strb)
    } else {
        let x1 = str1.split('');
        x1.splice(i + 1, 0, str2[j]);

        let x2 = str2.split('');
        x2.splice(j + 1, 0, str1[i]);
        console.log(x1, x2)
        const r1 = shortestCommonSupersequenceHelper(str1, x2.join(''), i, j + 1, stra, strb);
        const r2 = shortestCommonSupersequenceHelper(x1.join(''), str2, i + 1, j, stra, strb);
        if (r1.length > r2.length) {
            return r2;
        } else {
            return r1;
        }
    }
}