function getPersonInfo(age, city) {
    console.log(`Name is ${this.name} and ${age} years old. Lived in ${city} city`);
}

const person1 = {
    name: 'Kapil Sharma'
};

const person2 = {
    name: 'Ranbir Kapoor'
};

Function.prototype.callPolyfill = function(obj = {}, ...args) {
    if(typeof this !== 'function') {
        throw new Error('incorrect reference to call method');
    }

    obj.fn = this;
    obj.fn(...args);
}

// getPersonInfo.call(person1, 35);
// getPersonInfo.call(person2, 32);

getPersonInfo.callPolyfill(person1, 35, 'Raipur');
getPersonInfo.callPolyfill(person2, 32, 'Mumbai');