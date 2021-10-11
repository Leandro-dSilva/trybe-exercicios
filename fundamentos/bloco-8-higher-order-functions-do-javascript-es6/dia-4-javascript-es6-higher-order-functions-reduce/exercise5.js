// Exercício 05 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let newString = '';
  
  names.forEach(name => {
    newString += name.toLowerCase();
  });

  return newString.split('')
    .reduce((acc, cv) => (cv === 'a') ? acc + cv : acc, '')
    .length;
}

console.log(containsA());
