const nums = [1, 2, 3, 4, 5];

// const res = nums.map(num => num * 5);
// console.log(res);

Array.prototype.mapPolyfill = function(cb) {
    let newArr = [];

    for(let index = 0; index < this.length; index++) {
        newArr.push(cb(this[index], index, this));
    }

    return newArr;
}

function multiplyByFive(num, index, arr) {
    console.log(`At ${index} index, initial value was ${arr[index]} and modified value is ${num * 5}`);
}

nums.mapPolyfill(multiplyByFive);