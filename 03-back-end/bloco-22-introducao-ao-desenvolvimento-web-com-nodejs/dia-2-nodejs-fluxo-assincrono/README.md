## Exercícios

___
##### 1. Crie uma função que recebe três parâmetros retorna uma Promise .

&nbsp;
a) Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .

b) Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).

c) Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"

d) Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
___


##### 2. Escreva um código para consumir a função construída no exercício anterior.

&nbsp;
a) Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .

b) Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.

c) Utilize then e catch para manipular a Promise retornada pela função:

 - Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.

 - Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

 ___

##### 3. Reescreva o código do exercício anterior para que utilize async/await .

____

##### 4. Realize o download do arquivo simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.

&nbsp;
 - Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

&nbsp;
a) Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

b) Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
c) Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

d) Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

e) Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

f) Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .




 