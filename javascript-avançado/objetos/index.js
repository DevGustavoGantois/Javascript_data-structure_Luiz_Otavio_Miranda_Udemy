const people = {
    name: "Gustavo",
    surname: "Gantois",
    age: 21,
    address: {
        neighboor: "Barra",
        number: 98
    }
};

//Como é um objeto posso usar ponto para pegar o valor dentro
console.log(people.name);

//Posso fazer dessa forma também:
const name = people.name;
console.log(name);

//Para fazer a desestruturação podemos usar as chaves:

//Atribuição via desestruturação:
const { nome, surname, age } = people.name //Podemos adicionar outro nome (string) em name: "Gustavo" e não dará erro.
console.log(nome, surname)

const {endereço: {neighboor, number}, address } = people; //Podemos extrair só o endereço e a rua e também o endereço completo.
console.log(neighboor, number)
console.log(address)

//const { nome: teste = ``, surname, age } = people.name //Nome da chave que vou estar informando.