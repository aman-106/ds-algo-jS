import { PerformanceObserver, performance } from 'perf_hooks';

export function bitwiseSubset(set) {
    //  set =[1,2];

    const maxSetLimit = 2 ** set.length;
    const subsets = [];
    for (let i = 0; i < maxSetLimit; i++) {
        const subset = []
        for (let j = 0; j < set.length; j++) {
            if (i & (1 << j)) {
                subset.push(set[j]);
            }
        }
        subsets.push(subset);
    }

    return subsets;
}

export function recurionSubset(set) {
    var t0 = performance.now();
    let i = 0;
    const x = getSubset(set, i)
    var t1 = performance.now();
    console.log('performance ', t1 - t0)
    return x;

}

function getSubset(set, i) {
    if (i >= set.length) return [];
    const subset = getSubset(set, i + 1);
    let subsetWithCurrentElem = [];
    if (!subset.length) {
        subsetWithCurrentElem = [[], [set[i]]];
    }
    subset.map((s) => {
        subsetWithCurrentElem.push(s);
        subsetWithCurrentElem.push([...s, set[i]]);
    });
    return subsetWithCurrentElem;
}

export function recurionDpSubset(set) {
    var t0 = performance.now();
    let i = 0;
    let mem = {};
    const x = getDpSubset(set, i, mem)
    var t1 = performance.now();
    console.log('performanceDp ', t1 - t0)
    return x;

}

function getDpSubset(set, i, mem) {
    if (mem[i]) {
        return mem[i];
    }
    if (i >= set.length) return [];
    const subset = getDpSubset(set, i + 1, mem);
    let subsetWithCurrentElem = [];
    if (!subset.length) {
        subsetWithCurrentElem = [[], [set[i]]];
    }
    subset.map((s) => {
        subsetWithCurrentElem.push(s);
        subsetWithCurrentElem.push([...s, set[i]]);
    });
    return subsetWithCurrentElem;
}


function getSubsetsBybacktracking(set) { //backtracking

    let arr = Array(set.length);
    getSubsets(set, arr, 0);

}

function getSubsets(set, arr, i) {
    if (i === set.length) {
        console.log(arr);
        return;
    }

    arr[i] = null;
    getSubsets(set, arr, i + 1);

    arr[i] = set[i];
    getSubsets(set, arr, i + 1);

}


//   function subsets(){ //backtracking
//     var chosen =[];
//     get([1,2],chosen)
//   }
//   function get(set,chosen){
//     if(set.length==0){
//       console.log('chosen',chosen);
//       return chosen;
//     }
//     var f = set.pop();
//     console.log('remove',f)
//     chosen.push(f);
//     get(set,chosen);
//     chosen.pop();
//     get(set,chosen);
//     set.push(f);
//     console.log('set',set)
//   }
//   subsets();
