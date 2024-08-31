// when lodash.isEqual() method you can't use according to interviewer

const a = { a: 1, b: 2, c: { z: 4 }};
const b = { a: 1, b: 2, c: { z: 4 }};        // JSON.stringify() works here
// const b = { b: 2, a: 1, c: { z: 4 }};     // here is the loophole for JSON.stringify(), when you change the sequence

// console.log(JSON.stringify(a) === JSON.stringify(b));    // doesn't work when sequence is not match

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function compareObjects(obj1, obj2) {
    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);

    if(keysObj1.length !== keysObj2.length) return false;
    
    for(let key of keysObj1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        const isObjects = isObject(value1) && isObject(value2);

        if(!isObjects && value1 !== value2) {
            return false;
        }

        if(isObjects && !compareObjects(value1, value2)) {
            return false;
        }
    }

    return true;
}

console.log(compareObjects(a, b));