const nums = [1, 2, 3, 4, 5];

// const mappedResult = nums.map(num => num * 5);
// console.log(mappedResult);

Array.prototype.mapPolyfill = function(cb) {
    let mappedPolyfillResult = [];

    for(let index = 0; index < this.length; index++) {
        mappedPolyfillResult.push(cb(this[index], index, this));
    }

    return mappedPolyfillResult;
}

function multiplyByFive(num, index, arr) {
    console.log(`At ${index} index, initial value was ${arr[index]} and modified value is ${num * 5}`);
}

nums.mapPolyfill(multiplyByFive);