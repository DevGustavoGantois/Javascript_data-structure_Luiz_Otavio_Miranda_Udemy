//Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores 
// -> Reduzir (somar tudo)


// const numbers = [5, 50, 80, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numbersPars = numbers.filter(function(value) {
//     return value % 2 === 0;
// }).map(function(value) {
//     return value * 2;
// }).reduce(function(ac, value) {
//     return ac + value;
// });

//Em vez de fazermos do jeito de cima podemos botar arrow functions => em vez de functions(); para deixar o código menos verboso

const numbersPars = numbers.filter((value) => value % 2 === 0)
.map(value => value * 2)
.reduce((ac, value) => ac + value);

// [50, 80, 2, 8, 22] pares 
// [100, 160, 4, 16, 44] dobro
console.log(numbersPars);