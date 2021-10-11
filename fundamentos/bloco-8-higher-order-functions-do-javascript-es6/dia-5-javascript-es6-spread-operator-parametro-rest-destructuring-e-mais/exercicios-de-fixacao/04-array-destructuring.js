// Atividade 01. Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [index0, index1] = saudacoes;

console.log(index0);

//  Atividade 02. A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const arr = [comida, animal, bebida];
[animal, bebida, comida] = arr;

console.log(comida, animal, bebida);


// Atividade 03 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .

let numerosPares = [1, 3, 5, 6, 8, 10, 12];


// Utilize array destructuring para produzir o resultado esperado pelo console.log
// console.log(numerosPares); // [6, 8, 10, 12];

const apenasPares = [];
numerosPares.forEach(numero => (numero % 2 === 0) ? apenasPares.push(numero): 0);

[...numerosPares] = apenasPares;

console.log(numerosPares); // [6, 8, 10, 12];
