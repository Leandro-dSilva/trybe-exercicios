const fs = require("fs").promises;

fs.readFile("exercicio04/simpsons.json", "utf-8")
  .then((fileContent) => JSON.parse(fileContent))
  .then((arr) => arr.map(({ id, name }) => `${id} - ${name}`))
  .then((strings) => strings.forEach((string) => console.log(string)))
  .catch((err) => console.log(err));
