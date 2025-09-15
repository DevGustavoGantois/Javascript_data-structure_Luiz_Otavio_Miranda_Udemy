//Map - A map vai alterar valores do meu array, vamos receber exatamente um array
//Map - vai receber uma função de callback, vai receber os parametros indice e array, não vai mexer no array original, não vai retornar um novo array

//No retorno final a gente quer alterar os valores do nosso array:
//               0  1   2  3   4 ...
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubleNumbers = numbers.map(value => {return `Gustavo -> ${value * 2}`
});

console.log(doubleNumbers)

const peoples = [
    {name: "Gustavo", age: 22},
    {name: "Luciana", age: 21},
    {name: "Eduardo", age: 55},
    {name: "Augusto", age: 60},
    {name: "Rosana", age: 40},
    {name: "Wallace", age: 47},
];

const names = peoples.map((obj) => obj.name);
//Posso fazer dessa forma:
const ages = peoples.map((obj) => {return obj.age})
//Posso fazer dessa forma também:
const ages2 = peoples.map((obj) => { return {age: obj.age}})

const withIds = peoples.map((obj, index) => {
    const newObj = { ...obj}
    newObj.id = index;
    return newObj

    // obj.id = (index + 1) * 1000;
    // return obj;
})
console.log(names);
console.log(ages)