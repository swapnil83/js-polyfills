const nums = [1, 2, 3, 4, 5];

// const filteredResult = nums.filter(num => num > 2);
// console.log(filteredResult);

Array.prototype.filterPolyfill = function(cb) {
    let filteredResult = [];

    for(let index = 0; index < this.length; index++) {
        if(cb(this[index], index, this)) {
            filteredResult.push(this[index]);
        }
    }

    return filteredResult;
}

function numberGreaterThanTwo(num, index, arr) {
    if(arr[index] > 2) {
        console.log(`At ${index} index, ${num} passed the condition`);
    }
}

nums.filterPolyfill(numberGreaterThanTwo);
