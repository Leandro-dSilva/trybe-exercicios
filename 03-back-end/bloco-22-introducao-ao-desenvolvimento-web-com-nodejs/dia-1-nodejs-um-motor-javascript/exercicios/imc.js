function imc(peso, altura) {
  return ( peso / (altura ** 2) ).toFixed(2);
}

console.log(imc(80, 1.6));



// module.exports = { imc };
