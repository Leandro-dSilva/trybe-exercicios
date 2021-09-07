// Exercício 07 - Parte II
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, ending) {
  let message = 'true';

  
  for (let i = ending.length - 1; i >= 0 ; i -= 1) {
    
    let final;
    final = ending[i];
  
    let comeco;
    comeco = word[word.length - ending.length + i];
        
    
    if (final !== comeco) {
      message = false;
      break
    }
  }
  return message;
}

let result = verificaFimPalavra('trybe', 'be');

console.log(result);
