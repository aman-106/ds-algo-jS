export default function combinationSum(elems, target) {
    return combinationSumHelper(elems, target, target, 0);
}

function combinationSumHelper(elems, target, sum, i) {
    if (i >= elems.length || sum - elems[i] < 0) {
        return [[]];
    }
    if (sum - elems[i] == 0) {
        return [[elems[i]]];
    }

    let arr1 = combinationSumHelper(elems, target, sum - elems[i], i);
    let arr2 = combinationSumHelper(elems, target, sum, i + 1);
    arr1 = arr1.map((arr) => {
        return [elems[i], ...arr];
    })
    // console.log(arr1, arr2)
    let arr3 = [...arr1, ...arr2];
    arr3 = arr3.filter((arr) => {
        const sume = arr.reduce((acc, elem) => acc = acc + elem, 0);
        return sume == sum;
    })
    console.log(arr3);
    return arr3;
}

// better to solve using dp and backtarcking

function cs(elems, target) {
    return cshelper(elems, target, [])
}

function cshelper(elems, target, chosen) {
    let arrSum = chosen.reduce((acc, e) => acc = acc + e, 0);
    if (elems.length == 0 || arrSum > target) {
        return;
    }
    if (arrSum === target) {
        console.log(chosen);
        return;
    }
    const ch = elems[elems.length - 1];
    chosen.push(ch);
    cshelper(elems, target, chosen); // include elem in chosen , elems
    chosen.pop();
    var e = elems.pop();
    cshelper(elems, target, chosen); // exclude the elem from elems
    elems.push(e);
}