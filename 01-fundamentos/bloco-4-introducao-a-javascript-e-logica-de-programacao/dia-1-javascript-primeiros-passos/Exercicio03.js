// Exercício03
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a = 1000;
let b = 200;
let c = 30;

let resultado = c;

if (a > b) {
  if (a > c){
    resultado = a;
  }
} else {
  if (b > c) {
    resultado = b;
  }
}

console.log(resultado);
