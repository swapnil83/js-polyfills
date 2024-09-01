/**
 * Memoization is a optimization technique that can be used to reduce
 * time-consuming calculations by saving previous input to something called cache and
 * returning the result from it.
 */

let sum = 0;

function calcSum(n) {
    for(let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function memoizeSum(cb) {
    let cache = {};
    return function(...args) {
        let n = args[0];

        if(n in cache) {
            return cache[n];
        } else {
            let res = cb(n);
            cache[n] = res;
            return res;
        }
    }
}

const efficient = memoizeSum(calcSum);

console.time();
console.log(efficient(5));
console.timeEnd();

console.time();
console.log(efficient(5));
console.timeEnd();