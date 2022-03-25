### Exercícios

Você criará uma aplicação que faz CRUD ( <b>C</b> reate, <b>R</b> ead, <b>U</b> pdate e <b>D</b> elete) de usuários. A entidade que representa um usuário se chamará user .
Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o MySql .

Com isso em mente, prossiga para a realização dos exercícios:
</br>

1. Crie o _endpoint_ POST /user
   </br>
2. Seu endpoint deve receber o seguinte conteúdo no body da request:
   </br>

```json
{
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com",
  "password": "d496d5ea2442"
}
```

</br>

1. Todos os campos são obrigatórios;
   </br>
2. O campo password deve ser uma string de 6 ou mais caracteres;
   </br>
3. Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
   </br>

```json
{
  "error": true,
  "message": "O campo 'password' deve ter pelo menos 6 caracteres"
}
```
</br>

1. Caso o usuário seja criado com sucesso, retorne os campos id , firstName , lastName e email em JSON, no formato abaixo, com o status 201 Created .
   </br>

```json
{
  "id": 1,
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com"
}
```
