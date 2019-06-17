// CONVERT NUMBER BASE -N FOMRAT

export function convertToBaseN(num, N) {
    const array = new Array(20);
    let i = 0;
    while (num > 0) {
        array[i] = num % 2;
        i++;
        num = Math.floor(num / 2);
    }
    console.log('format 0' + N)
    return array.join('');
}

function getBit(number, bitPosition) {
    return number >> bitPosition & 1;
}

function setBit(number, bitPosition) {
    return number | 1 << bitPosition;
}

function clearBit(number, bitPosition) {
    return number & (~1 << bitPosition);
}

function isEven(number) {
    return number & 1;
}

function isPositive(number) {
    // Zero is neither a positive nor a negative number.
    if (number === 0) {
        return false;
    }

    // The most significant 32nd bit can be used to determine whether the number is positive.
    return ((number >> 31) & 1) === 0;
}


function getSmmallerSquares(largernum, smallerNUm) {
    let largerArea = largernum * largernum;
    let smallerArea = smallerNUm * smallerNUm;
    let n = 1;
    while (largernum >= n * smallerNUm) {
        n++;
    }
    return n - 1;
}

export function gcd(numA, numB) {

    if (numA === numB) {
        return numA;
    }
    let largernum = numA > numB ? numA : numB;
    let smallerNUm = numA < numB ? numA : numB;
    let largerArea = largernum * smallerNUm;
    let smallerArea = 0;
    while (!((largerArea - smallerArea) <= 0)) {
        let reqSqaure = getSmmallerSquares(largernum, smallerNUm);
        console.log('reqSqaure', reqSqaure, largernum, smallerNUm);
        // update coverd area 
        smallerArea = smallerArea + reqSqaure * smallerNUm * smallerNUm;
        console.log('smallerArea', smallerArea, 'largerArea', largerArea)
        // change
        const prevSmallerNum = smallerNUm;
        smallerNUm = largernum - (reqSqaure * smallerNUm);
        largernum = prevSmallerNum;
        console.log('smallerNUm ' + smallerNUm + 'largernum ' + largernum)

    }

    console.log('Gcd is ----', largernum);

    return largernum;

}

export default function euclideanAlgorithm(originalA, originalB) {
    // Make input numbers positive.
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);

    // To make algorithm work faster instead of subtracting one number from the other
    // we may use modulo operation.
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

export function lcm(a, b) {
    const res = a == 0 || b == 0 ? 0 : a * b / (euclideanAlgorithm(a, b));
    console.log('lcm is', res);
    return res;
}

export function findPirmeUptoN(n) {
    const numArray = new Array(n + 1);
    numArray.fill(1);
    numArray[0] = 0;
    numArray[1] = 0;
    const limit = n + 1;
    let position = 2;
    for (; position < limit; position++) {
        if (numArray[position]) {
            let positionMutliple = 2 * position; // next postion;
            while (positionMutliple < limit) {
                numArray[positionMutliple] = 0;
                positionMutliple = positionMutliple + position;
            }
        }
    }

    numArray.map((e, i) => {
        if (e) console.log('prime nums ' + i);
    });

    console.log(numArray)
}

export function isPowerOfTwo(number) {
    return (number & (number - 1)) === 0;
}

export function computerPower(num, power) {
    if (num === 0) {
        return 0;
    }
    if (power == 0 || num === 1) {
        return 1;
    }
    if (power == 1) {
        return num;
    }

    if (power % 2 === 0) { // even power
        const res = computerPower(num, power / 2);
        return res * res;
    } else {
        const res = computerPower(num, Math.floor(power / 2));
        return res * res * num;
    }


    // 
}


