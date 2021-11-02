// Exercício 01 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const oneArray = [];
  arrays.map((array) => array
    .reduce((acc, cv) => oneArray.push(cv), ''));

  return oneArray;
}

console.log(flatten());
