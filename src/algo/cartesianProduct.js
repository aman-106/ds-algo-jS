function cartesianProduct(seta, setb) {
    var result = [];
    for (let i = 0; i < seta.length; i++) {
        for (let j = 0; j < setb.length; j++) {
            result.push({
                a: seta[i],
                b: setb[j]
            }
            )
        }
    }
    return result;
}

// console.log(cartesianProduct([1,2],[3,4]));