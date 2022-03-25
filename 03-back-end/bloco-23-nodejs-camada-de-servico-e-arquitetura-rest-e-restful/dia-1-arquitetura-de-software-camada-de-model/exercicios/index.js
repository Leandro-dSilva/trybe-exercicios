const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const validation = User.isValid(firstName, lastName, email, password);

  if (validation.error)
    return res.status(400).json({ message: validation.message });

  res.status(201).send('Usuário cadastrado!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
