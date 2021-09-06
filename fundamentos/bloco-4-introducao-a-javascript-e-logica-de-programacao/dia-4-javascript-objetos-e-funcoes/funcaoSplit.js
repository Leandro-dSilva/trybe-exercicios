// font: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split


// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   console.log('A string original é: "' + stringToSplit + '"');
//   console.log('O separador é: "' + separator + '"');
//   console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
// }

// var tempestString = 'Oh brave new world that has such people in it.';
// var monthString = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez';

// var space = ' ';
// var comma = ',';

// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);

let letras = 'I U A O E';
let separador = ' ';
let letrasSplit = letras.split(separador);
console.log(letrasSplit);

let letrasJoin = letrasSplit.join(' / ');
console.log(letrasJoin);
