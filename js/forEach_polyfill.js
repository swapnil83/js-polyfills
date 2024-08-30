const nums = [1, 2, 3, 4, 5];

// nums.forEach((num) => console.log(num * 5));

Array.prototype.forEachPolyfill = function(cb) {
    for(let index = 0; index < this.length; index++) {
        cb(this[index], index, this);
    }
}

function multiplyByFive(num, index, arr) {
    console.log(`At ${index} index, initial value was ${arr[index]} and modified value is ${num * 5}`);
}

nums.forEachPolyfill(multiplyByFive);