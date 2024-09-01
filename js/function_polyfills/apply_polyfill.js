const person1 = {
    name: 'Virat Kohli'
};

const person2 = {
    name: 'Shahrukh Khan'
};

function getPersonInfo(age, city) {
    console.log(`Name is ${this.name} and age is ${age}. Lived in ${city} city.`);
}

Function.prototype.applyPolyfill = function(obj = {}, args) {
    if(typeof this !== 'function') {
        throw new Error('incorrect refernce to invoke apply method');
    }

    if(!Array.isArray(args)) {
        throw new Error('TypeError: CreateListFromArrayLike called on non-object');
    }

    obj.fn = this;
    obj.fn(...args);
}

// getPersonInfo.apply(person1, [35, 'Delhi']);
// getPersonInfo.apply(person2, [57, 'Mumbai']);

getPersonInfo.applyPolyfill(person1, [35, 'Delhi']);
getPersonInfo.applyPolyfill(person2, [57, 'Mumbai']);

