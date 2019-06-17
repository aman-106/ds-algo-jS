

export default function intergerPartation(num) {
    // const num =[];
    const sum = num;
    const largestNum = num - 1;
    const mem = {};
    return checKPartation(sum, largestNum, mem);
}

function getKey(a, b) {
    return a + ':' + b;
}

function checKPartation(sum, largestNum, mem) {
    const key = getKey(sum, largestNum);
    if (mem[key]) {
        return mem[key];
    }
    if (sum === 0) {

        return 1;
    }
    if (sum < 0) {

        return 0;
    }
    if (largestNum === 0) {

        return 0;
    }
    if (sum < largestNum) {
        return checKPartation(sum, largestNum - 1, mem);
    }
    var x = checKPartation(sum, largestNum - 1, mem) + checKPartation(sum - largestNum, largestNum, mem);
    mem[key] = x;
    return x;
}

// console.log('intergerPartation ' + intergerPartation(3));

console.log('df1233:000000000 ');



// in  this , number of distinct number number to make set 
// 3 - {1,2}possible set 

// for above interger partition --
// 3 -{1,2} , {1,1,1} 
function countsets() {
    const arr = [1, 2]
    let total = 3;
    return rec(arr, total, arr.length - 1);
}

function rec(arr, total, i) {
    if (total === 0) {
        console.log('d0003: ' + total + arr[i] + 1);

        return 1
    } else if (total < 0) {
        console.log('vbbd38383: ' + total + arr[i] + 0);

        return 0
    } else if (i < 0) {
        console.log('xxcdmddjdj393939: ' + total + arr[i] + 0);

        return 0
    } else if (total < arr[i]) {
        console.log('qqqdmddjdj1: ' + total + arr[i] + i);

        return rec(arr, total, i - 1);
    } else {

        let x = rec(arr, total - arr[i], i - 1) + rec(arr, total, i - 1); // for distinct , in first rec call total - arr[i] implies  arr[i] has been should be unique to make sum , , move to next num
        // let x = rec(arr, total - arr[i], i-1) + rec(arr, total, i - 1); // for repeat , in first rec call total -arr[i] implies  arr[i] has been should be used , but check possiblity to make subset for total with others num
        console.log('daaamddjdj34: ' + total + arr[i] + x);
        return x;

    }
}

console.log('des ' + countsets());


