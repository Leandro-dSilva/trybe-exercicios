// b) Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const fs = require("fs").promises;

function dataById(id) {
  fs.readFile("exercicio04/simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent))
    .then((arr) => arr.find((a) => a.id == id))
    .then((res) => console.log(`${res.id} - ${res.name}`))
    .catch((err) => console.log('id não encontrado'));
}

dataById(1);
dataById(11);
