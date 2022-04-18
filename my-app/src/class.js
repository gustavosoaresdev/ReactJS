const Person = require('./Person');
const Programmer = require('./Programmer');

let pessoa1 = new Person('Gustavo', 19, 65, 1.77);
pessoa1.greeting();

let pessoa2 = new Programmer('Sebastian', 12, 38, 1.50, 'Junior');
pessoa2.greeting();