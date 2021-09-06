// Exercício 03 - Parte II
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indexBiggest(numbers) { 
  let indexBiggest = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[indexBiggest] > numbers[i]){
      indexBiggest = i;
    }  
  }
  return indexBiggest;
}

let resultado = indexBiggest([2, 4, 6, 7, 10, 0, -3])

console.log(resultado);
