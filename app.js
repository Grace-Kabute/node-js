const Person = require('./person');
// after exporting the class instantiate in the mainjs file
const people = new Person('Kabute Grace', 20);
people.greeting()