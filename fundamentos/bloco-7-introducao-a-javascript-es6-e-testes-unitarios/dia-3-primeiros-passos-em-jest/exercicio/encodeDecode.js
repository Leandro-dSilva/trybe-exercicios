// Encode

function convertLetter(letter) {
  let key = ['a', '1', 'e', '2', 'i', '3', 'o', '4', 'u', '5'];
  for (let i = 0; i < key.length; i += 2) {
    if (letter === key[i]) {
      letter = key[i + 1];
      break;
    }
  }
  return letter;
}

function encode(phrase) {
  let newPhrase = [];
  let newLetter;
  for (let index = 0; index < phrase.length; index += 1) {
    let letter = phrase[index];
    newLetter = convertLetter(letter);
    newPhrase += newLetter;
  }
  return newPhrase;
}

// Decode
function convertLetter2(letter) {
  let key = ['a', '1', 'e', '2', 'i', '3', 'o', '4', 'u', '5'];
  for (let i = 1; i < key.length; i += 2) {
    if (letter === key[i]) {
      letter = key[i - 1];
      break;
    }
  }
  return letter;
}

function decode(phrase) {
  let newPhrase = [];
  let newLetter;
  for (let index = 0; index < phrase.length; index += 1) {
    let letter = phrase[index];
    newLetter = convertLetter2(letter);
    newPhrase += newLetter;
  }
  return newPhrase;
}

module.exports = { encode, decode };
