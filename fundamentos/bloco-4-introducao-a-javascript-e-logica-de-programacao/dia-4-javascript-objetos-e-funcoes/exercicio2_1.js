// Exercício 01 - Parte II
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


function verificaPalindrome(params) { 
  let message = 'true'
  for (let i = 0; i < params.length; i += 1) {
    if (params[i] !== params[params.length - i - 1]) {
      message = 'false';
      break;
    }  
  }
  return message;
}

let resultado = verificaPalindrome('arara');

console.log(resultado);
