// when lodash.isEqual() method you can't use according to interviewer

const a = { a: 1, b: 2, c: { z: 4 }};
const b = { a: 1, b: 2, c: { z: 4 }};        // JSON.stringify() works here
// const b = { b: 2, a: 1, c: { z: 4 }};           // here is the lopehole for JSON.stringify(), when you can change the sequence

// console.log(JSON.stringify(a) === JSON.stringify(b));

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function compareObjects(obj1, obj2) {
    
}

console.log(compareObjects(a, b));