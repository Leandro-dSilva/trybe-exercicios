// Exercício 08
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function checkEven(number1, number2, number3) {
  let n1 = number1;
  let n2 = number2;
  let n3 = number3;

  let oneEven = n1%2 === 0 || n2%2 === 0 || n3%2 === 0;

  let message = "false";

  if (oneEven) {
    message = "true";
  }

  return message;

}

printMessage = checkEven (10,7,5);
console.log(printMessage);

