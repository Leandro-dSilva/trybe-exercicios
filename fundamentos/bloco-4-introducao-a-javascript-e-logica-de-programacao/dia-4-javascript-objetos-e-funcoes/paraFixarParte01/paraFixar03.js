// Para fixar 03
// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2, 
    silver: 3
  }
}

let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
player.bestInTheWorld = bestInTheWorld;

// let message = 
console.log(player);
