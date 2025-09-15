//forEach em JavaScript é um método dos arrays que serve para percorrer (iterar) todos os elementos de um array, executando uma função de callback para cada item.

//Em outras palavras: ele não cria um novo array, apenas executa uma ação para cada elemento do array original.


const a1 = [10, 20, 30, 40, 50, 60, 70 , 80, 90];

let total = 0;

a1.forEach((value) => {
    total += value;
});
console.log(total);