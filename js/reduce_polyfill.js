const nums = [1, 2, 3, 4, 5];

// const reducedResult = nums.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(reducedResult);

Array.prototype.reducePolyfill = function(cb, initialValue) {
    let reduceResult;
    reduceResult = initialValue;

    for(let index = 0; index < this.length; index++) {
        reduceResult = reduceResult ? cb(reduceResult, this[index]) : this[index];
    }

    return reduceResult;
}

const reducedPolyfillResult = nums.reducePolyfill((acc, curr) => {
    return acc + curr;
}, 0);
console.log(reducedPolyfillResult);