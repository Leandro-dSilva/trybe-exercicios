// Exercício 05 - Parte II
// // Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function mostRepeated(array) {
  higher = array[0];
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    let element = array[i];
    let newCount = 0;
    for (let id = 0; id < array.length; id += 1) {
      let elements = array[id];
      if (element === elements) {
        newCount += 1; 
      } 
    }
    if (newCount > count) {
      count = newCount;
      higher = array[i]
    }
  }
  return higher;
}
  
let result = mostRepeated([2, 3, 2, 5, 8, 2, 3 , 5]);

console.log(result);
