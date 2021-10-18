### Exercício 02

* Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostar as 10 primeiras.
A documentação para a API que vamos utilizar esta disponível nesse link .

Tente descobrir qual url vamos utilizar para buscar as informações que precisamos (um array com uma listagem das crypto moedas).



* Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0 , significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.

1. Agora que temos a url vamos criar um arquivo ( api.js , por exemplo) e dentro dele uma função para pegar o array com as moedas.

2. Crie também um arquivo HTML ( index.html , por exemplo) que deve conter uma tag para listar as crypto moedas.

3. Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas aparecam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares . Exemplo: Bitcoin (BTC): 46785.06 .

4. Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?

5. Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).