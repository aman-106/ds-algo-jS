export function cs(l, s) {
    const larger = l.length >= s.length ? l : s;
    const smaller = l.length >= s.length ? s : l;
    let lcs = '';
    let i = 0, j = 0;

    while (i < larger.length && j < smaller.length) {
        if (larger[i] != smaller[j]) {
            i++;
        }
        if (larger[i] == smaller[j]) {
            lcs += larger[i];
            i++;
            j++;
        }
    }
    console.log(lcs)
    return lcs;
}

export function Lcs(l, s) {
    let longest = '';
    for (let i = 0; i < l.length; i++) {
        const seq = cs(l.slice(i), s);
        if (seq.length >= longest.length) {
            longest = seq;
        }
    }
    return longest;
}


let mem = {};
export function getLcsHelper(s1, s2, i, j) {
    if (mem[i + ';' + j]) {
        return mem[i + ';' + j]
    }
    if (i < 0 || j < 0) {
        return 0;
    }
    if (s1[i] === s2[j]) {
        mem[i + ';' + j] = 1 + getLcsHelper(s1, s2, i - 1, j - 1)
        return mem[i + ';' + j];
    } else {
        mem[i + ';' + j] = Math.max(
            getLcsHelper(s1, s2, i - 1, j),
            getLcsHelper(s1, s2, i, j - 1)
        );
        return mem[i + ';' + j];
    }
}

export function getLcs(s1, s2) {
    mem = {};
    return getLcsHelper(s1, s2, s1.length - 1, s2.length - 1);
}


// to get longest str using above 
// let mem = {};
//  function getLcsHelper(s1, s2, i, j) {
//     if (mem[i + ';' + j]) {
//         return mem[i + ';' + j]
//     }
//    debugger
//     if (i < 0 || j < 0) {
//         return '';
//     }
//     if (s1[i] === s2[j]) {
//         mem[i + ';' + j] = s1[i] + getLcsHelper(s1, s2, i - 1, j - 1);
     
//         return mem[i + ';' + j];
//     } else {
//       let x1 = getLcsHelper(s1, s2, i - 1, j);
//       let x2 = getLcsHelper(s1, s2, i, j - 1);
//         mem[i + ';' + j] = x1.length > x2.length ? x1:x2
          
//         return mem[i + ';' + j];
//     }
// }

//  function getLcs(s1, s2) {
//     mem = {};
//      let subseq = ''
//     return getLcsHelper(s1, s2, s1.length - 1, s2.length - 1);
// }


// console.log('lcs recusive', getLcs('AGGTAB', 'GXTXAYB').split('').reverse().join('') , mem)