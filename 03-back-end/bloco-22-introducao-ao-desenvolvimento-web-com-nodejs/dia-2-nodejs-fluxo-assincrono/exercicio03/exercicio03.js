const verifyNumbers = require(".");

const randomNumber = () => Math.floor(Math.random() * 100 + 1);
const randomNumbers = Array.from({ length: 3 }).map(randomNumber);

async function callVerifyNumbers() {
  try {
    const result = await verifyNumbers(...randomNumbers);
    console.log(`Chamada com ${randomNumbers}. Resposta: ${result}`);
  } catch (err) {
    console.error(`Chamada com ${randomNumbers}. Resposta: ${err.message}`);
  }
}

callVerifyNumbers();
