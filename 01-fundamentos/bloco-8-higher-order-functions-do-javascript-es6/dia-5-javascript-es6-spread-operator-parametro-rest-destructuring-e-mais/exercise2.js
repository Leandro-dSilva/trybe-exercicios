// Exercício 02 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Dica: use parâmetro rest .

const sum = (...values) => {
  return values
    .reduce((acc, cv) => acc + cv, 0);
}

console.log(sum(2, 6, 8, 1, 4));
