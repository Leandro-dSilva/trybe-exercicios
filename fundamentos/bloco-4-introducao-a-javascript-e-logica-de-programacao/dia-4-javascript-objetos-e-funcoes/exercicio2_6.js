// Exercício 06 - Parte II
// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function summation(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}

let result = summation(5);

console.log(result);
