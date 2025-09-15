//Filter -> Retorna sempre um array com a mesma quantidade de elementos ou menos.
//Map -> 
//Reduce ->


//Retorne os números maiores que 10
//               0  1    2  3  4  5  6  7  8  9   10  11  12
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const arrayNumbers = numbers.filter(item => item > 10); //O filter vai receber uma função de callback e vai iterar sobre cada elemento do array.
console.log(arrayNumbers);

function callbackFilter(value, index, array) {
    return value > 10;
}

const filteredNumbers = number.filter((value, index, array) => {

    return value > 10;
});

const filteredNumbers2 = number.filter(value => value > 10);

//o método certo para filtrar elementos de um array é o .filter(). O .map() transforma cada elemento do array
// em outro valor, enquanto o .filter() retorna apenas os elementos que passam em uma condição.

//filter() -> filtra o array.
//map() -> mapeia o array

//--------------------------------------------------------------------------------------------------------------

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a 
const peoples = [
    {name: "Gustavo", age: 22},
    {name: "Luciana", age: 21},
    {name: "Eduardo", age: 55},
    {name: "Augusto", age: 60},
    {name: "Rosana", age: 40},
    {name: "Wallace", age: 47},
];

const peoplesName = peoples.filter(function(obj) {
return obj.name.length >= 5;
});

console.log(peoplesName)

//Em arrow function
const peoplesBiggerName = peoples.filter(obj => obj.name.length >= 7);
const peoplesWithMore50years = peoples.filter(obj => obj.age > 50 );
const nameFinishA = peoples.filter(obj => {
    return obj.name.toLowerCase().endsWith("a")
})
console.log(peoplesBiggerName);
console.log(nameFinishA);