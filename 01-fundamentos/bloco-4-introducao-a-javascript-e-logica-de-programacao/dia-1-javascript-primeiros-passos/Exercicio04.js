// Exercício 04
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const a = -10;
// const a = 0;
// const a = 10;

result = "zero";

if (a > 0) {
  result = "positive";
} else {
  if (a < 0) {
    result = "negative";
  }
}

console.log(result);
