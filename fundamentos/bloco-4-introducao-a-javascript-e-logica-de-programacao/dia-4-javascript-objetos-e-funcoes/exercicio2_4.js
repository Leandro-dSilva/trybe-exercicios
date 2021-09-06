// Exercício 04 - Parte II
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function moreCharacters(names) { 
  let moreCharacters = names[0];
  for (let i = 1; i < names.length; i += 1) {
    if(moreCharacters.length < names[i].length){
      moreCharacters = names[i];
    }  
  }
  return moreCharacters;
}

let resultado = moreCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

console.log(resultado);
