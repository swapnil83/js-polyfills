const flatArr = [1, 2, 3, 4];
const nestedArr = [1, 2, [3, 4]];

// const flatArrCopy = flatArr;      // make value changes in both array
const flatArrCopy = [...flatArr];    // shallow copy
flatArrCopy.push(7);

console.log(flatArr);
console.log(flatArrCopy);

// const nestedArrCopy = [...nestedArr];                        // doesn't make value changes in both array in nested part
const nestedArrCopy = JSON.parse(JSON.stringify(nestedArr));    // deep copy
nestedArrCopy[2].push(10);

console.log(nestedArr);
console.log(nestedArrCopy);

// for object
const originalObj = {
    a1: {
        b1: {
            c1: 'hello man, everything will be fine'
        }
    }
};

// const copyObj = originalObj;
// copyObj.b2 = null;
// console.log(originalObj);
// console.log(copyObj);

// deep copy func
function deepCopy(val) {
    if(["string", "number", "boolean"].includes(typeof val)) {
        return val;
    } else if(Array.isArray(val)) {
        return val.map((el) => deepCopy(el));
    } else {
        return Object.keys(val).reduce((acc, key) => {
            acc[key] = deepCopy(val[key]);
            return acc;
        }, {});
    }
}

const polyfillNestedArrCopy = deepCopy(nestedArr);
polyfillNestedArrCopy[2].push(20);
console.log(nestedArr);
console.log(polyfillNestedArrCopy);

const polyfillNestedCopy = deepCopy(originalObj);
polyfillNestedArrCopy.b2 = null;
console.log(originalObj);
console.log(polyfillNestedArrCopy);

