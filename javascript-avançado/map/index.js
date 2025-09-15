//Map - A map vai alterar valores do meu array, vamos receber exatamente um array
//Map - vai receber uma função de callback, vai receber os parametros indice e array, não vai mexer no array original, não vai retornar um novo array

//No retorno final a gente quer alterar os valores do nosso array:
//               0  1   2  3   4 ...
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubleNumbers = numbers.map(function(value, index, array) {
    return `Gustavo -> ${value * 2}`
});

console.log(doubleNumbers)