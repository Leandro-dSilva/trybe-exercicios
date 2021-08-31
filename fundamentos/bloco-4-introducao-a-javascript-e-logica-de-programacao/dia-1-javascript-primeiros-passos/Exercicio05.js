// Exercício 05
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const c = 90;
const b = 45;
const a = 45;

let triangle = "Triangle does not exist";

let internalAngle = a + b + c === 180;
let validAngle = (0 < a && a < 180) && (0 < b && b < 180) && (0 < c && c < 180);

if (validAngle) {
  if (internalAngle) {
    triangle = "true";
  } else {
    triangle = "false";
  }
}

console.log(triangle);

