### Exercício 01

* Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos praticar!


* Primeiro, veja o manual da API do site icanhazdadjoke.com . Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API :
Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com , e perceba que ele devolve uma página HTML com uma piada aleatória.

* Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/" . Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.

* Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/" . Veja que agora recebemos apenas a piada aleatória em formato texto.

* Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/" . Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.



* Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:

1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.

2. Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers


* O segundo parâmetro myObject define o tipo de request: method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , como visto nas requisições via curl .

1. A função fetch é uma Promise (você não precisa entender o que é uma Promise agora, considere apenas como sendo algo assíncrono) e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then (em caso de sucesso) e .catch (em caso de falha). A requisição fetch retorna um objeto Response . Utilizando .then , verifique a estrutura da resposta usando um console.log na response retornada pelo fetch .


* Viu a response? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?


Para isso, usamos o método .json() na resposta da API . Esse método converte o conteúdo do body da Response e retorna uma outra Promise , que, quando bem-sucedida, retorna um JSON contendo as informações da piada.


A partir do fetch , troque o console.log() anterior pelo método .json() e imprima os dados da requisição.


* Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

