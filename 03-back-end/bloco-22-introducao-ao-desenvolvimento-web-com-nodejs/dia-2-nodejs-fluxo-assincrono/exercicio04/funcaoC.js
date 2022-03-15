// c) Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require("fs").promises;

async function filterId() {
  const newArray = await fs
    .readFile("exercicio04/simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent))
    .then((arr) => arr.filter((a) => a.id !== "6" && a.id !== "10"));

  console.log(newArray);

  await fs.writeFile("exercicio04/simpsonsCopy.json", JSON.stringify(newArray));
}

filterId();
