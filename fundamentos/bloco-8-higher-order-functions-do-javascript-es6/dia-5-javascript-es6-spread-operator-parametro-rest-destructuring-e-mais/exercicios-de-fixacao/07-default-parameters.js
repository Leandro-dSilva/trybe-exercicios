// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// Atribuindo valor default

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!


// Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log( multiply(2, 3)); //6
console.log(multiply(8)); // 8
