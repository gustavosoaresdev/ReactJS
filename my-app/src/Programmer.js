const Person = require('./Person');

class Programmer extends Person{

    constructor(nome, idade, peso, altura, senioridade){
        super(nome, idade, peso, altura);
        this.senioridade = senioridade;
    }

    greeting(){
        console.log(
            `Ola, meu nome é ${this.nome}, tenho ${this.idade} anos, meu peso é ${this.peso} kilos, tenho ${this.altura} de altura e sou um ${this.senioridade}.`
        );
    }

}

module.exports = Programmer;