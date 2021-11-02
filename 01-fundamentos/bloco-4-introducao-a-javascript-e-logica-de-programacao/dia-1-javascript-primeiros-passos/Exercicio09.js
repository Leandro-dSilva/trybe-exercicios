// Exercício 09
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function checkOdd(number1, number2, number3) {
  const n1 = number1;
  const n2 = number2;
  const n3 = number3;

  let oneOdd = n1%2 !== 0 || n2%2 !== 0 || n3%2 !== 0;

  let message = "false";

  if (oneOdd) {
    message = "true";
  }

  return message;

}

printMessage = checkOdd (8,7,8);
console.log(printMessage);
