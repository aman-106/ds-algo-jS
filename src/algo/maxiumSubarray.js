export default function maxSubArrayArray(arr) {
    return maxSubArrayArrayHelper(0, arr.length - 1, arr);
}


function getArray(arr) {
    return arr.slice(start);
}

function maxSubArrayArrayHelper(start, end, arr) {
    if (start > end) {
        return [[], start];
    }
    const [amxArray, lastIndex] = maxSubArrayArrayHelper(start + 1, end, arr);
    let withCurrElemAarInfo = [];

    if (amxArray[0] && amxArray[0] === arr[start + 1]) // include start num
        withCurrElemAarInfo = [arr[start], ...amxArray];
    else if (amxArray.length === 0) { // include only start num
        withCurrElemAarInfo = [arr[start]];
    }
    else  // include other elems  including  from start num from to last num used amxArray
        withCurrElemAarInfo = [...arr.slice(start, lastIndex), ...amxArray];

    return getMaxSumArray(
        withCurrElemAarInfo, // strat elem with other follwing elems
        amxArray // only cuurent elem
        , start, lastIndex
    );

}

function getMaxSumArray(arr1, arr2, start, lastIndex) {
    console.log(arr1, arr2)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (arr1.reduce(reducer, 0) >= arr2.reduce(reducer, 0)) {
        return [arr1, start]
    }

    return [arr2, lastIndex];
}

// wrong solutin because it not keeping maintaing array , its find ing max subset 
// export default function maxSubArrayArray(arr) {
//     return maxSubArrayArrayHelper(0, arr.length - 1, arr);
// }

// function maxSubArrayArrayHelper(start, end, arr) {
//     if (start > end) {
//         return [];
//     }

//     return getMaxSumArray(
//         [arr[start], ...maxSubArrayArrayHelper(start + 1, end, arr)],
//         [...maxSubArrayArrayHelper(start + 1, end, arr)]
//     );
// }

// function getMaxSumArray(arr1, arr2) {
//     console.log(arr1,arr2)
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     if (arr1.reduce(reducer, 0) > arr2.reduce(reducer, 0)) {
//         return arr1
//     }

//     return arr2;
//     // Array.prototype.reduce((accumulator, currentValue) => accumulator + currentValue);
// }