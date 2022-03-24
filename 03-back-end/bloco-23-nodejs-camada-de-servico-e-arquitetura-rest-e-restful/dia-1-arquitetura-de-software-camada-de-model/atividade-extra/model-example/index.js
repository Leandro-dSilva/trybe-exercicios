const express = require('express');
const Author = require('./models/Author');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
