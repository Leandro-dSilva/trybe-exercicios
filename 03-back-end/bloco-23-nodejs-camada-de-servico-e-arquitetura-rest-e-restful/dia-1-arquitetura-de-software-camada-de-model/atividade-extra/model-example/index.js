const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const author = await Author.getById(req.params.id);

  if (!author)
    return res.status(404).json({ message: 'Autor não encontrado!' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  const validation = Author.isValid(first_name, middle_name, last_name);

  if (!validation) return res.status(400).json({ message: 'Dados inválidos!' });

  await Author.create(first_name, middle_name, last_name);
  res.status(201).json({ first_name, middle_name, last_name });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
