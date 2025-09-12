//Declaração de função (hosting):

//Posso criar a função e executa-lá antes de criar ela.
function sayHi() {
    console.log("Hi");
}
sayHi();

//First-class objects (Objetos de primeira classe), posso tratar as funções como um dado
//Function Expression
const imData = function functionName() {
    console.log("Sou um dado.");
};
const name = "Gustavo";
imData();

//Parâmetro é como se fosse uma variável que eu vou receber dentro da função:
function executeFunction(funcao) {
    funcao();
}

executeFunction(imData)

//Podemos passar ela de uma função para outra retornar também.


//Arrow Function
const arrowFunction = () => {
    console.log("I´m arrow function.");
};

arrowFunction(); // -> vai exibir um text, sou uma arrow function.

//Dentro de um objeto da pra criar uma função também
const obj = {
    say: function () {
        console.log("Estou falando...")
    }
};
obj.say();

//Podemos fazer assim também:
//const obj = {
   // say: function () {
       // console.log("Estou falando...")
  //  }
//};
//obj.say();
