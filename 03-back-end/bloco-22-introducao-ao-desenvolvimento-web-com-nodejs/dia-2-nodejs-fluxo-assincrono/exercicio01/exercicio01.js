const verifyNumbers = require(".");

// Caso 1

const verify1 = verifyNumbers(10, '10', 10)
  .then(res => console.log("resultado de (10, '10', 10) :", res))
  .catch(err => console.log("resultado de (10, '10', 10) :", err.message));

console.log(verify1);

// Caso 2

const verify2 = verifyNumbers(10, 10, 1)
  .then(res => console.log('resultado de (10, 10, 1) :', res))
  .catch(err => console.log('resultado de (10, 10, 1) :', err.message));

console.log(verify2);

// Caso 3

const verify3 = verifyNumbers(10, 10, 10)
  .then(res => console.log('resultado de (10, 10, 10) :', res))
  .catch(err => console.log(err.message));

console.log(verify3);
