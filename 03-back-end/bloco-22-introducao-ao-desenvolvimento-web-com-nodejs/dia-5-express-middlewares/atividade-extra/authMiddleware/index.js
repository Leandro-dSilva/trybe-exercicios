const express = require('express');
const authMiddleware = require('./authMiddleware');
const recipes = require('./recipes');
const app = express();

// ***** Autenticação *******\

app.use(authMiddleware);

// **************************/

app.get('/recipes', function (req, res) {
  const { username } = req.user
  res.status(200).json({ username, recipes });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
