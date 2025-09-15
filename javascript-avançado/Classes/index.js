//Para classe ficar identica a função construtora eu preciso receber alguns parâmetros de nome sobrenome,
// tenho um método especial sempre que eu crio uma classe o método pode não existir caso não precise, mas 
// caso você precise passar parâmetros para sua classe, você vai usar o método especial chamado constructor.

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    say() {
        console.log(`${this.name} is say.`)
    }

    // eat() {
    //     console.log(`${this.name} is eating.`)
    // }

    // drink() {
    //     console.log(`${this.drink} is drinking.`)
    // }
}

function Person2(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person2.prototype.say = function() {
    console.log(`${this.name} is say.`)
}

//Instanciar é criar um objeto a partir da classe, a classe é um molde, assim como a função construtora quando eu instâncio
//a classe eu estou criando um objeto a partir da classe.

const p1 = new Person("Gustavo", "Gantois");
const p2 = new Person("Caique", "Mendes");
const p3 = new Person("Luciana", "Menezes");
const p4 = new Person("Luiz", "Miranda");
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);