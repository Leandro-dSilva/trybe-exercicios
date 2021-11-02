// Exercício 02 - Parte II
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function indexBiggest(numbers) { 
  let indexBiggest = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[indexBiggest] < numbers[i]){
      indexBiggest = i;
    }  
  }
  return indexBiggest;
}

let resultado = indexBiggest([2, 3, 6, 7, 10, 1])

console.log(resultado);
