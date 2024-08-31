const person1 = {
    name: 'Rishab Pant'
};

function getPersonInfo(age, city) {
    console.log(`Name is ${this.name} and age is ${age}. Lived in ${city} city.`);
}

// const personInfoRef = getPersonInfo.bind(person1, 25);
// personInfoRef('Roorkee');

Function.prototype.bindPolyfill = function(obj = {}, ...args1) {
    if(typeof this !== 'function') {
        throw new Error('incorrect reference to invoke bind method');
    }

    obj.fn = this;
    return function(...args2) {
        obj.fn(...args1, ...args2);
    }
}

const personInfoPolyfillRef = getPersonInfo.bindPolyfill(person1, 25);
personInfoPolyfillRef('Delhi');