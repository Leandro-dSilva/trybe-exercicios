// Exercício 07
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.





function alphabeticalNote(numericalNote) {
  
  let note = "";
  let noteF = numericalNote >= 0  && numericalNote < 50;
  let noteE = numericalNote >= 50 && numericalNote < 60;
  let noteD = numericalNote >= 60 && numericalNote < 70;
  let noteC = numericalNote >= 70 && numericalNote < 80;
  let noteB = numericalNote >= 80 && numericalNote < 90;  
  let noteA = numericalNote >= 90 && numericalNote <= 100;

  if (noteF) {
    note = "F";
    return note;
  } else if (noteE) {
    note = "E";
    return note;
  } else if (noteD) {
    note = "D";
    return note;
  } else if (noteC) {
    note = "C";
    return note;
  } else if (noteB) {
    note = "B";
    return note;
  } else if (noteA) {
    note = "A";
    return note;
  } else {
    let message = "The note value must be between 0 and 100.";
    return message;
  }
}

let convert = alphabeticalNote (-1);
console.log(convert);
