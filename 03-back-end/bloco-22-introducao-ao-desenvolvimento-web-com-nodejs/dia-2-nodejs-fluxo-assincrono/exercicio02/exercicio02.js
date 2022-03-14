const verifyNumbers = require(".");

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const a = randomNumber();
const b = randomNumber();
const c = randomNumber();

verifyNumbers(a, b, c)
  .then(res => console.log(`Chamada com ${a}, ${b} e ${c}. Resposta: ${res}`))
  .catch(err => console.log(`Chamada com ${a}, ${b} e ${c}. Erro: ${err.message}`));
