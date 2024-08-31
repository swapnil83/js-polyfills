const nums = [1, [2, 3], [4, [5, 6, [7, [8, 9, [ 10 ]]]]]];

// const flattedResult = nums.flat(2);
// console.log(flattedResult);

Array.prototype.flatPolyfill = function(depth = 1) {
    let flattedResult = [];

    if(!Array.isArray(this)) {
        throw new Error('Flat cannot perform on the instance who is invoking the method');
    }

    this.forEach((el) => {
        if(Array.isArray(el) && depth > 0) {
            flattedResult.push(...el.flatPolyfill(depth - 1));
        } else {
            flattedResult.push(el);
        }
    });
    
    return flattedResult;
}

const flattedPolyfillResult = nums.flatPolyfill(Infinity);
console.log(flattedPolyfillResult);