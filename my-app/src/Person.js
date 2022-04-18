class Person{
    
    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    greeting(){
        console.log(
            `Ola, meu nome é ${this.nome}, tenho ${this.idade} anos, meu peso é ${this.peso} kilos e tenho ${this.altura} de altura.`
        );
    }

}

module.exports = Person;