// Exercício 08 - Bônus
// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function retornaDecimal(letra) {
  let decimal = romanos[letra];
  return decimal;
}

function splitRomano(numeroRomano) {
  let array = numeroRomano.split('')
  return array;
}

function convertSplit(split) {
  let splitR = splitRomano(split);
  arrayDecimal = [];
  for (let i = 0; i < splitR.length; i += 1) {
    arrayDecimal.push(retornaDecimal(splitR[i]))
  } 
  return arrayDecimal;
}

function inverteSinal(numeroRomano) {
  let arrayDecimal = convertSplit(numeroRomano);
  for (let i = 1; i < arrayDecimal.length; i += 1) {
    if (arrayDecimal [i] > arrayDecimal [i-1]) {
      arrayDecimal [i-1] = -arrayDecimal [i-1];
    }
  }
  return arrayDecimal;
}

function romanoParaDecimal(numeroRomano) {
  let arrayDecimal = inverteSinal(numeroRomano)
  let somatorio = 0;
  for (let i = 0; i < arrayDecimal.length; i += 1) {
    somatorio += arrayDecimal[i];
  }
  return somatorio;
}

let resultadofinal = romanoParaDecimal('CMXCVIII');

console.log(resultadofinal);
