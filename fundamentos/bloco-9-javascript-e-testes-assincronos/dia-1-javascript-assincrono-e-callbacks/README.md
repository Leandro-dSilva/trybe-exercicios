### Exercícios

1. Dado o código do exercício 01, qual a ordem de finalização de execução das linhas comentadas?


2. Agora, dado o código do exercicio 02, qual a ordem de finalização de execução das linhas comentadas?


3. A função `getPlanet` imprime o planeta Marte de forma síncrona. Modifique `getPlanet` , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos



4. Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

