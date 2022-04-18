class Person{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos!`);
    }

}

// let gustavo = new Person('Gustavo', 19);
// gustavo.greeting();

class Alumn extends Person{

    constructor(name, age, turma){
        super(name, age);
        this.turma = turma;
    }

}

let igor = new Alumn('Igor', 26, '1092');
console.log(igor);