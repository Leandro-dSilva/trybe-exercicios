const express = require("express");
const handleHelloWorldRequest = require("./src");

const app = express();
const PORT = 3002;

// app.all('/hello', handleHelloWorldRequest);
app
  .route("/")
  .get(function (req, res) {
    // Requisições para rota GET `/` são resolvidas aqui!
    res.send("hello world get");
  })
  .post(function (req, res) {
    // Requisições para rota POST `/` são resolvidas aqui!
    res.send("hello world post");
  });

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
