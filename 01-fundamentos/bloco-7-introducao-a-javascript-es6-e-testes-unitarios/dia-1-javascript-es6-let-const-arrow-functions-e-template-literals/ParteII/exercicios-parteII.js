// Exercício 01: Crie uma função que receba um número e retorne seu fatorial.
let fatorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }
  return result;
}

let number = 5;

console.log(fatorial(number));

// Exercício 02: Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  let split = phrase.split(' ');
  let longest = split[0];
  for (let i = 1; i < split.length; i += 1) {
    if (split[i].length > longest.length) {
      longest = split[i];
    }
  }
  return longest;
}
let result = longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
console.log(result);

// Exercício 03: Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.querySelector('#button');
const clickCount = document.querySelector('#count');
let sum = 0;

button.addEventListener('click', () => {
  sum += 1;
  clickCount.innerText = sum;
});

// Exercício 04: Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const skills = `Skill 1
Skill 2
Skill 3
Skill 4
Skill 5`

const function1 = (stringDeterminada, param) => {
  const split = stringDeterminada.split(' ');
  let newPhrase = '';
  for (let i = 0; i < split.length; i += 1) {
    (split[i] === 'x') ? newPhrase += `${param} ` : newPhrase += `${split[i]} `;
  }
  return newPhrase
};
let resultFunction1 = function1('Tryber x aqui!', 'Bebeto')

const function2 = (resultFunction1, skills) => {
  let message = `${resultFunction1} Minhas cinco principais habilidades são:
${skills}`;
  return message;
}

let resultFunction2 = function2(resultFunction1, skills)
console.log(resultFunction2);
