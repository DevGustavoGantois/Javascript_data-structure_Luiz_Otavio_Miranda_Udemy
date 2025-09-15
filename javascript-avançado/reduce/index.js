//Se você precisa alterar todos os elementos do seu array usa Map.
//Se você precisar filtrar todos os elementos do seu array usa filter.
//Se você precisa reduzir o seu array a um elemento só, usa reduce. (então ele pode ser usado para fazer contas, somar etc...)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numbers.reduce(function(sum, value, index, array) {
    // if (value % 2 === 0) sum.push(value);
    // sum.push(value * 2);
    sum += value;
    return sum;
}, 0); 

console.log(total);

const peoples = [
    {name: "Gustavo", age: 22},
    {name: "Luciana", age: 21},
    {name: "Eduardo", age: 55},
    {name: "Augusto", age: 60},
    {name: "Rosana", age: 40},
    {name: "Wallace", age: 47},
];

const moreOlder = peoples.reduce(function(sum, value) {
    if (sum.age > value.age) return sum;
    return value;
}, 0);

//Reduce geralmente usado para reduzir o array em um elemento só, da pra fazer map com reduce, filter com reduce...