//Atribuição via desestruturação
//...rest operator, spread operator

//               0, 1, 2, 3, 4, 5, 6, 7, 8
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [firstNumber, secondNumber] = numbers
console.log(firstNumber, secondNumber);

//Primeiro número vai ser o índice 0 e segundo  número vai ser o indice 1.

//Posso pegar o resto do array:
const [one, two, three, ...rest] = numbers

console.log(rest)

//O resto vai começar a partir do índice que você definir.

//Podemos pular valores com espaços vazios.

                 //  0            1           2
                 //0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numberos[1][2])


//consigo desestruturar listas dentro de listas e pegar o indíce detrno dessas listas:
const [list1, list2, list3] = numbers;
console.log(list3[2]);