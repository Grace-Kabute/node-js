// this is a module. when you create a module wrapper function which provide a "global looking variable". so once we run this code, it is wrapped in the function (function (exports,require,module,-filename,-dirname){});
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} i am ${this.age} years old`);
    }
}

module.exports = Person;